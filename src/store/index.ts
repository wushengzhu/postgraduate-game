import { defineStore } from 'pinia'

type ThemeType = 'light' | 'dark'
export const storeKey = 'main'

export const mainStore = defineStore(storeKey, {
  state: () => {
    return {
      innerWidth: null, // 当前窗口宽度
      themeMode: 'light' as ThemeType, // 主题模式：白天、黑夜
      mobileOpenState: false, // 移动端开启状态
      themeTextColor: '#fff',
      showGame: false,
    }
  },
  getters: {
    getInnerWidth(state) {
      if (state.innerWidth) {
        return state.innerWidth
      }
      return JSON.parse(localStorage.getItem(storeKey) + '')
    },
  },
  actions: {
    setInnerWidth(value: any) {
      this.innerWidth = value
      this.mobileOpenState = value >= 720 ? false : true
    },
    setShowGame(value: any) {
      this.showGame = value
    },
  },
  //   persist: true, // 持久化存储
  persist: {
    key: 'data',
    storage: window.localStorage, // 设置存储类型
    paths: ['mobileOpenState'],
  },
})
