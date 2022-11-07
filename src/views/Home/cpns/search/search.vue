<template>
  <div class="search">
    <span class="search_address"></span>
    <input type="text" placeholder="搜索基础业务" />
  </div>
</template>

<style lang="less" scoped>
.search {
  box-sizing: border-box;
  width: 92%;
  height: 0.7rem;
  margin: 0.3rem auto;
  position: relative;
  overflow: hidden;
  padding-left: 0.7rem;
  .search_address {
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    background: url('../../../../assets/images/home/search_icon.png') no-repeat
      center left;
    background-size: 100% 100%;
    position: absolute;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    box-sizing: border-box;
    display: block;
    width: calc(100% - 0.3rem);
    height: 100%;
    border-radius: 0.1rem;
    background-color: #0071e1;
    color: #fff;
    font-size: 0.26rem;
    margin-left: 0.3rem;
    padding: 0rem 0.2rem 0rem 0.7rem;
    background-image: url('../../../../assets/images/home/magnifying_lens.png');
    background-repeat: no-repeat;
    background-position: 0.2rem center;
    background-size: 0.32rem 0.32rem;
  }
}
</style>
