import { render } from '@testing-library/react';

import Timepicker from './timepicker';

describe('Timepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Timepicker />);
    expect(baseElement).toBeTruthy();
  });
});
