import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoItem from './TodoItem';
import '@testing-library/jest-dom/extend-expect'

describe('TodoItem', () => {
  const props = {
    title: 'item one',
    onDelete: jest.fn(),
    onOpen: () => {
    },
    active: true,
  }
  test('should display title properly', () => {
    const { getByText } = render(<TodoItem {...props} />)
    expect(getByText(props.title)).toBeInTheDocument()
  })
  test('should invoke onDelete callback', () => {
    const { getByText } = render(<TodoItem {...props} />)
    fireEvent.click(getByText('Delete'))
    expect(props.onDelete.mock.calls.length).toBe(1)
  })
});