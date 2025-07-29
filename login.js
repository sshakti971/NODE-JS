document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedPassword = localStorage.getItem("user_" + username);
  
  if (storedPassword && storedPassword === password) {
    localStorage.setItem("username", username); // Save session
    window.location.href = "index.html"; // ⬅️ This is the key part
  } else {
    alert("Invalid credentials");
  }
});
