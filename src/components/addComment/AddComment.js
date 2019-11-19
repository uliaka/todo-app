import React, { useRef } from 'react';
import './AddComment.scss';

const AddComment = (props) => {
  const textArea = useRef(null)
  const addComment = (event) => {
    if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
      const { value } = textArea.current;
      if (value) {
        props.addComment({
          text: textArea.current.value,
          itemId: props.itemId,
        })
        textArea.current.value = '';
      }
    }
  }

  return (
    <form className='add-comment-container'>
      <div className='avatar'>
      </div>
      <textarea ref={textArea} className='add-textarea' rows="5" onKeyDown={addComment}>
      </textarea>
    </form>
  )
};

export default AddComment;
