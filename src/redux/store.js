import { createStore } from 'redux';
import rootReducer from './reducer.js';
import localStorage from './../localStorage.js';

const initialState = {
  items: [
    {
    id: 1,
    title: 'First item',
    comments: [
      {
        text: "comment one",
      },
      {
        text: "comment two",
      }
    ]
  },
  {
    id: 2,
    title: 'Second item',
    comments: [
      {
        text: "comment one",
      },
      {
        text: "comment two",
      }
    ]
  },
],
activeItem: null,
};

const persistedState = localStorage.loadState() ? localStorage.loadState() : initialState;
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(() => {
  localStorage.saveState({
    items: store.getState().items,
    activeItem: store.getState().activeItem
  });
});

export default store;

