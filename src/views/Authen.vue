<template>
  <div class="authenBox">
    <img src="../assets/pic010@2x.png" style="width: 100%;vertical-align: middle;">
    <div style="font-size: 20px;color: #2B579A;text-adivgn: center;margin: 30px 12px 10px;font-weight: 600;">
      官方认证二手车
    </div>
    <div
      style="font-size: 16px;color: #0A1730;text-adivgn: center;margin-bottom: 5px;margin-left: 12px;font-weight: 600;">
      信赖之选，源于梅赛德斯-奔驰
    </div>
    <div class="desc">
      官方认证二手车业务，让您轻松成为梅赛德斯-奔驰的尊贵客户，拥有梦寐以求的爱车，尽享百年驾驭激情，感受贴心的关怀和服务。延续梅赛德斯-奔驰一贯的美誉，官方认证二手车业务对于品质的要求决无半点妥协。每一台官方认证二手车，均经过专业技师严谨的检测和认证。而这一切都是为了让您在购买二手车时，免除后顾之忧，尽享来自梅赛德斯-奔驰的驾乘体验。
    </div>
    <van-collapse v-model="activeNames" style="margin-top: 48px;">
      <van-collapse-item title="全方位严格甄选" name="1" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">全方位严格甄选</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">专业技师158项检测及认证服务</div>
          <div style="padding-right: 20px;">
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>使用年限不超过5年，且行驶里程不超过120,000公里</div>
            </div>
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>无结构损伤</div>
            </div>
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>无涉水事故</div>
            </div>
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>通过158项星睿检测与品质认证，均由经过专业培训的梅赛德斯-奔驰技师进行</div>
            </div>
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>梅赛德斯-奔驰原厂零部件</div>
            </div>
            <div class="authenItem">
              <div class="authenIcon">-</div>
              <div>距离下一次保养5,000公里以上</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="整装待发，品质如新" name="2" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">整装待发，品质如新</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">梅赛德斯-奔驰原厂部件</div>
          <div style="padding-right: 20px;">
            <div class="authenItem">
              <div>是我们唯一的选择</div>
            </div>
            <div class="authenItem">
              <div>从技术硬件到外观环节，全面保障车辆以如新状态交付至您的手中</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="专业完善的售后服务" name="3" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">专业完善的售后服务</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">车主尊享极致体验</div>
          <div style="padding-right: 20px;">
            <div class="authenItem">
              <div>每位尊贵的认证二手车车主皆可享有延长保修服务，即在购车后一年期间，或20,000
                公里内（以先到达者为准）提供免费保修服务。在此期间，您的车辆一旦出现故障，即便是精密机械或电子故障，您只需致电授权经销商，专业人员将迅速为您解决</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="24小时道路救援" name="4" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">24小时道路救援</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">随时随地，全年轻松无忧</div>
          <div style="padding-right: 20px;">
            <div class="authenItem">
              <div>每辆认证二手车，都享有中国大陆地区1 年365 天， 全天24
                小时的专业道路救援服务。不论在道路上遇到何种状况，您只需拨通电话，我们会及时给您提供支援。若您的车辆需要拖运到最近的梅赛德斯-奔驰经销商处，我们会及时提供如拖车、出租车、继续旅程、酒店住宿等服务，力求最大限度降低汽车故障给您带来的不便。
              </div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="置换奔驰服务" name="5" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">置换奔驰服务</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">便捷可靠的交易平台</div>
          <div style="padding-right: 20px;">
            <div class="authenItem">
              <div>支持多品牌</div>
            </div>
            <div class="authenItem">
              <div>车辆置换估价客观公正</div>
            </div>
            <div class="authenItem">
              <div>服务专业有序 只需支付部分差价</div>
            </div>
            <div class="authenItem">
              <div>一站式服务体系满足客户所有需求</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
    <Bottom style="margin-top: 19px;"></Bottom>
  </div>
</template>
<script>
  import Bottom from "../components/bottom";
  export default {
    components: {
      Bottom
    },
    data() {
      return {
        activeNames: ['1']
      }
    }
  }
</script>
<style lang="scss">
  .authenBox {
    .desc {
      text-adivgn: center;
      font-size: 12px;
      color: #696969;
      text-adivgn: center;
      divne-height: 22px;
      padding: 0 12px;
    }

    .activeItem {
      width: 100%;
      font-size: 12px;
      color: #696969;
      padding: 14px 12px 15px;
    }
  }

  .van-collapse-item {
    margin-bottom: 1px;

    .van-cell {
      background-color: #000;
      color: #fff;
      height: 55px;
      padding: 0 12px;
    }

    .van-cell__title {
      line-height: 55px;
      font-size: 16px;
    }

    .van-cell__right-icon {
      color: #FE5A00;
      height: 55px;
      line-height: 55px;
    }
  }

  .van-collapse-item__content {
    padding: 0 !important;
  }



  .authenItem {
    display: flex;

    .authenIcon {
      margin-right: 10px;
    }
  }
</style>