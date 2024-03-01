import { useState } from 'react';

export const TasksList = ({ todosArray, setTodosArray }) => {
  const [inputForEdit, setInputForEdit] = useState('');

  const changeInputForEdit = (event) => {
    setInputForEdit(event.target.value)
  };

  const deleteTask = (id) => {
    const newDel = todosArray.filter((item) => item.id !== id);
    setTodosArray(newDel);

    localStorage.setItem('localTodos', JSON.stringify(newDel));
  };

  const okeyTask = (id) => {
    const newOk = todosArray.map((item) => {
      if (item.id === id) {
        const newObj = {
          ...item,
          isChecked: item.isChecked === true ? false : true,
        };
        return newObj;
      } else {
        return item;
      }
    });
    setTodosArray(newOk);
    localStorage.setItem('localTodos', JSON.stringify(newOk));
  };

  const editTask = (id) => {
    const newTodoArray = todosArray.map((item) => {
      if (item.id === id) {
        const newEditTodo = { ...item };
        newEditTodo.isEdited = !item.isEdited;
        return newEditTodo;
      } else {
        const newEditTodo = { ...item };
        newEditTodo.isEdited = false;
        return newEditTodo;
      }
    });
    setTodosArray(newTodoArray);
  };

  const saveEditedTask = (id) => {
    const arrayEdited = todosArray.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          text: inputForEdit,
          isEdited: false,
        };
        return newItem;
      } else {
        return item;
      }
    });
    setTodosArray(arrayEdited);
    setInputForEdit('');
  };

  return (
    <div>
      {todosArray.map((item, index) => {
        if (item.isEdited === false) {
          return (
            <div
              className={`listTodo ${
                item.isChecked === true ? 'shadowTodo' : ''
              }`}
              key={index}
            >
              <p className={item.isChecked === true ? 'compliteTodo' : ''}>
                {item.text}
              </p>
              <div>
                <button onClick={() => okeyTask(item.id)}>ok</button>
                <button onClick={() => editTask(item.id)}>edit</button>
                <button onClick={() => deleteTask(item.id)}>del</button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="listTodo" key={index}>
              <input
                className="inputForEdit"
                value={inputForEdit}
                onChange={changeInputForEdit}
              />
              <div>
                <button
                  className="buttonOk"
                  onClick={() => saveEditedTask(item.id)}
                >
                  ok
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
