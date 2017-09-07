import * as types from './mutation-types'

export const settall = function ({commit, state}, {titleone, titletwo}) {
  commit(types.SET_TITLEONE, titleone)
  commit(types.SET_TITLETWO, titletwo)
}
