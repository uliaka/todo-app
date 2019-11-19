import React from 'react';
import Card from '../components/card/Card.js';
import TodoItem from '../components/todoItem/TodoItem.js';
import AddTodoItem from '../components/addTodoItem/AddTodoItem.js';
import { useSelector, useDispatch } from 'react-redux';
import Types from '../redux/types.js';
import ItemsDetails from './ItemDetailsPage.js'
import { background } from '@storybook/theming';

const TodoItems = () => {
  const dispatch = useDispatch();
  let items = useSelector(state => state.items)
  const activeItem = useSelector(state => state.activeItem)
  const openItem = (item) => dispatch({ type: Types.ACTIVE_ITEM, payload: item.id })
  const onDelete = (item) => dispatch({ type: Types.DELETE_ITEM, payload: item });
  const onAdd = (item) => dispatch({ type: Types.ADD_ITEM, payload: item });

  const containerStyles = {
    display: 'flex',
  }

  const sideBar = {
    width: '10%',
    height: '800px',
    backgroundColor: '#2C2F3E',
    zIndex: 100,
    display: 'block'
  }

  return (
    <div className="container" style={containerStyles}>
      <div style={sideBar}></div>
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
      { activeItem &&
      <ItemsDetails />
      }
    </div>
  );
}

export default TodoItems;
