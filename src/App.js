// Bootstrap
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

// Components
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

// Hooks
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all totos
  useEffect(() => {
    fetcher();
  }, [todos]);

  const fetcher = () => {
    fetch('https://todo-dojo-api.herokuapp.com/api/v1/todo')
      .then((resp) => resp.json())
      .then(({ data }) => setTodos(data));
  };

  // Add todo
  const addTodo = ({ task }) => {
    async function addTodo() {
      await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: task }),
      });
      fetcher();
    }

    addTodo();
  };

  // Delete Todo
  const onDeleteHandler = (id) => {
    async function deleteTodo() {
      await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/${id}`, {
        method: 'DELETE',
      });
    }

    deleteTodo();
  };

  // Toogle todo completed
  const onToogleHandler = (id, completed) => {
    let isCompleted;
    if (completed === true) {
      isCompleted = false;
    } else {
      isCompleted = true;
    }

    async function toogleTodo() {
      await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: isCompleted }),
      });
    }

    toogleTodo();
  };

  return (
    <Container style={{ maxWidth: 750 }}>
      <Header />
      <AddTodo onAdd={addTodo} />
      <Todos
        onDeleteHandler={onDeleteHandler}
        onToogleHandler={onToogleHandler}
        todos={todos}
      />
      <p className="text-muted small font-weight-light text-center my-3">
        © Alex "Ninja" Panko
      </p>
    </Container>
  );
}

export default App;
