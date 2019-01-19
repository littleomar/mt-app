<template>
    <div class="banner-block">
      <ul class="banner-nav" :class="banner.type">
        <li class="title">{{banner.title}}</li>
        <li class="gediao-sort" v-for="(sort,index) in banner.sort" :class="{active:index===banner.index}">{{sort.title}}</li>
      </ul>
      <div class="banner-area">
        <a class="banner-item" v-for="item in bannerData" :key="item.title" href="#">
          <div class="img-container"><img class="img" :src="item.img" alt=""></div>
          <div class="info-container">
            <h3 class="shop-name">{{item.title}}</h3>
            <p class="recommend">{{item.info}}</p>
            <div class="price-location">
              <div class="price"><span class="money">¥</span><span class="current">{{item.price}}</span><span class="old-price">门市价¥{{item.oldPrice}}</span></div>
              <div class="location">{{item.location}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Banner",
    props: ['banner'],
    data() {
      return {
        bannerData: [
          {
            title: '分米鸡  DM  Chicken（世贸天阶店）',
            img: '//p1.meituan.net/mogu/935eed49cce0c222ebd0c28a923f888061248.jpg@368w_208h_1e_1c',
            info: '分米鸡5.0DM套餐1份',
            price: '168',
            oldPrice: '208',
            location: '世贸天阶'
          },
          {
            title: '祈年八号中餐厅',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            info: '单人点心自助午餐',
            price: '92',
            oldPrice: '98',
            location: '崇文门新世界'
          },
          {
            title: '西来顺饭庄',
            img: '//p1.meituan.net/mogu/6cfc6abd1376863c9b1d91f07a3d0c35330923.jpg@368w_208h_1e_1c',
            info: '西来顺火锅双人餐',
            price: '108',
            oldPrice: '144',
            location: '和平门'
          },
          {
            title: '哈根达斯（蓝色港湾店）',
            img: '//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@368w_208h_1e_1c',
            info: '麻糬派对冰淇淋芝士火锅（单点）1份',
            price: '199',
            oldPrice: '248',
            location: '蓝色港湾'
          },
          {
            title: '幸福西饼蛋糕（西直门店）',
            img: '//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c',
            info: '经典热荐四重奏（2磅）/榴芒双拼9英寸/榴莲香雪9英寸/芒果茫茫9英寸（4选1）1个，约2磅，方形',
            price: '198',
            oldPrice: '296',
            location: '西直门/动物园'
          },
          {
            title: 'COSTA COFFEE（新国展店）',
            img: '//p0.meituan.net/scarlett/0938786f28888cfcebdf59de23f87dd394965.png@368w_208h_1e_1c',
            info: '苏格兰太妃拿铁中杯1份',
            price: '18',
            oldPrice: '36',
            location: '顺义区'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.banner-block{
  width: 100%;
  margin: 40px auto;
  .banner-nav{
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    list-style: none;
    &.gediao{
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    }
    &.maoyan{
      background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);
    }
    &.minsu{
      background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);
    }
    &.like{
      background: linear-gradient(to right, rgb(18, 210, 198) 2%, rgb(14, 190, 212) 97%) rgb(18, 210, 198);
    }
    &.city{
      background-color: #0ECAC7;
      background-image: linear-gradient(-90deg,#0ECAC7 0,#06C1AE 100%);
    }
    li{
      padding: 0 5px;
      position: relative;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 44px;
      color: #fff;
      &.title{
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
        font-family: MFShangHei-Regular!important;
      }
      &.active{
        &::after{
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          display: block;
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
  }
  .banner-area{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #E5E5E5;
    border-top: none;
    padding: 11px 10px 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    .banner-item{
      display: block;
      width: 33.33%;
      box-sizing: border-box;
      height: 314px;
      padding: 10px;
      transition: background-color .5s;
      .img-container{
        margin-bottom: 11px;
        .img{
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
        }
      }
      .info-container{
        .shop-name{
          font-size: 16px;
          color: #222;
          height: 22px;
          line-height: 22px;
          margin-bottom: 8px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        .recommend{
          font-size: 12px;
          color: #999;
          line-height: 18px;
          height: 18px;
          margin-bottom: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-location{
          display: flex;
          justify-content: space-between;
          .price{
            .money{
              font-size: 14px;
              color: #BE9E4D;
              font-weight: 500;
            }
            .current{
              font-size: 22px;
              color: #BE9E4D;
              margin-right: 6px;
              letter-spacing: -.8px;
              cursor: pointer;
              font-family: numbers!important;
            }
            .old-price{
              font-size: 12px;
              color: #999;
              text-decoration: line-through;
            }
          }
          .location{
            font-size: 12px;
            color: #999;
            float: right;
            margin-top: 10px;
          }
        }
      }
      &:hover{
        background-color: #F4F4F4;
      }
    }
  }
}
</style>
