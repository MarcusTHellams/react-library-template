/* eslint-disable react-refresh/only-export-components */
import { render } from '@testing-library/react';
import React from 'react';

const customRender = (
  ui: React.ReactElement,
  options = {},
): ReturnType<typeof render> =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
