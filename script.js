document.addEventListener("DOMContentLoaded", () => {
  const tasks = [];

  // Prompt the user to enter the title, description, and status for two tasks
for (let i = 1; i <= 2; i++) {
  const title = prompt(`Task ${i} - Enter the task title:`);
  const description = prompt(`Task ${i} - Enter the task description:`);
  const status = prompt(`Task ${i} - Enter the task status:`);

  tasks.push({
    title,
    description,
    status
  });
}

console.log("Tasks entered:", tasks);


  
});

