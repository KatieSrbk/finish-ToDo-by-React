import { useState } from 'react';

export const PartAdd = ({ setTodosArray, todosArray }) => {
  const [inputText, setInputText] = useState('');

  const changeInput = (event) => {
    setInputText(event.target.value);
  };

  const clickOnAdd = () => {
    if (inputText == '') {
      return;
    } else {
      const newTodo = {
        text: inputText,
        id: Math.random(),
        isChecked: false,
        isEdited: false,
      };
      const newTask = [newTodo, ...todosArray];
      setTodosArray(newTask);
      setInputText('');
      localStorage.setItem('localTodos', JSON.stringify(newTask));
    }
  };

  const filterAllTodos = (valueToFilter) => {
    const todosFromLocal = localStorage.getItem('localTodos')
      ? JSON.parse(localStorage.getItem('localTodos'))
      : [];

    if (valueToFilter === 'all') {
      const newArr = [...todosFromLocal];
      setTodosArray(newArr);
    }
    if (valueToFilter === 'active') {
      const newArr = todosFromLocal.filter((item) => item.isChecked === false);
      setTodosArray(newArr);
    }
    if (valueToFilter === 'complite') {
      const newArr = todosFromLocal.filter((item) => item.isChecked === true);
      setTodosArray(newArr);
    }
  };

  return (
    <div className="part-add">
      <input
        type="text"
        onChange={changeInput}
        value={inputText}
        placeholder="Write your task"
      ></input>
      <button onClick={clickOnAdd}>Add</button>
      <div className="select">
        <select
          name="todos"
          className="filterTodo"
          onChange={(event) => filterAllTodos(event.target.value)}
        >
          <option>all</option>
          <option>active</option>
          <option>complite</option>
        </select>
      </div>
    </div>
  );
};
