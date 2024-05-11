import TodoList from "./component/TodoList"
import  InputContextProvider  from './context/InputContextProvider'
import AddTodo from "./component/AddTodo"
function App() {
  
  return (
    <>

      <InputContextProvider>
    
          <AddTodo/>
          <TodoList/>
    
      </InputContextProvider>
    </>
  )
}

export default App
