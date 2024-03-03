import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const TasksList = ({ todosArray, setTodosArray }) => {
  const [inputForEdit, setInputForEdit] = useState('');

  const changeInputForEdit = (event) => {
    setInputForEdit(event.target.value);
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
    <Box>
      {todosArray.map((item, index) => {
        if (item.isEdited === false) {
          return (
            <Container key={index} opacity={item.isChecked === true ? 0.5 : 1}>
              <Text
                textDecoration={
                  item.isChecked === true ? 'line-through' : 'none'
                }
              >
                {item.text}
              </Text>
              <Container>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  onClick={() => okeyTask(item.id)}
                >
                  ok
                </Button>
                <Button onClick={() => editTask(item.id)}>edit</Button>
                <Button onClick={() => deleteTask(item.id)}>del</Button>
              </Container>
            </Container>
          );
        } else {
          return (
            <Container key={index}>
              <Input
                variant="filled"
                value={inputForEdit}
                onChange={changeInputForEdit}
              />
              <Container>
                <Button onClick={() => saveEditedTask(item.id)}>ok</Button>
              </Container>
            </Container>
          );
        }
      })}
    </Box>
  );
};
