import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import db from './firebase';
import './Todo.css'

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ♣" />
      </ListItem>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete ME</Button>
    </List>
  )
}

export default Todo
