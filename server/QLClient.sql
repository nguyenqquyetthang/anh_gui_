CREATE DATABASE QLClient;
GO

USE QLClient;
GO

CREATE TABLE client (
    ID INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    fullName NVARCHAR(100) NOT NULL
);
GO


INSERT INTO client (username, password, fullName)
VALUES 
('test1@example.com', '123456', N'Lê Văn A'),
('test2@example.com', 'password123', N'Ngô Thị B');
-- thêm cột 
USE [QLClient];
GO

ALTER TABLE Client
ADD 
    role TINYINT CHECK (role BETWEEN 0 AND 9),
    tel CHAR(9) CHECK (tel NOT LIKE '%[^0-9]%'),
    ngaySinh DATE,
    sex VARCHAR(10);
-- theem bang
USE QLClient;
GO

-- Bảng Orders: lưu thông tin chung của đơn hàng
CREATE TABLE Orders (
    orderId VARCHAR(20) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    orderDate DATETIME NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    shippingMethod NVARCHAR(100),
    paymentMethod NVARCHAR(100),
    FOREIGN KEY (username) REFERENCES client(username)
);

-- Bảng OrderItems: lưu từng sản phẩm trong đơn hàng
CREATE TABLE OrderItems (
    id INT IDENTITY(1,1) PRIMARY KEY,
    orderId VARCHAR(20) NOT NULL,
    name NVARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES Orders(orderId)
);
