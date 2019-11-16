const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

succesResponse = (data = {}) => {
  return {
    headers: corsHeaders,
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

errorResponse = (error = {}, errorCode = 500) => {
  return {
    statusCode: errorCode,
    body: JSON.stringify(error)
  };
};

succesResponseCallback = (callback, data = {}) => {
  callback(null, succesResponse(data));
};
errorResponseCallback = (callback, error = {}, errorCode = 500) => {
  callback(null, errorResponse(error, errorCode));
};

module.exports = {
  succesResponseCallback,
  errorResponseCallback
};
