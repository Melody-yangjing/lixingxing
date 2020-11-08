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
                @click='itemClick(citem)'>
                <span :class="active===index&&activeItem===cindex?'itemActive':''">{{ citem }}</span> </van-grid-item>
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
          ["全国", "上海", "北京", "杭州", "苏州"]
        ],
        activeId: 1,
        activeIndex: 0,
        activeItem: 0
      };
    },
    created() {
      const city = localStorage.getItem('city')
      getDealerArea().then((res) => {
        if (res.status === 200) {
          const result = res.data.data;
          result.forEach((item) => {
            this.arrFa.push(item.province);
            this.arrChild.push(item.cities);
          });
          if (city) {
            this.arrChild.forEach((item, index) => {
              item.forEach((citem, cindex) => {
                if (citem == city) {
                  this.active = index
                  this.activeItem = cindex
                }
              })
            })
          }
        }
      })
    },
    methods: {
      itemClick(city) {
        if (city.lastIndexOf("市") === -1) {
          city = city + "市"
        }
        localStorage.setItem("city", city)
        this.$store.commit('changeCity', city)
        getAgencyInfo(1, city).then(res => {
          if (res.status === 200) {
            this.$store.commit('changeAgencyList', res.data.data)
          }
        })
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
    color: #531602
  }
</style>