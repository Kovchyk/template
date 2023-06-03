import React, { PropsWithChildren } from 'react';
import { render as rtlRender, queryByAttribute } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { counterReducer } from '../redux/counter/slice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>): any => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  route?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function renderWithProviders(
  component: React.ReactElement,
  { preloadedState = {}, route = '', store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {},
) {
  if (route !== '') {
    window.history.pushState({}, 'test-page', route);
  }

  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...rtlRender(component, { wrapper: Wrapper, ...renderOptions }) };
}

const getById = queryByAttribute.bind(null, 'id');

// re-export everything
export * from '@testing-library/react';
// override render method
export { renderWithProviders, getById };
