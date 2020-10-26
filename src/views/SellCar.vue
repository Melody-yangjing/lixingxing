<template>
  <div class="sellContainer">
    <img src="../assets/pic010@2x.png" style="width: 100%;vertical-align: middle;">
    <div style="font-size: 22px;color: #012857;margin: 18px 0 10px 12px;">我要卖车</div>
    <van-divider :style="{ borderColor: '#e7e7e7'}" style="margin-bottom: 10px;" />
    <div class="sellWay" style="border-bottom: 1px solid #e7e7e7;">
      <div class="sellWayItem" @click='$router.push({path:"/subscribesell"})'>
        <img src="../assets/replace.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">置换新车</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">经销商提供专业评估检测
          全款收购您的爱车并提供过户服务</span>
      </div>
      <div style="border-right: 1px solid #e7e7e7;"></div>
      <div class="sellWayItem" @click='$router.push({path:"/subscribesell"})'>
        <img src="../assets/sell.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">安心寄售</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">
          将爱车托管给经销商,为您整备陈列，招揽买家</span>
      </div>
    </div>
    <div class="sellWay">
      <div class="sellWayItem" @click='$router.push({path:"/subscribesell"})'>
        <img src="../assets/auction.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">竞拍</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">合作车商参予竞拍您的爱车</span>
      </div>
      <div style="border-right: 1px solid #e7e7e7;"></div>
      <div class="sellWayItem">
      </div>
    </div>
    <van-divider :style="{ borderColor: '#e7e7e7'}" style="margin-top: 10px;" />
    <div style="font-size: 22px;color: #012857;margin: 18px 0 20px 12px;">爱车在线估值</div>
    <div style="font-size: 14px;color: #0A1730;margin: 0 12px 15px;">选择车辆</div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='brandPop=true'>
        <span>{{brand}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='seriesPop=true'>
        <span>{{series}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='modelPop=true'>
        <span>{{model}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='typePop=true'>
        <span>{{type}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='showDate=true'>
        <span>{{date}}</span>
        <img src="../assets/date.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='milePop=true'>
        <span>{{mile}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>


    <div class="popup" v-if='brandPop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="brandList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='seriesPop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="seriesList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='modelPop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="modelList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='typePop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="typeList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='milePop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="mileList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if="showDate===true">
      <van-datetime-picker v-model="currentDate" style="position: absolute;bottom: 0;width: 100%;" type="year-month"
        title="选择年月" :formatter="formatter" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>

    <div style="padding: 10px 12px 44px;">
      <van-button type="primary" color="#4879c0" style="border-radius: 3px;height: 44px;" block @click='getCarPrice'>
        在线估价
      </van-button>
    </div>

  </div>
</template>
<script>
  import { quickEnquiry, getSelecContent, getSeriesList, getType, getCarModel, getBrandList } from '../api/home'
  export default {
    data() {
      return {
        showDate: false,
        currentDate: new Date(),
        brand: '品牌',
        brandList: [],
        brandPop: false,
        seriesPop: false,
        modelPop: false,
        typePop: false,
        milePop: false,
        columns: [],
        mile: '车辆里程（公里）',
        mileList: [],
        series: '车系',
        seriesList: [],
        model: '车型',
        modelList: [],
        typeList: [],
        type: '车款',
        date: '首次上牌日期'
      }
    },
    created() {
      this.getCarBrand()
      this.getCarSeries()
      this.getCarModel()
      this.getCarType()
      this.getCarMile()
    },
    methods: {
      getCarPrice() {
        const obj = {
          city: '上海',
          mile: this.mile,
          modelBrand: this.brand,
          modelLevel: this.series,
          modelType: this.model,
          modelTypeDetail: this.type,
          regDate: this.date
        }
        quickEnquiry(obj).then(res => {
          console.log("估值", res)
          if (res.status === 200) {
            if (res.data.result === 'false') {
              this.$toast({
                message: res.data.message
              })
            }
          }
        })
      },
      getCarMile() {
        // 里程
        getSelecContent('mileage').then(res => {
          if (res.status === 200) {
            console.log(res)
            const arr = res.data.data.mileage
            arr.forEach(item => {
              console.log(item)
              this.mileList.push(item.name)
            });
          }
        })
      },
      getCarType(brand, level, model) {
        const newArr = []
        // 车款
        const carTypeObj = {
          brand: brand ? brand : '',
          level: level ? level : '',
          model: model ? model : ''
        }
        getType(carTypeObj).then(res => {
          if (res.status === 200) {
            const arr = res.data.data
            arr.forEach(item => {
              newArr.push(item['车款'])
            });
            this.typeList = newArr
          }
        })
      },
      getCarModel(brand, level) {
        const newArr = []
        // 车型
        const modelObj = {
          brand: brand ? brand : '',
          level: level ? level : '',
        }
        getCarModel(modelObj).then(res => {
          if (res.status === 200) {
            const arr = res.data.data
            arr.forEach(item => {
              newArr.push(item['车型'])
            });
            this.modelList = newArr
          }
        })
      },
      getCarBrand(all, other) {
        const newArr = []

        const obj = {
          all: all ? 1 : 0,
          other: other ? 1 : 0
        }
        // 获取品牌
        getBrandList(obj).then(res => {
          if (res.status === 200) {
            const arr = res.data.data
            arr.forEach(item => {
              newArr.push(item['品牌'])
            });
            this.brandList = newArr
          }
        })
      },
      getCarSeries(brand) {
        const newArr = []
        // 车系
        getSeriesList(brand).then(res => {
          if (res.status === 200) {
            const arr = res.data.data
            arr.forEach(item => {
              newArr.push(item['车系'])
            });
            this.seriesList = newArr
          }
        })
      },
      dateConfirm() {
        this.showDate = false
      },
      dateCancel() {
        this.showDate = false
      },
      dateChange() { },
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`;
        }
        return val;
      },
      onConfirm(value) {
        if (this.brandPop === true) {
          this.brand = value
          this.getCarSeries(this.brand)
          this.brandPop = false
        } else if (this.seriesPop === true) {
          this.series = value
          this.getCarModel(this.brand, this.series)
          this.seriesPop = false
        } else if (this.modelPop === true) {
          this.model = value
          this.getCarType(this.brand, this.series, this.model)
          this.modelPop = false
        } else if (this.milePop === true) {
          this.mile = value
          this.milePop = false
        } else if (this.typePop === true) {
          this.type = value
          this.typePop = false
        } else if (this.milePop === true) {
          this.mile = value
          this.milePop = false
        } else if (this.showDate === true) {
          const year = (new Date(value)).getFullYear()
          const month = (new Date(value)).getMonth() + 1
          this.date = `${year}-${month}`
          this.showDate = false
        }
      },
      onChange() {
      },
      onCancel() {
      },
    }
  }
</script>
<style lang="scss">
  .sellContainer {
    .sellWay {
      display: flex;
      margin: 0 12px;

      .sellWayItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        padding: 20px 13px;

        .border {}
      }
    }

    .dropBox {
      margin: 0 0 15PX;
    }

    .dropItem {
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