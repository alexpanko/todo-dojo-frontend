//State management and Redux
import { useState } from 'react';
//Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//Components
import AlertAddTask from './AlertAddTask';

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState('')
  const [isNotSubmitted, setIsNotSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!task) {
      setIsNotSubmitted(true)
      return
    }

    // async function addTodo() {
    //   await fetch(`https://todo-dojo-api.herokuapp.com/api/v1/todo/`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ task: task }),
    //   });
    //   console.log('Task added');
    // }

    // addTodo();

    onAdd({ task })
    setTask('')
    setIsNotSubmitted(false)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
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
