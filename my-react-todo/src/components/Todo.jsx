import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./Editform";
function Todo({todo,deleteTodo,toggleComplete,toggleEditing ,editTodo}) {
    return todo.isEditing ? <EditForm todo={todo} editTodo={editTodo}></EditForm>
    :<div className={`todo ${todo.isCompleted ? 'completed' : ''} `}>
        <p onClick={function(){toggleComplete(todo.id)}}>{todo.content}</p>
        <div> 
            <MdEdit onClick={function(){toggleEditing(todo.id)}} style={{cursor:'pointer'}} />
            <MdDelete onClick={function(){deleteTodo(todo.id)}} style={{cursor:'pointer',marginLeft:'5px'}} />
        </div>
        
    </div>
}
export default Todo;