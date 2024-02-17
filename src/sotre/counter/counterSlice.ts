import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterReducer {
  count: number
  isReady: boolean
}

const initialState: CounterReducer = {
  count: 5,
  isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return
      state.count = action.payload
      state.isReady = true
    },
    addOne(state) {
      state.count += 1
    },
    minusOne(state) {
      state.count -= 1
    },
    resetCount(state, action: PayloadAction<number>) {
      if (state.count < 0) action.payload = 0
      state.count = action.payload
    }
  }
})

export const { addOne, minusOne, resetCount, initCounterState } =
  counterSlice.actions
export default counterSlice.reducer
