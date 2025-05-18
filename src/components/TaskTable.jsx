import React from 'react'
import TableRow from './TableRow'
function TaskTable(props) {

  if (!props.formData || props.formData.length === 0) {
    return <div className="alert alert-warning">No tasks available</div>
  }

  return (
    <div className='col-12 pt-3 pb-5 p-3 border-rounded' style={{ backgroundColor: '#FFF', borderRadius: '10px', }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.formData.map((task) => (
            <TableRow key={task.id} taskDetails={task} deleteTask={props.deleteTask} completetask={props.completetask} editTask={props.editTask} editTaskFormEnable={props.editTaskFormEnable} />
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default TaskTable