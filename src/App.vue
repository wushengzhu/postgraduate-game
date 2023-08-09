<script setup lang="ts">
import Background from "@/components/Background/index.vue";
import MainLeft from "@/views/Home/Left.vue";
import MainRight from "@/views/Home/Right.vue";
import Footer from "@/views/Footer/index.vue";

import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState, showGame } = storeToRefs(useMainStore);

window.addEventListener('resize', () => {
  // 也可以使用当前事件的ev.target?.innerWidth
  useMainStore.setInnerWidth(window.innerWidth);
  console.log('监听屏幕变化：')
})

</script>

<template>
  <div class="main-container">
    <Background />
    <main>
      <el-row class="row-container" v-show="!mobileOpenState">
        <el-col :span="12">
          <MainLeft />
        </el-col>
        <el-col :span="12">
          <MainRight />
        </el-col>
      </el-row>
      <template v-if="mobileOpenState">
        <div class="row-container" v-show="!showGame">
          <MainLeft />
        </div>
        <div class="row-container" v-show="showGame">
          <MainRight />
        </div>
      </template>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.row-container {
  min-height: calc(100vh - 46px);
}
</style>
