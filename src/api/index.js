import axios from 'axios';
import { config } from './config';

const instance = axios.create(config());
const headerFormData = { 'Content-Type': 'multipart/form-data' };

const objToForm = (obj) => Object.keys(obj)
  .filter(key => (obj[key] != null))
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  .join('&');

class Api {
  static get(url, { header, payload = {} } = {}) {
    return this.fetchForm(`${url}?${objToForm(payload)}`, 'GET', header);
  }
  static post(url, { header, payload = {}, multipart } = {}) {
    return this.fetchForm(url, 'POST', header, payload, multipart);
  };
  static delete(url, { header, payload = {} } = {}) {
    return this.fetchForm(url, 'DELETE', header, payload);
  };
  static put(url, { header, payload = {}, multipart } = {}) {
    return this.fetchForm(url, 'PUT', header, payload, multipart);
  };

  static fetchForm(url, method, header, payload, multipart) {
    let headers = { ...header };
    if (multipart) headers = { ...headers, ...headerFormData };
    const data = multipart ? this.createFormData(payload) : payload;

    return new Promise((resolve, reject) => {
      instance({ url, method, headers, data })
        .then((res) => {
          if (res.status === 200) resolve(res.data);
          else if (res.status === 404) reject(null);
          else reject(res.data);
        }).catch((err) => {
          const defaultErr = { status: 503, msg: 'Service Unavailable' };
          const res = err.response;
          const data = res ? res.data : defaultErr;
          reject(data);
        });
    });
  }

  static createFormData(data) {
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    return form;
  }
}

export default Api;