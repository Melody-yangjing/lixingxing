<template>
  <div id="app">
    <MainTitle></MainTitle>
    <div id="scrollBox" style="height: 100%;padding-top: 57px;box-sizing: border-box;overflow-y: auto;"
      @scroll='handleScroll()'>
      <router-view>
      </router-view>
    </div>
    <div class="topBox" v-if="isShow===true">
      <div class="topItem" @click='topItemClick(0)'>
        <img src="./assets/top@2x.png">
        <span>Top</span>
      </div>
      <div class="topItem" @click='topItemClick(1)'>
        <img src="./assets/buy.png">
        <span>我要买车</span>
      </div>
      <div class="topItem" @click='topItemClick(2)'>
        <img src="./assets/sellcar.png">
        <span>我要卖车</span>
      </div>
    </div>
  </div>
</template>
<script>
  import AMap from 'AMap';
  import MainTitle from "./components/mainTitle";
  import { getAgencyInfo } from './api/home'
  import RemoGeoLocation from './lib/remogeo'
  export default {
    components: {
      MainTitle
    },
    data() {
      return {
        map: null,
        scrollBox: null,
        isShow: false,
        isScroll: null
      }
    },
    mounted() {
      this.scrollBox = document.getElementById('scrollBox')
    },
    created() {
      AMap.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          // zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        });
        if (AMap.UA.ios) {
          // //使用远程定位，见 remogeo.js
          var remoGeo = new RemoGeoLocation()
          //替换方法
          navigator.geolocation.getCurrentPosition = function() {
            return remoGeo.getCurrentPosition.apply(remoGeo, arguments);
          };
          //替换方法 
          navigator.geolocation.watchPosition = function() {
            return remoGeo.watchPosition.apply(remoGeo, arguments);
          };
        }
        geolocation.getCurrentPosition((status, result) => {
          if (status == 'complete') {
            let curCity
            if (result.addressComponent.city !== '') {
              curCity = result.addressComponent.city
            } else {
              curCity = result.addressComponent.province
            }
            localStorage.setItem('city', curCity)
            this.$store.commit('changeCity', curCity)
            getAgencyInfo(1, curCity).then(res => {
              if (res.status === 200) {
                this.$store.commit('changeAgencyList', res.data.data)
              }
            })
          }
        });
      });
    },
    methods: {
      topItemClick(type) {
        switch (type) {
          case 0:
            this.scrollBox.scrollTop = 0
            break;
          case 1:
            this.$router.push({ path: '/subscribebuy' })
            break;
          case 2:
            this.$router.push({ path: '/subscribesell' })
            break;
          default:
            break;
        }
      },
      handleScroll() {
        const boxHeight = this.scrollBox.clientHeight
        const scrollHeight = this.scrollBox.scrollHeight
        const scrollTop = this.scrollBox.scrollTop
        if (scrollTop + boxHeight + 10 >= scrollHeight) {
          // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
          this.$store.commit('changeReachBottom', true)
        }
        if (scrollTop > 400) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    watch: {
      '$route': {
        handler: function() {
          this.scrollBox.scrollTop = 0 + 'px'
        },
        // 深度观察监听
        deep: true
      }
    }
  };
</script>
<style lang="scss">
  img {
    vertical-align: middle;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }

  .topBox {
    background-color: #012857;
    position: fixed;
    bottom: 100px;
    right: 12px;
    width: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1000;
    font-size: 9px;
    text-align: center;
  }

  .topItem {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;

    img {
      width: 30px;
    }
  }

  .van-grid-item__content--surround::after {
    border: none !important;
  }

  .hidden {
    overflow-y: hidden;
  }

  .show {
    overflow-y: auto;
  }
</style>