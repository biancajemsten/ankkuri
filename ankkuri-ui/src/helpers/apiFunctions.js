const fetchOptions = {
  headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
  method: "GET",
  mode: "cors"
};

export async function getUser() {
  const userId = process.env.REACT_APP_MOCK_USER_ID;
  const URL = process.env.REACT_APP_API_URL;
  try {
    const fetchURL = URL + "getUser/" + userId;
    const request = await fetch(fetchURL, fetchOptions);
    const data = request.json();
    return data;
  } catch (err) {
    return err;
  }
}
