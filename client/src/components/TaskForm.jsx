import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return alert("Title is required");
    }

    try {
      if (editingTask) {
        await API.put(`/tasks/${editingTask._id}`, {
          title,
          description,
        });
        toast.success("Task Updated");

        setEditingTask(null);
      } else {
        await API.post("/tasks", {
          title,
          description,
        });
        toast.success("Task Added")
      }

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
