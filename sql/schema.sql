-- ============================================
-- GamePay - SQL Server Database Schema
-- Customized for Faizan Ali
-- ============================================

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'gamestore')
BEGIN
    CREATE DATABASE gamestore;
END
GO

USE gamestore;
GO

-- 1. User Roles Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='user_roles' and xtype='U')
BEGIN
    CREATE TABLE user_roles (
        role_id INT PRIMARY KEY,
        role_name VARCHAR(50) NOT NULL
    );
    INSERT INTO user_roles (role_id, role_name) VALUES 
    (1, 'customer'),
    (2, 'admin');
END
GO

-- 2. Users Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' and xtype='U')
BEGIN
    CREATE TABLE users (
        user_id INT IDENTITY(1,1) PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role_id INT NOT NULL FOREIGN KEY REFERENCES user_roles(role_id),
        created_at DATETIME DEFAULT GETDATE()
    );
END
GO

-- 3. Games Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='games' and xtype='U')
BEGIN
    CREATE TABLE games (
        game_id INT IDENTITY(1,1) PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        genre VARCHAR(50) NOT NULL,
        platform VARCHAR(50) NOT NULL,
        image VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT GETDATE()
    );
END
GO

-- 4. Order Status Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='order_status' and xtype='U')
BEGIN
    CREATE TABLE order_status (
        status_id INT PRIMARY KEY,
        status_name VARCHAR(50) NOT NULL
    );
    INSERT INTO order_status (status_id, status_name) VALUES 
    (1, 'Pending'),
    (2, 'Completed'),
    (3, 'Cancelled');
END
GO

-- 5. Orders Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='orders' and xtype='U')
BEGIN
    CREATE TABLE orders (
        order_id INT IDENTITY(1,1) PRIMARY KEY,
        user_id INT NULL FOREIGN KEY REFERENCES users(user_id),
        total_amount DECIMAL(10, 2) NOT NULL,
        status_id INT NOT NULL FOREIGN KEY REFERENCES order_status(status_id),
        order_date DATETIME DEFAULT GETDATE()
    );
END
GO

-- 6. Order Items Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='order_items' and xtype='U')
BEGIN
    CREATE TABLE order_items (
        order_item_id INT IDENTITY(1,1) PRIMARY KEY,
        order_id INT NOT NULL FOREIGN KEY REFERENCES orders(order_id),
        game_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );
END
GO

-- 7. Payment Status Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='payment_status' and xtype='U')
BEGIN
    CREATE TABLE payment_status (
        status_id INT PRIMARY KEY,
        status_name VARCHAR(50) NOT NULL
    );
    INSERT INTO payment_status (status_id, status_name) VALUES 
    (1, 'Paid'),
    (2, 'Failed');
END
GO

-- 8. Payment Methods Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='payment_methods' and xtype='U')
BEGIN
    CREATE TABLE payment_methods (
        method_id INT PRIMARY KEY,
        method_name VARCHAR(50) NOT NULL
    );
    INSERT INTO payment_methods (method_id, method_name) VALUES 
    (1, 'Credit Card'),
    (2, 'PayPal'),
    (3, 'Crypto');
END
GO

-- 9. Payments Table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='payments' and xtype='U')
BEGIN
    CREATE TABLE payments (
        payment_id INT IDENTITY(1,1) PRIMARY KEY,
        order_id INT NOT NULL FOREIGN KEY REFERENCES orders(order_id),
        status_id INT NOT NULL FOREIGN KEY REFERENCES payment_status(status_id),
        method_id INT NOT NULL FOREIGN KEY REFERENCES payment_methods(method_id),
        payment_date DATETIME DEFAULT GETDATE()
    );
END
GO
