import { defineStore } from "pinia";

export default  defineStore('getter',{
  state: () => ({
    count: 3,
    users: [{id:1,name:'111'},{id:2,name:'222'},{id:3,name:'333'}]
  }),
  getters: {
    //自动推断出返回类型是一个number
    doubleCount: (state) => state.count * 2,
    //返回类型必须明确设置
    doublePlusOne(): number {
      return this.doubleCount + 1
    },
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    }
  }
})