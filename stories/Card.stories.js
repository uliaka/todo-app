import React from 'react';
import TodoItem from '../src/components/todoItem/TodoItem.js';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/card/Card.js'


export default {
  title: 'card',
};

const props = {
  title: 'title',
  body: <TodoItem title={"Title one"} />
}

storiesOf('Card', module)
  .add('Card', () => <Card  {...props} />);
