import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import ContactForm from '../contact_form/contact_form';

describe(ContactForm, () => {
  it('contact sucessfuly rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ContactForm />
        </BrowserRouter>
      </Provider>
    );
    const newArival = getByTestId('contact').textContent;
    expect(newArival).toEqual('Submit');
  });
});
