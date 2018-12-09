import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "Appointments",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'EntrepreneurId': only return items with matching 'EntrepreneurId'
        // partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':EntrepreneurId': defines 'EntrepreneurId' to be Identity Pool identity id
        // of the authenticated user
        KeyConditionExpression: "EntrepreneurId = :EntrepreneurId",
        ExpressionAttributeValues: {
            ":EntrepreneurId": event.requestContext.identity.cognitoIdentityId
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