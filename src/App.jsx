import React, { useState } from 'react'
import TaskTable from './components/TaskTable';
import ToDoForm from './components/ToDoForm';

function App() {
  const [formData, setFormData] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editdata, setEditData] = useState({})
  const deleteTask = (id) => {
    setFormData((prev) => {
      return prev.filter((task) => (task.id !== id)
      )
    })
  }

  const completetask = (id) => {
    setFormData((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: true }
        }
      })
    })
  }

  const updateTask = (id, taskupdated, dataupdated, timeupdated) => {
    setFormData(() => {
      return formData.map((task) => {
        if (task.id === id) {
          return { ...task, task: taskupdated, date: dataupdated, time: timeupdated }
        }
      })
    })
  }

  const editTaskFormEnable = (task) => {
    setIsEditing(true);
    setEditData(task);
  }

  return (
    <div className="container-fluid vh-100 text-white" style={{ backgroundColor: '#091c30' }}>
      <center className='py-3'>
        <h1>To Do App</h1>
      </center>
      <div className="container">
        <div className='col-12 pt-3 pb-5 p-3 border-rounded' style={{ backgroundColor: 'rgb(61 150 170)', borderRadius: '10px', }}>
          <h4>Add Task</h4>
          <ToDoForm setFormData={setFormData} formData={formData} updateTask={updateTask} isEditing={isEditing} setIsEditing={setIsEditing} editdata={editdata} />
        </div>
        <div className='col-12 my-2'>
          <h3 className="py-2">Task list</h3>
          <TaskTable formData={formData} deleteTask={deleteTask} completetask={completetask} editTaskFormEnable={editTaskFormEnable} />
        </div>
      </div >
    </div >
  )
}

export default App
