export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://localhost:3000'
    : 'http://localhost:8000';
