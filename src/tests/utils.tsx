import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { store } from 'src/app/store';

export function renderWithReduxStore(
  ui: ReactElement,
  renderOptions?: RenderOptions,
): RenderResult {
  const Wrapper: React.FC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
