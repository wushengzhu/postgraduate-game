<template>
  <div :class="mobileOpenState ? 'left-container-mobile' : 'left-container'">
    <div class="title">
      <el-avatar :size="'large'" :src="'/logo.jpg'" />
      <span class="ml-ms fontface">我的研究生生涯</span>
    </div>
    <div class="message cards">
      <Hitokoto />
    </div>
    <PersonTags />
    <div class="tips">
      <FriendlyTip />
      <GameObject />
    </div>
    <div class="start-btn" v-show="mobileOpenState && !showGame">
      <el-button type="primary" round @click="useMainStore.setShowGame(true)">点我开始</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hitokoto from "@/components/Hitokoto/index.vue";
import PersonTags from "@/components/PersonTags/index.vue";
import FriendlyTip from "@/components/FriendlyTip/index.vue";
import GameObject from "@/components/GameObject/index.vue";

import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState, showGame } = storeToRefs(useMainStore);
</script>
<style lang="scss" scoped>
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-container {
  height: 100%;
  @extend .flex-box;
  flex-direction: column;

  .message {
    width: 70%;
    min-height: 100px;
  }

  .title {
    @extend .flex-box;
    font-size: 3rem;
    font-family: 'qtbf';
    width: 100%;
    margin-bottom: 30px;
    color: #fff;
  }

  .tips {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}

.left-container-mobile {

  .title {
    @extend .flex-box;
    font-size: 2rem;
    font-family: 'qtbf';
    width: 100%;
    margin: 30px 0;
    color: #fff;
  }

  .message {
    width: 90%;
    min-height: 100px;
    margin: 0 auto;
  }


  .tips {
    width: 90%;
    margin: 0 auto;
  }

  .start-btn {
    text-align: center;
    margin-top: 36px;

    :deep(.el-button) {
      width: 120px;
    }

    :deep(.el-button--primary) {
      background-color: yellowgreen;
      border: 0px;
    }
  }
}
</style>
