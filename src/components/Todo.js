//Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

const Todo = ({ id, task, completed, onDeleteHandler, onToogleHandler }) => {
  // let navigate = useNavigate();

  //State not updated need to resolve
  // const onDeleteHandler = (id) => {
  //   console.log(`Delete todo with id of ${id}`);

  //   async function deleteTodo() {
  //     await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/${id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log('Task deleted');
  //     navigate('/');
  //   }

  //   deleteTodo();
  // };

  // const onToogleHandler = (id) => {
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
  //     navigate('/');
  //   }

  //   toogleTodo();
  // };

  return (
    <ListGroup.Item>
      <Container fluid className="p-0">
        <Row>
          <Col xs={1}>
            {completed === true ? (
              <Form.Check
                type="checkbox"
                defaultChecked
                onChange={() => onToogleHandler(id, completed)}
              />
            ) : (
              <Form.Check
                type="checkbox"
                onChange={() => onToogleHandler(id, completed)}
              />
            )}
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
