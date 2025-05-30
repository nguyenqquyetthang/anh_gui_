fetch('http://localhost:3000/api/welcome')
    .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Chưa đăng nhập');
    })
    .then(data => {
        document.getElementById('greeting').textContent = `Xin chào ${data.fullName}!`;
    })
    .catch(err => {
        alert(err.message);
        window.location.href = '/login.html';
    });