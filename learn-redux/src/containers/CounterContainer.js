import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
	const number = useSelector(state => state.counter.number);
	const diff = useSelector(state => state.counter.diff);

	// useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
	const dispatch = useDispatch();
	// 각 액션들을 디스패치하는 함수들을 만드세요
	const onIncrease = () => dispatch(increase());
	const onDecrease = () => dispatch(decrease());
	const onSetDiff = diff => dispatch(setDiff(diff));

	return (
		<Counter
			// 상태와
			number={number}
			diff={diff}
			// 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			onSetDiff={onSetDiff}
		/>
	);
}

export default CounterContainer;