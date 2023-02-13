import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 1
    }
  },
  getters: {
    stateCount(state) {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})