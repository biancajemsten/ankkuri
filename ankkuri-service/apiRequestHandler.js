const db = require("./db");

const {
  succesResponseCallback,
  errorResponseCallback
} = require("./helpers/responses");

async function getUser(event, content, callback) {
  try {
    console.log(event);
    const UserId = decodeURIComponent(event.pathParameters.userId);
    console.log(UserId, "userId");
    const user = await db.getUser(UserId);
    succesResponseCallback(callback, user);
  } catch (err) {
    console.error(err, err.stack);
    errorResponseCallback(callback, err);
  }
}

module.exports = {
  getUser
};
