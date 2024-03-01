import { useState , useEffect } from 'react';
import './App.css';
import { PartAdd } from './component/PartAdd';
import { FooterElem } from './component/FooterElem';
import { TasksList } from './component/TasksList';


const testTodos = [
  {
    text: 'Привет дорогуша!',
    id: 843,
    isChecked: false,
    isEdited: false,
  },
];

function App() {
  const [todosArray, setTodosArray] = useState([]);


  useEffect(() => {
    if(localStorage.getItem('localTodos') === null){
      setTodosArray([])
    } else {
      const newArr = JSON.parse(localStorage.getItem('localTodos'))
      setTodosArray(newArr)
    }
    
  }, [])

  console.log(todosArray);

  return (
    <div className="App">
      {/* <button onClick={getInitialTodos}>get todos</button> */}
      <div className="todo">
        <div className="header-part">
          <h1>My To-Do</h1>
        </div>
        <PartAdd setTodosArray={setTodosArray} todosArray={todosArray} />
        <TasksList todosArray={todosArray} setTodosArray={setTodosArray}/>
        <FooterElem setTodosArray={setTodosArray} todosArray={todosArray}/>
      </div>
    </div>
  );
}

export default App;
