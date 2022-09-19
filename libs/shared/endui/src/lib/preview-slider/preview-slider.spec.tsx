import { render } from '@testing-library/react';

import PreviewSlider from './preview-slider';

describe('PreviewSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreviewSlider />);
    expect(baseElement).toBeTruthy();
  });
});
