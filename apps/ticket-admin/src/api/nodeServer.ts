/* eslint-disable no-var */
import axios from 'axios';
import { readFile } from 'fs';

const API_ENDPOINT = 'https://api.shwekyar.net/';
const token: string | null = localStorage.getItem('accessToken');
const authHeader = () => ({
  Authorization: `Bearer ${token && JSON.parse(token)}`,
});

const client = axios.create({
  baseURL: API_ENDPOINT,

  headers: {
    // Authorization: `Bearer ${getItem('accessToken')}`,
    'Content-Type': 'application/json',
  },
});

const LocalService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    // Authorization: `Bearer ${getItem('accessToken')}`,
    'Content-Type': 'application/json',
  },
});

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;

  const { headers } = config;

  requestConfig.headers = {
    ...headers,
  };
  return requestConfig;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    return response;
  }
);

class ApiService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static put(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader(), ...optionalHeader },
    });
  }
  static imagePut(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: data,
      headers: { ...optionalHeader },
    });
  }
  static delete(path = '', data = {}) {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

export const UploadImage = async (file: File, signUrl: string) => {
  var readFile = file;
  var reader = new FileReader();
  reader.readAsDataURL(readFile);

  try {
    const response = await ApiService.imagePut(signUrl, readFile, {
      'Content-Type': file.type,
    });
    return response.status === 200 ? 'success' : null;
  } catch (error) {
    return 'error';
  }
};

export const getSignUrl = async (file: File) => {
  const signURLRESPONSE = await ApiService.post(`/admin/images/signed-url`, {
    content_type: file.type,
    file_path: 'admin',
  });
  return signURLRESPONSE.data;
};

export { ApiService, LocalService };
