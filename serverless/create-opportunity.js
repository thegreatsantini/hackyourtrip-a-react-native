import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	
	const params = {
		TableName: "Opportunities",
		// 'Item' contains the attributes of the item to be created
		// - 'userId': user identities are federated through the
		// Cognito Identity Pool, we will use the identity id
		// as the user id of the authenticated user
		// - 'opportunityId': a unique uuid
		// - 'pitch': parsed from request body
		// - 'currency': parsed from request body
		// - 'attachment': parsed from request body
		// - 'location': Restaurant location (id?)
		// - 'fundingAmount': parsed from request body
		// - 'timeFrame': parsed from request body
		// - 'createdAt': current Unix timestamp
		
		Item: {
			City: data.city,
			EntrepreneurId: event.requestContext.identity.cognitoIdentityId,
			OpportunityId: uuid.v4(),
			Title: data.title,
			Pitch: data.pitch,
			Currency: data.currency,
			Attachment: data.attachment,
			Amount: data.amount,
			ClosingDate: data.closingDate,
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