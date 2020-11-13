<template>
  <div class="homeContainer">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="156">
      <van-swipe-item>
        <img src="../assets/banner1.jpeg" style="width: 100%;">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/banner2.jpeg" style="width: 100%;">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/banner3.jpeg" style="width: 100%;">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/banner4.jpeg" style="width: 100%;">
      </van-swipe-item>
    </van-swipe>
    <div class="mainContent">
      <div class="wayBox" style="padding: 0 12px;">
        <span class="buy">我要买车</span>
        <span class="sell" @click='$router.push({path:"/sell"})'>我要卖车</span>
      </div>
      <div class="searchBox" style="margin: 0 12px;">
        <van-field left-icon='search' v-model="searchVal" placeholder="请输入感兴趣的品牌、车系" @blur='searchCar' :clearable='true'
          clear-trigger='focus' @clear='clearSearch' />
      </div>
      <van-grid :column-num="5" :gutter="12" class="btnBox" style="margin:20px 0 30px;">
        <van-grid-item v-for="(item,index) in btnArr" :key="item[' 品牌']" @click="brandClick(item['品牌'],index)"
          style="box-shadow: none;">
          <div :class="curIndex===index?'active':'deactive'"
            style="width: 100%;height: 36px;line-height: 36px;border-radius: 4px;text-align: center;font-size: 12px;">
            {{ item["品牌"] }}
          </div>
        </van-grid-item>
      </van-grid>
      <div class="adBox" style="margin: 0 12px;">
        <div class="top">
          <div class="left">
            <span class="mainTitle">没有想要的车?</span>
            <span class="subTitle">不如留下您的意向车型</span>
          </div>
          <img src="../assets/subscribe.png" style="width: 143px;">
        </div>
        <van-button type="primary" block @click='$router.push({path:"/subscribebuy"})'>预约买车</van-button>
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
    <template v-if='carArr.length>0'>
      <div style="display: flex;flex-wrap: wrap;padding: 0 12px;justify-content: space-between;">
        <div style="width: 48%;box-shadow: 0 0.125rem 0.25rem 0 rgba(1, 40, 87, 0.22);margin-bottom: 6px;"
          v-for="(item,index) in carArr" :key="item.carDetail+index"
          @click="$router.push({path:`/detail/${item.stockNo}`})">
          <!-- <img :src="item.picUrl" style="height: 130px;width: 100%;" /> -->
          <van-image height='130' width='100%' :src="item.picUrl" lazy-load />
          <div class="cardContent">
            <span class="title">{{item.carDetail}}</span>
            <span class="featureBox">
              <span>{{item.modelYear}}</span>
              <span
                style="border-left:1px solid #696969 ;border-right: 1px solid #696969;margin: 0 5px;padding: 0 5px;">{{item. mileage}}</span>
              <span>{{item.cityName}}</span>
            </span>
            <span class="priceBox">
              <span class="curPrice">{{(item.advisePrice/10000).toFixed(2)}}万元</span>
              <span class="oriPrice">56.18万元</span>
            </span>
            <div class="tipBox">
              <div style="background: #fe5a00; margin-right: 10px" v-if='item.isHot==="TRUE"'>热销</div>
              <div style="background: #000" v-if='item.isXRAnthen==="TRUE"'>奔驰官方认证</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        style="width: 100%;height: 60px;line-height: 60px;padding-left: 12px;text-align: center;font-size: 14px;color: #ccc;">
        暂无数据</div>
    </template>
    <div class="more" @click='findMore' v-if='carArr.length>0&&showMore===true'>查看更多</div>
    <div style="margin: 0 12px;">
      <div style="font-size: 22px; color: #012857; margin: 30px 0 20px">
        活动中心
      </div>
      <div class="homeActiveBox">
        <div class="homeActiveItem" @click='activeClick(0)'>
          <img src="../assets/pic002@2x.png" style="width: 75px; height: 56px" />
          <div class="activeContentBox">
            <div class="homeActiveTitle">南京宁星星睿二手车品鉴会火热来袭</div>
            <span class="time">2020-09-03 14:00:00</span>
          </div>
        </div>
        <div class="homeActiveItem" @click='activeClick(1)'>
          <img src="../assets/pic003@2x.png" style="width: 75px; height: 56px" />
          <div class="activeContentBox">
            <div class="homeActiveTitle">宁波利之星荣膺品牌经销商二手车销售竞赛东区豪华组Top5！</div>
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
    getStockList
  } from "../api/home";
  import Bottom from "../components/bottom";
  export default {
    components: {
      Bottom
    },
    data() {
      return {
        curIndex: -1,
        searchVal: "",
        isActive: 0,
        filterArr: ["全部", "奔驰官方认证", "利星行质保", "其他"],
        btnArr: [],
        active: 1,
        carArr: [],
        pageSize: 4,
        pageIndex: 0,
        filterIndex: 0,
        brand: '',
        total: 0,
        showMore: true,
        likeSearch: '',
        city: ''
      };
    },
    created() {
      this.$store.commit('changeReachBottom', false)
      this.city = this.$store.state.city
      if (this.city) {
        this.getCarList()
      }
      getBrandList().then((res) => {
        if (res.status === 200) {
          this.btnArr = res.data.data
        }
      })
    },
    computed: {
      curCity() {
        return this.$store.state.city
      }
    },
    watch: {
      curCity(newVal) {
        this.city = newVal
        if (newVal !== '') {
          this.getCarList()
        }
      },
      total(newVal) {
        if (this.pageIndex === parseInt(newVal / this.pageSize) - 1) {
          this.showMore = false
        }
      }
    },
    methods: {
      clearSearch() {
        this.pageIndex = 0
        this.carArr = []
        this.likeSearch = ''
        this.getCarList()
      },
      searchCar() {
        this.likeSearch = this.searchVal
        this.pageIndex = 0
        this.carArr = []
        this.getCarList()
      },
      getCarList() {
        const obj = {
          city: this.city ? this.city : '全国市',
          brand: this.brand === '' ? [] : [this.brand],
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          isXRAnthen: this.filterIndex === 0 ? "" : this.filterIndex,
          likeSearch: this.likeSearch === '' ? null : this.likeSearch
        }
        getStockList(obj).then(res => {
          if (res.status === 200) {
            this.carArr = this.carArr.concat(res.data.data)
            this.total = res.data.total
          }
        })
      },
      findMore() {
        this.pageIndex += 1
        if (this.pageIndex < Math.ceil(this.total / this.pageSize)) {
          if (this.pageIndex === parseInt(this.total / this.pageSize)) {
            this.showMore = false
          }
          this.getCarList()
        } else {
          this.pageIndex = 0
          this.showMore = false
        }
      },
      filterClick(index) {
        this.filterIndex = index
        this.pageIndex = 0
        this.carArr = []
        this.getCarList()
        this.isActive = index;
      },
      activeClick(id) {
        this.$router.push({ path: `/active/${id}` })
      },
      brandClick(brand, index) {
        this.curIndex = index
        this.carArr = []
        this.brand = brand
        this.getCarList()
      }
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
    .van-grid-item__content {
      justify-content: flex-start;
    }

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
        padding: 10px;

        .top {
          margin-bottom: 21px;
          display: flex;
          align-items: center;
          justify-content: space-between;

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
      padding-left: 5px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      overflow: hidden;

      .title {
        font-size: 12px;
        color: #262626;
        margin: 8px 0 5px;
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

    .homeActiveBox {
      .homeActiveItem {
        display: flex;
        margin-bottom: 33px;
        height: 56px;
        align-items: center;

        img {
          vertical-align: middle;
        }

        .activeContentBox {
          height: 56px;
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 12px;
          box-sizing: border-box;


          .homeActiveTitle {
            width: 230px;
            font-size: 14px;
            color: #333333;
            display: inline-block;
            overflow: hidden;
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

    .deactive {
      background-color: #f8f8f8;
      color: #2D3D50;
    }

    .active {
      background-color: #002c55;
      color: #fff;
    }
  }

  #filterBox .van-grid-item__content {
    box-shadow: none;

    .active {
      background-color: #FE5A00;
      color: #fff;
    }
  }

  .van-grid-item {
    /* overflow: hidden; */
  }

  .van-grid-item__content {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(1, 40, 87, 0.22);
  }
</style>