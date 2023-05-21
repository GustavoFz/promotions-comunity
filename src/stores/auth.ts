import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLogged: false,
    loading: false
  }),
  actions: {
    login() {
      this.isLogged = true
    },
    logout() {
      this.isLogged = false
    }
  }
})
