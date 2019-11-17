import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

const Comment = (props) => (
  <div className='comment-container'>
    <div className='avatar'>
    </div>
    <div className='text-block'>
      {props.text}
    </div>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string
}

export default Comment;
