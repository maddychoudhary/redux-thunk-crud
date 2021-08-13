import axios from 'axios';

let apiClient = null;

class SammyOpsClient {
  constructor() {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }
  _getClient() {
    apiClient = axios.create({
      //baseURL: 'https://reqres.in/api/',
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });

    apiClient.interceptors.request.use(
      async (config) => {

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    return apiClient;
  }

  _config() {
    return {};
    //return { headers: { Authorization: access_token } };
  }
  _authConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${JSON.stringify(token)}`,
      },
    };
  }

  get(url) {
    return this._getClient().get(url, this._config());
  }

  post(url, data, progress) {
    return this._getClient().post(url, data, progress, this._config());
  }
  patch(url, data) {
    return this._getClient().patch(url, data, this._config());
  }
  put(url, data) {
    return this._getClient().put(url, data, this._config());
  }
  delete(url, data) {
    return this._getClient().delete(url, data, this._config());
  }
}

const SOpClient = new SammyOpsClient();
const get = SOpClient.get;
const post = SOpClient.post;
const patch = SOpClient.patch;
const put = SOpClient.put;
const _delete = SOpClient.delete;
const token =
  typeof window !== 'undefined' ? localStorage.getItem('token') : '';
const clientId =
  typeof window !== 'undefined' ? localStorage.getItem('userId') : '';

export default {
  SammyOpsClient,
};
export {
  token,
  // formData,
  clientId,
  get,
  post,
  patch,
  put,
  _delete
};
