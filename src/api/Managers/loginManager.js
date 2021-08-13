import { post, get, formData, clientId } from '../washtraxClient';

const login_data = (data) => {
  return post(`/login`, data);
};
export default {
  login_data,
};