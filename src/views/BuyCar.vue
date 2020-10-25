<template>
  <div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>品牌</span>
        <img src="../assets/dropdown.png" class="dropIcon">
      </div>
      <div class="dropItem">
        <span>车系</span>
        <img src="../assets/dropdown.png" class="dropIcon">
      </div>
      <div class="dropItem">
        <span>价格</span>
        <img src="../assets/dropdown.png" class="dropIcon">
      </div>
      <div class="dropItem">
        <span>其他</span>
        <img src="../assets/dropdown.png" class="dropIcon">
      </div>
      <div class="dropItem">
        <span>已选</span>
        <img src="../assets/dropdown.png" class="dropIcon">
      </div>
    </div>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isActive: 0,
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        option1: [
          { text: '品牌', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '车系', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '销量排序', value: 2 },
        ],
        option3: [
          { text: '价格', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option4: [
          { text: '其他', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '销量排序', value: 2 },
        ],
        option5: [
          { text: '已选', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '销量排序', value: 2 },
        ],
        filterArr: ["全部", "奔驰星睿认证", "利星行质保", "其他"],
      };
    },
    methods: {
      filterClick(index) {
        this.isActive = index;
      },
    }
  };
</script>
<style lang="scss">
  .van-dropdown-menu__bar {
    box-shadow: none;
  }

  .van-dropdown-menu__title::after {
    border: none;
    background-image: url('../assets/dropdown.png');
    width: 5px;
    height: 5px;
  }

  .dropBox {
    display: flex;
    font-size: 14px;
    color: #0A1730;
    align-items: center;
    margin: 20px 0 25px;
  }

  .dropItem {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
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
</style>