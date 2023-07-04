import { collection, onSnapshot, query,orderBy } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react"
import {db} from "../firebase";
import Todo from "../components/Todo";
const TodoList=()=>{
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        const collectionRef=collection(db,"todos");
        const q=query(collectionRef,orderBy("timestamp","desc"));
        const unsubcribe=onSnapshot(q,(querySnapshot)=>{
            setTodos(querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id,timestamp:doc.data().
            timestamp?.toDate().getTime()})))
        });
        return unsubcribe
    },[])
    return(
        <div>
            {todos.map(todo=>
                <Todo key={todo.id}
                title={todo.title} 
                detail={todo.detail} 
                timestamp={todo.timestamp}
                />)} 
        </div>
    )
}
export default TodoList;