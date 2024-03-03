import { useState, useEffect } from 'react';
import { PartAdd } from './component/PartAdd';
import { FooterElem } from './component/FooterElem';
import { TasksList } from './component/TasksList';
import { Box, Container, Heading } from '@chakra-ui/react';

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
    if (localStorage.getItem('localTodos') === null) {
      setTodosArray([]);
    } else {
      const newArr = JSON.parse(localStorage.getItem('localTodos'));
      setTodosArray(newArr);
    }
  }, []);


  return (
    <Box textAlign="center">
      <Box>
        <Container>
          <Heading as="h1" fontSize="4xl">
            My To-Do
          </Heading>
        </Container>
        <PartAdd setTodosArray={setTodosArray} todosArray={todosArray} />
        <TasksList todosArray={todosArray} setTodosArray={setTodosArray} />
        <FooterElem setTodosArray={setTodosArray} todosArray={todosArray} />
      </Box>
    </Box>
  );
}

export default App;
