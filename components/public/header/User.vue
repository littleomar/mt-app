<template>
    <div class="user"><a href="/register" class="register">立即注册</a><a href="/login" class="login">登录</a></div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style lang="scss" scoped>
.user{
  margin-left: 15px;
  a{
    margin-left: 15px;
    &.register{
      color: #31BBAC;
    }
  }
}
</style>
