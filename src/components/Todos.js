//Bootstratp
import ListGroup from 'react-bootstrap/ListGroup';
//Components
import Todo from './Todo';

//Hooks
import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  // Fetch all totos
  useEffect(() => {
    fetch('https://todo-dojo-api.herokuapp.com/api/v1/todo')
      .then((resp) => resp.json())
      .then(({ data }) => setTodos(data));
  }, []);

  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          id={todo._id}
          task={todo.task}
          completed={todo.completed}
        />
      ))}
    </ListGroup>
  );
};

export default Todos;
