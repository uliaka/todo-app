import { createStore } from 'redux';
import rootReducer from './reducer.js';

const initialState = {
  items: [
    {
    id: 1,
    title: 'item one',
    comments: [
      {
        id: 11,
        text: "text 1",
      },
      {
        id: 13,
        text: "text 2",
      }
    ]
  },
  {
    id: 2,
    title: 'item two',
    comments: [
      {
        id: 1,
        text: "text 15",
      },
      {
        id: 17,
        text: "text 25",
      }
    ]
  },
  {
    id: 3,
    title: 'item two',
    comments: [
      {
        id: 132,
        text: "text 15",
      },
      {
        id: 5,
        text: "text 25",
      }
    ]
  },
],
activeItem: null,
};

const store = createStore(rootReducer, initialState);

export default store;
