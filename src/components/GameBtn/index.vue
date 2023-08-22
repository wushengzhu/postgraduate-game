<template>
    <div :class="mobileOpenState ? 'btn-container-mobile' : 'btn-container'">
        <el-button type="primary" round>查阅论文</el-button>
        <el-button type="warning" round>准备考试</el-button>
        <el-button type="success" round>休息</el-button>
    </div>
</template>
<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia';

const useMainStore = mainStore();
const { mobileOpenState } = storeToRefs(useMainStore);
</script>
<style lang="scss" scoped>
.btn-container {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;

    :deep(.el-button) {
        width: 120px;
    }
}

.btn-container-mobile {
    height: 36%;
    width: 100%;

    :deep(.el-button) {
        width: 70%;
        display: block;
        margin: 0 auto;
        margin-top: 5px;
    }
}
</style>
