import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  //也可以这样定义
  //state: () => ({ count: 0 })
  actions: {
    increment(){
      this.count++
    }
  }
})

export default useCounterStore