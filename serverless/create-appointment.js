import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	
	const params = {
		TableName: "Appointments",
		// 'Item' contains the attributes of the item to be created
		// - 'userId': user identities are federated through the
		// Cognito Identity Pool, we will use the identity id
		// as the user id of the authenticated user
		// - 'appointmentId': a unique uuid
		// - 'appointmentTime': timestamp of appointment
		// - 'attachment': parsed from request body
		// - 'opportunity': opportunity object containing details
		// - 'createdAt': current Unix timestamp
		
		Item: {
			// need to determine how to add multiple users
			userId1: event.requestContext.identity.cognitoIdentityId,
			userId2: event.requestContext.identity.cognitoIdentityId,
			appointmentId: uuid.v4(),
			appointmentTime: data.time,
			appointmentLocation: data.location, // restaurant id?
			attachment: data.attachment,
			opportunity: data.opportunity, // reference to opportunity object
			createdAt: Date.now()
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