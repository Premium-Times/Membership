
import ApiUtils from "../../utils/ApiUtils";

import {
  LEVEL_UPDATE,
  LEVEL_CREATE,
  FETCH_LEVEL_SUCCESS,
  FETCH_LEVEL_BEGIN,
  FETCH_LEVEL_FAILURE,
} from "./types";

const URL = require("../../utils/URL");


export const levelUpdate = ({ prop, value }) => ({
  type: LEVEL_UPDATE,
  payload: { prop, value },
});

// form values arrive here before they are saved to the database.
// TODO: Save to database
// TODO: Do we save levels to a general DB or each instructor will have access to all levels?
export const levelCreate = ({
  title,
  descriptors,
  monthly,
  annual,
}) => {
  console.log(title, descriptors, monthly, annual);
  return (dispatch) => {
    dispatch({ type: LEVEL_CREATE });
    // Actions.pop();
  };
};

export const fetchLevelsBegin = () => ({
  type: FETCH_LEVEL_BEGIN,
});
export const fetchLevelsSuccess = levelsList => ({
  type: FETCH_LEVEL_SUCCESS,
  payload: { levelsList },
});

export const fetchLevelsFailure = error => ({
  type: FETCH_LEVEL_FAILURE,
  payload: { error },
});

export const fetchLevels = () => (dispatch) => {
  dispatch(fetchLevelsBegin());
  return fetch(URL.getLevels)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .then((responseJson) => {
      dispatch(fetchLevelsSuccess(responseJson));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchLevelsFailure(error));
    });
};
