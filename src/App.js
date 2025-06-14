import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
    console.log(toDo);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  }
  return (
    <div>
      <form onSubmit={onSubmit}> 
        <input
          onChange={onChange}
          value={toDo}
          placeholder="할일 입력"
          type="text"
        />
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
