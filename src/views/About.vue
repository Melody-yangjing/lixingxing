<template>
  <div class="aboutContainer">
    <img src="../assets/banner1.jpeg" alt="" style="width: 100%;vertical-align: middle;" />
    <div class="title">关于我们</div>
    <div class="introduce">
      <div class="subtitle">利星行二手车</div>
      <div class="detail">
        我们于2014年首次获得梅赛德斯 -
        奔驰星睿授权经销商资格，开始星睿认证二手车业务。随着二手车业务的不断发展，我们的星睿经销商网络已成为中国最大的奔驰二手车经销商网络之一。
      </div>
      <div style="text-align: center;">
        <img src="../assets/download.png" style="height: 264px;">
      </div>
      <div class="featureBox">
        <div class="net">
          <img src="../assets/about-net.png" class="left">
          <div class="right">
            <span class="featureName">网络覆盖</span>
            <span
              class="description">梅赛德斯-奔驰官方认证二手车网络覆盖全国74座城市及地区，拥有89家经销商；同时在大连、青岛、无锡等7座城市设立利星行二手车中心，为客户提供多元化专业化的二手车交易服务。</span>
          </div>
        </div>
        <div class="net" style="margin: 15px 0">
          <img src="../assets/about-car.png" class="left">
          <div class="right">
            <span class="featureName">海量车源</span>
            <span class="description">我们提供海量二手车，任由客户挑选。</span>
          </div>
        </div>
        <div class="net" style="margin-bottom: 15px">
          <img src="../assets/about-thum.png" class="left">
          <div class="right">
            <span class="featureName">诚信保障</span>
            <span class="description">我们的二手车经过专业技术人员的全面检查认证，确保每一台二手车的高品质和可靠性，让客户放心无忧。
            </span>
          </div>
        </div>
        <div class="net">
          <img src="../assets/about-service.png" class="left">
          <div class="right">
            <span class="featureName">一站式服务</span>
            <span class="description">我们为二手车换购和经销提供便捷的一站式服务。</span>
          </div>
        </div>
        <div class="heartVoice">
          我们确保二手车均已按照梅赛德斯-奔驰官方认证二手车标准进行严格检查和整备，竭诚提供卓越的客户体验，让客户安心。
        </div>
      </div>

      <div class="activeBox">
        <div class="subtitle">利星行汽车活动</div>
        <div>
          <img src="../assets/pic013@2x.png" style="width: 100%; vertical-align: middle" />
          <div class="activeDetail" @click='$router.push({ path: `/active/0` })'>南京宁星星睿二手车品鉴会火热来袭</div>
          <div class="time">2020-09-03 14:00:00</div>
        </div>
        <div style="margin-top: 30px">
          <img src="../assets/pic001@2x.png" style="width: 100%; vertical-align: middle" />
          <div class="activeDetail" @click='$router.push({ path: `/active/1` })'>宁波利之星荣膺品牌经销商二手车销售竞赛东区豪华组Top5！
          </div>
          <div class="time">2020-09-03 14:00:00</div>
        </div>
      </div>

      <div class="address">
        <div class="addressTitle">利星行经销商列表</div>
        <div id="container" style="width:100%;height:197px"></div>
        <div style="padding: 0 12px" v-for='item in shopList' :key='item.permit'>
          <div style="
              margin-top: 20px;
              font-size: 14px;
              color: #424242;
              font-weight: 600;
            ">
            {{item.name}}
          </div>
          <div style="margin: 10px 0; font-size: 14px; color: #abb7ba">
            {{item.address}}
          </div>
          <div style="font-size: 14px; color: #abb7ba">{{item.tel}}</div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
  import AMap from 'AMap';
  import Bottom from "../components/bottom";
  export default {
    data() {
      return {
        map: null,
        lnglatList: [],
        geocoder: null,
        city: ''
      }
    },
    components: {
      Bottom
    },
    created() {
      this.city = this.$store.state.city
    },
    computed: {
      shopList() {
        return this.$store.state.AgencyList
      }
    },
    watch: {
      shopList(newVal) {
        if (newVal.length > 0) {
          this.markHandle()
        }
      }
    },
    mounted() {
      this.init()
      AMap.plugin('AMap.Geocoder', () => {
        this.geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: this.city
        })
      })
      this.markHandle()
    },
    methods: {
      markHandle() {
        this.shopList.forEach((item) => {
          this.geocoder.getLocation(item.address, (status, result) => {
            if (status === 'complete' && result.geocodes.length) {
              var lnglat = result.geocodes[0].location
              const lng = result.geocodes[0].location.lng
              const lat = result.geocodes[0].location.lat
              var marker = new AMap.Marker();
              marker.setPosition(lnglat);
              marker.on('click', () => {
                const infoWindow = new AMap.InfoWindow({
                  isCustom: true,  //使用自定义窗体
                  content: `
                  <div class="inforBox" style="background-color: #fff;position: relative;">
        <div class="inforTitle">${item.name}</div>
        <div class="inforSubTitle">${item.address}</div>
        <div style="color: #666666;font-size: 14px;">${item.tel}</div>
        <div class="triangle"></div>
      </div>
                  `,  //传入 dom 对象，或者 html 字符串
                  offset: new AMap.Pixel(0, -40)
                });
                // 在指定位置打开已创建的信息窗体
                var position = new AMap.LngLat(lng, lat);
                infoWindow.open(this.map, position);
              })
              this.map.add(marker);
              if (this.shopList.length <= 1) {
                this.map.setFitView(marker);
              }
            }
          })
        })
        this.map.setFitView();
      },
      init() {
        this.map = new AMap.Map("container", {
          resizeEnable: true
        })
      }
    }
  }
</script>
<style lang='scss'>
  .maker-layout-student {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .triangle {
    width: 0px;
    /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
    height: 0px;
    border-top: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    /*transparent 表示透明*/
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  .inforBox {
    background-color: #fff;
    border-radius: 2px 2px 0 2px;
    font-size: 12px;
    padding: 10px 25px 10px 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .inforTitle {
    color: #333333;
    font-size: 16px;
    margin-bottom: 2px;
    background-color: #fff;
  }

  .inforSubTitle {
    color: #666666;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .map-facility-img {
    width: 50px;
    height: 50px;
  }

  .amap-demo {
    height: 300px;
  }

  .aboutContainer {
    .title {
      font-weight: 600;
      width: 100%;
      height: 30px;
      font-size: 20px;
      color: #2b579a;
      margin: 32px 0 10px;
      padding-left: 12px;
      box-sizing: border-box;
    }

    .introduce {
      margin-bottom: 50px;

      .subtitle {
        font-weight: 600;
        padding-left: 12px;
        font-size: 16px;
        color: #0a1730;
        box-sizing: border-box;
        margin-bottom: 5px;
      }

      .detail {
        padding: 0 12px;
        font-size: 12px;
        color: #696969;
        line-height: 22px;
        margin-bottom: 25px;
      }
    }

    .featureBox {
      margin-top: 34px;
      padding: 0 12px;

      .net {
        display: flex;

        .left {
          width: 42px;
          height: 42px;
        }

        .right {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .featureName {
            font-size: 12px;
            color: #000000;
            text-align: center;
            margin-bottom: 5px;
          }

          .description {
            font-size: 12px;
            color: #696969;
          }
        }
      }

      .heartVoice {
        margin-top: 25px;
        font-size: 12px;
        color: #000000;
        line-height: 20px;
      }
    }

    .activeBox {
      margin-top: 45px;

      .subtitle {
        padding: 0 12px;
        font-weight: 600;
        font-size: 16px;
        color: #0a1730;
        margin-bottom: 20px;
      }

      .activeDetail {
        margin: 10px 0 5px;
        padding: 0 12px;
        font-size: 14px;
        color: #0a1730;
      }

      .time {
        padding: 0 12px;
        font-size: 12px;
        color: #696969;
      }
    }

    .address {
      margin-top: 45px;

      .addressTitle {
        font-size: 16px;
        color: #0a1730;
        margin-bottom: 20px;
        padding-left: 12px;
        box-sizing: border-box;
        font-weight: 600;
      }
    }
  }
</style>