import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const client = new DynamoDBClient({
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT
  })