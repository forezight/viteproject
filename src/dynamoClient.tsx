import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamoClient = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAYMUM5WNZVASZCHKH",
    secretAccessKey: "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"
  }
});

export default dynamoClient;
