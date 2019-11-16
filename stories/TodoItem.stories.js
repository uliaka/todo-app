import React from 'react';
import TodoItem from '../src/components/todoItem/TodoItem.js';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default {
  title: 'todo item',
};

const props = {
  title: 'item one',
  commentsCount: 56,
  onDelete: () => { 
    return action('deleted')
  },
  onOpen: () => { 
    return action('open')
  },
  active : true,
}

storiesOf('TodoItem', module)
  .add('todoitem', () => <TodoItem  {...props} />);