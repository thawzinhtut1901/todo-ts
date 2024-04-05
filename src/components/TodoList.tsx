import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
import {v4 as uuidv4}  from 'uuid';

uuidv4()

const TodoList = () => {
  const [todoValue , setTodo] = useState<any>([]);

  const createToDo = todo => {
    setTodo([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
  };
  
  const deleteTodo = id => {
    setTodo(todoValue.filter(todo => todo.id!== id))
  };

  const editTodo = id => {
    setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
  };

  const editTask = (task, id) => (
    setTodo(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo)  )
  )
    return (
    <div className="bg-zinc-800 mx-[200px] p-8 rounded-md text-center">
      <Form createToDo = {createToDo}/>
      {
        todoValue.map((todo, index) => (
          todo.isEditing ? (
            <Edit key={index} editTodo={editTask} task={todo}/>
          ) : (<Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>)
          
        ))
      }
    </div>
  )
}

  

export default TodoList;