import React, {useState} from 'react';
import {TaskRow} from './components/TaskRow';
import {TaskBanner} from './components/TaskBanner';
import{TaskCreator} from './components/TaskCreator';
import {VisibilityContro} from './components/VisibilityControl';

function App() {
  const [userName, setuserName] = useState('Karina');
  const [TaskItems, setTaskItems] = useState([
    {name: 'Task one', done: true},
    {name: 'Task two', done: false},
    {name: 'Task three', done: true},
    {name: 'Task four', done: false}
  ])
  const [showCompleted, setshowCompleted] = useState(true);


  const createNewTasks = taskName =>{
    if(!TaskItems.find(t=> t.name === taskName)){
      setTaskItems([... TaskItems,{name: taskName , done:false}]) /*Agrega una tarea nueva */
    }
  } 

  const toggleTask =task =>
    setTaskItems( TaskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  
  const taskTableRows = () =>TaskItems.map(task =>(
    <TaskRow task= {task} key={task.name} toggleTask= {toggleTask}></TaskRow>
  )) /* Funcion que recibe TaskRow.js */
  
  return (
    <div>
      <TaskBanner userName = {userName} /*Pasando el nombre del usuario*/TaskItems= {TaskItems} /*Pasando todas las tareas*/></TaskBanner>
      <TaskCreator callback={createNewTasks}></TaskCreator>
      <table className="table table-striped table-border table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()/*llama a la funcion */} 
        </tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityContro description="Completed Task" isChecked={showCompleted}
        callback={checked => setshowCompleted(checked)}></VisibilityContro>
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-border table-hover"> 

          </table>
        )
      }

    </div>
  );
}

export default App;
