import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/tododslice";

export default function addForm(){
    const [task, setTask] = useState("");
    const dispatch =useDispatch();

    const submitHandler =(evt)=>{
        evt.preventDefault();
        dispatch(addTodo(task));

    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=> setTask(e.target.value)} />
            <button>Add Task</button>
        </form>
        </>
    )
}