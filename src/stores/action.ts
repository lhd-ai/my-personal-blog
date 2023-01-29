import { defineStore } from "pinia";

export default defineStore('action',{
  state: () => ({
    count: 0
  }),
  actions: {
    increment(){
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  }
})