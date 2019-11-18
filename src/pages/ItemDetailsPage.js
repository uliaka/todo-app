import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/card/Card.js';
import Comment from '../components/comment/Comment.js';
import AddComment from '../components/addComment/AddComment.js';

function ItemDetailsPage(props) {
  const itemId = parseInt(props.history.location.pathname.split('/').pop());
  const item = useSelector(state => state.items && state.items.find(i => i.id === itemId)) || {};
  const comments = item.comments || [];
  const goBack = () => props.history.go(-1);

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
            <AddComment/>
          </div>
        }
      />
    </div>
  );
}

export default ItemDetailsPage;
