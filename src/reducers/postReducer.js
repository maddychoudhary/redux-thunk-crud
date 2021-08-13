import {
  GET_POSTS_SUCCESS,
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,

  CREATE_POST_SUCCESS,
  CREATE_POST_LOADING,
  CREATE_POST_ERROR,

  EDIT_POST,

  UPDATE_POST_SUCCESS,
  UPDATE_POST_LOADING,
  UPDATE_POST_ERROR,

  DELETE_POST_SUCCESS,
  DELETE_POST_LOADING,
  DELETE_POST_ERROR

} from "../actions/types"; 

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  post:null,
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POSTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      }
      case CREATE_POST_LOADING:
        return {
          ...state,
        isLoading: action.payload,
      }
      case CREATE_POST_ERROR:
        return {
          ...state,
        error: action.payload,
      }
    
      case EDIT_POST:
        return {
          ...state,
          post: state.posts.find((postItem) => postItem.id == action.payload),
      };
    
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.map((postItem) =>
            postItem.id == action.payload.id ? action.payload : postItem
          ),
      };
      case UPDATE_POST_LOADING:
        return {
          ...state,
        isLoading: action.payload,
      }
      case UPDATE_POST_ERROR:
        return {
          ...state,
        error: action.payload,
      }
    
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.filter((postItem) => postItem.id != action.payload),
      };
      case DELETE_POST_LOADING:
        return {
          ...state,
        isLoading: action.payload,
      }
      case DELETE_POST_ERROR:
        return {
          ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};
export default postsReducer;