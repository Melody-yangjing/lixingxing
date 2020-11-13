<template>
  <div style="background-color: #fff; height: 100%">
    <div class="treeSelec">
      <div class="leftContent">
        <div v-for="(item, index) in arrFa" :key="index + item" @click="active = index">
          <div style="
              width: 92px;
              height: 46px;
              line-height: 46px;
              text-align: center;
            " :class="active === index ? 'active' : ''">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="rightContent" style="margin-top: 15px">
        <div v-for="(item, index) in arrChild" :key="index + item">
          <div v-if="active === index" style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
            <van-grid :gutter="10" style="width: 100%" :column-num="2">
              <van-grid-item v-for="(citem, cindex) in item" :key="citem + cindex" style="height: 30px"
                @click='itemClick(citem.city,index,cindex)'>
                <span class="cityItem"
                  :class="active===index&&activeItem===cindex&&citem.isShow===true?'itemActive':''">{{ citem.city }}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getDealerArea, getAgencyInfo
  } from "../api/home";
  export default {
    data() {
      return {
        active: 0,
        arrFa: ["热门"],
        arrChild: [
          [
            { city: "全国", isShow: false },
            { city: "上海", isShow: false },
            { city: "北京", isShow: false },
            { city: "杭州", isShow: false },
            { city: "苏州", isShow: false },
          ]
        ],
        activeId: 1,
        activeIndex: 0,
        activeItem: 0
      };
    },
    created() {
      const city = this.$store.state.city
      if (city) {
        if (city.indexOf("全国") !== -1) {
          this.active = 0
          this.activeItem = 0
          this.$set(this.arrChild[0][0], `isShow`, true)
        } else {
          this.arrChild.forEach((item, index) => {
            if (index > 0) {
              item.forEach((citem, cindex) => {
                this.active = index
                this.activeItem = cindex
                citem.isShow = true
              })
            }
          })
        }
      }
      getDealerArea().then((res) => {
        if (res.status === 200) {
          const result = res.data.data;
          result.forEach((item) => {
            this.arrFa.push(item.province);
            const arr = []
            item.cities.forEach(citem => {
              arr.push({ isShow: false, city: citem })
            })
            this.arrChild.push(arr);
          });
          if (city) {
            this.arrChild.forEach((item, idx) => {
              item.forEach((citem, cidx) => {
                if (citem.city == city) {
                  this.active = idx
                  this.activeItem = cidx
                  citem.isShow = true
                }
              })
            })
          }
        }
      })
    },
    methods: {
      itemClick(city, index, cindex) {
        this.arrChild.forEach((item, idx) => {
          item.forEach((citem, cidx) => {
            if (index === idx && cindex === cidx) {
              citem.isShow = true
              this.activeItem = cidx
            } else {
              citem.isShow = false
            }
          })
        })
        if (city.lastIndexOf("市") === -1) {
          city = city + "市"
        }
        this.$store.commit('changeCity', city)
        getAgencyInfo(1, city).then(res => {
          if (res.status === 200) {
            this.$store.commit('changeAgencyList', res.data.data)
          }
        })
        this.$router.push({ path: '/home' })
      }
    }
  };
</script>

<style lang="scss">
  .rightContent {
    .van-grid-item__content::after {
      border: 1px solid #f0f2f5;
      border-radius: 2px;
    }

    .van-grid-item__content {
      border: 1px solid #f0f2f5;
      border-radius: 2px;
      font-size: 14px;
      color: #000;
      box-shadow: none;
    }
  }

  .treeSelec {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 14px;

    .leftContent {
      padding-top: 7px;
      box-sizing: border-box;
      height: 100%;
      overflow: auto;

      width: 92px;
      background-color: #f8f8f8;
    }

    .rightContent {
      flex: 1;
      height: 100%;
    }
  }

  .active {
    background-color: #fff;
    color: #5a6275;
  }

  .itemActive {
    color: #d0021b;
  }

  .cityItem {
    width: 100%;
    display: inline-block;
    border: 1px solid #f0f2f5;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
  }

  .rightContent .van-grid-item__content {
    border: none !important;
  }
</style>