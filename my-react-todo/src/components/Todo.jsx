import { MdDelete, MdEdit } from "react-icons/md";
function Todo({todo,deleteTodo,toggleComplete}){
    return<div className={`todo ${todo.isCompleted ? 'completed' : ''} `}>
        <p onClick={function(){toggleComplete(todo.id)}}>{todo.content}</p>
        <div> 
            <MdEdit style={{cursor:'pointer'}} />
            <MdDelete onClick={function(){deleteTodo(todo.id)}} style={{cursor:'pointer',marginLeft:'5px'}} />
        </div>
        
    </div>
}
export default Todo;