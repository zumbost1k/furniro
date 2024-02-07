import { render } from '@testing-library/react';
import CartTotal from '../cart_total/cart_total';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

describe(CartTotal, () => {
 it('cart sucessfuly rendered', () => {
   const { getByTestId } = render(
     <Provider store={store}>
       <BrowserRouter>
         <CartTotal />
       </BrowserRouter>
     </Provider>
   );
   const newArival = getByTestId('price').textContent;
   expect(newArival).toEqual('Price');
 });
});
