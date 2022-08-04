//Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// RTK Query API
// import { useDeleteTodoMutation } from '../redux/todosApi';

const Todo = ({ id, task, completed }) => {

  const onDeleteHandler = (id) => {
    console.log(`Delete todo with id of ${id}`);
  };

  const toogleTodo = (id) => {
    console.log(`Toogle todo with id of ${id}`);
  };

  return (
    <ListGroup.Item>
      <Container fluid className="p-0">
        <Row>
          <Col xs={1}>
            <Form.Check type="checkbox" onChange={() => toogleTodo(id)} />
          </Col>
          <Col
            className={`${
              completed && 'text-decoration-line-through text-secondary'
            }`}
            xs={10}
          >
            {task}
          </Col>
          <Col xs={1} className="d-flex justify-content-end">
            <Button
              variant="light"
              style={{
                backgroundColor: 'white',
                border: '0px',
                padding: '0px',
              }}
              onClick={() => onDeleteHandler(id)}
            >
              <i className="bi bi-trash h4 text-secondary"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default Todo;
