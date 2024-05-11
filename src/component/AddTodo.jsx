import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import inputContext from '../context/context'
const AddTodo = () => {
 
    const [todo, setTodo] = useState('')

    const {setData} = useContext(inputContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo === ''){
            alert('please enter the todo to submit');
        }
        else{
            setData({todo})
            setTodo('')
        }
        
    }

  return (
    <div className='m-5'>
       
        <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
        <input type='text'
        className='border-2 border-black px-10 py-2'
        value={todo}
        onChange={(e) => setTodo(e.target.value) }
        placeholder='Add-Todo-Here'  />
        
        <button className='border-2 border-black px-5 py-2'>Submit</button>
        </form>
        </div>
            
    </div>
  )
}


export default AddTodo