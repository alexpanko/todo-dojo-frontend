//State management and Redux
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../redux/todosSlice';
//Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//Components
import AlertAddTask from './AlertAddTask';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('')
  const [id, setId] = useState('')
  const [isNotSubmitted, setIsNotSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    //Popup
    // if(!task) {
    //   alert('Please add a task')
    //   return
    // }

    if(!task) {
      setIsNotSubmitted(true)
      return
    }

    dispatch(
      todoAdded({
        text: task,
        id: id
      })
    )

    setTask('')
    setIsNotSubmitted(false)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
    setId(Math.floor(Math.random() * 10000))
  }

  return (
<div>
<Form onSubmit={handleSubmit}>
      <InputGroup className="my-3">
        <FormControl
          type="text"
          maxLength="100"
          placeholder="Enter todo"
          value={task}
          onChange={handleChange}
        />
        <Button variant="secondary" type="submit">
          <i className="bi bi-plus-circle-fill font-weight-bold h4"></i>
        </Button>
      </InputGroup>
    </Form>
    {isNotSubmitted && <AlertAddTask />}
</div>
  );
};

export default AddTodo;
