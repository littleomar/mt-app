<template>
  <el-container class="my-container">
    <el-header class="my-header" height="197px"><my-header/></el-header>
    <el-main class="main"><nuxt/></el-main>
    <el-footer><my-footer/></el-footer>
  </el-container>
</template>


<script>
  import MyHeader from '../components/public/header'
  import MyFooter from '../components/public/footer'
  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }

</script>

<style lang="scss">
  @import url("https://s0.meituan.net/bs/fe-web-meituan/076a786/css/main.css");
@import url("//at.alicdn.com/t/font_1014172_t7i1q0geod.css");

html {
  font-family: "-apple-system",BlinkMacSystemFont,Roboto,"Helvetica Neue","MIcrosoft YaHei",sans-serif!important;
  font-size: 12px;
  /*word-spacing: 1px;*/
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #999;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}





.my-container{
  .my-header{
    padding: 0;
    width: 100%;
  }
  .main{
    /*background-color: #f8f8f8;*/
    padding: 0;
    overflow: visible;
  }
  a{
    text-decoration: none;
    color: #999;
    &:hover{
      color: #31BBAC;
    }
  }
}
</style>
