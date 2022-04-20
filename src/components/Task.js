import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <ListGroup.Item>
      <Container fluid className="p-0">
        <Row>
          <Col xs={1}>
            <Form.Check
              type="checkbox"
              id={task.id}
              onChange={() => onToggle(task.id)}
            />
          </Col>
          <Col
            className={`${
              task.status && 'text-decoration-line-through text-secondary'
            }`}
            xs={10}
          >
            {task.task}
          </Col>
          <Col xs={1} className="d-flex justify-content-end">
            <Button
              variant="light"
              id="deleteTask"
              style={{
                backgroundColor: 'white',
                border: '0px',
                padding: '0px',
              }}
              onClick={() => onDelete(task.id)}
            >
              <i className="bi bi-trash h4 text-secondary"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default Task;
