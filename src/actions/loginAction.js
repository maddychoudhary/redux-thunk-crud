import {
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    LOGIN_ERROR,
  } from "./types";

  import API from "../api";
  
  //login data...................................
  export const loginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      payload: data,
    }
  }
  
  export const loginLoading = (data) => {
    return {
      type: LOGIN_LOADING,
      payload: data,
    }
  }
  
  export const loginError = (data) => {
    return {
      type: LOGIN_ERROR,
      payload: data,
    }
  }
  
  export const login = (data) => {
    let isLoading = true;
    const { login_data } = API;
    return (dispatch) => {
      dispatch(loginLoading(isLoading));
       login_data(data)
           .then(res => {
            console.log(res)
        if (res.data) {
            const data = res.data;
            localStorage.setItem('token', data.token);
          dispatch(loginSuccess());
          isLoading = false;
            dispatch(loginLoading(isLoading));
            
            }
        }).catch(error => {
          dispatch(loginError(error));
          isLoading = false;
          dispatch(loginLoading(isLoading));
        })
    }
  }
  
  
  
  