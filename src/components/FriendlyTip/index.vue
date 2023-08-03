<template>
  <div :class="mobileOpenState ? 'right-tips-mobile cards' : 'right-tips cards'">
    <h3 v-show="!mobileOpenState">友情提示：</h3>
    <h5 v-show="mobileOpenState">友情提示：</h5>
    <div class="tips" v-show="!mobileOpenState">
      <el-tooltip effect="dark" content="可以获得保研名额或者申请国外学位有优势。" placement="top">
        <el-tag class="tip">GPA>=5</el-tag>
      </el-tooltip>
      <el-tooltip effect="dark" content="普通偏上成就。" placement="top">
        <el-tag class="tip">GPA=4</el-tag>
      </el-tooltip>
      <el-tooltip effect="dark" content="勉强及格可以拿到学位证书." placement="top">
        <el-tag class="tip">GPA=3</el-tag>
      </el-tooltip>
    </div>
    <div class="tips" v-show="mobileOpenState">
      <ul>
        <li>GPA>=5：可以获得保研名额或者申请国外学位有优势。</li>
        <li>GPA=4：普通偏上成就。</li>
        <li>GPA=3：勉强及格可以拿到学位证书。</li>
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
.right-tips {
  width: 49%;
  color: #fff;
  font-weight: bold;
  height: 100px;
  padding: 5px;
  box-sizing: border-box;

  .tip {
    margin-left: 5px;
  }
}

// .tips{
//   margin-top: 5px;
// }


.right-tips-mobile {
  width: 100%;
  color: #fff;
  font-weight: bold;
  min-height: 30px;
  padding: 5px;
  box-sizing: border-box;

  .tips {
    margin-left: 20px;
    font-size: 0.5rem;
  }
}
</style>
