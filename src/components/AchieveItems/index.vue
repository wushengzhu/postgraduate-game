<template>
  <div :class="mobileOpenState ? 'achieve-items-mobile' : 'achieve-items'" class="fixed-card">
    <h3 v-show="!mobileOpenState">研究成就：</h3>
    <h5 v-show="mobileOpenState">研究成就：</h5>
    <div class="item">
      <ul>
        <!-- <span class="item-name">成就1</span> * <span class="item-num">1</span> -->
        <li>成就1 * 1</li>
        <li>成就2 * 2</li>
        <li>成就3 * 3</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);
</script>
<style lang="scss" scoped>
.achieve-items {
  width: 49%;
  color: #fff;
  font-weight: bold;
  min-height: 120px;
  padding: 5px;
  box-sizing: border-box;

  .item {
    margin-left: 100px;
    color: yellowgreen;
  }

  .item-name {
    color: yellowgreen;
  }
}

.achieve-items-mobile {
  width: 90%;
  color: #fff;
  font-weight: bold;
  min-height: 100px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 30px;
  box-sizing: border-box;

  .item {
    margin-left: 15px;
    color: yellowgreen;
  }
}
</style>
  