import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/card/Card.js';
import Comment from '../components/comment/Comment.js';
import AddComment from '../components/addComment/AddComment.js';
import types from '../redux/types.js';

function ItemDetailsPage(props) {
  const itemId = parseInt(props.history.location.pathname.split('/').pop());
  const item = useSelector(state => state.items && state.items.find(i => i.id === itemId)) || {};
  const comments = item.comments || [];
  const goBack = () => props.history.go(-1);

  const dispatch = useDispatch();
  const addComment = (comment) => dispatch({ type: types.ADD_COMMENT, payload: comment })

  return (
    <div className="comments-list" style={{ display: 'flex', justifyContent: 'center' }}>
      <div onClick={goBack}>go back</div>
      <Card
        title={'Comments'}
        body={
          <div>
            {comments.map(comment =>
              <Comment
                {...comment}
                key={comment.id}
              />
            )}
            <AddComment addComment={addComment} itemId={itemId} />
          </div>
        }
      />
    </div>
  );
}

export default ItemDetailsPage;
