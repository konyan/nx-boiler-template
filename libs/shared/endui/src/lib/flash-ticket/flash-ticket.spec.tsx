import { render } from '@testing-library/react';

import FlashTicket from './flash-ticket';

describe('FlashTicket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlashTicket />);
    expect(baseElement).toBeTruthy();
  });
});
