import React, { useContext, useEffect, useState } from 'react';
import inputContext from '../context/context';

const TodoList = () => {
  const { data } = useContext(inputContext);
  const [myTodo, setMyTodo] = useState([]);

  const handleDelete = (index) => {
    setMyTodo((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  useEffect(() => {

    setMyTodo((prevTodos) => [data.todo, ...prevTodos]);

  }, [data.todo]);
  

  const num = myTodo.map((test, index) => {
    return (
      <>
      {test == null? "" :<div className="flex justify-center">
      <ul key={index} className='flex gap-x-44 border-2 border-black m-2'>
        
        <li className='p-4'>
          {test}
        </li>
        {test == null ? '' : <button className='border-2 border-red-700 bg-red-700 p-4 text-center align-item-center w-auto' onClick={() => handleDelete(index)}>Delete</button>}
      </ul> 
    </div> }
      </>
      
    );
  });


  return (
    <>{num}</>
  );
};

export default TodoList;
