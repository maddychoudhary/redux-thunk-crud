import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR, } from "../actions/types";


const initialState = {
    loading: false,
    error:null,
}

const loginReducer= (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
          return {
              ...state,
              loading: action.payload,
          }
          case LOGIN_LOADING: 
              return {
                  ...state,
                  loading: action.payload,
            }
            case LOGIN_ERROR:
                return {
                  ...state,
                  error: action.payload,
                };
      default:
        return state;
    }
};
export default loginReducer;