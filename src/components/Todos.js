//Bootstratp
import ListGroup from 'react-bootstrap/ListGroup';
//Components
import Todo from './Todo';

//Hooks
// import { useEffect, useState } from 'react';

const Todos = ({todos, onDeleteHandler, onToogleHandler}) => {
  // const [todos, setTodos] = useState([]);
  // const [updateTodos, setUpdateTodos] = useState(false);

  // // Fetch all totos
  // useEffect(() => {
  //   fetch('https://todo-dojo-api.herokuapp.com/api/v1/todo')
  //     .then((resp) => resp.json())
  //     .then(({ data }) => setTodos(data))
  //     .then(() => setUpdateTodos(false));
  // }, [updateTodos]);

  // // Delete Todo
  // const onDeleteHandler = (id) => {
  //   async function deleteTodo() {
  //     await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/${id}`, {
  //       method: 'DELETE',
  //     });
  //     setUpdateTodos(true);
  //   }

  //   deleteTodo();
  // };

  // // Toogle todo completed
  // const onToogleHandler = (id, completed) => {
  //   let isCompleted;
  //   if (completed === true) {
  //     isCompleted = false;
  //   } else {
  //     isCompleted = true;
  //   }
  //   console.log(`Toogle todo with id of ${id}`);

  //   async function toogleTodo() {
  //     await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/${id}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ completed: isCompleted }),
  //     });
  //     console.log('Task updated');
  //     console.log(isCompleted);
  //     setUpdateTodos(true);
  //   }

  //   toogleTodo();
  // };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          id={todo._id}
          task={todo.task}
          completed={todo.completed}
          onDeleteHandler={onDeleteHandler}
          onToogleHandler={onToogleHandler}
        />
      ))}
    </ListGroup>
  );
};

export default Todos;
