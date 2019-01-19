<template>
  <ul class="nav">
    <li class="nav-item">
      <a href="#">我的美团</a>
      <ul class="detail-list my-mt">
        <li><a href="#">我的订单</a></li>
        <li><a href="#">我的收藏</a></li>
        <li><a href="#">抵用券</a></li>
        <li><a href="#">账户设置</a></li>
      </ul>
    </li>
    <li class="nav-item phone"><a href="#">手机APP</a></li>
    <li class="nav-item">
      <span>商家中心</span>
      <ul class="detail-list seller">
        <li><a href="#">登录商家中心</a></li>
        <li><a href="#">美团智能收银</a></li>
        <li><a href="#">我想合作</a></li>
        <li><a href="#">手机免费开店</a></li>
        <li><a href="#">餐饮代理商招募</a></li>
        <li><a href="#">商家申请开票</a></li>
        <li><a href="#">免费合作美团排队</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <span>网站导航</span>
      <div class="detail-list site-nav">
        <div class="nav-container">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd><a href="#">国际机票</a></dd>
            <dd><a href="#">火车票</a></dd>
            <dd><a href="#">榛果民宿</a></dd>
            <dd><a href="#">经济型酒店</a></dd>
            <dd><a href="#">主题酒店</a></dd>
            <dd><a href="#">商务酒店</a></dd>
            <dd><a href="#">公寓</a></dd>
            <dd><a href="#">豪华酒店</a></dd>
            <dd><a href="#">客栈</a></dd>
            <dd><a href="#">青年旅社</a></dd>
            <dd><a href="#">度假酒店</a></dd>
            <dd><a href="#">别墅</a></dd>
            <dd><a href="#">农家院</a></dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd><a href="#">烤鱼</a></dd>
            <dd><a href="#">特色小吃</a></dd>
            <dd><a href="#">烧烤</a></dd>
            <dd><a href="#">自助餐</a></dd>
            <dd><a href="#">火锅</a></dd>
            <dd><a href="#">代金券</a></dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd><a href="#">热映电影</a></dd>
            <dd><a href="#">热门电影</a></dd>
            <dd><a href="#">热映电影口碑榜</a></dd>
            <dd><a href="#">最受期待电影</a></dd>
            <dd><a href="#">国内票房榜</a></dd>
            <dd><a href="#">北美票房榜</a></dd>
            <dd><a href="#">电影排行榜</a></dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt=""></a></dd>
            <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt=""></a></dd>
            <dd><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt=""></a></dd>
            <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt=""></a></dd>
            <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt=""></a></dd>
          </dl>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style lang="scss" scoped>
.nav{
  list-style: none;
  font-size: 0;
  display: flex;
  .nav-item{
    font-size: 12px;
    display: inline-block;
    padding: 12px 14px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    position: relative;
    .detail-list{
      display: none;
      list-style: none;
      padding: 0;
      width: 78px;
      position: absolute;
      border: 1px solid #E5E5E5;
      top: 39px;
      z-index: 1000;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      &.my-mt{
        left: -1px;
      }
      &.seller{
        width: 140%;
        right: -1px;
        border-top-left-radius: 4px;
      }
      &.site-nav{
        box-sizing: border-box;
        width: 1200px;
        height: 295px;
        border: 1px solid #E5E5E5;
        right: -1px;
        padding: 30px 36px 36px 47px;
        border-top-left-radius: 4px;
        .nav-container{
          display: flex;
          dl{
            margin-right: 47px;
            font-size: 0;
            dt{
              text-align: center;
              height: 19px;
              color: #31BBAC;
              font-size: 14px;
              margin-bottom: 26px;
            }
            &.hotel{
              width: 234px;
              /*box-sizing: border-box;*/
              dd{
                display: inline-block;
                width: 33.3%;
                a{
                  font-size: 12px;
                  display: block;
                  height: 16px;
                  line-height: 16px;
                  margin: 5px 0;
                  width: 100%;
                  text-align: center;
                }
              }
            }
            &.food{
              width: 156px;
              dd{
                display: inline-block;
                width: 50%;
                a{
                  font-size: 12px;
                  display: block;
                  height: 16px;
                  line-height: 16px;
                  margin: 5px 0;
                  width: 100%;
                  text-align: center;
                }
              }
            }
            &.movie{
              width: 90px;
              dd{
                display: inline-block;
                width: 100%;
                a{
                  font-size: 12px;
                  display: block;
                  height: 16px;
                  line-height: 16px;
                  margin: 5px 0;
                  width: 100%;
                  text-align: center;
                }
              }
            }
            &.app{
              dd{
                display: inline-block;
                margin: 0 8px;
                a{
                  display: block;
                  padding: 5px 0;
                  img{
                    width: 60px;
                    height: 60px;
                  }
                }
              }
            }
          }
        }
      }
      a{
        display: block;
        text-align: center;
        height: 35px;
        line-height: 35px;
      }
    }
    &:hover{
      background-color: #fff;
      border-color: #E5E5E5;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
      &>span{
        color: #31BBAC;
      }
      .detail-list{
        display: block;
        background-color: #fff;
        border-color: #E5E5E5;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
      }
      ::after{
        content: "";
        background: #fff;
        width: 76px;
        height: 3px;
        position: absolute;
        top: -1px;
        right: 0;
      }
    }
    &.phone:hover{
      background-color: inherit;
      border-color: transparent;
      box-shadow: none;
    }
  }
}
</style>
