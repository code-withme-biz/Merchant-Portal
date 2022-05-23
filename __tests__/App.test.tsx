import { render, screen } from '@testing-library/react';
import 'ions/locale/internationalization';
import { App } from '../src/App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/New Accounts App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
