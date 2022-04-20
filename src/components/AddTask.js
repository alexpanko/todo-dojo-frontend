import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!task) {
      alert('Please add a task')
      return
    }

    onAdd({ task })

    setTask('')
  };

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
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
  );
};

export default AddTask;
