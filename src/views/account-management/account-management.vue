<template>
  <div class="account-management">
    <div class="page page3">
      <div class="page_batch_wrap">
        <div class="section">
          <template v-for="(item, index) in bindingData1" :key="index">
            <div class="group">
              <div class="g_head">
                <span class="title">{{ item.title }}</span>
                <img src="@/assets/images/phoneBind/add.png" class="ico-add" />
              </div>
              <div class="g_body">
                <template v-for="(itemn, k) in item.list" :key="k">
                  <div class="item">
                    <div class="fl">
                      <img :src="item.icon" class="icon" />
                      <span class="txt">{{ itemn.vm }}</span>
                    </div>
                    <div class="fr">
                      <span class="txt txt-1" v-if="itemn.state == 3"
                        >已绑定</span
                      >
                      <span class="txt txt-1" v-if="itemn.state == 1"
                        >在线</span
                      >
                      <span class="txt txt-2" v-if="itemn.state == 2"
                        >已关联</span
                      >
                      <img
                        src="@/assets/images/phoneBind/arr@1729.png"
                        class="ico_arr1"
                      />
                    </div>
                  </div>
                  <div class="item add-box" :id="'addBox' + index">
                    <div class="ite-inner">
                      <div class="fl">
                        <img src="" class="icon" />
                        <span class="txt name"></span>
                      </div>
                      <div class="fr">
                        <span class="txt txt-1">前往关联</span>
                        <img
                          src="@/assets/images/phoneBind/arr@1729.png"
                          class="ico_arr1"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
        <div class="section">
          <template v-for="(item, index) in bindingData2" :key="index">
            <div class="group">
              <div class="g_head">
                <span class="title">{{ item.title }}</span>
                <img src="@/assets/images/phoneBind/add.png" class="ico-add" />
              </div>
              <div class="g_body">
                <template v-for="(itemn, k) in item.list" :key="k">
                  <div class="item">
                    <div class="fl">
                      <img :src="item.icon" class="icon" />
                      <span class="txt">{{ itemn.vm }}</span>
                    </div>
                    <div class="fr">
                      <span class="txt txt-1" v-if="itemn.state == 3"
                        >已绑定</span
                      >
                      <span class="txt txt-1" v-if="itemn.state == 1"
                        >在线</span
                      >
                      <span class="txt txt-2" v-if="itemn.state == 2"
                        >已关联</span
                      >
                      <img
                        src="@/assets/images/phoneBind/arr@1729.png"
                        class="ico_arr1"
                      />
                    </div>
                  </div>
                  <div class="item add-box" :id="'addBox' + index">
                    <div class="ite-inner">
                      <div class="fl">
                        <img src="" class="icon" />
                        <span class="txt name"></span>
                      </div>
                      <div class="fr">
                        <span class="txt txt-1">前往关联</span>
                        <img
                          src="@/assets/images/phoneBind/arr@1729.png"
                          class="ico_arr1"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
      <a class="btn_reset">重置服务密码</a>
      <a class="page-back">返回服务大厅</a>
      <a class="btn_service" id="drag"></a>
    </div>
  </div>
</template>

<script setup>
const bindingData1 = [
  {
    title: '手机号码',
    type: '4',
    icon: require('@/assets/images/phoneBind/adorn1.png'),
    list: [{ vm: '199****8888', state: 3 }]
  }
]
const bindingData2 = [
  {
    title: '宽带号码',
    type: '1',
    icon: require('@/assets/images/phoneBind/adorn2.png'),
    list: [{ vm: '0731****2999', state: 1 }]
  },
  {
    title: 'IPTV号码',
    type: '2',
    icon: require('@/assets/images/phoneBind/adorn3.png'),
    list: [{ vm: 'CS032****87@VOD', state: 2 }]
  },
  {
    title: '固话号码',
    type: '3',
    icon: require('@/assets/images/phoneBind/adorn4.png'),
    list: [{ vm: '0731****0255', state: 2 }]
  }
]
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
</style>
