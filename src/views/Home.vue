<template>
  <div class="homeContainer">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="156">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="mainContent">
      <div class="wayBox" style="padding: 0 12px;">
        <span class="buy">我要买车</span>
        <span class="sell" @click='$router.push({path:"/sell"})'>我要卖车</span>
      </div>
      <div class="searchBox" style="margin: 0 12px;">
        <!-- <van-search v-model="searchVal" placeholder="请输入感兴趣的品牌、车系" /> -->
      </div>
      <van-grid :column-num="5" :gutter="12" class="btnBox" style="margin:20px 0 30px;">
        <van-grid-item v-for="(item,index) in btnArr" :key="item['品牌']" @click="getSeries(item['品牌'])"
          style="box-shadow: none;">
          <div
            style="width: 100%;height: 36px;line-height: 36px;border-radius: 4px;text-align: center;font-size: 12px;color: #2D3D50;"
            :class="isActive === index ? 'active' : 'deactive'"> {{ item["品牌"] }}</div>
        </van-grid-item>
      </van-grid>
      <div class="adBox" style="margin: 0 12px;">
        <div class="top">
          <div class="left">
            <span class="mainTitle">没有想要的车?</span>
            <span class="subTitle">不如留下您的意向车型</span>
          </div>
        </div>
        <van-button type="primary" block>预约买车</van-button>
      </div>
      <div style="font-size: 22px; color: #012857; margin: 30px 12px 20px">
        全部车型
      </div>
    </div>
    <van-grid :column-num="4" :gutter="12" class="categoryBox" style="margin-bottom: 30px;" id="filterBox">
      <van-grid-item v-for="(item, index) in filterArr" :key="item" @click="filterClick(index)">
        <div style="width: 100%;height: 36px;line-height: 36px;border-radius: 18px;text-align: center;"
          :class="isActive === index ? 'active' : 'deactive'"> {{item}}</div>
      </van-grid-item>
    </van-grid>
    <van-grid :column-num="2" :gutter="12">
      <van-grid-item v-for="value in 4 " :key="value">
        <img src="../assets/pic001@2x.png" style="width:100%" />
        <div class="cardContent">
          <span class="title">GLC 300 4MATIC luxury</span>
          <span class="featureBox">
            <span>2016-11</span>
            <span>32000公里</span>
            <span>苏州市</span>
          </span>
          <span class="priceBox">
            <span class="curPrice">33.00万元</span>
            <span class="oriPrice">56.18万元</span>
          </span>
          <div class="tipBox">
            <div style="background: #fe5a00; margin-right: 10px">热销</div>
            <div style="background: #000">奔驰星睿认证</div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
    <div class="more">查看更多</div>
    <div style="margin: 0 12px;">
      <div style="font-size: 22px; color: #012857; margin: 30px 0 20px">
        活动中心
      </div>
      <div class="activeBox">
        <div class="activeItem" v-for="item in 2" :key="item" @click='activeClick'>
          <img src="../assets/pic002@2x.png" style="width: 75px; height: 56px" />
          <div class="contentBox">
            <span class="title">南京宁星星睿二手车品鉴会火热来袭</span>
            <span class="time">2020-09-03 14:00:00</span>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import {
    getBrandList,
    getSeriesList
  } from "../api/home";
  import Bottom from "../components/bottom";
  export default {
    components: {
      Bottom
    },
    data() {
      return {
        searchVal: "",
        isActive: 0,
        filterArr: ["全部", "奔驰星睿认证", "利星行质保", "其他"],
        btnArr: [],
        active: 1,
      };
    },
    created() {
      getBrandList().then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          this.btnArr = res.data.data;
        }
      });
    },
    mounted() { },
    methods: {
      getSeries(brand) {
        getSeriesList(brand).then((res) => {
          if (res.status === 200) {
            console.log(res.data);
          }
        });
      },
      filterClick(index) {
        this.isActive = index;
      },
      activeClick() {
        this.$router.push({ path: "/active" })
      }
    },
    destroyed() {
      this.$store.commit('changeScrollTop', 0)
    }
  };
</script>

<style lang="scss">
  .my-swipe {
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }

  .homeContainer {

    .mainContent {

      .wayBox {
        margin: 10px 0 9px 0;

        .buy {
          font-size: 22px;
          color: #012857;
          margin-right: 35px;
        }

        .sell {
          font-size: 16px;
          color: #60677a;
        }
      }

      .searchBox {
        height: 44px;
        background: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0, 44, 85, 0.13);
        border-radius: 3px;
        border-radius: 3px;
      }

      .adBox {
        height: 169px;
        box-sizing: border-box;
        background: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0, 44, 85, 0.13);
        border-radius: 3px;
        border-radius: 3px;
        padding: 21px 15px 15px;

        .top {
          margin-bottom: 21px;

          .left {
            display: flex;
            flex-direction: column;

            .mainTitle {
              font-size: 20px;
              color: #002c55;
              line-height: 30px;
            }

            .subTitle {
              font-size: 16px;
              color: #280000;
              line-height: 30px;
            }
          }
        }
      }

      .filterBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        font-size: 12px;

        div {
          padding: 0 12px;
          margin: 0 2px;
          height: 36px;
          line-height: 36px;
          font-size: 12px;
          color: #2d3d50;
          background-color: #f8f8f8;
          border-radius: 18px;
          text-align: center;
        }

        .active {
          background-color: #fe5a00;
          color: #fff;
        }
      }
    }

    .cardContent {
      width: 100%;
      box-sizing: border-box;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      background-color: #fff;

      .title {
        font-size: 12px;
        color: #262626;
        margin: 12px 0 5px;
      }

      .featureBox {
        height: 14px;
        font-size: 10px;
        color: #696969;
      }

      .priceBox {
        height: 25px;
        margin: 6px 0 5px;

        .curPrice {
          font-size: 18px;
          color: #f85a00;
          margin-right: 5px;
        }

        .oriPrice {
          font-size: 10px;
          color: #5f5f5f;
          text-decoration: line-through;
        }
      }

      .tipBox {
        font-size: 10px;
        color: #fff;
        margin-bottom: 5px;

        div {
          display: inline-block;
          padding: 1px 7px 2px;
        }
      }
    }

    .more {
      margin: 0 auto;
      width: 114px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 12px;
      color: #999999;
      border: 1px solid #cccccc;
      border-radius: 3px;
      margin-top: 19px;
    }

    .activeBox {
      .activeItem {
        display: flex;
        margin-bottom: 33px;
        height: 56px;
        align-items: center;

        img {
          vertical-align: middle;
        }

        .contentBox {
          height: 56px;
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .title {
            font-size: 14px;
            color: #333333;
          }

          .time {
            font-size: 12px;
            color: #ababab;
          }
        }
      }
    }
  }

  .van-button--primary {
    background-color: #002c55;
    border: 1px solid #002c55;
  }

  .van-search__content {
    background-color: transparent;
  }

  .categoryBox {
    margin-bottom: 15px;

    .van-grid-item__content {
      height: 36px;
      border-radius: 18px;
      font-size: 10px;
      box-shadow: 0 2px 4px 0 rgba(1, 40, 87, 0.22);
    }
  }

  .btnBox {
    margin-bottom: 15px;

    .van-grid-item__content {
      height: 36px;
      font-size: 10px;
      box-shadow: none
    }
  }

  #filterBox .van-grid-item__content {
    box-shadow: none;

    .active {
      background-color: #FE5A00;
      color: #fff;
    }
  }

  .van-grid-item__content {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(1, 40, 87, 0.22);
  }



  .deactive {
    background-color: #f8f8f8;
    color: #2D3D50;
  }
</style>