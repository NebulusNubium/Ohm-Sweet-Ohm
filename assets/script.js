const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName) {
    alert("Entrez un nom de tâche !");
    return;
  }

  if (isDuplicate(taskName)) {
    alert("Ce nom de tâche existe déjà !");
    return;
  }

  const li = createTaskElement(taskName, false);
  pendingList.appendChild(li);
  input.value = "";
}

function isDuplicate(name) {
  const allTasks = [...pendingList.children, ...completedList.children];
  return allTasks.some(task => task.querySelector("span").textContent === name);
}

function createTaskElement(name, isCompleted) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = name;

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = isCompleted ? "En cours" : "Terminer";
  toggleBtn.onclick = () => toggleTask(li, isCompleted);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.onclick = () => li.remove();

  if (isCompleted) span.classList.add("completed");

  li.appendChild(span);
  li.appendChild(toggleBtn);
  li.appendChild(deleteBtn);

  return li;
}

function toggleTask(taskElement, currentlyCompleted) {
  const name = taskElement.querySelector("span").textContent;
  const newTask = createTaskElement(name, !currentlyCompleted);
  taskElement.remove();
  if (currentlyCompleted) {
    pendingList.appendChild(newTask);
  } else {
    completedList.appendChild(newTask);
  }
}
