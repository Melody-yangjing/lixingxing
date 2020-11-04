<template>
  <div class="asessBox">
    <div class="asessContainer">
      <div class="mainTitle">梅赛德斯奔驰 B Class 2017款 B200L</div>
      <div class="subTitle">
        <div>2018年7月</div>
        <div class="middleTitle">3.5万公里</div>
        <div>上海</div>
      </div>
    </div>
    <div style="height: 10px;width: 100%;background-color: #F8F8F8;"></div>
    <van-tabs type="card" background='#F5F5F7' title-inactive-color='#333' title-active-color='#2B579A'>
      <van-tab style="height: 240px;width: 100%;background-color: #fff;padding-left: 22px;" title="车况优秀">
        <div class="priceCardTitle">
          <div>
            <img src="../assets/rectangle.png" style="height: 25px;vertical-align: middle;">
            <span style="margin-left: 10px;">新车销售价</span>
            <span style="margin-right: 5px;">14.9</span>万
          </div>
          <div>
            <img src="../assets/rectangle3.png" style="height: 25px;vertical-align: middle;">
            <span style="margin-left: 10px;">新车销售价</span>
            <span style="margin-right: 5px;">14.9</span>万
          </div>
          <div>
            <img src="../assets/rectangle2.png" style="height: 25px;vertical-align: middle;">
            <span style="margin-left: 10px;">新车销售价</span>
            <span style="margin-right: 5px;">14.9</span>万
          </div>
        </div>
      </van-tab>
      <van-tab style="height: 240px;width: 100%;background-color: #fff;padding-left: 22px;" title="车况良好">
        <div>
          1
        </div>
      </van-tab>
      <van-tab style="height: 240px;width: 100%;background-color: #fff;padding-left: 22px;" title="车况一般">
        <div>
          1
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="scss">
  .asessContainer {
    padding-left: 22px;
    padding-bottom: 10px;

    .mainTitle {
      font-size: 14px;
      color: #2B579A;
      font-weight: 600;
      margin-top: 16px;
    }

    .subTitle {
      font-size: 12px;
      color: #333;
      display: flex;
      margin-top: 5px;

      .middleTitle {
        padding: 0 5px;
        margin: 0 5px;
        border-left: 1px solid #ACAAB8;
        border-right: 1px solid #ACAAB8;
      }
    }
  }

  .van-tabs__nav--card,
  .van-tabs__nav--card .van-tab {
    border: none;
  }

  .van-tabs__nav--card .van-tab.van-tab--active {
    background-color: #fff;
  }

  .van-tabs__nav--card {
    margin: 0;
  }

  .priceCardTitle {
    font-size: 12px;
    color: #9E9FAA;
  }
</style>