import {List, useLDflexList, Value, Image} from "@solid/react";
import { getDefaultSession} from '@inrupt/solid-client-authn-browser';
import defaultProfilePic from '../../assets/default_profile_pic.svg';
import '../../css/FriendsView.css'
import {useTranslation} from "react-i18next";

function FriendsView(){
    const friendsOfLoggedUser = useLDflexList(`[${getDefaultSession().info.webId}].friends`);
    const { t } = useTranslation();

    return(
        <div className="friends-main-panel">
        <h2>{t('FriendList')} (total {friendsOfLoggedUser.length})</h2>
        <List src={`[${getDefaultSession().info.webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
            <li key={friend} onClick={(e) => window.location.href=friend}>
                <button >
                    <Value src={`[${friend}].name`}>{`${friend}`}</Value>
                    <br/>
                    <Image className="friend-profile-pic" src={`[${friend}].vcard_hasPhoto`} defaultSrc={defaultProfilePic}>{`${friend}`}</Image>
                </button>
            </li>}
    </List>
        </div>);
}

export default FriendsView;