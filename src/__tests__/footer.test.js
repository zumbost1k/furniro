import { render } from '@testing-library/react';
import Footer from '../footer/footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

describe(Footer, () => {
  it('footer sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('footer-help').textContent;
    expect(newArival).toEqual('Help');
  });
});
