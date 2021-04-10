
//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(webId,location){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webId':webId, 'location':location})
      })
    return await response.json()
}

export async function removeUser(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/remove', {
        method: 'POST',
        headers: {'Content-Type':'application/json', "Access-Control-Allow-Origin": "http://localhost:5000/api/users/getByWebId", "Control-Allow-Methods": "POST"},
        body: JSON.stringify({"webId": webId})
      })
    return await response.json()
}

export async function getUserByWebId(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/users/getByWebId", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "http://localhost:5000/api/users/getByWebId", "Control-Allow-Methods": "POST"},
        body: JSON.stringify({"webId": webId})
    });
    return await response.json();
};

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    console.log(apiEndPoint)
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}

export async function addLocation(webId,location){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/locations/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'user':webId, 
            'location':location
        })
      })
    return await response.json()
}

export async function updateLocation(webId, location){
    const apiEndPoint= process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/users/location/update", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"webId": webId, "location": location})
    });
    return await response.json();
};