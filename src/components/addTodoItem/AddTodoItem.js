import React from 'react';
import './AddTodoItem.scss';
import PropTypes from 'prop-types';

const AddTodoItem = (props) => (
  <form className='add-container'>
    <input 
      placeholder='Type name here...'
      className='add-area'
    />
    <div className="add-button" onClick={props.onAdd}>
      <span>Add new</span>
    </div>
  </form>
);

AddTodoItem.propTypes = {
  onAdd: PropTypes.func,
}

export default AddTodoItem;
