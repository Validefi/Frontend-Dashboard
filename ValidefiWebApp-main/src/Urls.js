export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.validefi.io'
    : 'http://localhost:5000';
