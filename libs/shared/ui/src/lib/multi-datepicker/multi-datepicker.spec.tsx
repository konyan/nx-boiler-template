import { render } from '@testing-library/react';

import MultiDatepicker from './multi-datepicker';

describe('MultiDatepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiDatepicker />);
    expect(baseElement).toBeTruthy();
  });
});
