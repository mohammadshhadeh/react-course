import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const TYPES = {
	[INCREMENT]: INCREMENT,
	[DECREMENT]: DECREMENT,
};

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return {
				counter: state.counter + 1,
			};
		case TYPES.DECREMENT:
			return {
				counter: state.counter - 1,
			};
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
