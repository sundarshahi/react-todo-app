import React from 'react';

import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import useTodoTools from './useTodoTools'

function TodoPage (){
 const {
     item,
     items,
     handleChange,
     handleDelete,
     handleEdit,
     handleSubmit,
     editItem,
     clearList
    } = useTodoTools()

    return (
      <div className="container">
        <div className="row" >
          <div className="col-10 mx-auto col-md-8 mt-5 ">
            <h3 className="text-capitalize text-center ">todo input
            </h3>
            <TodoInput
              item={item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
export default TodoPage;
