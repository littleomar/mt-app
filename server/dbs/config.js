

module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      // return 'smtp.163.com'
      return 'smtp.qq.com'
    },
    get user() {
      // return 'littleomarr@163.com'
      return '862677916@qq.com'
    },
    get pass() {
      // return 'A12345678'
      return 'fgkiffrimznebeee'
    }
  },
  get code() {
    return () => {
      return Math.random().toString(16).slice(2,6).toUpperCase();
    }
  }
}
