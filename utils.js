import axios from 'axios';

const USER_GRANT_TYPE = "Client Credentials"
const CLIENT_ID = "l7xx0021410252cb4d6d98283affc14ee1a4"
const CLIENT_SECRET = "ad68d46e80a04df9b401e5445ff4e947"
const SCOPE = "CITYGUIDES DCIOFFERS DCIOFFERS_POST DCILOUNGES DCILOUNGES_POST DCILOUNGES_PROVIDER_LG DCILOUNGES_PROVIDER_DCIPL DCI_ATM DCI_CURRENCYCONVERSION DCI_CUSTOMERSERVICE DCI_TIP"
const TOKEN_URL = "https://api.discover.com/auth/oauth/v2/token"

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