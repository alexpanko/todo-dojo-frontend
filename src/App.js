import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const status = false;
    const newTask = { id, status, ...task };
    setTasks([...tasks, newTask]);
  };

  // Toogle done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container style={{ maxWidth: 750 }}>
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onToggle={toggleDone} onDelete={deleteTask} />
      <p className="text-muted small font-weight-light text-center my-3">
        © Alex "Ninja" Panko
      </p>
    </Container>
  );
}

export default App;
