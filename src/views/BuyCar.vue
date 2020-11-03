<template>
  <div style="height: 100%;position: relative;" class="buyBox">
    <van-dropdown-menu style="margin: 0 12px 0 0;" active-color="#2B579A">
      <van-dropdown-item title='品牌' v-model="value1" :options="brandList" />
      <van-dropdown-item title='车系' v-model="value2" :options="seriesList" />
      <van-dropdown-item title='价格' v-model="value3" :options="priceList" />
      <!-- <van-dropdown-item title='' v-model="value4" :options="otherList" /> -->
      <van-dropdown-item title="其他" ref="item">
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("age")'>
          <div class="dropItem" @click='brandPop=true'>
            <span>age</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("age")'>
          <div class="dropItem" @click='brandPop=true'>
            <span>挡位</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("age")'>
          <div class="dropItem" @click='brandPop=true'>
            <span>车型</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("age")'>
          <div class="dropItem" @click='brandPop=true'>
            <span>mile</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div
          style="border: 1px solid #446398;color: #446398;height: 44px;text-align: center;line-height: 44px;margin: 0 12px 20px;border-radius: 2px;">
          重置
        </div>
      </van-dropdown-item>
      <van-dropdown-item title='已选' v-model="value5" :options="selectedList" />
    </van-dropdown-menu>
    <van-grid :column-num="4" :gutter="12" class="carBtnBox">
      <van-grid-item v-for="(item, index) in filterArr" :key="item" @click="filterClick(index)">
        <div style="width: 100%;height: 36px;line-height: 36px;border-radius: 18px;text-align: center;"
          :class="isActive === index ? 'active' : 'deactive'"> {{item}}</div>
      </van-grid-item>
    </van-grid>
    <van-grid :column-num="2" :gutter="12">
      <van-grid-item v-for="value in 8 " :key="value">
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

    <div class="popup" v-if='ageShow===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="brandList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
  </div>
</template>
<script>
  import { getBrandList, getSeriesList, getSelecContent } from "../api/home"
  export default {
    data() {
      return {
        ageShow: false,
        isActive: 0,
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        brandList: [],
        seriesList: [],
        priceList: [],
        otherList: [
          { text: '', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '销量排序', value: 2 },
        ],
        selectedList: [
          { text: '', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '销量排序', value: 2 },
        ],
        filterArr: ["全部", "奔驰星睿认证", "利星行质保", "其他"],
      };
    },
    created() {
      getBrandList().then(res => {
        if (res.status === 200) {
          const result = res.data.data
          result.forEach((item, index) => {
            this.brandList.push({ text: item['品牌'], value: index })
          })
        }
      })
      getSeriesList().then(res => {
        if (res.status === 200) {
          const result = res.data.data
          result.forEach((item, index) => {
            this.seriesList.push({ text: item['车系'], value: index })
          })
        }
      })
      getSelecContent("sale_price_level").then(res => {
        if (res.status === 200) {
          const result = res.data.data.sale_price_level
          console.log(result)
          result.forEach((item, index) => {
            this.priceList.push({ text: item.name, value: index })
          })
        }
      })
    },
    methods: {
      getContainer() {
        return document.querySelector('#dropItemOne');
      },
      handleSel(type) {
        switch (type) {
          case "age":
            this.ageShow = true
            break;
          default:
            break;
        }
      },
      filterClick(index) {
        this.isActive = index;
      },
    }
  };
</script>
<style lang="scss">
  .sellDropBox {
    margin: 0 0 15PX;
  }

  .dropItem {
    margin-top: 20px;
    background: #F5F5F7;
    border: 1px solid #F0F2F5;
    border-radius: 1px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 15px;
    font-size: 14px;
    color: #C0C4CC;
    box-sizing: border-box;
  }

  .dropIcon {
    width: 12px;
    margin-left: 8px;
  }

  .van-dropdown-menu__bar {
    box-shadow: none;
  }

  .van-dropdown-menu__title::after {
    border: 4px solid;
    transform: rotate(0deg);
    border-color: #2B579A transparent transparent;
    top: 50%;
    margin-top: -2px;
  }

  .van-dropdown-menu__title--active::after {
    transform: rotateZ(180deg);
    top: 0;
    bottom: 50%;
  }

  .dropBox {
    display: flex;
    font-size: 14px;
    color: #0A1730;
    align-items: center;
    margin: 20px 0 25px;
  }

  .dropIcon {
    width: 8px;
    margin-left: 8px;
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
        margin-right: 5px;
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

  .carBtnBox {
    margin-bottom: 15px;

    .van-grid-item__content {
      height: 36px;
      border-radius: 18px;
      font-size: 10px;
      box-shadow: none
    }

    .active {
      background-color: #2B579A;
      color: #fff;
    }
  }

  .van-grid-item__content {
    padding: 0;
  }


  .deactive {
    background-color: #f8f8f8;
    color: #2D3D50;
  }

  .selContent {
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    overflow: auto;

    .selContentItem {
      border-top: 1px solid #e7e7e7;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #111e36;
      background-color: #fff;
      padding-left: 24px;
    }
  }

  .buyBox {
    .van-cell {
      height: 42px;
      font-size: 14px;
      color: #111e36
    }

    .van-icon-success::before {
      content: '';
    }
  }

  .popup {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 1001;

    .van-picker {
      border-radius: 8px 8px 0 0;

      .van-picker-column__item {
        font-size: 14px;
        color: #333;
      }

      .van-picker-column__item--selected {
        font-size: 21px;
        color: #111e36
      }

      .van-picker__toolbar {
        border-bottom: 1px solid #e5e5e5;

        button {
          color: #1677FF;
          font-size: 15px;
        }
      }
    }
  }
</style>