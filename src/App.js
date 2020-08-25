import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires the the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, [])

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault()  // will stop the REFRESH, so no need refresh to add Todos when input text on input tag

    console.log('Im Working!!!')
    setTodos([
      ...todos, input
    ])

    setInput('')
  }
  

  return (
    <div className="App">
      <h1>To Do App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>          
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
