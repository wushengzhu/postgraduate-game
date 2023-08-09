<template>
  <div :class="mobileOpenState ? 'right-container-mobile' : 'right-container'">
    <div class="tips">
      <AchieveItems />
      <DateCircle />
    </div>
    <ScoreBar />
    <div class="game-area fixed-card">
      <GameText />
      <GameBtn />
    </div>
    <div class="close-btn" v-show="mobileOpenState && showGame" @click="useMainStore.setShowGame(false)">
      <close theme="outline" size="24" fill="#999" />
    </div>
  </div>
</template>
<script setup lang="ts">
import AchieveItems from "@/components/AchieveItems/index.vue";
import DateCircle from "@/components/DateCircle/index.vue";
import ScoreBar from "@/components/ScoreBar/index.vue";
import GameText from "@/components/GameText/index.vue";
import GameBtn from "@/components/GameBtn/index.vue";

import { Close } from '@icon-park/vue-next'
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState, showGame } = storeToRefs(useMainStore);
</script>
<style lang="scss" scoped>
.right-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .game-area {
    width: 80%;
    min-height: 500px;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .tips {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
}

.right-container-mobile {
  height: 100%;

  .game-area {
    width: 90%;
    min-height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .tips {
    width: 100%;
  }


  .close-btn {
    width: 42px;
    height: 42px;
    margin: 0 auto;
    margin-top: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 21px;
    background: rgba(0, 0, 0, 0.2509803922);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transform: scale(1);
    transition: all 0.3s;
  }
}
</style>
