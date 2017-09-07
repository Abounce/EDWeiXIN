import * as types from './mutation-types'

const mutations = {
  [types.SET_TITLEONE] (state, titleone) {
    state.titleone = titleone
  },
  [types.SET_TITLETWO] (state, titletwo) {
    state.titletwo = titletwo
  }
}

export default mutations
