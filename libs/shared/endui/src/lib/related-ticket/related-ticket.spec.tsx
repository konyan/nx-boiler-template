import { render } from '@testing-library/react';

import RelatedTicket from './related-ticket';

describe('RelatedTicket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedTicket />);
    expect(baseElement).toBeTruthy();
  });
});
