import React, { useEffect, useRef } from 'react'

function ToDoForm(props) {
  const taskref = useRef();
  const date = useRef();
  const time = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = taskref.current.value;
    const dateValue = date.current.value;
    const timeValue = time.current.value;
    if (task && dateValue && timeValue) {
      props.setFormData((prev) => {
        if (props.isEditing) {
          props.updateTask(props.editdata.id, task, dateValue, timeValue);
          props.setIsEditing(false);
        } else {
          return [...prev, { id: Date.now().toString(), task: task, date: dateValue, time: timeValue, isCompleted: false }]
        }
      });
      taskref.current.value = '';
      date.current.value = '';
      time.current.value = '';
    } else {
      alert('Please fill all fields');
    }
    console.log(props.formData);
  }

  useEffect(() => {
    if (props.isEditing) {
      taskref.current.value = props.editdata.task;
      date.current.value = props.editdata.date;
      time.current.value = props.editdata.time;
    }
  }, [props.isEditing, props.editdata]);
  return (
    <form>
      <div className="row">
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
          <button type="submit" className="btn btn-warning" onClick={handleSubmit}>{props.isEditing ? 'Update' : 'Add'}</button>
        </div>
      </div>
    </form>
  )
}

export default ToDoForm