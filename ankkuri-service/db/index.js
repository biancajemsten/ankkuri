const makeDynamoDbClient = require("../helpers/makeDynamoDbClient");
const USER_TABLE = process.env.ANKKURI_USER_TABLE;
const dynamoDbDocClient = makeDynamoDbClient();

const { SimpleRemovableTable } = require("./Table");

module.exports.getUser = userInfo => {
  const UserTableSession = new SimpleRemovableTable(
    USER_TABLE,
    dynamoDbDocClient,
    "UserId"
  );
  return UserTableSession.getItems({
    KeyConditionExpression: "UserId = :userId",
    ExpressionAttributeValues: {
      ":userId": userInfo
    }
  });
};
