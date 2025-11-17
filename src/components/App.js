import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = React.useState(TASKS);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  // Adding a new task to state
  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

   function handleDeleteTask(taskText) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.text !== taskText)
    );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
