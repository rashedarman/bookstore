import axios from 'axios';

const APP_ID = 'Uz4mAxrRWHz1icevPClg';

const instance = axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
