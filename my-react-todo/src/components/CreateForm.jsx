import { useState } from "react";

function CreateForm({addTodo}) {

  const [content,setContent] = useState('')
  function handleSubmit(e){
    e.preventDefault();
    addTodo(content);
    setContent('');
  }

  return (
    <form className="CreateForm" onSubmit={handleSubmit}> 
      <input type="text" placeholder="輸入代辦事項" value={content} onChange={function(e){setContent(e.target.value)}}></input>
      <button type="submit">加入</button>
    </form>
  );
}
export default CreateForm;


