/* EXERCISE 5:
              Add a new task to the list.
              Suggestion:
              - Use document.getElementById to get the UL item and the input text
              - Use the document.createElement to create the new List Item
              - Append the LI child to the UL
          */
const addNewTask = function () {
  let ul = document.getElementById("myTaskList");
  let li = document.createElement("li");
  let input = document.getElementById("newTask").value;

  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
};

/* EXERCISE 6:
              Create a function "removeLast" which removes the last item from the task list
          */
document.getElementById("removeLastTask").onclick = function removeLast() {
  let ul = document.getElementById("myTaskList");
  ul.removeChild(ul.lastChild);
};

/* EXERCISE 7:
              Create a function "removeFirst" which removes the first item from the task list
          */
document.getElementById("removeFirstTask").onclick = function removeFirst() {
  let ul = document.getElementById("myTaskList");
  ul.removeChild(ul.firstChild);
};

/* EXERCISE 8:
             Create a function "getTasksAsArray" which returns, and prints to the console an array containing the tasks as strings
          */
// const getTasksAsArray = function () {
//   let list = document.querySelectorAll("li");
//   let newArry = [];
//   for (let i = 0; i < list.length; i++) {
//     newArry.push(list[i]);
//   }
//   console.log(newArry);
// };
const getTasksAsArray = function () {
  let list = document.querySelectorAll("li");
  let taskAsArray = [];
  for (let i = 0; i < list.length; i++) {
    taskAsArray.push(list[i].innerText);
  }
  console.log(taskAsArray);
};
/* EXERCISE 9:
             Create a function "changeTaskBackgroundColor" and attach it to the "Change task background" button via JavaScript (not via html attribute)
             Take the color from the color picker ad apply it as background to every list item
    */
// function changeTaskBackgroundColor() {
//     for (let i = 0; i < list.length; i++) {
//          li
//   }
// };

// const list = document.querySelectorAll("li");
const changeTaskBackgroundColor = function () {
  let color = document.getElementById("colorPicker").value;
  for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = color;
  }
};
let list = document.querySelectorAll("ul>li");
console.log(list);
/* ### EXTRA ### */

/* EXERCISE 10:
              Attach an eventListener to each new task you create. When the task receives the click it should be removed (only the clicked task should disappear)
    */

/* EXERCISE 11:
             Create a function "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
    */

/* #### Suggestion:
     - Break the code into many function for semplicity 
     - Reuse the functions previously created */
