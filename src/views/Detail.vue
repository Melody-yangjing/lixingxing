<template>
  <div class="detailContainer">
    <img v-if='picTotal>0' :src="picList[0].pictureUrl" style="height: 265px;">
    <div style="background-color: #fff;padding: 15px 12px 10px;">
      <div class="detailTitle"
        style="margin-bottom: 10px;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
        {{carInfor.carDetail}}</div>
      <div style="display: flex;">
        <div class="tip" style="margin-right: 10px;" v-if='carInfor.isNew==="TRUE"'>新上架</div>
        <div class="tip" style="background-color: #000;" v-if='carInfor.isXRAnthen==="TRUE"'>奔驰官方认证
        </div>
      </div>
      <span style="display: flex;align-items: center;margin-bottom: 15px;">
        <span class="price">{{carInfor.advisePrice/10000}}万元</span>
        <span class="linePrice">新车价格：{{carInfor.newCarPrice/10000}}万元（含购置税）</span>
      </span>
      <div
        style="display: flex;font-size: 12px;align-items: center;justify-content: space-between;margin-bottom: 23px;">
        <div style="display: flex;align-items: center;">
          <span
            style="border: 1px solid #C0C4CC;border-radius: 1px;padding: 0 8px;margin-right: 10px;height: 21px;line-height: 21px;">月供</span>
          <span style="color: #012857;">仅需<span
              style="font-size: 16px;color: #F85C01;margin-left: 5px;">{{carInfor.monthlyPayment}}</span>元</span></div>
        <span class="calculator" @click='showTask = true'>金融计算器</span>
      </div>
      <div class="shopDetail">
        <img src="../assets/shop.png" class="icon">
        <span>门店地址: {{carInfor.agencyAddress}}</span>
      </div>
      <van-divider :style="{ borderColor: ' #e7e7e7'}" style="margin-bottom: 10px;" />
      <div class="shopDetail">
        <img src="../assets/phone.png" class="icon">
        <span>门店电话: {{carInfor.agencyTel}}</span>
      </div>
    </div>
    <div class="detailItem">
      <div class="detailTitle">车辆信息</div>
      <div class="inforBox">
        <div class="inforItem">
          <div class="inforTitle">上牌时间</div>
          <div class="inforContent">{{carInfor.registeredDate}}</div>
        </div>
        <div class="inforItem">
          <div class="inforTitle">行驶里程</div>
          <div class="inforContent">{{carInfor.mileage}}万公里</div>
        </div>
        <div class="inforItem">
          <div class="inforTitle">所在地</div>
          <div class="inforContent">{{carInfor.cityName}}大连市</div>
        </div>
        <div class="inforItem">
          <div class="inforTitle">排放标准</div>
          <div class="inforContent">{{carInfor.emissionStandard}}</div>
        </div>
        <div class="inforItem">
          <div class="inforTitle">使用性质</div>
          <div class="inforContent">{{carInfor.useType}}</div>
        </div>
      </div>
    </div>
    <div style="background-color: #fff;padding: 0 12px 10px;margin-top: 10px;">
      <div class="detailTitle" style="margin-bottom: 20px;">性能检测</div>
      <div style="text-align: center;font-size: 16px;color: #262626;">外观检测</div>
      <img src="../assets/pic005@2x.png" style="margin-top: 20px;">
      <div style="text-align: center;font-size: 16px;color: #262626;">框架检测</div>
      <img src="../assets/pic005@2x.png">
    </div>
    <div class="detailItem" style="margin-bottom: 20px;">
      <div class="detailTitle" style="margin-bottom: 20px;">图片</div>
      <img :src="item.pictureUrl" v-for='(item,index) in picList' :key='index'>
    </div>
    <div style="background-color: #fff;margin-top: 10px;padding-bottom: 30px;">
      <div class="detailTitle" style="padding: 10px 12px 20px;">相似车型</div>
      <van-grid :column-num="2" :gutter="12">
        <van-grid-item v-for="item in similarModels " :key="item.stockNo" @click='itemClick(item.stockNo)'>
          <img src="../assets/pic001@2x.png" style="width:100%" />
          <div class="cardContent">
            <span class="title">{{item.carDetail}}</span>
            <span class="featureBox">
              <span>{{item.modelYear}}</span>
              <span>{{item.mileage}}公里</span>
              <span>{{item.cityName}}</span>
            </span>
            <span class="priceBox">
              <span class="curPrice">{{(item.advisePrice/10000).toFixed(2)}}万元</span>
              <span class="oriPrice">{{(item.newCarPrice/10000).toFixed(2)}}万元</span>
            </span>
            <div class="tipBox">
              <div style="background: #fe5a00; margin-right: 10px" v-if='item.isHot==="TRUE"'>热销</div>
              <div style="background: #000" v-if='item.isXRAnthen==="TRUE"'>奔驰官方认证</div>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <Bottom></Bottom>



    <van-overlay :show="showTask" @click="show = false" />

    <div class="dialog" v-if='showTask===true'>
      <div
        style="width: 100%;height: 100%;background-color: #fff;padding:20px 15px 15px;box-sizing: border-box;position: relative;">
        <img src="../assets/shop.png" style="width: 16px;position: absolute;right: 8px;top: 8px;"
          @click='showTask=false'>
        <div style="font-size: 16px;color: #012857;margin-bottom: 15px;">分期方案</div>
        <div class="titleBox">
          <div style="display: flex;align-items: center;">
            <span class="subTitle" style="margin-right: 5px;">首付仅需</span>
            <span class='secTitle'>{{(carInfor.downPayment/carInfor.advisePrice)*100}}%</span>
            <span class="mainTitle"
              style="margin:0 2px;">{{(carInfor.downPayment/carInfor.advisePrice)*carInfor.advisePrice/10000}}</span>
            <span class='secTitle'>万元</span>
            <span class="subTitle" style="margin-left: 5px;">月供（共36期）</span>
          </div>
          <div style="margin-top: 10px;">
            <span class="mainTitle">{{carInfor.monthlyPayment}}</span>
            <span class='secTitle'>元</span>
          </div>
        </div>
        <div style="font-size: 12px;color: #7C512C;text-align: center;line-height: 20px;margin-top: 15px;">
          以上优选分期方案需根据您的实际资质而定
          购车过程中可能收取GPS设备服务费/咨询费/管理费等费用</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { getCarDetail } from '../api/home'
  import Bottom from "../components/bottom";
  export default {
    components: {
      Bottom
    },
    data() {
      return {
        showTask: false,
        carInfor: {},
        picList: [],
        picTotal: 0,
        similarModels: []
      }
    },
    created() {
      this.getDetail(this.$route.params.id)
    },
    methods: {
      itemClick(stockNo) {
        this.$router.replace({ path: `/detail/${stockNo}` })
        this.getDetail(stockNo)
      },
      getDetail(id) {
        getCarDetail(id).then(res => {
          if (res.status === 200) {
            this.carInfor = res.data.data.carInfo[0]
            this.picList = res.data.data.picInfo.data
            this.picTotal = res.data.data.picInfo.total
            this.similarTotal = res.data.data.similarModels.total
            if (res.data.data.similarModels.total > 4) {
              this.similarModels = res.data.data.similarModels.data.slice(0, 4)
            } else {
              this.similarModels = res.data.data.similarModels.data
            }
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  img {
    width: 100%;
    vertical-align: middle;
  }

  .detailTitle {
    font-size: 20px;
    color: #012857;
    font-weight: 600;
  }

  .tip {
    padding: 0 5px;
    height: 21px;
    background: #2B579A;
    border-radius: 1px;
    color: #fff;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    text-align: center;
    line-height: 21px;
    margin-bottom: 10px;
  }

  .price {
    font-size: 21px;
    color: #F85C01;
    font-weight: 500;
    margin-right: 10px;
  }

  .linePrice {
    font-size: 12px;
    color: #C0C4CC;
    text-decoration: line-through;
  }

  .shopDetail {
    font-size: 12px;
    color: #111E36;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
      width: 15px;
    }
  }

  .inforBox {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    margin-bottom: 15px;

    .inforItem {
      width: 33%;
      margin-bottom: 15px;

      .inforTitle {
        font-size: 12px;
        color: #5A6275;
        margin-bottom: 5px;
      }

      .inforContent {
        font-size: 14px;
        color: #0A1730;
      }
    }
  }

  .moreDetail {
    margin: 0 auto;
    width: 122px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #2D3D50;
    background: #F8F8F8;
    font-size: 12px;
  }

  .detailItem {
    background-color: #fff;
    padding: 15px 12px 10px;
    margin-top: 10px;
  }

  .cardContent {
    width: 100%;
    box-sizing: border-box;
    padding-left: 5px;
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

  .van-grid-item__content {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(1, 40, 87, 0.22);
  }



  .calculator {
    background: #2B579A;
    border-radius: 2px;
    color: #fff;
    padding: 0 10px;
    height: 27px;
    line-height: 27px;
  }

  .van-overlay {
    z-index: 101;
  }

  .dialog {
    box-sizing: border-box;
    padding: 0 12px;
    z-index: 1000;
    height: 253px;
    position: absolute;
    top: 182px;
    width: 100%;

    .titleBox {
      background: #FFFDF9;
      border: 1px solid #E0D2C9;
      height: 126px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center
    }

    .mainTitle {
      font-size: 22px;
      color: #F85C01;
      font-weight: 600
    }

    .subTitle {
      font-size: 12px;
      color: #012857;
    }

    .secTitle {
      font-size: 14px;
      color: #F85C01;
      font-weight: 500px;
    }
  }
</style>