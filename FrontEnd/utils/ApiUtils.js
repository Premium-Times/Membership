// ApiUtils.js
// Taken from https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
//
const ApiUtils = {
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    console.log("API Utils error: ", error);
    throw error;
  },

  logError(error) {
    console.log("There was a problem with fetch: \n ", error);
    return error;
  },

  readResponseAsJSON(response) {
    return response.json();
  },


};
export default ApiUtils;
