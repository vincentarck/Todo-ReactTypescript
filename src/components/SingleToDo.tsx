import React, { useState } from "react";
import { Todo } from "../models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";


interface Props {
  // Object yg punya interface dari Todo
  todo: Todo;
  // Array of object, masing" array punya interface Todo
  todos: Todo[];
  // Tipe nya di generate sendiri sama Typescript, waktu kita hover ke setTodo
  // Karna kita mengirim nilai baru ke todo, dinamakan Dispatch 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
// Aturan di typescript, setiap komponen itu tipenya React.FuncionalComponent
// disini kita extend dengan interface diatas utk props InputField nya <Props>
const SingleToDo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent,id: number) => {
      e.preventDefault()
      setTodos(todos.map(todo => todo.id === id ? {...todo, todo:newTodo} : todo))
      setEdit(false)
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input placeholder={todo.todo} type="text" onChange={(e) => setNewTodo(e.target.value)}/>
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => {if(!edit && !todo.isDone)setEdit(!edit)}}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
