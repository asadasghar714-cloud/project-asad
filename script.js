function toggleMode() {
  document.body.classList.toggle("dark-mode");

  let mode = document.body.classList.contains("dark-mode") 
    ? "Dark Mode" 
    : "Light Mode";
  
  alert("You are now in  darkk mode" + mode);
}
