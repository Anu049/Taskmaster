import { useState, useEffect } from 'react';
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracter from './Components/ProgressTracter'
import './Style.css'


export default function App() {
  const[tasks, setTasks] =  useState([]);

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
     setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
  const newtask = [...tasks];
   newtask[index]= updatedTask;
  setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) =>i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div>
      <header>
      <h1>Task Master</h1>
      <p><i>Organiz.Track.Achieve</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <ProgressTracter tasks={tasks}/>

      {tasks.length>0 && <button className='clear-btn' onClick={clearTasks}>Clear All Tasks</button>}
    </div>
  )
}
