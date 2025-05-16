import React from 'react'
import TableRow from './TableRow'
function TaskTable() {
  return (
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
        <TableRow />
      </tbody>
    </table>
  )
}

export default TaskTable