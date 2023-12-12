import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import CheckoutBody from '../checkout_body/checkout_body';

describe(CheckoutBody, () => {
  it('checkout sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckoutBody />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('product').textContent;
    expect(newArival).toEqual('Product');
  });
});
