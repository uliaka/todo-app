import todoReducer from '../../src/redux/reducer.js';
import Types from '../../src/redux/types.js';

let state = {
  items: [
    {
      id: 1,
      title: 'item one',
      commentsCount: 56,
      comments: [
        {
          id: 11,
          text: "text",
        }
      ]
    }
  ],
}

test('should add item properly', () => {
  const addItem = {
    type: Types.ADD_ITEM,
    payload: {
      id: 2,
      title: 'item 1',
    },
  }
  state = todoReducer(state, addItem)
  expect(state.items).toHaveLength(2);
  expect(state.items[state.items.length - 1].title).toEqual(addItem.payload.title);
});

test('should delete item properly', () => {
  state = todoReducer(state, {
    type: Types.DELETE_ITEM,
    payload: {
      id: 2,
    },
  })
  expect(state.items).toHaveLength(1);
});

test('should add comment properly', () => {
  const addComment = {
    type: Types.ADD_COMMENT,
    payload: {
      itemId: 1,
      text: 'new comment',
    },
  }
  const itemBeforeAddingComment = state.items.filter(item => item.id === addComment.payload.itemId)[0]
  state = todoReducer(state, addComment)
  const itemAfterAddingComment = state.items.filter(item => item.id === addComment.payload.itemId)[0]
  expect(itemAfterAddingComment.comments.length).toEqual(itemBeforeAddingComment.comments.length + 1);
});