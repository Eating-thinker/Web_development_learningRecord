import { use, useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
function ToDoWrapper() {

  const [todos,setTodos] = useState([
    {content:'打掃廁所',id:Math.random()},
    {content:'買菜',id:Math.random()},
  ]);

  function addTodo(content){
    const newTodo={content:content,id:Math.random()};
    setTodos([...todos,newTodo]);
  }

  return (
    <div className="ToDoWrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo}></CreateForm>
      {todos.map(function(todo){
        return <Todo todo={todo} key={todo.id}></Todo>
      })
      }
    </div>
  );
}
export default ToDoWrapper;
