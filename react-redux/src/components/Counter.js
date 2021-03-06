import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import React from 'react';
import { counterActions } from '../store/counter';

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{showCounter && counter}</div>
			<div>
				<button onClick={() => dispatch(counterActions.increment())}>
				{/* <button onClick={() => dispatch({ type: 'INCREMENT' })}> */}
					Increment
				</button>
				<button onClick={() => dispatch(counterActions.increment(5))}>
				{/* <button onClick={() => dispatch({ type: 'INCREMENT', amount: 5 })}> */}
					increase by 5
				</button>
				<button onClick={() => dispatch(counterActions.decrement())}>
				{/* <button onClick={() => dispatch({ type: 'DECREMENT' })}> */}
					decrement
				</button>
			</div>
			{/* <button onClick={() => dispatch({ type: 'TOGGLE' })}> */}
			<button onClick={() => dispatch(counterActions.toggle())}>
				Toggle Counter
			</button>
		</main>
	);
};

export default Counter;

// class Counter extends React.Component {
// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={() => this.props.increment()}>
// 						Increment
// 					</button>
// 					<button onClick={() => this.props.decrement()}>
// 						decrement
// 					</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>
// 					Toggle Counter
// 				</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: 'INCREMENT' }),
// 		decrement: () => dispatch({ type: 'DECREMENT' }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
