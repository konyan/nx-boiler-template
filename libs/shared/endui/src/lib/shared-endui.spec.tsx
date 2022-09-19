import { render } from '@testing-library/react';

import SharedEndui from './shared-endui';

describe('SharedEndui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedEndui />);
    expect(baseElement).toBeTruthy();
  });
});
