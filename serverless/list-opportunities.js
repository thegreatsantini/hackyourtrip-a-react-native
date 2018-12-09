import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "Opportunities",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'City': only return items with matching 'City'
        // partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':City': defines 'City' as value of query
        KeyConditionExpression: "City = :City",
        ExpressionAttributeValues: {
            ":City": event.pathParameters.id
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