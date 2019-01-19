<template>
    <dl class="menu" @mouseleave="mouseleaveHandle">
      <dt class="title">全部分类</dt>
      <dd class="sort-item" @mouseenter="mouseenterHandle(index)" v-for="(sortItem,index) in sort" :key="sortItem.type">
        <div class="sort-item-wrapper"><i class="home-category-iconfont" :class="sortItem.type"></i><span class="text"><a href="#">{{sortItem.title}}<span class="hot" v-if="sortItem.hot">HOT</span></a></span><i class="iconfont icon-right"></i></div>
      </dd>
      <div class="sort-detail" :class="{active:this.sortActive}">
        <div class="detail-wrapper" v-for="child in this.sort[this.index].children" :key="child.childTitle">
          <div class="detail-title">
            <a class="title-link">{{child.childTitle}}</a>
            <a href="#" class="more">更多<i class="iconfont icon-right"></i></a>
          </div>
          <div class="detail-link">
            <a href="#" v-for="link in child.link" :key="link">{{link}}</a>
          </div>
        </div>
      </div>
    </dl>
</template>

<script>
  export default {
    name: "Menu",
    methods: {
      mouseenterHandle(index) {
        const _self = this;
        clearInterval(_self.enterTimer);
        _self.enterTimer = setTimeout(()=>{
          _self.index = index;
          _self.sortActive = true;
        },100)
      },
      mouseleaveHandle() {
        this.sortActive = false;
        clearInterval(this.enterTimer);
      }
    },
    data() {
      return {
        index: 11,
        sortActive: false,
        sort: [
          {
            title: '美食',
            type: 'food',
            hot: false,
            children: [
              {
                childTitle: '美食',
                link: ['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请','烧烤烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤/烤串','西北菜','咖啡酒吧茶馆','云贵菜','东南亚菜','海鲜','素食','台湾/客家菜','创意菜','汤/粥/炖菜','蒙餐','新疆菜','其他美食','京菜鲁菜']
              }
            ]
          },
          {
            title: '外卖',
            type: 'waimai',
            hot: false,
            children: [
              {
                childTitle: '外卖',
                link: ['美团外卖']
              }
            ]
          },
          {
            title: '酒店',
            type: 'hotel',
            hot: true,
            children: [
              {
                childTitle: '酒店星级',
                link: ['经济型','舒适/三星','高档/四星','豪华/五星']
              }
            ]
          },
          {
            title: '榛果民宿',
            type: 'zhenguo',
            hot: false,
            children: [
              {
                childTitle: '热门城市',
                link: ['上海','成都','北京','重庆','南京','杭州','广州','西安','大连']
              }
            ]
          },
          {
            title: '猫眼电影',
            type: 'maoyan',
            hot: false,
            children: [
              {
                childTitle: '热映电影',
                link: ['大黄蜂','\"大\"人物','白蛇：缘起','来电狂响','疯狂的外星人','飞驰人生','新喜剧之王','一条狗的回家路','家和万事惊','命运之夜————天之杯：恶兆之花']
              },
              {
                childTitle: '热门影院',
                link: ['耀莱成龙国际影城','大地影院','保利国际影城','万达影城','博纳国际影城','CGV影城','橙天嘉禾影城','金逸影城','中影国际影城','新华国际影城']
              }
            ]
          },
          {
            title: '机票 / 火车票',
            type: 'plane',
            hot: false,
            children: [
              {
                childTitle: '机票',
                link: ['国内机票','国际/港澳台机票']
              },
              {
                childTitle: '火车票',
                link: ['火车票']
              }
            ]
          },
          {
            title: '休闲娱乐 / KTV',
            type: 'ktv',
            hot: false,
            children: [
              {
                childTitle: '休闲娱乐',
                link: ['足疗按摩','洗浴/汗蒸','就把','密室逃脱','轰趴馆','茶馆','私人影院','DIY手工坊','采摘/农家乐','网吧网咖','游乐游艺','VR','桌面游戏','真人CS','棋牌室','其他玩乐']
              },
              {
                childTitle: 'KTV',
                link: ['KTV']
              }
            ]
          },
          {
            title: '生活服务',
            type: 'life',
            hot: false,
            children: [
              {
                childTitle: '生活服务',
                link: ['衣物/皮具洗护','家政','搬家运输','送水','充值缴费','服饰/鞋包养护','开锁换锁','居家维修','管道疏通','家电维修清洗','电脑维修','手机维修','证件照/肖像摄影','照片冲印/图文文印','商务服务/法律服务','文化传媒机构','成人用品/情趣用品']
              }
            ]
          },
          {
            title: '丽人 / 美发 / 医学美容',
            type: 'beauty',
            hot: false,
            children: [
              {
                childTitle: '丽人',
                link: ['美发','美甲美瞳','美容美体','医学美容','瑜伽舞蹈','瘦身纤体','韩式定妆','祛痘','纹身','化妆品']
              }
            ]
          },
          {
            title: '结婚 / 婚纱摄影 / 婚宴',
            type: 'married',
            hot: false,
            children: [
              {
                childTitle: '结婚',
                link: ['婚纱摄影','旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制','婚戒首饰','婚车租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼小礼品','更多婚礼服务']
              }
            ]
          },
          {
            title: '亲子 / 儿童乐园 / 幼教',
            type: 'baby',
            hot: false,
            children: [
              {
                childTitle: '儿童乐园',
                link: ['婴儿游泳','其他亲子游乐']
              },
              {
                childTitle: '幼儿教育',
                link: ['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育']
              },
              {
                childTitle: '亲子摄影',
                link: ['儿童摄影','孕妇写真','上门拍','其他亲子摄影']
              },
              {
                childTitle: '孕产护理',
                link: ['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳','月嫂','亲子购物','宝宝派对','亲子服务']
              }
            ]
          },
          {
            title: '运动健身 / 健身中心',
            type: 'sport',
            hot: false,
            children: [
              {
                childTitle: '运动健身',
                link: ['健身中心','武术场馆','游泳馆','羽毛球馆','溜冰场','射箭馆','篮球场','网球馆','台球馆','乒乓球','足球场','高尔夫场','保龄球馆','体育场馆','马术场','壁球馆','更多运动']
              }
            ]
          },
          {
            title: '家装 / 建材 / 家居',
            type: 'decorate',
            hot: false,
            children: [
              {
                childTitle: '装修设计',
                link: ['半包装修','全包装修','清包装修']
              },
              {
                childTitle: '装修建材',
                link: ['地板','瓷砖石材','橱柜','灯饰照明','厨卫洁具','油漆涂料','集成吊顶','墙纸墙艺','门窗','木材板材','家用五金','电工电料','楼梯','管材管件']
              },
              {
                childTitle: '家具家居',
                link: ['家具','床上用品/家纺','家居饰品','厨具餐具','智能家居']
              },
              {
                childTitle: '家装卖场',
                link: ['建材卖场','家居卖场','灯饰卖场']
              }
            ]
          },
          {
            title: '学习培训',
            type: 'learn',
            hot: false,
            children: [
              {
                childTitle: '音乐培训',
                link: ['钢琴','吉他','小提琴','古筝','架子鼓','声乐','其他音乐培训']
              },
              {
                childTitle: '职业技术',
                link: ['美容化妆','会计','IT','厨艺','管理培训','摄影培训','司法考试','公务员培训','其他职业培训']
              },
              {
                childTitle: '外语培训',
                link: ['英语','日语','韩语','法语','德语','汉语','俄语','西班牙语','其他外语']
              },
              {
                childTitle: '美术培训',
                link: ['绘画','书法','其他美术']
              }
            ]
          },
          {
            title: '医疗健康 / 宠物 / 爱车',
            type: 'medical',
            hot: false,
            children: [
              {
                childTitle: '医疗健康',
                link: ['医院','齿科口腔','体检中心','药店','中医','其他健康服务']
              },
              {
                childTitle: '爱车',
                link: ['洗车','租车','加油站','维修保养','驾校','汽车美容','陪练','汽车用品','停车场','汽车保险','4S店/汽车销售','更多汽车服务','机油保养','汽车报价','二手车','广告驾校','交警队','汽车改装','汽车配件']
              },
              {
                childTitle: '宠物',
                link: ['宠物店','宠物医院']
              }
            ]
          },
          {
            title: '酒吧 / 密室逃脱',
            type: 'jiuba',
            hot: false,
            children: [
              {
                childTitle: '玩乐',
                link: ['KTV','酒吧','密室逃脱','游乐游艺','网吧网咖','私人影院','DIY手工坊','桌面游戏','采摘/农家乐','棋牌室','轰趴馆','真人CS','VR','其他玩乐']
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.menu{
  width: 230px;
  height: 475px;
  background: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);;
  color: #FFF;
  position: relative;
  .title{
    height: 50px;
    padding-top: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    padding-left: 15px;
    background-color: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);;
  }
  .sort-item{
    padding: 2px 12px;
    &:nth-of-type(1){
      margin-top: 10px;
    }
    &:hover{
      background: rgba(255,255,255,.2);
      .home-category-iconfont{
        opacity: 1;
      }
    }
    .sort-item-wrapper{
      position: relative;
      .text{
        display: inline-block;
        height: 22px;
        margin-left: 11px;
        a{
          font-size: 13px;
          color: #fff;
          line-height: 22px;
          span.hot{
            font-size: 12px;
            color: #02B59D;
            background: #fff;
            display: inline-block;
            opacity: .5;
            border-radius: 10px;
            padding: 0 7px;
            margin-left: 5px;
            transform: scale(.9);
            position: relative;
          }
          &:hover{
            color: #fff;
            span.hot{
              opacity: 1;
            }
          }
        }
      }
      .icon-right{
        position: absolute;
        right: -2px;
        top: 4px;
        font-size: 12px;
      }
      .home-category-iconfont{
        opacity: .3;
        display: inline-block;
        width: 14px;
        height: 14px;
        font-size: 14px;
      }
      .food{
        &:before {
          content: "\e622";
        }
      }
      .waimai{
        &:before {
          content: "\e630";
        }
      }
      .hotel{
        &:before {
          content: "\e62a";
        }
      }
      .zhenguo{
        &:before {
          content: "\e631";
        }
      }
      .maoyan{
        transform: scale(.9) translateX(-3px);
        &:before {
          content: "\e62c";
        }
      }
      .plane{
        &:before {
          content: "\e632";
        }
      }
      .ktv{
        &:before {
          content: "\e627";
        }
      }
      .life{
        &:before {
          content: "\e633";
        }
      }
      .beauty{
        transform: scale(.75) translateX(-3px);
        &:before {
          content: "\e626";
        }
      }
      .married{
        &:before {
          content: "\e629";
        }
      }
      .baby{
        &:before {
          content: "\e623";
        }
      }
      .sport{
        &:before {
          content: "\e62b";
        }
      }
      .decorate{
        &:before {
          content: "\e625";
        }
      }
      .learn{
        &:before {
          content: "\e624";
        }
      }
      .medical{
        &:before {
          content: "\e628";
        }
      }
      .jiuba{
        &:before {
          content: "\e621";
        }
      }


    }
  }
  .sort-detail{
    position: absolute;
    display: none;
    width: 400px;
    height: 415px;
    background-color: #fff;
    z-index: 100;
    top: 60px;
    right: -400px;
    &.active{
      display: block;
    }
    .detail-wrapper{
      padding: 24px 30px 0;
      .detail-title{
        box-sizing: border-box;
        height: 33px;
        padding-bottom: 10px;
        border-bottom: 1px solid #E5E5E5;
        color: #666;
        font-size: 16px;
        font-weight: 400;
        position: relative;
        display: flex;
        justify-content: space-between;
        .title-link{
          display: inline-block;
          color: #222;
          line-height: 22px;
          cursor: pointer;
        }
        .more{
          display: inline-block;
          font-size: 12px;
          color: #999;
          line-height: 22px;
          font-weight: 400;
          cursor: pointer;
          .icon-right{
            font-size: 12px;
            color: #7f828b;
          }
        }
      }
      .detail-link{
        font-size: 0;
        a{
          color: #999;
          font-size: 12px;
          line-height: 15px;
          display: inline-block;
          margin-right: 16px;
          margin-top: 10px;
          cursor: pointer;
          &:hover{
            color: #31BBAC;
          }
        }
      }
    }
  }
}
</style>
