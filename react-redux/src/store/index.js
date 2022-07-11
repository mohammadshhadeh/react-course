import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const TOGGLE = 'TOGGLE';

const TYPES = {
	[INCREMENT]: INCREMENT,
	[DECREMENT]: DECREMENT,
	[TOGGLE]: TOGGLE,
};

const initialState = {
	counter: 0, isShow: true
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state, action) {
			state.counter += (action.payload || 1);
		},
		decrement(state) {
			state.counter--;
		},
		toggle(state) {
			state.isShow = !state.isShow
		},
	}
})

// const counterReducer = (state = { counter: 0, isShow: true }, action) => {
// 	switch (action.type) {
// 		case TYPES.INCREMENT:
// 			return {
// 				...state,
// 				counter: state.counter + (action.amount || 1),
// 			};
// 		case TYPES.DECREMENT:
// 			return {
// 				...state,
// 				counter: state.counter - 1,
// 			};
// 		case TYPES.TOGGLE:
// 			return {
// 				...state,
// 				isShow: !state.isShow,
// 			};
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(counterReducer);


// counterSlice.actions.toggle;



const store = configureStore({
	reducer: counterSlice.reducer
});


export const counterActions = counterSlice.actions;

export default store;
