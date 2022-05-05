// Bootstrap
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

// Components
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <Container style={{ maxWidth: 750 }}>
      <Header />
      <AddTodo />
      <Todos />
      <p className="text-muted small font-weight-light text-center my-3">
        © Alex "Ninja" Panko
      </p>
    </Container>
  );
}

export default App;
