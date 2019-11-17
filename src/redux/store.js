import { createStore } from 'redux';
import rootReducer from './reducer.js';

const initialState = {
  items: [
    {
    id: 1,
    title: 'item one',
    commentsCount: 56,
  },
  {
    id: 2,
    title: 'item two',
    commentsCount: 2,
  },
  {
    id: 3,
    title: 'item two',
    commentsCount: 123,
  },
]
};

const store = createStore(rootReducer, initialState);

export default store;
