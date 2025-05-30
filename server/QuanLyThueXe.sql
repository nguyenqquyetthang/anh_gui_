-- Tạo cơ sở dữ liệu
CREATE DATABASE QuanLyThueXe;
GO

-- Sử dụng cơ sở dữ liệu vừa tạo
USE QuanLyThueXe;
GO

-- Tạo bảng Quản lý
CREATE TABLE tblManager (
    ID INT PRIMARY KEY,                       -- Mã quản lý (khóa chính)
    username VARCHAR(20) NOT NULL,            -- Tên đăng nhập
    password VARCHAR(20) NOT NULL             -- Mật khẩu
);

-- Tạo bảng Khách hàng
CREATE TABLE tblCustomer (
    ID INT PRIMARY KEY,                       -- Mã khách hàng (khóa chính)
    name VARCHAR(20) NOT NULL,                -- Tên khách hàng
    address VARCHAR(100),                     -- Địa chỉ
    phoneNumber INT                           -- Số điện thoại
);

-- Tạo bảng Hóa đơn
CREATE TABLE tblInvoice (
    ID INT PRIMARY KEY,                           -- Mã hóa đơn (khóa chính)
    rentalDate DATE NOT NULL,                     -- Ngày thuê xe
    returnDate DATE NOT NULL,                     -- Ngày trả xe
    vehicleCount INT,                             -- Số lượng xe thuê
    rentalAmount INT,                             -- Thành tiền thuê xe
    penaltyAmount INT,                            -- Số tiền phạt (nếu có)
    totalAmount INT,                              -- Tổng số tiền cần thanh toán
    tblInvoiceID2 INT NULL,                       -- Mã hóa đơn liên kết (nếu có)
    tblCustomerID INT,                            -- Mã khách hàng (khóa ngoại)
    tblManagerID INT,                             -- Mã quản lý (khóa ngoại)
    FOREIGN KEY (tblCustomerID) REFERENCES tblCustomer(ID),
    FOREIGN KEY (tblManagerID) REFERENCES tblManager(ID),
    FOREIGN KEY (tblInvoiceID2) REFERENCES tblInvoice(ID)  -- Liên kết nội bảng
);
