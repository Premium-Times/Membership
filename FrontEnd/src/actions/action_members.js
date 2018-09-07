import ApiUtils from "../../utils/ApiUtils";

import {
  MEMBER_UPDATE,
  MEMBER_CREATE_BEGIN,
  MEMBER_CREATE_SUCCESS,
  MEMBER_CREATE_FAILURE,
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
*/
// form values arrive here before they are saved to the database.
// TODO: Save to database
// TODO: Do we save levels to a general DB or each instructor will have access to all levels?
const createMemberBegin = () => ({
  type: MEMBER_CREATE_BEGIN,
});

const createMemberSucces = message => ({
  type: MEMBER_CREATE_SUCCESS,
  payload: { message },
});

const createMemberFailed = message => ({
  type: MEMBER_CREATE_FAILURE,
  payload: { message },
});

export const registerMember = (values, callback) => {
  console.log(JSON.stringify(values));
  return (dispatch) => {
    dispatch(createMemberBegin());
    return fetch(URL.addMember, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then((response) => { 
        dispatch(createMemberSucces(response));
      })
      .then(() => callback())
      .catch((error) => {
        console.error("Error:", error);
        dispatch(createMemberFailed(error));
      });
  };
};
  
// FETCH MEMBERS //
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
