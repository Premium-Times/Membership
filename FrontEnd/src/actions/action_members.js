import ApiUtils from "../../utils/ApiUtils";

import {
  MEMBER_UPDATE,
  MEMBER_CREATE,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_BEGIN,
  FETCH_MEMBERS_FAILURE,
} from "./types";
  
const URL = require("../../utils/URL");
  
/*
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
  */

export const fetchMembersBegin = () => ({
  type: FETCH_MEMBERS_BEGIN,
});
export const fetchMembersSuccess = membersList => ({
  type: FETCH_MEMBERS_SUCCESS,
  payload: { membersList },
});
  
export const fetchMembersFailure = error => ({
  type: FETCH_MEMBERS_FAILURE,
  payload: { error },
});
  
export const fetchMembers = () => (dispatch) => {
  dispatch(fetchMembersBegin());
  return fetch(URL.getMembers)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .then((responseJson) => {
      dispatch(fetchMembersSuccess(responseJson));
    })
    .catch((error) => {
      // console.log(error);
      dispatch(fetchMembersFailure(error));
    });
};
