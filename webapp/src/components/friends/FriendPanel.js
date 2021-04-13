import {Name, Link, Image, useLDflex} from "@solid/react";
import defaultProfilePic from '../../assets/default_profile_pic.svg';
import {useTranslation} from "react-i18next";

function FriendPanel(props){
    const profPicProxy = useLDflex(`[${props.name}].vcard_hasPhoto`);
    const profilePicSrc = profPicProxy[0];
    const { t } = useTranslation();

    return(
        <div>
            <Image className="friend-profile-pic" src={profilePicSrc} defaultSrc={defaultProfilePic}>{ props.name }</Image>
            <Name src={props.name}>{props.name}</Name>
            <br/>
            <Link href={props.name} className="link" datatype="link">{t('Profile')}</Link>
        </div>);
}

export default FriendPanel;