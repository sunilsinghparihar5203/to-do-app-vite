import React from 'react'

function TableRow() {
  return (
    <tr className='align-middle'>
      <td>Task 1</td>
      <td>2023-10-01</td>
      <td>12:00</td>
      <td className='col-md-3 text-center'>
        <button className="btn btn-sm btn-success mx-1 my-1">Complete</button>
        <button className="btn btn-sm btn-info mx-1 my-1">Edit</button>
        <button className="btn btn-sm btn-danger mx-1 my-1">Delete</button>
      </td>
    </tr>
  )
}

export default TableRow