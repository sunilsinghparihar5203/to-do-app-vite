import React from 'react'

function TableRow({ taskDetails, deleteTask, completetask, editTaskFormEnable }) {

  return (
    <tr className='align-middle'>
      <td>{taskDetails.task}</td>
      <td>{taskDetails.date}</td>
      <td>{taskDetails.time}</td>
      <td className='col-md-3 text-center'>
        {
          taskDetails.isCompleted ? (
            <button className="btn btn-sm btn-success mx-1 my-1" disabled>Completed</button>
          ) : (
            <>
              <button className="btn btn-sm btn-success mx-1 my-1" onClick={() => completetask(taskDetails.id)}>Complete</button>
              <button className="btn btn-sm btn-info mx-1 my-1" onClick={() => editTaskFormEnable(taskDetails)}>Edit</button>
              <button className="btn btn-sm btn-danger mx-1 my-1" onClick={() => deleteTask(taskDetails.id)}>Delete</button>
            </>
          )
        }
      </td>
    </tr >
  )
}

export default TableRow