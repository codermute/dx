<template>
  <div class="tab-message">
    <div class="meal_box">
      <div class="meal meal_active moblie_phone_meal">
        <a class="meal_head" href="javasrcipt:;">
          <span>天翼畅享40GB（199元）套餐</span>
          <img src="@/assets/images/home/arrow_right.png" alt="箭头" />
        </a>

        <div class="meal_num">
          <slot name="right">
            <a href="#" class="meal_num_big">
              <span>可用余额</span>
              <p><b>273.26</b>元</p>
            </a>

            <div class="meal_num_small">
              <a href="#">
                <span>本月已用</span>
                <p><b>173.52</b>元</p>
              </a>
              <a href="#">
                <span>可用积分</span>
                <p><b>5000</b>分</p>
              </a>
            </div>
          </slot>
        </div>
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentIndex: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="less" scoped>
.meal_box {
  width: 100%;
  margin-top: 0.2rem;
  .meal {
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.14rem;
    margin: 0.15rem auto 0rem;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.14);
    position: relative;
    overflow: hidden;
    display: none;
  }
  .meal_active {
    display: block !important;
  }
}
</style>
