import React from 'react'
import { Todo } from '../models/model'
import SingleToDo from "./SingleToDo"

interface Props{
    todos:Array<Todo>;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todo">
        {todos.map((todo) =>{
            return <SingleToDo todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}/>
        })}
    </div>
  )
}

export default TodoList