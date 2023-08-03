<template>
  <!-- 个人标签 -->
  <div :class="mobileOpenState ? 'tag-container-mobile' : 'tag-container'">
    <div class="tags fixed-card">
      <span style="font-weight:bold;color:#fff">个人标签：</span>
      <el-tag v-for="item in tags" :key="item.name" :hit="true" type="info" :color="item.color" class="ml-ms"
        effect="dark" @mouseenter="socialTip = item.tip" @mouseleave="socialTip = '让你失望了'">
        {{ item.name }}
      </el-tag>
    </div>
    <!-- <div class="tip" style="color:#fff">{{ socialTip }}</div> -->
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import tags from "@/assets/tags.json";
const socialTip = ref("点我看看");

import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);
</script>
  
<style lang="scss" scoped>
.tag-bg {
  background-color: transparent;
  border-radius: 6px;
  backdrop-filter: blur(0);
  animation: fade;
  -webkit-animation: fade 0.5s;
  transition: all 0.5s;
}

.tag-container {
  display: flex;
  align-items: center;
  // justify-content: flex-start;
  justify-content: space-between;
  // max-width: 460px;
  width: 70%;
  height: 42px;
  margin-top: 1rem;
  @extend .tag-bg;

  @media (max-width: 840px) {
    max-width: 100%;
    justify-content: center;

    .link {
      justify-content: space-evenly !important;
      width: 90%;
    }

    .tip {
      display: none !important;
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: inherit;

      .icon {
        margin: 0 12px;
        transition: all 0.3s;

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  .tip {
    display: none;
    margin-right: 12px;
    animation: fade;
    -webkit-animation: fade 0.5s;
  }

  // @media (min-width: 768px) {
  //   &:hover {
  //     background-color: #00000040;
  //     backdrop-filter: blur(5px);

  //     .tip {
  //       display: block;
  //     }
  //   }
  // }
}

.tag-container-mobile {
  width: 90%;
  margin: 1rem auto;
  // margin-top: 1rem;
  min-height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  @extend .tag-bg;
}

.tags {
  width: 100%;
  padding: 5px;
  height: 100%;
  box-sizing: border-box;
  // cursor:pointer;
}
</style>
  