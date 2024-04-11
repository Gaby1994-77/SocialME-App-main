import {SET_TOKEN, SET_USER_DATA, REMOVE_TOKEN} from './authActions';

interface AuthState {
  token: string | null;
  userData: any;
}

const initialAuthState: AuthState = {
  token: null,
  userData: null,
};

const authReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.payload};
    case SET_USER_DATA:
      return {...state, userData: action.payload};
    case REMOVE_TOKEN:
      return {...state, token: null, userData: null};
    default:
      return state;
  }
};

export default authReducer;
