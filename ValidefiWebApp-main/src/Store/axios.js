// import axios from 'axios';
// import jwt from 'jsonwebtoken';
// import { url } from './urls';

// const axiosInstance = axios.create({
//   headers: {
//     Authorization: sessionStorage.getItem('access_token')
//       ? sessionStorage.getItem('access_token')
//       : '',
//     'Content-Type': 'application/json',
//     accept: 'application/json',
//   },
// });

// axiosInstance.interceptors.request.use((request) => {
//   // Need to do nothing if non post non patch request
//   if (request.method === 'get') {
//     return request;
//   } else {
//     const data = request.data;
//     if (!data?.payload) {
//       const algorithm = 'RS256';
//       const payload = {
//         payload: jwt.sign(data ?? '', getKey(), { algorithm: algorithm }),
//       };

//       request.data = JSON.stringify(payload);
//     }

//     return request;
//   }
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     try {
//       if (response.data?.payload) {
//         const decoded = jwt.verify(response.data.payload, getPublicKey());
//         response.data = decoded;
//       }
//       return response;
//     } catch (ex) {
//       response.status = 401;
//       response.statusText = 'Unauthorized';
//       showAlert('User verification Failed', 'error');
//       return response;
//     }
//   },
//   async function (error) {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
