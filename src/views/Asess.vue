<template>
  <div class="asessBox">
    <div class="asessContainer">
      <div class="mainTitle">{{modelBrand}} {{modelTypeDetail}}</div>
      <div class="subTitle">
        <div>{{regDate}}</div>
        <div class="middleTitle">{{mile/10000}}万公里</div>
        <div>{{city}}</div>
      </div>
    </div>
    <div style="height: 10px;width: 100%;background-color: #F8F8F8;"></div>
    <van-tabs type="card" background='#F5F5F7' title-inactive-color='#333' title-active-color='#2B579A'
      @change='tabChange'>
      <van-tab style="width: 100%;background-color: #fff;padding:0 20px;" title="车况优秀">
        <div class="priceCardTitle"
          style="padding: 27px 0 15px;box-sizing: border-box;display: flex;align-items: center;justify-content:space-between ;">
          <div style="width: 160px;display: flex;flex-direction: column;justify-content: space-between;height: 100%;">
            <div style="height: 91px;display: flex;flex-direction: column;justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">新车销售价</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{excellent.msrpPrice}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle3.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">当前估值</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{excellent.valuations[0]}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle2.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">贬值额</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{excellent.devaluation}}</span>万
              </div>
            </div>
            <div
              style="border: 1px solid #2B579A;border-radius: 3px;color:#2B579A;text-align: center;width: 190px;font-size: 12px;">
              当前估值至{{inforceDate}}前有效</div>
          </div>
          <div style="width: 155px;position: relative;">
            <img src="../assets/chartbg.png" style="width: 100%;">
            <div
              style="position: absolute;top: 0;display: flex;flex-direction: column;align-items: center;left: 50%;transform: translate(-50%,0);top: 48px;">
              <span style="font-size: 22px;color: #2B579A;font-weight: 600;">{{excellent.valuations[0]}}万</span>
              <span style="font-size: 12px;color: #9594A0;">当前估价</span>
              <van-divider style="width: 75px;margin: 5px 0;" :style="{  borderColor: '#DFDEE3'}" />
              <div style="display: flex;align-items: center;">
                <img src="../assets/triangle.png" style="width: 5px;margin-right: 2px;">
                <span style="font-size: 10px;color: #9594A0;">每月贬值</span>
              </div>
              <span style="font-size: 14px;color: #FE5A00;">{{excellent.monthDevaluation}}元</span>
            </div>
          </div>
        </div>
        <van-divider style="padding: 0 12px 0 0;" :style="{  borderColor: '#DFDEE3'}" />
      </van-tab>
      <van-tab style="width: 100%;background-color: #fff;padding:0 20px;" title="车况良好">
        <div class="priceCardTitle"
          style="padding: 27px 0 15px;box-sizing: border-box;display: flex;align-items: center;justify-content:space-between ;">
          <div style="width: 160px;display: flex;flex-direction: column;justify-content: space-between;height: 100%;">
            <div style="height: 91px;display: flex;flex-direction: column;justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">新车销售价</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{good.msrpPrice}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle3.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">当前估值</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{good.valuations[0]}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle2.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">贬值额</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{good.devaluation}}</span>万
              </div>
            </div>
            <div
              style="border: 1px solid #2B579A;border-radius: 3px;color:#2B579A;text-align: center;width: 190px;font-size: 12px;">
              当前估值至{{inforceDate}}前有效</div>
          </div>
          <div style="width: 155px;position: relative;">
            <img src="../assets/chartbg.png" style="width: 100%;">
            <div
              style="position: absolute;top: 0;display: flex;flex-direction: column;align-items: center;left: 50%;transform: translate(-50%,0);top: 48px;">
              <span style="font-size: 22px;color: #2B579A;font-weight: 600;">{{good.valuations[0]}}万</span>
              <span style="font-size: 12px;color: #9594A0;">当前估价</span>
              <van-divider style="width: 75px;margin: 5px 0;" :style="{  borderColor: '#DFDEE3'}" />
              <div style="display: flex;align-items: center;">
                <img src="../assets/triangle.png" style="width: 5px;margin-right: 2px;">
                <span style="font-size: 10px;color: #9594A0;">每月贬值</span>
              </div>
              <span style="font-size: 14px;color: #FE5A00;">{{good.monthDevaluation}}元</span>
            </div>
          </div>
        </div>
        <van-divider style="padding: 0 12px 0 0;" :style="{  borderColor: '#DFDEE3'}" />
      </van-tab>
      <van-tab style="width: 100%;background-color: #fff;padding:0 20px;" title="车况一般">
        <div class="priceCardTitle"
          style="padding: 27px 0 15px;box-sizing: border-box;display: flex;align-items: center;justify-content:space-between ;">
          <div style="width: 160px;display: flex;flex-direction: column;justify-content: space-between;height: 100%;">
            <div style="height: 91px;display: flex;flex-direction: column;justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">新车销售价</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{normal.msrpPrice}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle3.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">当前估值</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{normal.valuations[0]}}</span>万
              </div>
              <div style="display: flex;align-items: center;">
                <img src="../assets/rectangle2.png" style="height: 25px;vertical-align: middle;">
                <span style="margin-left: 10px;width: 60px;height: 17px;">贬值额</span>
                <span
                  style="margin-right: 2px;font-size: 14px;color: #3E3F59;font-weight: 600;margin-left: 20px;width: 50px;text-align: right;">{{normal.devaluation}}</span>万
              </div>
            </div>
            <div
              style="border: 1px solid #2B579A;border-radius: 3px;color:#2B579A;text-align: center;width: 190px;font-size: 12px;">
              当前估值至{{inforceDate}}前有效</div>
          </div>
          <div style="width: 155px;position: relative;">
            <img src="../assets/chartbg.png" style="width: 100%;">
            <div
              style="position: absolute;top: 0;display: flex;flex-direction: column;align-items: center;left: 50%;transform: translate(-50%,0);top: 48px;">
              <span style="font-size: 22px;color: #2B579A;font-weight: 600;">{{normal.valuations[0]}}万</span>
              <span style="font-size: 12px;color: #9594A0;">当前估价</span>
              <van-divider style="width: 75px;margin: 5px 0;" :style="{  borderColor: '#DFDEE3'}" />
              <div style="display: flex;align-items: center;">
                <img src="../assets/triangle.png" style="width: 5px;margin-right: 2px;">
                <span style="font-size: 10px;color: #9594A0;">每月贬值</span>
              </div>
              <span style="font-size: 14px;color: #FE5A00;">{{normal.monthDevaluation}}元</span>
            </div>
          </div>
        </div>
        <van-divider style="padding: 0 12px 0 0;" :style="{  borderColor: '#DFDEE3'}" />
      </van-tab>
    </van-tabs>
    <div style="font-size: 12px;color: #191944;padding: 0 20px;">
      <div style="margin: 10px 0 4px;">【评级说明】</div>
      <div style="margin-bottom: 10px;">车辆没有机械或其他问题，相对该车的车龄和车况，属正常磨损属正常磨损。 </div>
    </div>
    <div style="height: 10px;width: 100%;background-color: #F8F8F8;"></div>
    <highcharts :options="chartOptions" style="width: 100%;height: 200px;"></highcharts>
    <div style="height: 10px;width: 100%;background-color: #F8F8F8;"></div>
    <div style="padding: 0 20px;">
      <div @click='$router.push({path:"/sell"})'
        style="width: 100%;height: 34px;text-align: center;line-height: 34px;background: #4879C0;border-radius: 3px;font-size: 12px;color: #fff;margin: 10px 0;">
        询价
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        city: '',
        mile: '',
        regDate: '',
        inforceDate: '',
        modelBrand: '',
        modelTypeDetail: '',
        tabList: [],
        excellent: {},
        good: {},
        normal: {},
        tabIndex: 0,
        chartOptions: {
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: '<div style="height:17px;font-size:12px;color: #333333;padding-right: 22px;display: flex;align-items: center;justify-content: space-between;">车辆未来估值走势<span style="font-size: 8px;color: #9E9FAA;">单位：万元</span></div>',
            align: 'left',
            useHTML: true
          },
          xAxis: {
            tickLength: 4,
            tickInterval: 1,
            categories: []
          },
          yAxis: {
            title: {
              text: null,
              offset: 0,
            }
          },
          series: [{
            data: []
          }],
          tooltip: {
            backgroundColor: "#202A46",
            borderWidth: 0,
            borderColor: '#AAA',
            useHTML: true,
            shadow: false,
            padding: 0,
            formatter: function() {
              return '<span style="color:#fff;padding:0 10px;height:13px;border-radius: 4px;">' + this.y + '</span>';
            }
          }
        }
      }
    },
    created() {
      const res = JSON.parse(localStorage.getItem('quickEnquiry'))
      this.city = res.queryMap.city
      this.mile = res.queryMap.mile
      this.regDate = res.queryMap.regDate
      this.modelBrand = res.queryMap.modelBrand
      this.modelTypeDetail = res.queryMap.modelTypeDetail
      this.inforceDate = res.inforceDate
      this.excellent = res.excellent
      this.good = res.good
      this.normal = res.normal
      this.chartOptions.xAxis.categories = res.excellent.horizontal
      this.chartOptions.series[0].data = res.excellent.valuations
    },
    methods: {
      tabChange(name) {
        if (name === 0) {
          this.chartOptions.xAxis.categories = this.excellent.horizontal
          this.chartOptions.series[0].data = this.excellent.valuations
        } else if (name === 1) {
          this.chartOptions.xAxis.categories = this.good.horizontal
          this.chartOptions.series[0].data = this.good.valuations
        } else {
          this.chartOptions.xAxis.categories = this.normal.horizontal
          this.chartOptions.series[0].data = this.normal.valuations
        }
      }
    }
  }
</script>
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
      display: flex;
      align-items: center;

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
    display: flex;
    width: 100%;
    font-size: 12px;
    color: #9E9FAA;
    align-items: center;
    height: 164px;
  }

  .highcharts-title {
    width: 100%;
  }
</style>