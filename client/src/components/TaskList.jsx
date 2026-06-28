import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  fetchTasks,
  setEditingTask,
}) {
  if (!tasks.length)
    return <h3>No Tasks Yet</h3>;

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </>
  );
}

export default TaskList;
