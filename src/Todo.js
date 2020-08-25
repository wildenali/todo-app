import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import db from './firebase';
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ♣" />
      </ListItem>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
  )
}

export default Todo
