import { useState } from "react";
import { Dispatch } from "react";
import { Task, addTask } from "../../data/Task";
import { v4 as uuid } from "uuid";
import "../../assets/SubmitFiled.css";
import { auth } from "../../config/firebase-config";

function SubmitField({
  data,
  setData,
}: {
  data: Task[];
  setData: Dispatch<React.SetStateAction<Task[]>>;
}) {

const handleLogOut = async () => {
  try{
    await auth.signOut();
    console.log("User signed out");
  }catch(error: any) {
    alert(error.message);
  }
}

  let [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.length <= 0) {
      alert("Please enter a Task");
    } else {
      const newTask: Task = {
        id: uuid(),
        userId: auth.currentUser?.uid,
        name: task,
        timeCreate: Date.now(),
        checked: false,
      };
      setData([...data, newTask]);
      addTask(newTask);
      setTask("");
    }
  };

  return (
    <>
      <div className=" mt-3 SubmitField">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Write a task here"
            value={task}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            onChange={(e) => setTask(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Task</label>
        </div>
        <div className="mt-3 d-flex">
          <button type="button" className="btn btn-danger" onClick={handleLogOut}>
            Log Out
          </button>
          <button
            type="button"
            className="btn btn-primary ms-auto"
            onClick={handleSubmit}
          >
            Add task
          </button>
        </div>
      </div>
    </>
  );
}

export default SubmitField;
