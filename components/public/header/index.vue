<template>
  <div class="header">
    <top-bar class="top-bar"></top-bar>
    <search-bar></search-bar>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  import SearchBar from './SearchBar'
  export default {
    name: "index",
    components: {
      TopBar,
      SearchBar
    }
  }
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);
  .top-bar{
    width: 100%;
    height: 40px;
    background-color: #F8F8F8;
  }
}
</style>
