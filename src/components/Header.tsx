import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import Counter from './Counter';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { counterActions } from 'src/redux/counter/slice';
import { Box } from 'src/styled';

const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector(state => state.counter);

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  const incrementAsync = (): void => {
    dispatch(counterActions.incrementAsync());
  };

  const decrementAsync = (): void => {
    dispatch(counterActions.decrementAsync());
  };

  return (
    <>
      <Box display={['none', 'block']}>
        {' '}
        <Logo className='App-logo' />
      </Box>
      <Counter
        onIncrement={increment}
        onDecrement={decrement}
        onIncrementAsync={incrementAsync}
        onDecrementAsync={decrementAsync}
        value={value}
      />
    </>
  );
};

export default Header;
