<template>
  <div :class="mobileOpenState ? 'right-tips-mobile' : 'right-tips'" class="fixed-card">
    <template v-if="!mobileOpenState">
      <h3>修学时长：Year <span>1</span> Month <span>1</span></h3>
    </template>
    <template v-if="mobileOpenState">
      <h5>修学时长：Year <span>1</span> Month <span>1</span></h5>
    </template>
    <div class="circle-container" v-if="!mobileOpenState">
      <template v-for="item in sectorList">
        <div class="sector" :style="item"></div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);

const sectorList = ref([
  {
    transform: `rotate(0deg) skewY(-60deg)`,
    background: '#97D077',
  },
  {
    transform: `rotate(30deg) skewY(-60deg)`,
    background: '#97D077',
  },
  {
    transform: `rotate(60deg) skewY(-60deg)`,
    background: '#97D077',
  },
  {
    transform: `rotate(90deg) skewY(-60deg)`,
    background: '#FFA500',
  },
  {
    transform: `rotate(120deg) skewY(-60deg)`,
    background: '#FFA500',
  },
  {
    transform: `rotate(150deg) skewY(-60deg)`,
    background: '#FFA500',
  },
  {
    transform: `rotate(180deg) skewY(-60deg)`,
    background: '#D5739D',
  },
  {
    transform: `rotate(210deg) skewY(-60deg)`,
    background: '#D5739D',
  },
  {
    transform: `rotate(240deg) skewY(-60deg)`,
    background: '#D5739D',
  },
  {
    transform: `rotate(270deg) skewY(-60deg)`,
    background: '#7EA6E0',
  },
  {
    transform: `rotate(300deg) skewY(-60deg)`,
    background: '#7EA6E0',
  },
  {
    transform: `rotate(330deg) skewY(-60deg)`,
    background: '#7EA6E0',
  },
  {
    transform: `rotate(360deg) skewY(-60deg)`,
    background: '#97D077',
  },
])
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

.circle-container {
  margin: 0 auto;
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  // border: 2rem solid yellow;
  box-sizing: border-box;
  animation: circle 2s infinite linear;
}

.sector {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0 100%;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

.part {
  transform: rotate(var(--r)) skewY(-60deg);
  background-color: var(--bgc);
}

span {
  color: yellow;
}
</style>
