export const API_URL = process.env.REACT_APP_ENVIRONMENT === 'production'
  ? 'https://flagger.kasparsdev.eu/api/'
  : 'http://127.0.0.1:8000/api/';

export const ARTICLES_REQUEST = "flagger/external_articles"