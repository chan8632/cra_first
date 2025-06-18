import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
    console.log(
      toDos.map((items, idx) => {
        return <li key={idx}>{items}</li>;
      })
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write todo"
        />
        <button>Add To Do</button>
        <ul>
          {toDos.map((items, idx) => {
            return <li key={idx}>{items}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
