import { useWebId, List, Name, Link} from "@solid/react";
import { getDefaultSession} from '@inrupt/solid-client-authn-browser';

function Friends(){
    return(
        <div>
        <h2>Lista de amigos</h2>
    <List src={`[${getDefaultSession().info.webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
        <li key={friend} className="listElement">
            <Card nombre={`[${friend}]`} web={getDefaultSession().info.webId}></Card>
        </li>}
    </List>
        </div>);
}

export default Friends;