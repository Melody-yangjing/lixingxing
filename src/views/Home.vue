<template>
<div class="homeContainer">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="156">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <div class="mainContent">
    <div class="wayBox">
      <span class="buy">我要买车</span>
      <span class="sell">我要卖车</span>
    </div>
    <div class="searchBox">
      <van-search v-model="searchVal" placeholder="请输入感兴趣的品牌、车系" />
    </div>
    <div class="btnBox">
      <div class="btnItem" v-for="item in btnArr" :key="item['品牌']" @click="getSeries(item['品牌'])">
        {{ item["品牌"] }}
      </div>
    </div>
    <div class="adBox">
      <div class="top">
        <div class="left">
          <span class="mainTitle">没有想要的车?</span>
          <span class="subTitle">不如留下您的意向车型</span>
        </div>
      </div>
      <van-button type="primary" block>块级元素</van-button>
    </div>
    <div style="font-size: 22px; color: #012857; margin: 30px 0 20px">
      全部车型
    </div>
    <div class="filterBox">
      <div v-for="(item, index) in filterArr" :key="item" :class="isActive === index ? 'active' : ''" @click="filterClick(index)">
        {{ item }}
      </div>
    </div>
    <div class="cardBox">
      <div class="card" v-for="item in 4" :key="item">
        <img src="../assets/pic001@2x.png" style="height: 130px" />
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
      </div>
    </div>
    <div class="more">查看更多</div>
    <div style="font-size: 22px; color: #012857; margin: 30px 0 20px">
      活动中心
    </div>
    <div class="activeBox">
      <div class="activeItem" v-for="item in 2" :key="item">
        <img src="../assets/pic002@2x.png" style="width: 75px; height: 56px" />
        <div class="contentBox">
          <span class="title">南京宁星星睿二手车品鉴会火热来袭</span>
          <span class="time">2020-09-03 14:00:00</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">&copy;利星行（中国）汽车企业管理有限公司 版权所有</div>
</div>
</template>

<script>
import {
  getBrandList,
  getSeriesList
} from "../api/home";
export default {
  components: {},
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
  mounted() {},
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
  },
};
</script>

<style lang="scss" scoped>
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
    padding: 0 12px;

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

    .btnBox {
      margin: 20px 0 30px 0;
      height: 87px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .btnItem {
        width: 60px;
        height: 36px;
        font-size: 12px;
        background: #f8f9fc;
        border-radius: 4px;
        border-radius: 4px;
        text-align: center;
        line-height: 36px;
      }

      .btnItem:nth-child(-n + 5) {
        margin-bottom: 15px;
      }
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
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

      div {
        width: 82px;
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

    .cardBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .card {
        width: 48%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 4px 0 rgba(1, 40, 87, 0.22);
        margin-bottom: 6px;

        .cardContent {
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

        .contentBox {
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

  .bottom {
    height: 74px;
    text-align: center;
    line-height: 74px;
    background: #444444;
    font-size: 10px;
    color: #ffffff;
  }
}

.van-button--primary {
  background-color: #002c55;
  border: 1px solid #002c55;
}

.van-search__content {
  background-color: transparent;
}
</style>
