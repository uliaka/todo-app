import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddTodoItem from './AddTodoItem';
import '@testing-library/jest-dom/extend-expect'

describe('AddTodoItem', () => {
  const props = {
    onAdd: jest.fn(),
  }
  test('should invoke onAdd callback', () => {
    const { getByText } = render(<AddTodoItem {...props} />)
    fireEvent.click(getByText('Add new'))
    expect(props.onAdd.mock.calls.length).toBe(1)
  })
});