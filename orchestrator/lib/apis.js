const axios = require('axios');

const transactionsAPI = axios.create({
  baseURL: 'http://localhost:4001',
});

const paymentsAPI = axios.create({
  baseURL: 'http://localhost:4001',
});

const productsAPI = axios.create({
  baseURL: 'http://localhost:4001',
});

const usersAPI = axios.create({
  baseURL: 'http://localhost:4002',
});

module.exports = {
  transactionsAPI,
  productsAPI,
  paymentsAPI,
  usersAPI,
};
