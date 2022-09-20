import { render } from '@testing-library/react';

import CheckboxList from './checkbox-list';

describe('CheckboxList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxList />);
    expect(baseElement).toBeTruthy();
  });
});
