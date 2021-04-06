import React, {useState} from 'react';
import {TaskRow} from './components/TaskRow';
import {TaskBanner} from './components/TaskBanner';
function App() {

  const [userName, setuserName] = useState('Karina');
  const [TaskItems, setTaskItems] = useState([
    {name: 'Task one', done: true},
    {name: 'Task two', done: false},
    {name: 'Task three', done: true},
    {name: 'Task four', done: false}
  ])
  const toggleTask =task =>
    setTaskItems( TaskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  
  const taskTableRows = () =>TaskItems.map(task =>(
    <TaskRow task= {task} key={task.name} toggleTask= {toggleTask}></TaskRow>
  )) /* Funcion que recibe TaskRow.js */
  
  return (
    <div>
      <TaskBanner userName = {userName} /*Pasando el nombre del usuario*/TaskItems= {TaskItems} /*Pasando todas las tareas*/></TaskBanner>
      <table className="table table-striped table-border">
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
    </div>
  );
}

export default App;
