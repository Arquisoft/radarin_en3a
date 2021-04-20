import React, {useEffect, useState} from "react";
import L from "leaflet";
import {getSolidDataset, getThing, getUrlAll} from "@inrupt/solid-client";
import {FOAF} from "@inrupt/vocab-common-rdf";
import {useSession} from "@inrupt/solid-ui-react";
import {getUserByWebId} from "../../api/api";
import {Marker, Popup} from "react-leaflet";


function FriendMarkerGenerator(props) {

    let [friendList] = useState([]);
    let [friendLocationList] = useState([]);

    const LeafIcon = L.Icon.extend({
        options: {}
    });

    const blueIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    });

    const { session } = useSession();
    const webId = session.info.webId;

    async function getFriendsForPOD(){
        const profileDataset = await getSolidDataset(webId, { fetch: session.fetch });
        const profile = getThing(profileDataset, webId);
        return new Promise((resolve, reject) => {
            resolve(getUrlAll(profile, FOAF.knows));
        });
    }

    async function retrieveFriendLocations(){
        for(let i = 0; i < friendList.length; i++){
            const friendInAPI = await getUserByWebId(friendList[i]);
            if(friendInAPI != null) {
                let friendWithDataToAdd = {"friendId": friendList[i], "latitude": friendInAPI.latitude,
                    "longitude" : friendInAPI.longitude};
                friendLocationList.push(friendWithDataToAdd);
            }
        }
    }

    useEffect(() => {
        (async () => {
            let retrievedFriends = await getFriendsForPOD().then(function(list){return list;});
            retrievedFriends.forEach(friend => friendList.push(friend));
            await retrieveFriendLocations();
        })();
    });


    return friendLocationList.map(function(friend,index){
        return (<div>
            <Marker key={index} position={[friend.latitude,friend.longitude]} icon={blueIcon}>
                <Popup>Friend:
                    <br/>
                    {friend.friendId}
                </Popup>
            </Marker>
        </div>)
    });
}

export default FriendMarkerGenerator;