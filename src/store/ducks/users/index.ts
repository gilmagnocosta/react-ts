import { Reducer } from "redux";
import { UsersState, UsersTypes } from "./types";

const INITIAL_STATE: UsersState = {
  data: [],
  loading: false,
  error: false
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UsersTypes.LOAD_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case UsersTypes.LOAD_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
