import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({ name: 'TestUser', id: 1 })

  return {
    user
  }
})
