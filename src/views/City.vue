<template>
  <div style="background-color: #fff;height: 100%;">
    <div class="treeSelec">
      <div class="leftContent">
        <div v-for='(item,index) in arrFa ' :key="index+item" @click='active=index'>
          <div style="width: 92px;height: 46px;line-height: 46px;text-align: center;"
            :class='active===index?"active":""'>{{item}}</div>
        </div>
      </div>
      <div class="rightContent" style="margin-top: 15px;">
        <div v-for='(item,index) in arrChild ' :key="index+item">
          <div v-if='active===index' style="display: flex;justify-content: space-between;align-items: center;">

            <van-grid :gutter="10" style="width: 100%;" :column-num="2">
              <van-grid-item v-for="(citem, cindex) in item" :key="citem+cindex" style="height: 30px;"> {{citem.title}}
              </van-grid-item>
            </van-grid>
            <!-- <div v-for='(citem, cindex) in item' style="width: 92px;width: 50%;" :key='citem+cindex'>
              {{citem.title}}</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { getDealerArea } from "../api/home"
  export default {
    data() {
      return {
        active: 0,
        arrFa: ['热门', '宁夏'],
        arrChild: [[{ title: '全国' }, { title: '上海' }], [{ title: '合肥' }, { title: '武汉' }]],
        activeId: 1,
        activeIndex: 0
      }
    },
    created() {
      getDealerArea().then(res => {
        if (res.status === 200) {
          const res = res.data.data.data
        }
        console.log('object', res)
      })
    }
  }
</script>
<style lang="scss">
  .rightContent {

    .van-grid-item__content::after {
      border: 1px solid #F0F2F5;
      border-radius: 2px;
    }
  }

  .treeSelec {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 14px;

    .leftContent {
      padding-top: 7px;
      box-sizing: border-box;

      width: 92px;
      height: 100%;
      background-color: #F8F8F8;
    }

    .rightContent {
      flex: 1;
    }
  }

  .active {
    background-color: #fff;
    color: #5A6275;
  }
</style>