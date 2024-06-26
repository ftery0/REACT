import { useEffect, useState } from "react";
import "./app.css"
import axios from 'axios';

const ServerURL="http://localhost:4000/api/todo";
function App() {
  const fetchData= async()=>{
   const response= await axios.get(ServerURL)
      setTodoList(response.data);
    // fetch()
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };
  const [TodoList, setTodoList] = useState([]); // 초기값을 빈 배열로 설정
  useEffect(() => { fetchData()}, []);

  const onSubmitHander= async (e)=>{
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(ServerURL,{text,done});
    fetchData();
    // fetch('http://localhost:4000/api/todo',{
    //   method:"POST",
    //   headers: {
    //       'Content-Type' :'application/json',
    //   },
    //   body:JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());


  }
  return (
    <div className="APP_MOM">
    <div className="App">
      <h1>TodoList</h1>
      <form onSubmit={onSubmitHander}>
      <input name="text"/>
      <input name="done" type='checkbox'/>
      <input value='추가' type='submit'></input>
      </form>
      {TodoList?.map((todo) => (
  <div key={todo.id} style={{display:"flex"}}>
    <div className="todo-id">{todo.id}</div>
    <div className="todo-text">{todo.text}</div>
    <div className="todo-done">{todo.done?.toString()}</div> {/* Use optional chaining */}
  </div>
))}
    </div>
    </div>
  );
}

export default App;
