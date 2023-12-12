import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import ProductPath from '../product_path/product_path';

describe(ProductPath, () => {
  it('product path sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductPath />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('shop-path').textContent;
    expect(newArival).toEqual('Shop');
  });
});
