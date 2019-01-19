<template>
    <div>
      <div class="top-container">
        <div class="top-left">
          <Geo/>
          <User/>
        </div>
        <Nav class="top-right"/>
      </div>
    </div>
</template>

<script>
  import Geo from './Geo'
  import User from './User'
  import Nav from './Nav'
  export default {
    name: "TopBar",
    components: {
      Geo,
      User,
      Nav
    }
  }
</script>

<style lang="scss" scoped>
.top-container{
  width: 1190px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .top-left{
    display: flex;
    justify-content: space-between;
    height: 28px;
    padding-top: 12px;
    line-height: 16px;
  }
}
</style>
