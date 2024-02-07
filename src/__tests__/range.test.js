import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import Range from '../range/range';

describe(Range, () => {
  it('product path sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Range />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('range').textContent;
    expect(newArival).toEqual('Browse The Range');
  });
});
