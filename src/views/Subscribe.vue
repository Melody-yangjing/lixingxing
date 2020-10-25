<template>
  <div class="subscribeBox">
    <div class="title">意向车型</div>
    <div class="information">
      <div class="name">
        <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">您的联系方式</div>
        <input type="text" :value="name" placeholder="请输入您的称谓" @change='handleChange'>
        <input style="margin-top: 15px;" type="text" placeholder="请输入您的手机号" @change='handleChange'>
      </div>
    </div>
    <div style="padding: 0 12px;margin-top: 35px;">
      <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">选择车辆</div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>品牌</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>车系</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div style="padding: 0 12px;margin-top: 35px;">
      <div style="font-size: 14px;color: #0A1730;margin-bottom: 15px;">选择经销商店</div>
    </div>
    <div class="radioBox">
      <div class="radioItem">
        <img src="../assets/sel.png" style="width: 22px;" v-if='chooseOne===true' @click='radioChange(0)'>
        <img src="../assets/unsel.png" style="width: 22px;" v-else @click='radioChange(0)'>
        <span style="margin-left: 15px;">浙江星杭汽车有限公司</span>
      </div>
      <div class="radioItem">
        <img src="../assets/sel.png" style="width: 22px;" v-if='chooseTwo===true' @click='radioChange(1)'>
        <img src="../assets/unsel.png" style="width: 22px;" v-else @click='radioChange(1)'>
        <span style="margin-left: 15px;">浙江星杭汽车有限公司</span>
      </div>
      <div class="radioItem">
        <img src="../assets/sel.png" style="width: 22px;" v-if='chooseThree===true' @click='radioChange(2)'>
        <img src="../assets/unsel.png" style="width: 22px;" v-else @click='radioChange(2)'>
        <span style="margin-left: 15px;">浙江星杭汽车有限公司</span>
      </div>
    </div>
    <div style="padding: 10px 12px 44px;">
      <van-button type="primary" color="#CCD4DD" style="border-radius: 3px;height: 44px;" block>
        <span style="color: #002C55;">预约买车</span>
      </van-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        chooseOne: false,
        chooseTwo: false,
        chooseThree: false,
        name: ''
      }
    },
    methods: {
      radioChange(type) {
        switch (type) {
          case 0:
            this.chooseOne = true
            this.chooseTwo = false
            this.chooseThree = false
            break;
          case 1:
            this.chooseOne = false
            this.chooseTwo = true
            this.chooseThree = false
            break;
          default:
            this.chooseOne = false
            this.chooseTwo = false
            this.chooseThree = true
        }
      },
      handleChange() {
        console.log('object')
      }
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
        input {
          box-sizing: border-box;
          background: #F5F5F7;
          border: 1px solid #F0F2F5;
          border-radius: 1px;
          height: 44px;
          width: 100%;
          padding: 12px 15px;
          font-size: 14px;
          color: #C0C4CC;
        }
      }
    }
  }

  .dropBox {
    margin: 0 0 15PX;

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