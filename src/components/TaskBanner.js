import React from 'react';

export const TaskBanner = props => (
    <h4 className="bg-info text-white text-center p-3">
        {props.userName} Task App ({props.TaskItems.filter(t => !t.done).length/*Devuelve las tareas que tienen 
        en estado done FALSE  */} Pendind Task )</h4>
) 