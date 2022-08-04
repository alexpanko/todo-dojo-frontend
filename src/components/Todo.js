//Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//Redux
// import { useDispatch } from "react-redux";
// import { todoDeleted, todoToggled } from "../redux/todosSlice";

const Todo = ({ id, task, completed }) => {
  // const dispatch = useDispatch();

  const deleteTodo = () => {
    console.log('Delete todo');
    
    // dispatch(
    // 	todoDeleted({id: id})
    // )
  };

  const toogleTodo = () => {
    console.log('Toogle todo');

    // dispatch(
    // 	todoToggled({
    // 		id: id
    // 	})
    // )
  };

  return (
    <ListGroup.Item>
      <Container fluid className="p-0">
        <Row>
          <Col xs={1}>
            <Form.Check type="checkbox" onChange={() => toogleTodo()} />
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
              onClick={() => deleteTodo()}
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
