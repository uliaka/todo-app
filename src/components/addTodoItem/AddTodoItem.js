import React, { useState } from 'react';
import './AddTodoItem.scss';
import PropTypes from 'prop-types';

const AddTodoItem = (props) => {
  const [text, setText] = useState('');
  return (
    <form className='add-container'>
      <input
        placeholder='Type name here...'
        className='add-area'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="add-button" onClick={() => props.onAdd({ title: text })}>
        <span>Add new</span>
      </div>
    </form>
  )
};

AddTodoItem.propTypes = {
  onAdd: PropTypes.func,
}

export default AddTodoItem;
