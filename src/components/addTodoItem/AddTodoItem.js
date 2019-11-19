import React, { useState } from 'react';
import './AddTodoItem.scss';
import PropTypes from 'prop-types';

const AddTodoItem = (props) => {
  const [text, setText] = useState('');
  const onAdd = (event) => {
    event.preventDefault()
    if (text) {
      props.onAdd({ title: text });
      setText('')
    }
  }
  return (
    <div className='add-container'>
      <input
        placeholder='Type name here...'
        className='add-area'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="add-button" onClick={onAdd}>
        <span>Add new</span>
      </div>
    </div>
  )
};

AddTodoItem.propTypes = {
  onAdd: PropTypes.func,
}

export default AddTodoItem;
