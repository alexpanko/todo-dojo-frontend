import ListGroup from 'react-bootstrap/ListGroup';
import Task from './Task';

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ListGroup>
  );
};

export default Tasks;
