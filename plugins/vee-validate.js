import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


const config = {
  delay: 100,
  locale: 'zh_CN',
  strict: true,
  enableAutoClasses: true,
  events: 'input',
  inject: true
};

export default () => {
  Vue.use(VeeValidate,config);
}

