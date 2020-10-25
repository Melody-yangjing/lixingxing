<template>
  <div class="authenBox">
    <img src="../assets//pic013@2x.png" style="width: 100%;vertical-align: middle;">
    <div style="font-size: 20px;color: #2B579A;text-align: center;margin: 30px 0 10px;">
      星睿认证二手车
    </div>
    <div style="font-size: 16px;color: #0A1730;text-align: center;margin-bottom: 5px;">
      信赖之选，源于梅赛德斯-奔驰
    </div>
    <div class="desc">
      星睿认证二手车业务，让您轻松成为梅赛德斯-奔驰的尊贵客户，
      拥有梦寐以求的爱车，尽享百年驾驭激情，
      感受贴心的关怀和服务。
      延续梅赛德斯-奔驰一贯的美誉，星睿认证二手车业务对于品质的要求决无半点妥协。每一台星睿认证二手车，均经过专业技师严谨的检测和认证。而这一切都是为了让您在购买二手车时，
      免除后顾之忧，尽享来自梅赛德斯-奔驰的驾乘体验。
    </div>
    <van-collapse v-model="activeNames" style="margin-top: 48px;">
      <van-collapse-item title="全方位严格甄选" name="1" :border='false'>
        <div class="activeItem">
          <div style="font-size: 16px;color: #2B579A;">全方位严格甄选</div>
          <div style="font-size: 14px;color: #000;margin: 8px 0;">专业技师158项检测及认证服务</div>
          <ul>
            <li>- 使用年限不超过5年，且行驶里程不超过120,000公里</li>
            <li>- 无结构损伤</li>
            <li>- 无涉水事故</li>
            <li>- 通过158项星睿检测与品质认证，均由经过专业培训的梅赛德</li>
            <li>- 梅赛德斯-奔驰原厂零部件</li>
            <li>- 距离下一次保养5,000公里以上</li>
          </ul>
        </div>
      </van-collapse-item>
      <van-collapse-item title="整装待发，品质如新" name="2" :border='false'>
        <div class="activeItem"></div>
      </van-collapse-item>
      <van-collapse-item title="专业完善的售后服务" name="3" :border='false'>
        <div class="activeItem"></div>
      </van-collapse-item>
      <van-collapse-item title="24小时道路救援" name="4" :border='false'>
        <div class="activeItem"></div>
      </van-collapse-item>
      <van-collapse-item title="置换奔驰服务" name="5" :border='false'>
        <div class="activeItem"></div>
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
      text-align: center;
      font-size: 12px;
      color: #696969;
      text-align: center;
      line-height: 22px;
      padding: 0 12px;
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

  .activeItem {
    width: 100%;
    height: 200px;
    font-size: 12px;
    color: #696969;
    padding: 14px 12px 0;
  }
</style>