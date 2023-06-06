showtask();

function addToDo() {
  location.reload();
  var newData = document.getElementById("inputBox").value;

  if (newData == "") {
    alert("You must write something!!!");
  }

  if (localStorage.getItem("Data") == null) {
    localStorage.setItem("Data", "[]");
  }

  var oldData = JSON.parse(localStorage.getItem("Data"));
  if (newData != "") {
    oldData.push(newData);
  }

  localStorage.setItem("Data", JSON.stringify(oldData));

  document.getElementById("inputBox").value = "";
}

function showtask() {
  var oldData = JSON.parse(localStorage.getItem("Data"));
  oldData?.map((data, index) => {  //Use Null Check
    document.querySelector("tbody").innerHTML += `<tr>
    <td>${data}</td>
    <td class = "btn" onclick = "deleteTask(${index})">Delete</td>
    <td class = "btn" onclick = "editTask(${index})">Edit</td>
    </tr>`;
  });
}

function deleteTask(e) {
  var oldData = JSON.parse(localStorage.getItem("Data"));
  let deleted = oldData.filter((value,index) => {
    return index !== e;
  });
  localStorage.setItem("Data", JSON.stringify(deleted));
  location.reload();
}

function editTask(e) {
  indexOfEditBtn = e;
  var addButton = document.getElementById("addButton");
  var updateButton = document.getElementById("updateButton");
  addButton.disabled = true;
  updateButton.disabled = false;

  var oldData = JSON.parse(localStorage.getItem("Data"));
  document.getElementById("inputBox").value = oldData[e];
}

function updateTask() {
  var oldData = JSON.parse(localStorage.getItem("Data"));
  oldData[indexOfEditBtn] = document.getElementById("inputBox").value;
  localStorage.setItem("Data", JSON.stringify(oldData));
  document.getElementById("inputBox").value = "";
  location.reload();
}
var indexOfEditBtn