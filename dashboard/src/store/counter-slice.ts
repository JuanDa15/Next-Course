import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CounterI {
  count: number,
  loading: boolean,
  isReady: boolean
}

const initialState: CounterI = {
  count: 5,
  loading: true,
  isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounter(state, { payload }: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = payload;
      state.isReady = true;
    },
    addOne: (state) => {
      if (state.count === 40) return;
      state.count += 1
    },
    subtractOne: (state) => {
      if (state.count === 0) return;
      state.count -= 1
    },
    increment: (state, { payload }: PayloadAction<number>) => {
      if (state.count === 40) return;
      state.count += payload
    },
    decrement: (state, { payload }: PayloadAction<number>) => {
      if (state.count === 0) return;

      state.count -= payload
    },
    resetCount: (state, { payload }: PayloadAction<number>) => {
      if (payload < 0) payload = 0;

      state.count = payload
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    }
  }
})

export const { decrement, increment, resetCount, addOne, subtractOne, setLoading, initCounter } = counterSlice.actions
export default counterSlice.reducer