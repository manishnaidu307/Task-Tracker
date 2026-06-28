import API from "../services/api";
import { toast } from "react-toastify";

function TaskItem({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {

    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    await API.delete(`/tasks/${task._id}`);
    toast.success("Task Deleted");

    fetchTasks();
  };

  const toggleStatus = async () => {
    await API.put(`/tasks/${task._id}`, {
      completed: !task.completed,
    });
    toast.info(
    task.completed
        ? "Marked Pending"
        : "Task Completed"
    );

    fetchTasks();
  };

  return (
    <div className="task-card">

      <div className="task-top">

        <div>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span
            className={
              task.completed
                ? "completed"
                : "pending"
            }
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>

        </div>

      </div>

      <div className="btn-group">

        <button onClick={toggleStatus}>
          Toggle
        </button>

        <button
          onClick={() =>
            setEditingTask(task)
          }
        >
          Edit
        </button>

        <button onClick={deleteTask}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;
