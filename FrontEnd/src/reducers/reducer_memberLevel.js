/* import data from "./Levels.json";
* console.log(data);
* export default () => data;
*/

// import levelData from "./Levels";
// export default () => data;

import {
  FETCH_LEVEL_FAILURE,
  FETCH_LEVEL_BEGIN,
  FETCH_LEVEL_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LEVEL_BEGIN:
      // mark loading state as "true" so we can show spinner
      // reset errors so we can start on fresh note
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LEVEL_SUCCESS:
      // set loading to false
      // replace items with one from server
      return {
        ...state,
        loading: false,
        items: action.payload.levelsList,
      };
    case FETCH_LEVEL_FAILURE:
      // fetching data failed. set loading to false
      // set error to returned error
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
};
