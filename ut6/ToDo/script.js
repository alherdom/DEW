// Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");
const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  const date = new Date();
  const dateHour = date.toLocaleString("es", { hour: "numeric" });
  // const dateMinute = date.toLocaleString("es", { minute: "numeric" });
  const dateMinute = date.getMinutes().toString().padStart(2, '0');

  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", () => removeTask(task));
  task.appendChild(deleteButton);
  const taskContent = document.createElement("span");
  taskContent.textContent = `${value} ${dateHour}:${dateMinute}`;
  task.appendChild(taskContent);


  tasksContainer.prepend(task);
  event.target.reset();
};

const removeTask = (task) => {
  tasksContainer.removeChild(task);
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};
setDate();
