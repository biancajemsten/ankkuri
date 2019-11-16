const db = require("../db");

async function getUser(accessToken) {
  const encodedPayload = accessToken.split(".")[1];
  const decodedPayload = Buffer.from(encodedPayload, "base64");
  const JSONPayload = JSON.parse(decodedPayload.toString());
  if (JSONPayload) {
    const user = await db.getUser(JSONPayload.username);
    return user[0];
  } else return null;
}

module.exports = { getUser };
