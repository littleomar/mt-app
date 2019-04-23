const axios = require('axios')

const instance = axios.create({
  baseURL: `http://127.0.0.1:6000`,
  timeout: 1000,
  headers: {

  }
});

// export default instance

module.exports = instance
