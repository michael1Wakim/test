import axios from 'axios';

export const UserLogin = myObj =>
  axios({
    url: 'http://34.245.213.76:3000/auth/signin',
    method: 'POST',
    data: myObj,
  });

export const getArticales = async (token, index) =>
  axios.get('http://34.245.213.76:3000/articles?&page=' + index, {
    headers: {Authorization: `Bearer ${token}`},
  });
