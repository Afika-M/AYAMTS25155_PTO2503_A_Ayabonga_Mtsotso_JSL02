document.addEventListener("DOMContentLoaded", () => {
  const tasks = [];
  const validStatuses = ["todo", "doing", "done"];

  // Prompt user to enter task details and validate status
  for (let i = 1; i <= 2; i++) {
    const title = prompt(`Task ${i} - Enter the task title:`);
    const description = prompt(`Task ${i} - Enter the task description:`);
    let status = prompt(`Task ${i} - Enter the task status (todo, doing, done):`).toLowerCase();
    while (!validStatuses.includes(status)) {
      alert('Invalid status. Please enter "todo", "doing", or "done".');
      status = prompt(`Task ${i} - Enter the task status (todo, doing, done):`).toLowerCase();
    }
    // Store validated task
    const task = { title, description, status };
    tasks.push(task);

    // Add task to the DOM
    const column = document.querySelector(`.column-div[data-status="${status}"] .tasks-container`);
    const header = document.querySelector(`.column-div[data-status="${status}"] .columnHeader`);

    if (column && header) {
      // Create and append task div — only title shown in UI
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-div");
      taskDiv.textContent = title;
      column.appendChild(taskDiv);

      // Update the task count in the header
      const match = header.textContent.match(/(.*)\s\((\d+)\)/);
      if (match) {
        const baseText = match[1];
        let currentCount = parseInt(match[2]);
        currentCount += 1;
        header.textContent = `${baseText} (${currentCount})`;
      }
    }

    // Log full task details to the console
    console.log(`Task ${i} Added → Title: "${title}", Description: "${description}", Status: "${status}"`);
  }

  // Display completed tasks or motivational message
  const completedTasks = tasks.filter(task => task.status === "done");
  if (completedTasks.length > 0) {
    completedTasks.forEach(task =>
      console.log(`Title: "${task.title}", Status: "done"`)
    );
  } else {
    console.log("No tasks completed, let's get to work!");
  }
});