import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isLoading:false,

  },
  mutations: {
       setLoading(state,newLoading){
         state.isLoading=newLoading
       }
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})

