<template>
  <div style="background-color: #fff;height: 100%;">
    <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" :height='"100%"'>
    </van-tree-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            // 导航名称
            text: '热门',
            // 导航节点额外类名
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识符
                id: 1
              },
              {
                text: '杭州',
                id: 2,
              },
            ]
          },
          {
            // 导航名称
            text: '宁夏',
            // 导航节点额外类名
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识符
                id: 1
              },
              {
                text: '杭州',
                id: 2,
              },
            ]
          },

        ],
        activeId: 1,
        activeIndex: 0
      }
    }
  }
</script>
<style lang="scss">
  .van-tree-select__nav-item {
    height: 46px;
    line-height: 46px;
    padding: 0 0 0 12px;
    font-size: 14px;
    color: #0A1730;
  }


  .van-tree-select__content {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  .van-sidebar-item--select::before {
    height: 0;
  }

  .van-icon-success::before {
    content: ''
  }

  .van-tree-select__item {
    height: 30px;
    line-height: 30px;
    width: 50%;
    margin: 0 15px;
    text-align: center;
    border: 1px solid #F0F2F5;
    border-radius: 2px;
    padding: 0;
  }

  .van-tree-select__nav {
    padding-top: 7px;
  }

  .van-sidebar-item--select {
    color: #5A6275;
  }
</style>