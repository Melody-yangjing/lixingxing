<template>
  <div id="container">
    <el-amap vid="amap" :zoom="zoom" :plugin="plugin" class="amap-demo" :center="center">
    </el-amap>
  </div>
</template>

<script>
  // import { AMapManager } from 'vue-amap'
  // let amapManager = new AMapManager()

  export default {
    name: 'amap-page',
    data() {
      let self = this;
      return {
        center: [121.59996, 31.197646],
        zoom: 17,
        lng: 0,
        lat: 0,
        loaded: false,
        plugin: [   //一些工具插件
          {
            pName: 'Geolocation',   //定位
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;             //设置经度
                    self.lat = result.position.lat;             //设置维度
                    self.center = [self.lng, self.lat];         //设置坐标
                    self.loaded = true;                         //load
                    self.$nextTick();                           //页面渲染好后
                  }
                })
              }
            }
          }
        ]
      }
    },
    methods: {
      //把经纬度传到父组件
      sendlnglat() {
        this.$emit('register', this.lng, this.lat)
      }
    }
  }
</script>

<style>
  #container {
    height: 300px
  }
</style>