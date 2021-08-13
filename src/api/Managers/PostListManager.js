import { _delete,put,post, get, patch, formData, clientId } from '../washtraxClient';

const posts_list = () => {
  return get('/posts');
};
const add_post = (data) => {
  return post('/posts', data);
};
const update_post = (data) => {
  return put(`/posts/${data.id}`, data);
};
const delete_post = (id) => {
  return _delete(`/posts/${id}`);
};

export default {
  posts_list,
  add_post,
  update_post,
  delete_post,
};
