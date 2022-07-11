import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,
	reducers: {
		increment(state, action) {
			state.counter += action.payload || 1;
		},
		decrement(state) {
			state.counter--;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});


export const counterActions = counterSlice.actions;

export default counterSlice;
