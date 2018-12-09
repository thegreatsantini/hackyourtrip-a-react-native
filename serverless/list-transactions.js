import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";


// We need to make another one of these functions, the key based on Entrepreneur vs Investor Id.
// One for each index, rename the function to list-appointments-entrepreneur, rename the routes in sls.yml


export async function main(event, context, callback) {
    const params = {
        TableName: "Transactions",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'InvestorId': only return items with matching 'InvestorId'
        // partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':InvestorId': defines 'InvestorId' to be Identity Pool identity id
        // of the authenticated user
        KeyConditionExpression: "InvestorId = :InvestorId",
        ExpressionAttributeValues: {
            ":InvestorId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({ status: false}));
    }
}