// Bootstratp
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// RTK Query API
import { useGetTodosQuery } from '../redux/todosApi';

// Components
import Todo from './Todo';

const Todos = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <div className="App">
      {error ? (
        <Container fluid className="p-0 mt-3">
          <Row>
            <Col>
              <p>Oh no, there was an error</p>
            </Col>
          </Row>
        </Container>
      ) : isLoading ? (
        <Container fluid className="p-0 mt-3">
          <Row>
            <Col>
              <p>Loading...</p>
            </Col>
          </Row>
        </Container>
      ) : data ? (
        <ListGroup>
          {data.data.map((todo) => (
            <Todo
              key={todo._id}
              id={todo._id}
              task={todo.task}
              completed={todo.completed}
            />
          ))}
        </ListGroup>
      ) : null}
    </div>
  );
};

export default Todos;
