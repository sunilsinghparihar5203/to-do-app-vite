import React from 'react'
import { useRef } from 'react'
function ToDoForm() {
  const taskref = useRef();
  const date = useRef();
  const time = useRef();
  return (
    <form>
      <row className="row">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Enter your task" name="task" ref={taskref} />
        </div>
        <div className="col-md-3">
          <input name="date" type="date" className="form-control" ref={date} />
        </div>
        <div className="col-md-3">
          <input name="time" type="time" className="form-control" ref={time} />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-info">Add</button>
        </div>
      </row>
    </form>
  )
}

export default ToDoForm