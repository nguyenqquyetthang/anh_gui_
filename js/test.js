console.log(localStorage.getItem('password'));
console.log(localStorage.getItem('username'));
// Thêm đoạn code này đầu tiên trong file JS để kiểm tra
console.log("Script đã được tải");
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM đã sẵn sàng");
});
const form = document.getElementById('passwordForm');
console.log('Form element:', form);
console.log('Current password input:', document.getElementById('currentPassword'));
console.log('New password input:', document.getElementById('newPassword'));
console.log('Confirm password input:', document.getElementById('confirmPassword'));
document.getElementById('currentPassword').addEventListener('input', (e) => {
  console.log('Current password changed:', e.target.value);
});

document.getElementById('newPassword').addEventListener('input', (e) => {
  console.log('New password changed:', e.target.value);
});

document.getElementById('confirmPassword').addEventListener('input', (e) => {
  console.log('Confirm password changed:', e.target.value);
});
document.getElementById('passwordForm').addEventListener('submit', (e) => {
  console.log("Form submitted"); // Kiểm tra xem sự kiện có được kích hoạt không
  e.preventDefault(); // Ngăn không cho form submit theo cách thông thường
  // Các xử lý khác...
});


router.post('/api/profile', async (req, res) => {
    const { tel, ngaySinh, sex } = req.body;

    // Lấy username từ session, token, hoặc middleware
    const username = req.session?.username || req.user?.username;

    if (!username) {
        return res.status(401).json({ message: "Không xác định được người dùng" });
    }

    try {
        await sql.connect(config);

        const request = new sql.Request();
        request.input('tel', sql.VarChar, tel);
        request.input('ngaySinh', sql.Date, ngaySinh);
        request.input('sex', sql.VarChar, sex);
        request.input('username', sql.VarChar, username); // Đổi lại kiểu phù hợp (username thường là chuỗi)

        await request.query(`
            UPDATE Users 
            SET tel = @tel, ngaySinh = @ngaySinh, sex = @sex 
            WHERE username = @username;
        `);

        res.json({ message: "Cập nhật thành công" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Lỗi khi cập nhật thông tin" });
    }
});