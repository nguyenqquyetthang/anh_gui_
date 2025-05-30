async function login() {
  event.preventDefault();// ngăn trang load lại 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.success) {
    // localStorage.setItem("clientId", data.clientId);
    localStorage.setItem('fullName', data.fullName);
    localStorage.setItem('username', data.username);
    localStorage.setItem('password', data.password);
     // thay managerId thành clientId
    window.location.href = "../html/main.html";
  } else {
    alert("Đăng nhập thất bại: " + data.message);
  }
  return false;// ngăn trang submit thêm
}
