import { use, useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
function ToDoWrapper() {

  const [todos,setTodos] = useState([
    {content:'打掃廁所',id:Math.random(),isCompleted:false},
    {content:'買菜',id:Math.random(),isCompleted:false},
  ]);

  function addTodo(content){
    const newTodo={content:content,id:Math.random(),isCompleted:false};
    setTodos([...todos,newTodo]);
  }

  function deleteTodo(id){
    setTodos(todos.filter(function(todo){
      return todo.id !== id;
    }))
  }

  function toggleComplete(id){
    setTodos(todos.map(function(todo){
      return todo.id === id 
      ? {...todo,isCompleted:!todo.isCompleted} 
      : todo;
    }))
  }
  return (
    <div className="ToDoWrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo}></CreateForm>
      {todos.map(function(todo){
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleComplete={toggleComplete}></Todo>
      })
      }
    </div>
  );
}
export default ToDoWrapper;
