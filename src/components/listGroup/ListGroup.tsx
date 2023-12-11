import { useEffect, useState } from "react";
import SubmitField from "./SubmitField";
import {
  Task,
  addTask,
  checkTask,
  deleteTask,
  getMovieList,
  getMovieListById,
} from "../../data/Task";
import { formatDate, formatDateAgo } from "../../util/MyUtil";
import ProgressBar from "../../util/progress";

//css part
import "../../assets/ListGroup.css";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const handleCheck = (id: string, setData: any, data: Task[]) => {
  setData((prevData: Task[]) =>
    prevData.map((task: Task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    )
  );
  checkTask(id);
};

const handleDelete = (id: string, setData: any, data: Task[]) => {
  const isDeleted = window.confirm(
    "Are you sure you want to delete this task?"
  );
  isDeleted
    ? setData((prevData: Task[]) =>
        prevData.filter((task: Task) => task.id !== id)
      )
    : null;

  deleteTask(id);
};

const List = ({ items, setData }: { items: Task[]; setData: any }) => (
  <>
    {items.map((item) => (
      <div className="" key={item.id}>
        <li className="d-flex justify-content-between list-group-item align-items-center">
          <input
            className="form-check-input me-1"
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id, setData, items)}
            id={`checkbox-${item.id}`}
          />
          <label
            className="form-check-label ms-3 me-5"
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
          >
            {item.name}
          </label>
          <span className="badge bg-primary ms-auto" id="date">
            {formatDateAgo(item.timeCreate)}
          </span>
          <button
            type="button"
            id="delete-btn"
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(item.id, setData, items)}
          >
            Delete
          </button>
        </li>
      </div>
    ))}
  </>
);

//this is main component

function ListGroup() {
  const navigate = useNavigate();
  const noData: Task[] = [];
  const [data, setData] = useState(noData);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getMovieListById(setData, auth.currentUser?.uid);
      }else{
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="border border-1 rounded d-flex" style={{ flex: 1 }}>
      <div
        className="Container d-flex"
        style={{ flexDirection: "column", justifyContent: "flex-end" }}
      >
        {data.length === 0 && <h1>No item yet</h1>}
        <div
          className="d-flex gap-3"
          style={{
            flex: 1,
            justifyContent: "center",
            overflow: "auto",
            maxHeight: "",
          }}
        >
          <ul className="list-group grid gap-2">
            <List
              items={data.filter((item) => !item.checked)}
              setData={setData}
            />
          </ul>
          <ul className="list-group grid gap-2">
            <List
              items={data.filter((item) => item.checked)}
              setData={setData}
            />
          </ul>
        </div>
        <SubmitField data={data} setData={setData} />
        <br />
        {/* <ProgressBar progress={50} variant="success" label="Loading..." /> */}
      </div>
    </div>
  );
}

export default ListGroup;
