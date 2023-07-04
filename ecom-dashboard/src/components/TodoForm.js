import { db } from "../firebase";
import { Button, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
const TodoForm=()=>{
    const [todo,setTodo]=useState({title:'',detail:''})
    const onSubmit=async()=>{
        const collectionRef=collection(db,"todos")
        const docRef=await addDoc(collectionRef,{...todo,timestamp:serverTimestamp()})
        setTodo({title:'',detail:''})
        alert(`Todo With id ${docRef.id} is added successfully`)
    }
    return(
        <div>
            {/* <pre>{JSON.stringify(todo)}</pre> */}
            <TextField fullWidth label="tittle" margin="normal" value={todo.title}
            onChange={e=>setTodo({...todo,title:e.target.value})}
            />
            <TextField fullWidth label="detail" margin="normal" multiline maxRows={4} value={todo.detail}
            onChange={e=>setTodo({...todo,detail:e.target.value})}
            />
            <Button onClick={onSubmit} variant="contained" sx={{mt:3}}>Add new Todo</Button>
        </div>
    )
}
export default TodoForm;