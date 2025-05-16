import React from 'react'
import TaskTable from './components/TaskTable';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div className="container-fluid vh-100 text-white" style={{ backgroundColor: '#091c30' }}>
      <center className='py-3'>
        <h1>To do App</h1>
      </center>
      <div className="container">
        <div className='col-12 pt-3 pb-5 p-3 border-rounded' style={{ backgroundColor: 'rgb(61 150 170)', borderRadius: '10px', }}>
          <h4>Add Task</h4>
          <ToDoForm />
        </div>
        <div className='col-12 my-2'>
          <h3 className="py-2">Task list</h3>
          <TaskTable />
        </div>
      </div >
    </div >
  )
}

export default App
