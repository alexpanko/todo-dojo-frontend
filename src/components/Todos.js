//Bootstratp
import ListGroup from 'react-bootstrap/ListGroup';

//Components
import Todo from './Todo';
//Redux
import { useSelector } from "react-redux";

const Todos = () => {

  const todos = useSelector((state)=>{
		return state.todos;
	});

  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ListGroup>
  );
};

export default Todos;
