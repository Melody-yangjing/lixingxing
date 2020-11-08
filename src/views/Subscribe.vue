<template>
  <div class="subscribeBox">
    <div class="title">意向车型</div>
    <div class="information">
      <div class="name">
        <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">您的联系方式</div>
        <van-field required v-model="name" placeholder="请输入您的称谓" />
        <van-field required style="margin-top: 15px;" v-model="phone" placeholder="请输入您的手机号" />
      </div>
    </div>
    <div style="padding: 0 12px;margin-top: 35px;">
      <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">选择车辆</div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem" @click='chooseBrand'>
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
    <div style="padding: 0 12px;margin-top: 35px;">
      <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">选择经销商店</div>
    </div>
    <div class="radioBox">
      <div class="radioItem" v-for='(item,index) in shopArr' :key="item.permit">
        <img src="../assets/sel.png" style="width: 22px;" v-if='curIndex===index' @click='radioChange(index)'>
        <img src="../assets/unsel.png" style="width: 22px;" v-else @click='radioChange(index)'>
        <span style="margin-left: 15px;" @click='shopChoose(item.permit,index)'>{{item.name}}</span>
      </div>
    </div>
    <div style="padding: 10px 12px 44px;">
      <van-button type="primary" color="#CCD4DD" style="border-radius: 3px;height: 44px;" block @click='handleBtn'>
        <span style="color: #002C55;">{{$route.path==='/subscribebuy'?"预约买车":"预约卖车"}}</span>
      </van-button>
    </div>

    <div class="popup" v-if='brandPop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="brandList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='seriesPop===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="seriesList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
  </div>
</template>
<script>
  import { getSeriesList, getBrandList, saveClueInfo } from '../api/home'
  export default {
    data() {
      return {
        curIndex: 0,
        name: '',
        phone: '',
        shopArr: [],
        brandPop: false,
        seriesPop: false,
        brandList: [],
        seriesList: [],
        brand: '品牌',
        series: '车系',
        permit: '',
        tradeType: ''
      }
    },
    created() {
      if (this.$route.path === '/subscribebuy') {
        this.tradeType = "买车"
      } else {
        this.tradeType = "卖车"
      }
      this.shopArr = this.$store.state.AgencyList
      this.getCarBrand()
      this.getCarSeries()
    },
    methods: {
      handleBtn() {
        if (this.name === '') {
          this.$toast({
            message: '姓名不能为空'
          })
        } else if (this.phone.length < 11) {
          this.$toast({
            message: '手机格式有误'
          })
        } else {
          const obj = {
            name: this.name,
            tel: this.phone,
            carInfo: this.series,
            permit: this.permit,
            tradeType: this.tradeType
          }
          saveClueInfo(obj).then(res => {
            console.log('series', res)
            if (res.data.result === true) {
              this.$toast({
                message: '预约成功'
              })
            } else {
              this.$toast({
                message: '信息有误'
              })
            }
          })
        }
      },
      radioChange(idx) {
        this.curIndex = idx
        this.shopArr.forEach((item, index) => {
          if (idx === index) {
            this.permit = item.permit
          }
        })
      },
      shopChoose(permit, index) {
        this.curIndex = index
        this.permit = permit
      },
      handleChange(type) {
        if (type === 'name') {
          if (this.name === '') {
            this.$toast({
              message: '姓名不能为空'
            })
          }
        } else {
          if (this.phone.length < 11) {
            this.$toast({
              message: '手机格式有误'
            })
          }
        }
      },
      chooseBrand() {
        this.brandPop = true
      },
      onConfirm(value) {
        if (this.brandPop === true) {
          this.brand = value
          this.getCarSeries(this.brand)
          this.brandPop = false
        } else if (this.seriesPop === true) {
          this.series = value
          this.seriesPop = false
        }
      },
      onCancel() {
        this.brandPop = false
      },
      onChange() { },
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
              console.log(item)
              newArr.push(item['车系'])
            });
            console.log(newArr)
            this.seriesList = newArr
          }
        })
      },

    }
  }
</script>
<style lang="scss">
  .subscribeBox {
    .title {
      margin: 30px 0 33px;
      font-size: 22px;
      color: #012857;
      text-align: center;
    }

    .information {
      padding: 0 12px;

      .name {
        .van-cell {
          padding: 0;

          input {
            box-sizing: border-box;
            background: #F5F5F7;
            border: 1px solid #F0F2F5;
            border-radius: 1px;
            height: 44px;
            width: 100%;
            padding: 12px 15px;
            font-size: 14px;
          }
        }
      }
    }
  }

  .dropBox {
    margin: 0 0 15PX;



    .dropIcon {
      width: 12px;
      margin-left: 8px;
    }
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

  .radioBox {
    padding: 0 12px;

    .radioItem {
      display: flex;
      font-size: 14px;
      color: #0A1730;
      align-items: center;
      margin-bottom: 20px;

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