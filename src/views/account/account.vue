<template>
  <div class="account">
    <div class="page page5">
      <div class="page_main">
        <!-- <div class="mt">
          <p class="txt">当前查询您的名下账号有多个，请选择需要绑定的账号：</p>
        </div> -->
        <div class="mc">
          <div class="section">
            <div class="group">
              <div class="g_top">本次绑定的手机号：</div>
              <div class="g_head">
                <span class="title">手机号码</span>
              </div>
              <div class="g_body">
                <ul class="list">
                  <li class="col active">
                    <div class="name">手机号码：177****2015</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="group">
              <div class="g_top">查询到您名下有其他账号可选择关联：</div>
              <div class="g_head">
                <span class="title">宽带账号</span>
              </div>
              <div class="g_body">
                <ul class="list">
                  <template v-for="(item, index) in networkList" :key="index">
                    <li
                      :class="['col', { active: item.state }]"
                      data-target="2"
                    >
                      <span class="tag" v-if="index == 0">在线</span>
                      <span class="tag" v-else>绑定</span>
                      <div class="name">宽带账号：{{ item.name }}</div>
                      <div class="text">原套餐：{{ item.text }}</div>
                      <div class="text">地址：{{ item.address }}</div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
            <div class="group">
              <div class="g_head">
                <span class="title">IPTV账号</span>
              </div>
              <div class="g_body">
                <ul class="list">
                  <template v-for="(item, index) in iptvList" :key="index">
                    <li
                      :class="['col', { active: item.state }]"
                      data-target="3"
                    >
                      <span class="tag" v-if="item.state == 1">在线</span>
                      <span class="tag" v-if="item.state == 2">绑定</span>
                      <div class="name">宽带账号：{{ item.account }}</div>
                      <div class="text">原套餐：{{ item.text }}</div>
                      <div class="text">地址：{{ item.address }}</div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
            <div class="group">
              <div class="g_head">
                <span class="title">固话号码</span>
              </div>
              <div class="g_body">
                <ul class="list">
                  <template v-for="(item, index) in telList" :key="index">
                    <li
                      :class="['col', { active: item.state }]"
                      data-target="4"
                    >
                      <div class="name">固话号码：{{ item.name }}</div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page_btns">
        <a :class="['btn_confirm', { on: isBinding }]">
          <span class="txt">确认绑定</span>
          <img
            src="@/assets/images/phoneBind/arr@55.png"
            class="icon ico_arr3"
          />
        </a>
      </div>

      <!-- 模态框 -- 绑定成功 -->
      <!-- <div class="popup popup_center popup-5">
        <div class="popupContainer">
          <div class="pp_cont">
            <p class="succ_txt">绑定成功!</p>
          </div>
          <div class="pp_foot">
            <span class="btn btn-1">暂不前往</span>
            <span class="btn btn-2">前往服务大厅</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const networkList = [
  {
    account: '0731****6448@VOD',
    text: '50M有线宽带不限时-240元档',
    address: '湖南省长沙市雨花区天下一家华府1栋2单元2205',
    state: false
  },
  {
    account: '0731****6448@VOD',
    text: '30M有线宽带不限时-100元档',
    address: '湖南省长沙市开福区湘江中路万达广场C栋1709',
    state: false
  }
]
const iptvList = [
  {
    account: '0731****6448@VOD',
    text: '100M有线宽带不限时-300元档',
    address: '湖南省长沙市芙蓉区天下一家华府1栋2单元2205',
    state: false
  }
]
const telList = [
  { name: '0731****6448@VOD', state: false },
  { name: '0731****6214@VOD', state: false },
  { name: '0731****1820@VOD', state: false }
]
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
</style>
