import {Image, useLDflex} from "@solid/react";
import defaultProfilePic from '../../assets/default_profile_pic.svg';

function FriendPanel(props){
    const profPicProxy = useLDflex(`[${props.nombre}].vcard_hasPhoto`);
    const profilePicSrc = profPicProxy[0];

    return(
        <div>
            <Image className="friend-profile-pic" src={profilePicSrc} defaultSrc={defaultProfilePic}/>
            <br/>
        </div>);
}

export default FriendPanel;