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
} from "./types";
import API from "../api";

//fetch posts data...................................
export const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  }
}

export const getPostsLoading = (data) => {
  return {
    type: GET_POSTS_LOADING,
    payload: data,
  }
}

export const getPostsError = (data) => {
  return {
    type: GET_POSTS_ERROR,
    payload: data,
  }
}

export const getPosts = () => {
  let isLoading = true;
  const { posts_list } = API;
  return (dispatch) => {
    dispatch(getPostsLoading(isLoading));
    return posts_list()
      .then(response => {
        //console.log(response.data)
        dispatch(getPostsSuccess(response.data));
        isLoading = false;
        dispatch(getPostsLoading(isLoading));
      }).catch(error => {
        dispatch(getPostsError(error));
        isLoading = false;
        dispatch(getPostsLoading(isLoading));
      })
  }
}



//create posts;
export const addPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  }
}

export const addPostLoading = (data) => {
  return {
    type: CREATE_POST_LOADING,
    payload: data,
  }
}

export const addPostError = (data) => {
  return {
    type: CREATE_POST_ERROR,
    payload: data,
  }
}

export const addPost = (data) => {
  let isLoading = true;
  const { add_post } = API;
  return (dispatch) => {
    dispatch(addPostLoading(isLoading));
    return add_post(data)
      .then(response => {
        //console.log(response.data)
        dispatch(addPostSuccess(response.data));
        isLoading = false;
        dispatch(addPostLoading(isLoading));
      }).catch(error => {
        dispatch(addPostError(error));
        isLoading = false;
        dispatch(addPostLoading(isLoading));
      })
  }
}

//edit post;
export const editPost = (id) => {
  return {
    type: EDIT_POST,
    payload: id,
  }
};

//update post;
export const updatePostSuccess = (id) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: id,
  }
}

export const updatePostLoading = (data) => {
  return {
    type: UPDATE_POST_LOADING,
    payload: data,
  }
}

export const updatePostError = (data) => {
  return {
    type: UPDATE_POST_ERROR,
    payload: data,
  }
}

export const updatePost = (data) => {
  let isLoading = true;
  const { update_post } = API;
  return (dispatch) => {
    dispatch(updatePostLoading(isLoading));
    return update_post(data)
      .then(response => {
        //console.log(response.data)
        dispatch(updatePostSuccess(response.data));
        isLoading = false;
        dispatch(updatePostLoading(isLoading));
      }).catch(error => {
        dispatch(updatePostError(error));
        isLoading = false;
        dispatch(updatePostLoading(isLoading));
      })
  }
}


//delete post;
export const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: id,
  }
}

export const deletePostLoading = (data) => {
  return {
    type: DELETE_POST_LOADING,
    payload: data,
  }
}

export const deletePostError = (data) => {
  return {
    type: DELETE_POST_ERROR,
    payload: data,
  }
}

export const deletePost = (id) => {
  let isLoading = true;
  const { delete_post } = API;
  return (dispatch) => {
    dispatch(deletePostLoading(isLoading));
    return delete_post(id)
      .then(response => {
        //console.log(response.data)
        dispatch(deletePostSuccess(id));
        isLoading = false;
        dispatch(deletePostLoading(isLoading));
      }).catch(error => {
        dispatch(deletePostError(error));
        isLoading = false;
        dispatch(deletePostLoading(isLoading));
      })
  }
}