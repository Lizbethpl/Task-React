import React ,{useState} from 'react';


export const TaskCreator = props => {

    const [newTaskName, setnewTaskName] = useState('');     /*Definir un estado de un nuevo nombre de una tarea */

    const updateNewTaskValue = e =>setnewTaskName(e.target.value); /*Funcion que actualiza el nombre de la tarea */

    const createNewTask =()=>{
        props.callback(newTaskName);
        setnewTaskName('');
    }
    return(
        <div className="my-1 mb-3">
            <input type="text" 
            className="form-control"
            value={newTaskName}
            onChange={updateNewTaskValue}
            placeholder="Writing task.."/>

            <button className="btn btn-primary mt-1" onClick={createNewTask}>ADD</button>
        </div>
    )
}