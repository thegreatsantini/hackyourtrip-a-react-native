import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: "Users",
        Key: {
            UserId: event.requestContext.identity.cognitoIdentityId,
            Role: event.pathParameters.Role
        }
    };

    try {
        const result = await dynamoDbLib.call("get", params);
        if (result.Item) {
            // return the retrieved item
            return success(result.Item);
        } else {
            return failure ({ status: false, error: "Item not found."});
        }
    } catch (e) {
        return failure ({ status: false});
    }
}