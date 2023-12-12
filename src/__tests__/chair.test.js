import { render } from '@testing-library/react';
import Chair from '../chair/chair';

describe(Chair, () => {
  it('chair sucessfuly rendered', () => {
    const { getByTestId } = render(<Chair />);
    const newArival = getByTestId('chair').textContent;
    expect(newArival).toEqual('New Arrival');
  });
});
