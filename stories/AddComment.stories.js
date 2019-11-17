import React from 'react';
import AddComment from '../src/components/addComment/AddComment.js';
import { storiesOf } from '@storybook/react';

export default {
  title: 'add comment',
};


storiesOf('AddComment', module)
  .add('AddComment', () => <AddComment />);