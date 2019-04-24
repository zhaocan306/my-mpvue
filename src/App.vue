<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tag': 'vant-weapp/dist/tag/index',
      'van-search': 'vant-weapp/dist/search/index',
      'van-row': 'vant-weapp/dist/row/index',
      'van-col': 'vant-weapp/dist/col/index',
      'van-tab': 'vant-weapp/dist/tab/index',
      'van-tabs': 'vant-weapp/dist/tabs/index',
      'van-cell': 'vant-weapp/dist/cell/index',
      'van-cell-group': 'vant-weapp/dist/cell-group/index',
      'van-radio': 'vant-weapp/dist/radio/index',
      'van-radio-group': 'vant-weapp/dist/radio-group/index',
      'van-field': 'vant-weapp/dist/field/index',
      'van-button': 'vant-weapp/dist/button/index',
      'van-card': 'vant-weapp/dist/card/index',
      'van-popup': 'vant-weapp/dist/popup/index',
      'van-icon': 'vant-weapp/dist/icon/index',
      'van-panel': 'vant-weapp/dist/panel/index',
      'van-action-sheet': 'vant-weapp/dist/cell-group/index',
      'van-switch-cell': 'vant-weapp/dist/switch-cell/index',
      'van-area': 'vant-weapp/dist/area/index',
      'van-dialog': 'vant-weapp/dist/dialog/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
