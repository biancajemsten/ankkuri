const AWS = require("aws-sdk");

function makeDynamoDbClient() {
  return new AWS.DynamoDB.DocumentClient();
}

module.exports = makeDynamoDbClient;
