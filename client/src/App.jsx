import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import {ToastContainer} from "react-toastify";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📋 Task Tracker</h1>

      <input
        className="search-bar"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default App;
