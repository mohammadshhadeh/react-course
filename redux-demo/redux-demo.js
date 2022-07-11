const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
	return {
		counter: action.type === "ADD" ? state.counter + 1: state.counter,
	}; // new state
};

const store = redux.createStore(counterReducer);
console.log('store.getState(): ', store.getState());

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log('latestState: ', latestState);
};

store.subscribe(counterSubscriber);


store.dispatch({ type: 'ADD' });
store.dispatch({ type: '' });
store.dispatch({ type: '' });
store.dispatch({ type: 'ADD' });