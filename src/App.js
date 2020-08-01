import React,{useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input ,InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

//when the app loads, we need to listen to the database and fetch new todos as they get added/remove
useEffect(()=>{
  //this code here loads when app.js fires
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    // console.log(setTodos(snapshot.docs.map(doc => doc.data().todo)))
    setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
  })
}, [])

  console.log(input)

  const addTodo = (event) => {
    //this will fire off when we click the button
    setInput('');//clear up the input after hitting enter or clicking submit
    event.preventDefault();
    console.log("haha hehe");
    setTodos([...todos,input]);

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className="App">
     <h1>Hello to To-Do by Rishabh</h1>
     <form>
     {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
     
     <FormControl>
  <InputLabel >Write a ToDo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)} />
  
</FormControl>
     
     <Button disabled={!input} type='Submit' onClick = {addTodo} variant="contained" color="primary">
     Add Todo
</Button>
     </form>
     <ul>
     {todos.map( todo =>  
  <Todo todo={todo}/>
     )}
     </ul>
    </div>
  );
}

export default App;
