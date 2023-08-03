<template>
  <div :class="mobileOpenState ? 'right-tips-mobile' : 'right-tips'" class="fixed-card">
    <div>
      学习状态：
      <el-tag color="orange" :hit="true" type="info" class="ml-ms tags" effect="dark">开心</el-tag>
      <el-tag color="orange" :hit="true" type="info" class="ml-ms tags" effect="dark">兴奋</el-tag>
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
.right-tips {
  width: 49%;
  color: #fff;
  font-weight: bold;
  min-height: 100px;
  padding: 5px;
  box-sizing: border-box;
}

.right-tips-mobile {
  width: 90%;
  color: #fff;
  font-weight: bold;
  min-height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px;
  box-sizing: border-box;
}
</style>
