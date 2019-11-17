import React from 'react';
import Card from '../components/card/Card.js';
import TodoItem from '../components/todoItem/TodoItem.js';
import AddTodoItem from '../components/addTodoItem/AddTodoItem.js';
import { useSelector } from 'react-redux';

function TodoItems(props) {
  const items = useSelector(state => state.items)
  const openItem = (item) => props.history.push(`/item/${item.id}`, { item });
  const onDelete = () => {}

  return (
    <div className="todo-list">
      <Card
        title={'Items'}
        body={
          <div>
            <AddTodoItem />
              {items.map(item =>
                <TodoItem
                  {...item}
                  key={item.id}
                  onOpen={() => openItem(item)}
                  onDelete={onDelete}
                />
              )}
          </div>
        }
      />
    </div>
  );
}

export default TodoItems;
