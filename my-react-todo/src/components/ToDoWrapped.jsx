import { use, useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
function ToDoWrapper() {

  const [todos,setTodos] = useState([
    {content:'打掃廁所',id:Math.random(),isCompleted:false,isEditing:false},
    {content:'買菜',id:Math.random(),isCompleted:false,isEditing:false},
  ]);

  function addTodo(content){
    const newTodo={content:content,id:Math.random(),isCompleted:false,isEditing:false};
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


  function toggleEditing(id){
    setTodos(todos.map(function(todo){
      return todo.id === id 
      ? {...todo,isEditing:!todo.isEditing} 
      : todo;
    }))
  }

  function editTodo(id,newContent){
    setTodos(todos.map(function(todo){
      return todo.id === id 
      ? {...todo,content:newContent,isEditing:false} 
      : todo;
    }))
  }

  return (
    <div className="ToDoWrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo}></CreateForm>
      {todos.map(function(todo){
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleComplete={toggleComplete} 
        toggleEditing={toggleEditing} editTodo={editTodo}></Todo>
      })
      }
    </div>
  );
}
export default ToDoWrapper;
