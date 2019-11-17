import React from 'react';
import AddTodoItem from '../src/components/addTodoItem/AddTodoItem.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'add item',
};

const props = {
  onAdd: () => { 
    return action('added')
  }
}

storiesOf('AddTodoItem', module)
  .add('AddTodoItem', () => <AddTodoItem  {...props} />);
