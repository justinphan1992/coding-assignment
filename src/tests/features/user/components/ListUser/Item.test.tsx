import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from 'src/features/user/components/ListUser/Item';

describe('User Item', () => {
  beforeEach(() => {
    render(
      <Item
        name="Test User"
        username="test_user"
        email="test_user@gmail.com"
        phone="123456"
        website="https://www.google.com"
      />,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test_user@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('123456')).toBeInTheDocument();
    expect(screen.getByText('https://www.google.com')).toBeInTheDocument();
    expect(screen.getByAltText('Test User')).toHaveAttribute(
      'src',
      'https://avatars.dicebear.com/v2/avataaars/test_user.svg?options[mood][]=happy',
    );
    expect(screen.getByLabelText('heart')).toBeInTheDocument();
    expect(screen.getByLabelText('edit')).toBeInTheDocument();
    expect(screen.getByLabelText('delete')).toBeInTheDocument();
    expect(screen.getByLabelText('mail')).toBeInTheDocument();
    expect(screen.getByLabelText('phone')).toBeInTheDocument();
    expect(screen.getByLabelText('global')).toBeInTheDocument();
  });
});
