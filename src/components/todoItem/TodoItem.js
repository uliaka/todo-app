import React from 'react';
import './TodoItem.scss';
import PropTypes from 'prop-types';

const TodoItem = (props) => (
  <div className={`item-conteiner ${props.active ? 'active' : ''}`} onClick={props.onOpen}>
    <div className="title-block">
      <div className="title">
        {props.title} 
      </div>
      <div className="commetns-count">
        {props.commentsCount}
      </div>
    </div>
    <div className="delete-button" onClick={props.onDelete}>
      <span>Delete</span>
    </div>
  </div>
);

TodoItem.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func,
  commentsCount: PropTypes.number,
  onOpen: PropTypes.func,
  active: PropTypes.bool,
}

export default TodoItem;
