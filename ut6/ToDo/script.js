// Seleccionar elementos del DOM
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const tasksContainer = document.getElementById("tasksContainer");

// Función para establecer la fecha actual en la interfaz
const setDate = () => {
  const date = new Date();
  // Configurar elementos de la fecha en el DOM
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

// Función para agregar una nueva tarea
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;

  // Crear un nuevo elemento de tarea
  const task = document.createElement("div");
  const date = new Date();
  const dateHour = date.toLocaleString("es", { hour: "numeric" });
  const dateMinute = date.getMinutes().toString().padStart(2, "0");

  // Establecer clases y eventos para la tarea
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);

  // Crear casilla de selección (checkbox)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkBox");
  checkbox.addEventListener("change", () => changeTaskState(task, checkbox));
  task.appendChild(checkbox);

  // Crear contenido de la tarea con la fecha
  const taskContent = document.createElement("span");
  taskContent.textContent = `${value} ${dateHour}:${dateMinute}`;
  task.appendChild(taskContent);

  // Crear botón de eliminación
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  // deleteButton.textContent = "x";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", () => removeTask(task));
  task.appendChild(deleteButton);

  // Agregar la tarea al contenedor
  tasksContainer.prepend(task);
  event.target.reset();
};

// Función para cambiar el estado de una tarea (marcar/desmarcar como realizada)
const changeTaskState = (task, checkbox) => {
  task.classList.toggle("done", checkbox.checked);
};

// Función para eliminar una tarea
const removeTask = (task) => {
  tasksContainer.removeChild(task);
};

// Función para eliminar todas las tareas completadas
const deleteCompletedTasks = () => {
  const completedTasks = document.querySelectorAll(".task.done");
  completedTasks.forEach((task) => tasksContainer.removeChild(task));
};

// Asocia la función al evento de clic del botón
const deleteCompletedButton = document.getElementById("deleteCompletedButton");
deleteCompletedButton.addEventListener("click", deleteCompletedTasks);

// Función para ordenar y renderizar las tareas
const renderOrderedTasks = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });

  // Eliminar todas las tareas del contenedor
  tasksContainer.innerHTML = "";

  // Agregar las tareas pendientes primero
  toDo.forEach((el) => tasksContainer.appendChild(el));

  // Agregar las tareas completadas después
  done.forEach((el) => tasksContainer.appendChild(el));
};

// Inicializar la fecha al cargar la página
setDate();
