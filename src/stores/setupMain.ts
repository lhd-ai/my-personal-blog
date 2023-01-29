import { defineStore } from 'pinia'
import { ref } from 'vue'
const useSetupStore = defineStore('main',() => {
  const count = ref(0)
  function increment(){
    count.value++
  }
  return {count, increment}
})
export default useSetupStore