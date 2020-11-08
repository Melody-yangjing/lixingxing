<template>
  <div style="position: relative;padding-bottom: 10px;" class="buyBox">
    <van-dropdown-menu style="margin: 0 20px 0 0;" active-color="#2B579A" :close-on-click-overlay='false'
      :close-on-click-outside='false'>
      <van-dropdown-item title='品牌' v-model="brandIndex" :options="brandList" />
      <van-dropdown-item title='车系' v-model="seriesIndex" :options="seriesList" />
      <van-dropdown-item title='价格' v-model="priceIndex" :options="priceList" />
      <van-dropdown-item title="其他" ref="item">
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("age")'>
          <div class="dropItem">
            <span>{{age}}</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("modelLevel")'>
          <div class="dropItem">
            <span>{{model}}</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
        <div class="sellDropBox" style="padding: 0 12px;" @click='handleSel("mile")'>
          <div class="dropItem">
            <span>{{mile}}</span>
            <img src="../assets/dropdown-line.png" class="dropIcon">
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-grid :column-num="4" :gutter="12" class="carBtnBox">
      <van-grid-item v-for="(item, index) in filterArr" :key="item" @click="filterClick(index)">
        <div style="width: 100%;height: 36px;line-height: 36px;border-radius: 18px;text-align: center;"
          :class="isActive === index ? 'active' : 'deactive'"> {{item}}</div>
      </van-grid-item>
    </van-grid>
    <div v-if='total>0'>
      <van-grid :column-num="2" :gutter="12">
        <van-grid-item v-for="item in carList " :key="item.stockNo">
          <van-image width="100%" :src="item.picUrl" lazy-load height="130" />
          <div class="cardContent" style="min-width: 0;overflow:hidden;">
            <span class="title">{{item.carDetail}}</span>
            <span class="featureBox">
              <span>{{item.modelYear}}</span>
              <span
                style="border-left:1px solid #696969 ;border-right: 1px solid #696969;margin: 0 5px;padding: 0 5px;">{{item. mileage}}</span>
              <span>{{item.cityName}}</span>
            </span>
            <span class="priceBox">
              <span class="curPrice">{{item.advisePrice/10000}}万元</span>
              <span class="oriPrice">56.18万元</span>
            </span>
            <div class="tipBox">
              <div style="background: #fe5a00; margin-right: 10px" v-show='item.isHot==="TRUE"'>热销</div>
              <div style="background: #000" v-show='item.isXRAnthen==="TRUE"'>奔驰星睿认证</div>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div v-else
      style="width: 100%;height: 60px;line-height: 60px;padding-left: 12px;text-align: center;font-size: 14px;color: #ccc;">
      暂无数据</div>

    <div class="popup" v-if='ageShow===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="ageList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='modelLevelShow===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="modelLevelList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
    <div class="popup" v-if='mileShow===true'>
      <van-picker swipe-duration='500' visible-item-count='5' style="position: absolute;bottom: 0;width: 100%;"
        show-toolbar :columns="milelList" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </div>
  </div>
</template>
<script>
  import { getBrandList, getSeriesList, getSelecContent, getStockList } from "../api/home"
  export default {
    data() {
      return {
        loading: false,
        finished: false,
        carList: [],
        age: '车龄',
        model: '车型',
        mile: '公里数',
        ageIndex: '0',
        carModelIndex: '0',
        mileIndex: '0',
        ageShow: false,
        modelLevelShow: false,
        mileShow: false,
        milelList: [],
        isActive: 0,
        brand: '',
        series: '',
        price: '',
        brandIndex: 0,
        seriesIndex: 0,
        priceIndex: 0,
        value4: 0,
        brandList: [],
        seriesList: [],
        priceList: [{ text: '不限', value: 0 },],
        ageList: [],
        modelLevelList: [],
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
        filterIndex: 0,
        pageIndex: 0,
        pageSize: 6,
        total: 0,
        city: ''
      };
    },
    mounted() {
      document.addEventListener('scroll', this.scrollMoreData, false)
    },
    computed: {
      reachBottom() {
        return this.$store.state.reachBottom
      }
    },
    created() {
      this.city = localStorage.getItem('city')
      this.getCarList()
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
            this.priceList.push({ text: item.name, value: index + 1 })
          })
        }
      })
      getSelecContent("vehicle_age").then(res => {
        if (res.status === 200) {
          const result = res.data.data.vehicle_age
          result.forEach((item, index) => {
            this.ageList.push({ text: item.name, value: index })
          })
        }
      })
      getSelecContent("vehicle_model_level").then(res => {
        if (res.status === 200) {
          const result = res.data.data.vehicle_model_level
          result.forEach((item, index) => {
            this.modelLevelList.push({ text: item.name, value: index })
          })
        }
      })
      getSelecContent("mileage").then(res => {
        if (res.status === 200) {
          const result = res.data.data.mileage
          result.forEach((item, index) => {
            this.milelList.push({ text: item.name, value: index })
          })
        }
      })
    },
    watch: {
      brandIndex(newVal) {
        this.brand = this.brandList[newVal].text
        this.$store.commit('changeReachBottom', false)
        this.seriesList = []
        getSeriesList(this.brand).then(res => {
          if (res.status === 200) {
            const result = res.data.data
            result.forEach((item, index) => {
              this.seriesList.push({ text: item['车系'], value: index })
            })
          }
        })
        this.getCarList()
      },
      seriesIndex(newVal) {
        this.series = this.seriesList[newVal].text
        this.$store.commit('changeReachBottom', false)
        this.getCarList()
      },
      priceIndex(newVal) {
        this.price = `${newVal}`
        this.$store.commit('changeReachBottom', false)
        this.getCarList()
      },
      reachBottom(newVal) {
        if (newVal === true) {
          if (this.pageIndex < Math.ceil(this.total / this.pageSize)) {
            this.pageIndex++
            const obj = {
              city: this.city ? this.city : '全国市',
              price: this.priceIndex === 0 ? [] : [this.price],
              levels: this.seriesIndex === 0 ? [] : [this.series],
              brand: this.brand === '' ? [] : [this.brand],
              pageSize: this.pageSize,
              pageIndex: this.pageIndex,
              isXRAnthen: this.filterIndex === 0 ? "" : this.filterIndex,
              age: this.ageIndex === '0' ? '' : this.ageIndex,
              model: this.carModelIndex === '0' ? '' : this.carModelIndex,
              mile: this.mileIndex === '0' ? '' : this.mileIndex
            }
            getStockList(obj).then(res => {
              if (res.status === 200) {
                this.carList = this.carList.concat(res.data.data)
              }
            })
            this.$store.commit('changeReachBottom', false)
          } else {
            this.pageIndex = 0
          }
        }
      }
    },
    methods: {
      getCarList() {
        this.carList = []
        this.pageIndex = 0
        const obj = {
          city: this.city ? this.city : '全国市',
          price: this.priceIndex === 0 ? [] : [this.price],
          levels: this.seriesIndex === 0 ? [] : [this.series],
          brand: this.brand === '' ? [] : [this.brand],
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          isXRAnthen: this.filterIndex === 0 ? "" : this.filterIndex,
          age: this.ageIndex === '0' ? '' : this.ageIndex,
          model: this.carModelIndex === '0' ? '' : this.carModelIndex,
          mile: this.mileIndex === '0' ? '' : this.mileIndex
        }
        getStockList(obj).then(res => {
          if (res.status === 200) {
            this.carList = res.data.data
            this.total = res.data.total
          }
        })
        this.$store.commit('changeReachBottom', false)
      },
      getContainer() {
        return document.querySelector('#dropItemOne');
      },
      handleSel(type) {
        document.getElementById('scrollBox').className = 'fixed'
        switch (type) {
          case "age":
            this.ageShow = true
            break;
          case "modelLevel":
            this.modelLevelShow = true
            break;
          case "transmission":
            this.transmissionShow = true
            break;
          case "mile":
            this.mileShow = true
            break;
          default:
            break;
        }
      },
      filterClick(index) {
        this.filterIndex = index
        this.isActive = index
        this.getCarList()
      },
      onConfirm(value) {
        console.log(value)
        document.getElementById('scrollBox').className = ''
        if (this.ageShow === true) {
          this.ageShow = false
          this.age = value.text
          this.ageIndex = `${value.value + 1}`
          this.getCarList()
        } else if (this.modelLevelShow === true) {
          this.modelLevelShow = false
          this.model = value.text
          this.carModelIndex = `${value.value + 1}`
          this.getCarList()
        } else {
          this.mile = value.text
          this.mileIndex = `${value.value + 1}`
          this.getCarList()
          this.mileShow = false
        }
      },
      onCancel() {
        document.getElementById('scrollBox').className = ''
        if (this.ageShow === true) {
          this.ageShow = false
          this.age = '车龄'
          this.ageIndex = '0'
          this.getCarList()
        } else if (this.modelLevelShow === true) {
          this.modelLevelShow = false
          this.model = '车型'
          this.carModelIndex = '0'
          this.getCarList()
        } else {
          this.mile = '公里数'
          this.mileIndex = '0'
          this.getCarList()
          this.mileShow = false
        }
      },
      onChange() { },
      btnClick(type) {
        if (type === 0) {
          this.age = '车龄'
          this.model = '车型'
          this.mile = '公里数'
        }
      }
    }
  };
</script>
<style lang="scss">
  .buyBox {
    .van-grid-item__content {
      box-shadow: 0 0.125rem 0.25rem 0 rgba(1, 40, 87, 0.22);
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
  }

  .fixed {
    overflow-y: hidden !important;
  }

  .sellDropBox {
    margin: 0 0 15PX;
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
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 148px;
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
    width: 100%;
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

    .van-ellipsis {
      font-size: 14px;
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

  .dropBtnBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 20px;
  }

  .dropBtn {
    border-radius: 2px;
    width: 48%;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
</style>