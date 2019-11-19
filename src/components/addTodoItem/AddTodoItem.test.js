import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddTodoItem from './AddTodoItem';
import '@testing-library/jest-dom/extend-expect'

describe('AddTodoItem', () => {
  const props = {
    onAdd: jest.fn(),
  }
  test('should invoke onAdd callback', () => {
    const { getByText, getByPlaceholderText } = render(<AddTodoItem {...props} />)
    const inputNode = getByPlaceholderText('Type name here...');
    fireEvent.change(inputNode, { target: { value: 'new value' } });
    fireEvent.click(getByText('Add new'))
    expect(props.onAdd.mock.calls.length).toBe(1)
  })
});