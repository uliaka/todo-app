import React from 'react';
import Card from '../components/card/Card.js';
import TodoItem from '../components/todoItem/TodoItem.js';
import AddTodoItem from '../components/addTodoItem/AddTodoItem.js';
import { useSelector, useDispatch } from 'react-redux';
import Types from '../redux/types.js';


function TodoItems(props) {
  const dispatch = useDispatch();
  let items = useSelector(state => state.items)
  const openItem = (item) => props.history.push(`/item/${item.id}`, { item });
  const onDelete = (item) => dispatch({ type: Types.DELETE_ITEM, payload: item });
  const onAdd = (item) => dispatch({ type: Types.ADD_ITEM, payload: item });
  return (
    <div className="todo-list" style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
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
    </div>
  );
}

export default TodoItems;
