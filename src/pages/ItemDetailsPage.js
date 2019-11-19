import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/card/Card.js';
import Comment from '../components/comment/Comment.js';
import AddComment from '../components/addComment/AddComment.js';
import types from '../redux/types.js';

const ItemDetailsPage = () => {
  const itemId = useSelector(state => state.activeItem)
  const item = useSelector(state => state.items && state.items.find(i => i.id === itemId)) || {};
  const comments = item.comments || [];
  const dispatch = useDispatch();
  const addComment = (comment) => { 
    dispatch({ type: types.ADD_COMMENT, payload: comment })
    
  }
  
  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  const bottomRef = useRef()
  const scrollToBottom = () => {
    bottomRef &&
    bottomRef.current &&
    bottomRef.current.scrollIntoView({ block: 'end' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [comments])

  return (
    <Card
      bottomRef={bottomRef}
      title={'Comments'}
      body={
        <div>
          {comments.map((comment, index) =>
            <Comment
              key={index}
              {...comment}
              color={randomColor()}
            />
          )}
          
          <AddComment addComment={addComment} itemId={itemId} />
        </div>
      }
    />
  );
}

export default ItemDetailsPage;
