import React from 'react';
import Comment from '../src/components/comment/Comment.js';
import { storiesOf } from '@storybook/react';

export default {
  title: 'comment',
};

const props = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  date: "22-10-2019"
}

storiesOf('Comment', module)
  .add('comment', () => <Comment  {...props} />);