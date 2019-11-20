import React from 'react';
import Card from '../components/card/Card.js';
import TodoItem from '../components/todoItem/TodoItem.js';
import AddTodoItem from '../components/addTodoItem/AddTodoItem.js';
import { useSelector, useDispatch } from 'react-redux';
import Types from '../redux/types.js';
import ItemsDetails from './ItemDetailsPage.js';
import './TodoItemsPage.scss';

const TodoItems = () => {
  const dispatch = useDispatch();
  let items = useSelector(state => state.items)
  const activeItem = useSelector(state => state.activeItem)
  const openItem = (item) => dispatch({ type: Types.ACTIVE_ITEM, payload: item.id })
  const onDelete = (item) => dispatch({ type: Types.DELETE_ITEM, payload: item });
  const onAdd = (item) => dispatch({ type: Types.ADD_ITEM, payload: item });

  const sideBar = {
    width: '10%',
    height: '800px',
    backgroundColor: '#2C2F3E',
    zIndex: 100,
    display: 'block',
    color: 'white'
  }

  return (
    <div className='container'>
      <div className='side-bar'>
        <h2>dairy app</h2>
        <p>Comment with no sense</p>
      </div>
      <Card
        first
        title={'Items'}
        body={
          <div>
            <AddTodoItem onAdd={onAdd} />
            {items.map(item =>
              <TodoItem
                {...item}
                key={item.id}
                onOpen={() => openItem(item)}
                onDelete={(e) => {
                  e.stopPropagation()
                  onDelete(item)
                }}
              />
            )}
          </div>
        }
      />
      {activeItem &&
        <ItemsDetails />
      }
    </div>
  );
}

export default TodoItems;
