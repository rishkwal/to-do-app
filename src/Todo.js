import React from 'react'
import {  ListItem, ListItemText, ListItemAvatar, List, Button } from '@material-ui/core'
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText 
                primary = {props.todo.todo}
                secondary="Dummy deadline"/>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} DELETE ME />
            </ListItem>
        </List>
    )
}

export default Todo
