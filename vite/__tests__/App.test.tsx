import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import React from 'react';

import App from '../src/App';

describe('app default', () => {
  test('title', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Brevet Timer' })
    ).toBeInTheDocument();
  });
  test('result', () => {
    render(<App />);
    expect(screen.getByText(/Result/)).toBeInTheDocument();
  });
  test('three distance buttons', () => {
    render(<App />);
    const distanceButtons = screen.getByLabelText('distance');
    expect(within(distanceButtons).getAllByRole('button')).toHaveLength(3);
  });
  test('two time pickers', () => {
    render(<App />);
    expect(screen.getByLabelText('Departure time')).toBeVisible();
    expect(screen.getByLabelText('Finish time')).toBeVisible();
    expect(screen.getByLabelText('Finish date'));
  });
  test('two date pickers are hidden', () => {
    render(<App />);
    expect(screen.getByLabelText('Departure date')).not.toBeVisible();
    expect(screen.getByLabelText('Finish date')).not.toBeVisible();
  });
  test('three footer buttons', () => {
    render(<App />);
    expect(screen.getByLabelText('time-reset')).toBeInTheDocument();
    expect(screen.getByLabelText('setting')).toBeInTheDocument();
    expect(screen.getByLabelText('qr-code')).toBeInTheDocument();
  });
});
