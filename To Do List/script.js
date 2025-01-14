const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);

    const span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }

  inputBox.value = "";
  savedata();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showdata() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showdata();
