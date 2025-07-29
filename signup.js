document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  // Simple user storage using localStorage (not secure, just for demo!)
  localStorage.setItem("user_" + newUsername, newPassword);
  alert("Account created! Now log in.");
  window.location.href = "login.html";
});

