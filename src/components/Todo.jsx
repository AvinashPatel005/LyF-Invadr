import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext"; // Assuming you have a ThemeContext for managing themes

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const { theme } = useTheme(); // Get the current theme (light or dark)

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className={`widget todo ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="todo-main">
        <input
          className={`todo-input ${theme === 'dark' ? 'dark' : ''}`}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <i
          onClick={handleAddTask}
          className={`bi bi-plus-circle-fill todo-input-btn ${theme === 'dark' ? 'dark' : ''}`}
        ></i>
      </div>
      <ol className={`todo-list ${theme === 'dark' ? 'dark' : ''}`}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              className={`todo-item ${theme === 'dark' ? 'dark' : ''} ${task.completed ? "completed" : ""}`}
            >
              <span onClick={() => toggleTaskCompletion(index)}>
                {task.text}
              </span>
              <i onClick={() => deleteTask(index)} className="bi bi-x"></i>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center" }} className="empty-message">No tasks yet!</p>
        )}
      </ol>
    </div>
  );
};

export default ToDo;
