import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
  <div className='comment-container'>
    <div className='avatar' style={{ backgroundColor: props.color }}>
    </div>
    <div className='text-block'>
      {props.text}
    </div>
  </div>
)};

Comment.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string
}

export default Comment;
