document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
