// Function to add a new task
function addTask() {
  // 1. Get the input box element
  let inputBox = document.getElementById("taskInput");

  // 2. Get the text inside the input box
  let taskText = inputBox.value;

  // 3. If the input is empty, do nothing
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // 4. Create a new list item <li>
  let li = document.createElement("li");
  li.textContent = taskText;

  // 5. Add a click event to remove the task when clicked
  li.onclick = function() {
    li.remove();
  };

  // 6. Add the new <li> to the <ul>
  document.getElementById("taskList").appendChild(li);

  // 7. Clear the input box for the next task
  inputBox.value = "";
}