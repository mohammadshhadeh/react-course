// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const TOGGLE = 'TOGGLE';

// const TYPES = {
// 	[INCREMENT]: INCREMENT,
// 	[DECREMENT]: DECREMENT,
// 	[TOGGLE]: TOGGLE,
// };

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
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
// 				showCounter: !state.showCounter,
// 			};
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(counterReducer);

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
