import * as actionTypes from "../actionTypes";
import { updateObject } from "../shared/utility";

export interface authReducerInterface {
  token: string | null,
  signInRes: any,
  error: any,
  loading: boolean,
}

const initialState: authReducerInterface = {
  token: null,
  signInRes: null,
  error: null,
  loading: false,
};

//Login
const authLoadingStart = (state: any, action: any) => {
  return updateObject(state, { error: null, loading: true });
};

const authStoreError = (state: any, action: any) => {
  return updateObject(state, { error: null, loading: true });
}

const signInSuccess = (state: any, action: any) => {
  return updateObject(state, {
    signInRes: action.signInRes,
    error: null,
    loading: false,
  });
};

// Logout
const signInLogout = (state: any, action: any) => {
  return updateObject(state, { token: null });
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGOUT:
      return signInLogout(state, action);
    case actionTypes.AUTH_LOGIN_START:
      return authLoadingStart(state, action);
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return signInSuccess(state, action);
    case actionTypes.AUTH_LOGIN_FAIL:
      return authStoreError(state, action);
    default:
      return state;
  }
};

export default authReducer;
