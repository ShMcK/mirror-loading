import { actions } from 'mirrorx'

const asyncDelay = (time) => new Promise((resolve, reject) => (
  setTimeout(() => resolve(), time))
)

export default {
  name: 'app',
  initialState: 0,
  reducers: {
    increment(state) { return state + 1 },
  },
  effects: {
    async incrementAsync() {
      await asyncDelay(1000)
      actions.app.increment()
    },
  }
}