import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddTask({ addTask }) {
  const [task, setTask] = useState({ id: 16, description: "", done: false });
  const handleChange = (event) => {
    setTask({
      ...task,
      id: Math.floor(Math.random() * 10000),
      description: event.target.value,
      done: false,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task)
    setTask({id:"",description:"",done: false});
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          onChange={handleChange}
          value={task.description}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTask;
