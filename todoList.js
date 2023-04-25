function itemUp(list, item) {
  if (item.previousElementSibling === null) {
    list.removeChild(item);
    list.appendChild(item);
  } else {
    list.insertBefore(item, item.previousElementSibling);
  }
}

function itemDown(list, item) {
  if (item.nextElementSibling === null) {
    list.removeChild(item);
    list.insertBefore(item, list.firstElementChild);
  } else {
    list.insertBefore(item.nextElementSibling, item);
  }
}

function addTask(list, name) {
  let task, taskName, taskUp, taskDown, removeTask;

  task = document.createElement("li");
  task.setAttribute("class", "list-group-item d-flex flex-row align-items-center");

  taskName = document.createElement("span");
  taskName.setAttribute("class", "taskName flex-grow-1");
  taskName.textContent = name;

  taskUp = document.createElement("img");
  taskUp.src = "images/taskUp.png";
  taskUp.addEventListener(
    "click",
    function () {
      itemUp(list, task);
    },
    false
  );

  taskDown = document.createElement("img");
  taskDown.src = "images/taskDown.png";
  taskDown.addEventListener(
    "click",
    function () {
      itemDown(list, task);
    },
    false
  );

  removeTask = document.createElement("img");
  removeTask.src = "images/removeTask.png";
  removeTask.addEventListener(
    "click",
    function () {
      list.removeChild(task);
    },
    false
  );

  [taskName, taskUp, taskDown, removeTask].forEach((el) =>
    task.appendChild(el)
  );

  list.appendChild(task);
}

onload = function () {
  let toDoList, addTaskButton, taskNameInput;

  toDoList = document.getElementById("todoList");
  addTaskButton = document.getElementById("addTask");
  taskNameInput = document.getElementById("taskName");

  taskNameInput.addEventListener(
    "keypress",
    function (event) {
      if (event.key === "Enter") {
        addTask(toDoList, this.value);
      }
    },
    false
  );

  taskNameInput.addEventListener(
    "focus",
    function () {
      this.select();
    },
    false
  );

  addTaskButton.addEventListener(
    "click",
    function () {
      addTask(toDoList, taskNameInput.value);
    },
    false
  );
};