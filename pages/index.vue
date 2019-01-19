<template>
  <div class="main-block">
    <div class="banner-container">
      <Menu />
      <div class="banner">
        <div class="top-nav">
          <a href="#" class="sell-out">美团外卖</a>
          <a href="#" class="movie">猫眼电影</a>
          <a href="#" class="hotel">美团酒店</a>
          <a href="#" class="settle">民宿／公寓</a>
          <a href="#" class="seller">商家入驻</a>
          <a href="#" class="gy">美团公益</a>
        </div>
        <div class="slider-profile">
          <div class="slider">
            <div class="carousel-container">
              <el-carousel trigger="click" height="240px" class="my-carousel">
                <el-carousel-item><a href="#"><img src="http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg" alt=""></a></el-carousel-item>
                <el-carousel-item><a href="#"><img src="http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg" alt=""></a></el-carousel-item>
                <el-carousel-item><a href="#"><img src="http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg" alt=""></a></el-carousel-item>
                <el-carousel-item><a href="#"><img src="http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg" alt=""></a></el-carousel-item>
                <el-carousel-item><a href="#"><img src="https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png" alt=""></a></el-carousel-item>
              </el-carousel>
              <div class="carousel-pic">
                <a href="#"><img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt=""></a>
              </div>
            </div>
            <div class="pics">
              <a href="#"><img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="" class="pics-pic1"></a>
              <a href="#"><img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="" class="pics-pic2"></a>
              <a href="#"><img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="" class="pics-pic3"></a>
            </div>
          </div>
          <div class="profile">
            <div class="login-container">
              <div class="avator"><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt=""></a></div>
              <h3>Hi!&nbsp;&nbsp;你好</h3>
              <a href="/register" class="register">注册</a>
              <a href="/login" class="login">立即登录</a>
            </div>
            <div class="qr-container">
              <a class="qr-box"><img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="" class="qr-code"></a>
              <p class="app-name">美团APP手机版</p>
              <p class="app-slogan"><span class="red">1元起</span>&nbsp;吃喝玩乐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Banner v-for="banner in banners" :key="banner.type" :banner="banner"/>
  </div>
</template>

<script>
import Menu from '../components/index/Menu'
import Banner from '../components/index/Banner'
export default {
  data() {
    return {
      banners: [
        {
          type: 'gediao',
          title: '有格调',
          index: 0,
          sort: [
            {
              title: '全部'
            },
            {
              title: '约会聚餐'
            },
            {
              title: '丽人SPA'
            },
            {
              title: '电影演出'
            },
            {
              title: '品质出游'
            }
          ]
        },
        {
          type: 'maoyan',
          title: '猫眼电影',
          index: 0,
          sort: [
            {
              title: '正在热映'
            },
            {
              title: '即将上映'
            }
          ]
        },
        {
          type: 'minsu',
          title: '推荐民宿',
          index: 0,
          sort: [
            {
              title: '天津'
            },
            {
              title: '济南'
            },
            {
              title: '大连'
            },
            {
              title: '太原'
            },
            {
              title: '石家庄'
            },
            {
              title: '秦皇岛'
            },
            {
              title: '呼和浩特'
            },
            {
              title: '潍坊'
            },
            {
              title: '保定'
            },
            {
              title: '泰安'
            }
          ]
        },
        {
          type: 'like',
          title: '猜你喜欢',
          index: 0,
          sort: [
            {
              title: '为你甄选最合适的'
            }
          ]
        },
        {
          type: 'city',
          title: '美团导航',
          index: 0,
          sort: []
        }
      ]
    }
  },
  components: {
    Menu,
    Banner,
  }
}
</script>

<style lang="scss">
.main-block{
  width: 1190px;
  margin: 0 auto;
  .banner-container{
    width: 100%;
    display: flex;
    margin-top: -50px;
    position: relative;
    .top-nav{
      height: 50px;
      font-size: 0;
      margin-left: 30px;
      a{
        display: inline-block;
        font-size: 16px;
        line-height: 50px;
        margin: 0 20px;
        color: #222;
        font-weight: 700;
        &.sell-out:hover{
          color: #fbc700;
        }
        &.movie:hover{
          color: #ed1e24;
        }
        &.hotel:hover{
          color: #f04d4e;
        }
        &.settle:hover{
          color: #FDC411;
        }
        &.seller:hover{
          color: #31BBAC;
        }
        &.gy:hover{
          color: #f04d4e;
        }
      }
    }
    .slider-profile{
      margin-left: 10px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .slider{
        width: 710px;
        .carousel-container{
          display: flex;
          justify-content: space-between;
          height: 240px;
          .my-carousel{
            width: 550px;
            height: 240px;
            img{
              width: 550px;
              height: 240px;
            }
          }
          .carousel-pic{
            a{
              display: block;
              img{
                width: 150px;
                height: 240px;
              }
            }
          }
        }
        .pics{
          margin-top: 10px;
          display: flex;
          a{
            display: block;
            .pics-pic1,.pics-pic2{
              width: 270px;
              height: 165px;
            }
            .pics-pic2{
              margin-left: 10px;
            }
            .pics-pic3{
              width: 150px;
              height: 165px;
              margin-left: 10px;
            }
          }
        }
      }
      .profile{
        width: 230px;
        box-sizing: border-box;
        margin-left: 10px;
        .login-container{
          width: 230px;
          height: 240px;
          box-sizing: border-box;
          border: 1px solid #E5E5E5;
          padding-top: 30px;
          background-color: #fff;
          .avator{
            height: 59px;
            margin-bottom: 4px;
            img{
              display: block;
              margin: 0 auto;
              width: 47px;
              height: 47px;
              box-sizing: content-box;
              border: 4px solid #E5E5E5;
              border-radius: 50%;
              overflow: hidden;
            }
          }
          h3{
            font-size: 16px;
            color: #222;
            text-align: center;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .register{
            display: block;
            width: 120px;
            height: 40px;
            border-radius: 40px;
            font-size: 14px;
            color: #333;
            transition: background-color .5s;
            text-align: center;
            line-height: 40px;
            margin: 10px auto 15px;
            border: 1px solid #E5E5E5;
            background-color: #fff;
            &:hover{
              background-color: #F6F6F6;
              transition: background-color .5s;
            }
          }
          .login{
            display: block;
            width: 120px;
            height: 40px;
            border-radius: 40px;
            font-size: 14px;
            color: #333;
            transition: background-color .5s;
            text-align: center;
            line-height: 40px;
            margin: 10px auto 15px;
            border: 1px solid #E5E5E5;
            background-color: #fff;
            &:hover{
              background-color: #F6F6F6;
              transition: background-color .5s;
            }
          }
        }
        .qr-container{
          margin-top: 10px;
          width: 230px;
          height: 165px;
          box-sizing: border-box;
          border: 1px solid #E5E5E5;
          background-color: #fff;
          .qr-box{
            display: block;
            width: 100%;
            margin-top: 10px;
            .qr-code{
              width: 97px;
              height: 97px;
              display: block;
              margin: 0 auto;
            }
          }
          .app-name{
            height: 21px;
            line-height: 21px;
            font-size: 16px;
            color: #222;
            font-weight: 500;
            text-align: center;
          }
          .app-slogan{
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            margin-top: 2px;
            color: #3f3f3f;
            .red{
              color: #EC5330;
            }
          }
        }
      }
    }
  }
}
</style>
