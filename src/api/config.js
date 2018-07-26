const LOCAL_HOST = 'http://localhost:8888/';
const DEV_HOST = 'DEV_HOST';
const PROD_HOST = 'PRODUCTION_HOST';

const HOST = process.env.NODE_ENV === 'production' ? PROD_HOST : DEV_HOST;

export const config = (config) => ({
  baseURL: LOCAL_HOST,
  timeout: 10000,
  ...config,
});