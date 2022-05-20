import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalendarIcon from "react-calendar-icon";
import Calendar from "react-calendar";
import "./Reminders.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarList from "../Reminders/Calendar/CalenderList.js";
function ToDo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>
        <Button variant="outline danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <h3>Add Reminder</h3>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new reminder"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Save
      </Button>
    </Form>
  );
}

const Reminders = () => {
  const [todos, setTodos] = React.useState([
    // {
    //   text: "This is a sampe todo",
    //   isDone: false,
    // },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      {/* <h1>Reminders</h1> */}
      {/* <CalendarIcon date={new Date()} /> */}
      {/* <Button
        component={Link}
        to={<CalendarList />}
        variant="primary"
        color="primary"
        >
        Calendar
      </Button> */}
      {/* <Calendar value={value} onChange={onChange} /> */}
      <div className="app">
        <div className="container">
          {/* <h1 className="text-center mb-4">Todo List</h1> */}
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <ToDo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <CalendarList />
    </div>
  );
};

export default Reminders;
