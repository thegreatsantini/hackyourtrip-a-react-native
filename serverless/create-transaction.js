import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	
	const params = {
		TableName: "Transactions",
		// 'Item' contains the attributes of the item to be created
		// - 'InvestorId', 'EntrepreneurId': user identities are federated through the
		// Cognito Identity Pool, we will use the identity id
		// as the id of the authenticated user
		// - 'TransactionId': a unique uuid
		// - 'TransactionAmount': the amount billed to the investor and collected by the entrepreneur
		// - 'OpportunityId': id of opportunity the transaction addresses
		// - 'OpportunityName': name from opportunity table, usually supplied by entrepreneur
		// - 'PaymentTerms': promissary note? separate document
		// - 'CreatedAt': timestamp of transaction
		
		Item: {
			InvestorId: event.pathParameters.id,
			EntrepreneurId: data.entrepreneurId,
			TransactionId: uuid.v4(),
			TransactionAmount: data.transactionAmount,
			OpportunityId: data.opportunity,
			OpportunityName: data.opportunityName,
			PaymentTerms: data.paymentTerms,
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