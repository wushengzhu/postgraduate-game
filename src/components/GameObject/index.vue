<template>
  <div :class="mobileOpenState ? 'left-tips-mobile cards' : 'left-tips cards'">
    <h3 v-show="!mobileOpenState">游戏目标：</h3>
    <h4 v-show="mobileOpenState">游戏目标：</h4>
    <p>为了顺利毕业，有两个基础任务<em>GPA</em>和<em>论文</em>，在希望值跌到零点之前成功毕业。</p>
  </div>
</template>
<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);
</script>
<style lang="scss" scoped>
.left-tips {
  width: 49%;
  color: #fff;
  font-weight: bold;
  height: 100px;
  padding: 5px;
  box-sizing: border-box;
}

em {
  color: yellow;
}

.left-tips-mobile {
  width: 100%;
  margin-top: 10px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  height: 90px;
  padding: 5px;
  box-sizing: border-box;
}
</style>
