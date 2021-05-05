import React, {useEffect, useState} from "react";
import L from "leaflet";
import {getSolidDataset, getThing, getUrlAll} from "@inrupt/solid-client";
import {FOAF} from "@inrupt/vocab-common-rdf";
import {useSession} from "@inrupt/solid-ui-react";
import {getUserByWebId} from "../../api/api";
import {Marker, Popup} from "react-leaflet";


function FriendMarkerGenerator() {

    let [friendList] = useState([]);
    let [friendLocationList,setFriendLocationList] = useState([]);

    const LeafIcon = L.Icon.extend({
        options: {}
    });

    /*
        For the friends we use a different marker icon in order to differentiate their locations
        from the ones of the user
     */
    const blueIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    });

    const { session } = useSession();
    const webId = session.info.webId;

    /*
        Function that retrieves the friends of the user in its Solid POD
     */
    async function getFriendsForPOD(){
        const profileDataset = await getSolidDataset(webId, { fetch: session.fetch });
        const profile = getThing(profileDataset, webId);
        return new Promise((resolve, reject) => {
            resolve(getUrlAll(profile, FOAF.knows));
        });
    }

    /*
        Function that calls the API and obtains the last locations of the user's friends in order to use them in
        the marker generation
     */
    async function retrieveFriendLocations(){
        for(let i = 0; i < friendList.length; i++){
            const friendInAPI = await getUserByWebId(friendList[i]);
            if(friendInAPI !== null) {
                let friendWithDataToAdd = {"friendId": friendList[i], "latitude": friendInAPI.latitude,
                    "longitude" : friendInAPI.longitude};
                if(friendLocationList.indexOf(friendWithDataToAdd) < 0) {
                    friendLocationList.push(friendWithDataToAdd);
                }
                setFriendLocationList(friendLocationList);
            }
        }
    }

    /*
        On each render we have to check that the friend's locations are updated with their latest values from the API
     */
    useEffect(() => {
        (async () => {
            if(friendLocationList.length === 0){
                let retrievedFriends = await getFriendsForPOD().then(function(list){return list;});
                retrievedFriends.forEach((friend) => friendList.push(friend));
                await retrieveFriendLocations();
            }
        })();
    });


    /*
        Component consisting on a list of Markers with the position specified by the API location values and the
        Popup leaflet component containing the webID of the friend for a given location
     */
    return friendLocationList.map(function(friend,index){
        let friendCoordinates = [friend.latitude,friend.longitude];
        let idFromFriend = friend.friendId;
        return (<div>
            <Marker key={index} position={friendCoordinates} icon={blueIcon}>
                <Popup><h6>Friend:</h6>
                    <br/>
                    <b>{idFromFriend}</b>
                </Popup>
            </Marker>
        </div>);
    });
}

export default FriendMarkerGenerator;