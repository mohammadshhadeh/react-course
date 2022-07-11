import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const TOGGLE = 'TOGGLE';

const TYPES = {
	[INCREMENT]: INCREMENT,
	[DECREMENT]: DECREMENT,
	[TOGGLE]: TOGGLE,
};

const counterReducer = (state = { counter: 0, isShow: true }, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return {
				...state,
				counter: state.counter + (action.amount || 1),
			};
		case TYPES.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case TYPES.TOGGLE:
			return {
				...state,
				isShow: !state.isShow,
			};
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
