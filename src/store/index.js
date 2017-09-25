import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    doctorId:0,
    sumFee:0,
    jobtimePeriod:'',
    regDate:'',
    regJobType:''
  },
  mutations: {
    setdoctorId(state, newDoctorId) {
      state.doctorId = newDoctorId
    },
    setSumFee(state, newSumFee) {
      state.sumFee = newSumFee
    },
    setJobtimePeriod(state, newJobtimePeriod) {
      state.jobtimePeriod = newJobtimePeriod
    },
    setRegDate(state, newRegDate) {
      state.regDate = newRegDate
    },
    setRegJobType(state, newRegJobType) {
      state.regJobType = newRegJobType
    },
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

