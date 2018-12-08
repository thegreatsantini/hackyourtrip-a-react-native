import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	
	const params = {
		TableName: "Users",
		// 'Item' contains the attributes of the item to be created
		// - 'userId': user identities are federated through the
		// Cognito Identity Pool, we will use the identity id
		// as the user id of the authenticated user
		// - 'userRole': selected at registration
		// - 'userLocation': dynamically updated based on location tracker
		// - 'createdAt': current Unix timestamp
		
		Item: {
			UserId: event.requestContext.identity.cognitoIdentityId,
			Role: data.role,
			FirstName: data.firstName,
			LastName: data.lastName,
			Email: data.email,
			Phone: data.phone,
			Currency: data.currency,
			Industry: data.industry,
			City: data.city,
			CreatedAt: Date.now()
		}
	};
	
	try {
		await dynamoDbLib.call("put", params);
		callback(null, success(params.Item));
	} catch (e) {
		console.log(e);
		callback(null, failure({status: false}));
	}
}