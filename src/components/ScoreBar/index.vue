<template>
  <div :class="mobileOpenState ? 'score-bar-mobile' : 'score-bar'" class="fixed-card">
    <div class="score-container">
      <div class="score-label">
        希望值：
        <span v-show="mobileOpenState" style="font-weight: bold;">
          <em>{{ hopeScore }}</em>/100
        </span>
      </div>
      <el-progress v-show="!mobileOpenState" class="score-progress" :text-inside="true" :stroke-width="16"
        :percentage="100" :status="pStatus" :format="formatNum" />
    </div>
    <div class="student-time">
      <el-tag color="orange" :hit="true" type="info" class="ml-ms tags" effect="dark">开心</el-tag>
      <el-tag color="orange" :hit="true" type="info" class="ml-ms tags" effect="dark">兴奋</el-tag>
    </div>
  </div>
</template>
<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const hopeScore = ref(0);
const pStatus = ref('');
const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);

const formatNum = (num: number) => num + ''
</script>
<style lang="scss" scoped>
.score-bar {
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  // justify-content: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;

  .score-container {
    width: 50%;
    color: #fff;
    display: flex;
    align-items: center;

    .score-label {
      width: 24%;
    }

    .score-progress {
      width: 76%;
    }
  }
}

.score-bar-mobile {
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  // justify-content: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;

  .score-container {
    width: 60%;
    color: #fff;
    display: flex;
    align-items: center;

    .score-label {
      width: 100%;
    }
  }
}

.student-time {
  color: #fff;
}

em {
  color: yellow;
}

.label {
  color: #fff;
}
</style>
