<template>
  <div class="sellContainer">
    <img src="../assets/pic001@2x.png" style="width: 100%;vertical-align: middle;">
    <div style="font-size: 22px;color: #012857;margin: 18px 0 10px 12px;">我要卖车</div>
    <van-divider :style="{ borderColor: '#e7e7e7'}" style="margin-bottom: 10px;" />
    <div class="sellWay" style="border-bottom: 1px solid #e7e7e7;">
      <div class="sellWayItem">
        <img src="../assets/replace.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">置换新车</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">经销商提供专业评估检测
          全款收购您的爱车并提供过户服务</span>
      </div>
      <!-- <div style="border-right: 1px solid #e7e7e7;"></div> -->
      <div class="sellWayItem">
        <img src="../assets/sell.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">置换新车</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">经销商提供专业评估检测
          全款收购您的爱车并提供过户服务</span>
      </div>
    </div>
    <div class="sellWay">
      <div class="sellWayItem">
        <img src="../assets/auction.png" style="width: 38px;margin-bottom: 28px;">
        <span style="font-size: 14px;color: #0a1730;margin-bottom: 10px;">置换新车</span>
        <span style="font-size: 10px;color: #696969;text-align: center;">经销商提供专业评估检测
          全款收购您的爱车并提供过户服务</span>
      </div>
      <div style="border-right: 1px solid #e7e7e7;"></div>
      <div class="sellWayItem">
      </div>
    </div>
    <van-divider :style="{ borderColor: '#e7e7e7'}" style="margin-top: 10px;" />
    <div style="font-size: 22px;color: #012857;margin: 18px 0 20px 12px;">爱车在线估值</div>
    <div style="font-size: 14px;color: #0A1730;margin: 0 12px 15px;">选择车辆</div>
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
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>车型</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>车款</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>首次上牌日期</span>
        <img src="../assets/date.png" class="dropIcon">
      </div>
    </div>
    <div class="dropBox" style="padding: 0 12px;">
      <div class="dropItem">
        <span>车辆里程（公里）</span>
        <img src="../assets/dropdown-line.png" class="dropIcon">
      </div>
    </div>
    <div style="padding: 10px 12px 44px;">
      <van-button type="primary" color="#4879c0" style="border-radius: 3px;height: 44px;" block>
        在线估价
      </van-button>
    </div>
  </div>
</template>
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
</style>