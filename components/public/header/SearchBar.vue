<template>
    <div>
      <div class="search-container">
        <div class="logo"><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" class="logo-img" alt=""></a></div>
        <div class="search-module">
          <div class="search-block">
            <label>
              <input type="text" placeholder="请输入商家或地点">
            </label>
            <button><i class="iconfont icon-fangdajing"></i></button>
          </div>

          <div class="suggest">
            <a href="#">故宫博物院</a>
            <a href="#">北京欢乐谷</a>
            <a href="#">第九届陶然亭冰雪嘉年华</a>
            <a href="#">静之湖滑雪场</a>
            <a href="#">故宫珍宝馆</a>
          </div>
        </div>
        <div class="search-suggest">
          <h6>热门搜索</h6>
          <div class="hot-place">
            <a href="#">故宫博物院</a>
            <a href="#">北京欢乐谷</a>
            <a href="#">第九届陶然亭冰雪嘉年华</a>
            <a href="#">静之湖滑雪场</a>
            <a href="#">故宫珍宝馆</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "SearchBar"
  }
</script>

<style lang="scss" scoped>
.search-container{
  width: 1190px;
  height: 157px;
  margin: 0 auto;
  display: flex;
  position: relative;
  padding-bottom: 50px;
  .logo{
    width: 220px;
    height: 54px;
    box-sizing: content-box;
    padding: 28px 60px 40px 0;
    .logo-img{
      display: block;
      width: 126px;
      height: 48px;
    }
  }
  .search-module{
    margin-top: 28px;
    .search-block{
      width: 550px;
      height: 40px;
      box-sizing: content-box;
      border: 1px solid #13D1BE;
      background: #fff;
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
      input{
        display: inline-block;
        width: 442px;
        height: 20px;
        padding: 10px;
        font-size: 15px;
        border: none;
        outline: none;
        box-sizing: content-box;
        vertical-align: top;
      }
      button{
        width: 88px;
        height: 40px;
        background-color: #13D1BE;
        border: none;
        outline: none;
        i{
          line-height: 40px;
          font-size: 20px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
    .suggest{
      padding:8px 0 0 12px;
      height: 25px;
      a{
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
  .search-suggest{
    display: none;
    position: absolute;
    width: 464px;
    border: 1px solid #E5E5E5;
    background-color: #fff;
    border-top: none;
    height: 71px;
    top: 70px;
    left: 280px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #999;
    font-size: 12px;
    text-align: left;
    box-sizing: border-box;
    padding: 10px;
    h6{
      margin-bottom: 5px;
    }
    .hot-place{
      padding-top: 5px;
      font-size: 0;
      a{
        display: inline-block;
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
}
</style>
