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
			InvestorId: event.pathParameters.id,
			EntrepreneurId: data.entrepreneurId,
			AppointmentId: uuid.v4(),
			DateTime: data.time,
			RestaurantId: data.restaurantId,
			AppointmentLocation: data.location, //address
			Attachment: data.attachment,
			Opportunity: data.opportunity, // reference to opportunity object
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