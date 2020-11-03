<template>
  <div class="subscribeBox">
    <div class="title">意向车型</div>
    <div class="information">
      <div class="name">
        <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">您的联系方式</div>
        <van-field required v-model="name" placeholder="请输入您的称谓" @blur='handleChange("name")' />
        <van-field required style="margin-top: 15px;" v-model="phone" placeholder="请输入您的手机号"
          @blur='handleChange("phone")' />
      </div>
    </div>
    <div style="padding: 0 12px;margin-top: 35px;">
      <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">选择车辆</div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>{{brand}}</span>
        <img src="../assets/dropdown-line.png" class="dropIcon" @click='chooseBrand'>
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
        <span style="margin-left: 15px;">{{item.name}}</span>
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
  import { getSeriesList, getBrandList, getAgencyInfo, saveClueInfo } from '../api/home'
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
      getAgencyInfo(2, "上海").then(res => {
        if (res.status === 200) {
          this.shopArr = res.data.data
          console.log(this.shopArr)
        }
      })
      this.getCarBrand()
      this.getCarSeries()
    },
    methods: {
      handleBtn() {
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
          }
        })
      },
      radioChange(idx) {
        this.curIndex = idx
        this.shopArr.forEach((item, index) => {
          if (idx === index) {
            this.permit = item.permit
          }
        })
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
</style>