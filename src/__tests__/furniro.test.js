import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import FuniroFurniture from '../FuniroFurniture/FuniroFurniture';

describe(FuniroFurniture, () => {
  it('furniro sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FuniroFurniture />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('furniro').textContent;
    expect(newArival).toEqual('#FuniroFurniture');
  });
});
