import React from 'react'
import { render } from '@testing-library/react'
import Comment from './Comment.js';
import '@testing-library/jest-dom/extend-expect'

describe('Comment', () => {
  const props = {
    text: 'comment one',
  }
  test('should display text properly', () => {
    const { getByText } = render(<Comment {...props} />)
    expect(getByText(props.text)).toBeInTheDocument()
  })
});