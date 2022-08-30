//Bootstratp
import ListGroup from 'react-bootstrap/ListGroup';
//Components
import Todo from './Todo';

const Todos = ({ todos, onDeleteHandler, onToogleHandler }) => {
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
