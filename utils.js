import axios from 'axios';

import {USER_GRANT_TYPE, CLIENT_ID, CLIENT_SECRET, SCOPE, TOKEN_URL} from "./keys";

const authenticateUser = async () => {

    const data = {
        grant_type: USER_GRANT_TYPE,
        client_application_id: CLIENT_ID,
        client_application_secret: CLIENT_SECRET,
        scope: SCOPE,
    };

    let userToken = "Bearer ";

    const fetchToken = await axios.post(TOKEN_URL + `?grant_type=client_credentials&scope=${SCOPE}`, null, {
        headers: {
            Content_Type: "x-www-form-urlencoded"
        },
        auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET
        }
    })
    .catch(e => console.log(e));

    return userToken.concat(fetchToken.data.access_token)
}

export default authenticateUser;
    // axios.get("https://apis.discover.com/cityguides/v2/cities", {
    //     headers: {
    //         'Content-Type': "application/json",
    //         "x-dfs-api-plan": "CITYGUIDES_SANDBOX",
    //         'Authorization': "Bearer cde35450-b8e3-4f91-b644-57f6b33ca081"
    //     }
    // }).then(res => console.log(res))
    //     .catch(err => console.log(err))