import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core'
import db from './firebase';
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Todo(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  };
  
  const handleClose = () => {
    setOpen(false)
  };
 
  const updateTodo = () => {
    // update the todo with the new input text
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <input />
          <Button onClick={e => setOpen(false)}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline ♣" />
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>
    </>
  )
}

export default Todo
