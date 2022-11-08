<template>
  <div class="user-message">
    <div class="user_box">
      <div class="user_info">
        <p class="user_id">177****9945</p>
        <div class="user_tag">
          <span class="dial">
            5星级
            <a href="tel:17712319945">刘智:17712319945</a>
          </span>
          |
          <span>星级服务</span>
        </div>
      </div>

      <img
        src="@/assets/images/home/cut_icon.png"
        class="cut_user"
        alt="切换账号"
      />
    </div>

    <div class="user_box_none">
      <span>未绑定账号</span>
      <span class="binding" style="background-color: rgb(191 223 255 / 20%)"
        >去绑定</span
      >
    </div>

    <div class="none_meal">
      <span>无数据</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user_box {
  box-sizing: border-box;
  width: 92%;
  margin: 0.3rem 4% 0rem;
  /* overflow: hidden; */
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.26rem;

  .user_info {
    width: calc(100% - 0.7rem);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .user_id {
      font-weight: 600;
      max-width: 100%;
      font-size: 0.36rem;
      line-height: 0.42rem;
      color: #ffffff;
      margin-right: 0.1rem;
      vertical-align: middle;
      margin-bottom: 0.15rem;
    }
    .user_tag {
      height: 0.42rem;
      padding: 0rem 0.15rem 0rem 0.5rem;
      background-color: #fbe0b9;
      border-radius: 0.3rem;
      background-image: url('../../../../assets/images/home/VIP.png');
      background-position: left center;
      background-repeat: no-repeat;
      background-size: 0.44rem 0.42rem;
      font-size: 0.2rem;
      color: #5b2617;
      line-height: 0.42rem;
      margin-bottom: 0.15rem;
      .dial {
        position: relative;
      }
      .dial > a {
        position: absolute;
        top: 0.6rem;
        left: -35px;
        z-index: 999;
        display: block;
        padding: 0.06rem 0.1rem;
        border-radius: 0.1rem;
        background-color: rgba(0, 0, 0, 0.4);
        white-space: nowrap;
        font-size: 0.24rem;
        color: #ffffff;
        letter-spacing: 0.04rem;
        display: none;
      }
      .dial > a::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 0.1rem solid transparent;
        border-right: 0.1rem solid transparent;
        border-bottom: 0.14rem solid rgba(0, 0, 0, 0.4);
        position: absolute;
        top: -0.14rem;
        left: 0.16rem;
      }
      .dial:hover a {
        display: block;
      }
    }
  }

  .cut_user {
    width: 0.4rem;
    height: 0.4rem;
  }
}

.user_box_none {
  box-sizing: border-box;
  width: 92%;
  margin: 0.3rem 4% 0rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.26rem;
  /* display: none;*/
}
.user_box_none > span:nth-child(1) {
  font-weight: 600;
  font-size: 0.36rem;
  color: #ffffff;
}
.binding {
  width: 1.64rem;
  height: 0.62rem;
  text-align: center;
  line-height: 0.62rem;
  border-radius: 0.14rem;
  box-shadow: 0px 0.04rem 0.2rem rgba(0, 0, 0, 0.12);
  color: #ffffff;
  font-size: 0.3rem;
  background: rgb(191 223 255 / 20%);
}

.none_meal {
  box-sizing: border-box;
  width: 100%;
  height: 2.14rem;
  border-radius: 0.14rem;
  margin: 0.15rem auto 0rem;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.14);
  position: relative;
  overflow: hidden;
  font-size: 0rem;
  text-align: center;
  line-height: 2.14rem;
  display: none;
}
.none_meal > span {
  display: inline-block;
  position: relative;
  font-size: 0.26rem;
  color: #979797;
}
.none_meal > span::after,
.none_meal > span::before {
  content: '';
  display: block;
  width: 1rem;
  height: 1px;
  background-color: #979797;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.none_meal > span::before {
  left: -1.2rem;
}
.none_meal > span::after {
  right: -1.2rem;
}
</style>
