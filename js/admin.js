
        // Navigation
        function showPage(page) {
            // Remove active class
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class
            event.target.classList.add('active');
            
            const title = document.getElementById('page-title');
            const content = document.getElementById('content');
            
            switch(page) {
                case 'dashboard':
                    title.textContent = 'Tổng quan';
                    content.innerHTML = getDashboardContent();
                    break;
                case 'products':
                    title.textContent = 'Quản lý sản phẩm';
                    content.innerHTML = getProductsContent();
                    break;
                case 'orders':
                    title.textContent = 'Quản lý đơn hàng';
                    content.innerHTML = getOrdersContent();
                    break;
                case 'customers':
                    title.textContent = 'Quản lý khách hàng';
                    content.innerHTML = getCustomersContent();
                    break;
                case 'settings':
                    title.textContent = 'Cài đặt';
                    content.innerHTML = getSettingsContent();
                    break;
            }
        }

        function getDashboardContent() {
            return `
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">1,234</div>
                        <div class="stat-label">Tổng đơn hàng</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">456</div>
                        <div class="stat-label">Sản phẩm</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">789</div>
                        <div class="stat-label">Khách hàng</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">25M</div>
                        <div class="stat-label">Doanh thu (VNĐ)</div>
                    </div>
                </div>
                <h3>Đơn hàng gần đây</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn</th>
                            <th>Khách hàng</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>500,000 VNĐ</td>
                            <td>Chờ xử lý</td>
                            <td>
                                <button class="btn btn-primary">Xem</button>
                                <button class="btn btn-success">Duyệt</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>Trần Thị B</td>
                            <td>750,000 VNĐ</td>
                            <td>Đã giao</td>
                            <td><button class="btn btn-primary">Xem</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        function getProductsContent() {
            return `
                <button class="btn btn-success" onclick="openModal()">+ Thêm sản phẩm</button>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Danh mục</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bóng đá Adidas</td>
                            <td>Bóng đá</td>
                            <td>500,000 VNĐ</td>
                            <td>50</td>
                            <td>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Giày Nike Air</td>
                            <td>Giày thể thao</td>
                            <td>2,000,000 VNĐ</td>
                            <td>25</td>
                            <td>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        function getOrdersContent() {
            return `
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn</th>
                            <th>Khách hàng</th>
                            <th>Ngày đặt</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>15/05/2024</td>
                            <td>500,000 VNĐ</td>
                            <td>Chờ xử lý</td>
                            <td>
                                <button class="btn btn-primary">Chi tiết</button>
                                <button class="btn btn-success">Duyệt</button>
                                <button class="btn btn-danger">Hủy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>Trần Thị B</td>
                            <td>14/05/2024</td>
                            <td>750,000 VNĐ</td>
                            <td>Đã giao</td>
                            <td><button class="btn btn-primary">Chi tiết</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        function getCustomersContent() {
            return `
                <table>
                    <thead>
                        <tr>
                            <th>Tên khách hàng</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Tổng đơn hàng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>a@email.com</td>
                            <td>0123456789</td>
                            <td>5</td>
                            <td>
                                <button class="btn btn-primary">Xem</button>
                                <button class="btn btn-warning">Khóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>b@email.com</td>
                            <td>0987654321</td>
                            <td>3</td>
                            <td>
                                <button class="btn btn-primary">Xem</button>
                                <button class="btn btn-warning">Khóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        function getSettingsContent() {
            return `
                <h3>Cài đặt chung</h3>
                <div class="form-group">
                    <label class="form-label">Tên cửa hàng</label>
                    <input type="text" class="form-input" value="SportShop">
                </div>
                <div class="form-group">
                    <label class="form-label">Email liên hệ</label>
                    <input type="email" class="form-input" value="admin@sportshop.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Số điện thoại</label>
                    <input type="tel" class="form-input" value="0123456789">
                </div>
                <button class="btn btn-success">Lưu cài đặt</button>
            `;
        }

        // Modal functions
        function openModal() {
            document.getElementById('productModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        function logout() {
            if(confirm('Bạn có chắc muốn đăng xuất?')) {
                alert('Đã đăng xuất!');
                // window.location.href = '/login';
            }
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
