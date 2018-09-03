// We will broadcast members as an object with the id as key for easy access through routes.
import _ from "lodash";

import {
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_BEGIN,
  FETCH_MEMBERS_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  items: {},
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEMBERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: _.mapKeys(action.payload.membersList.members, "_id"),
      };
    case FETCH_MEMBERS_FAILURE:
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
