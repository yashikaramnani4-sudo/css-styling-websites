// Show/Hide Content
function toggleContent() {
  const content = document.getElementById("content");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Image Slider
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];

let currentImage = 0;

function showImage() {
  document.getElementById("slider").src = images[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});


  document.body.classList.toggle("dark-mode");
});
