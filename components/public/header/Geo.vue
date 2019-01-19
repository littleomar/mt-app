<template>
    <div class="geo">
      <i class="iconfont icon-weizhi geo-item"></i>
      <span class="city geo-item">北京</span>
      <a href="#" class="change-city geo-item">切换城市</a>
      <div class="near-citys geo-item"><span class="front around">[</span><a href="#">大厂回族自治县</a><a href="#">廊坊</a><a href="#">固始县</a><span class="back around">]</span></div>
    </div>
</template>

<script>
  export default {
    name: "Geo"
  }
</script>

<style lang="scss" scoped>
  .geo{
    font-size: 0;
    .geo-item{
      font-size: 12px;
    }
    .icon-weizhi{
      color: #999;
      font-size: 14px;
    }
    .change-city{
      background-color: #F4F4F4;
      display: inline-block;
      border: 1px solid #E5E5E5;
      margin: 0 4px;
      padding: 0 2px;
    }
    .near-citys{
      display: inline-block;
      line-height: 16px;
      .around{
        line-height: 16px;
      }
      a{
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
</style>
