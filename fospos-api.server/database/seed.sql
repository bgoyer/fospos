-- Drop tables if they exist
DROP TABLE IF EXISTS SaleItemOptions;
DROP TABLE IF EXISTS SaleItems;
DROP TABLE IF EXISTS Sales;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Subcategories;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Payments;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS UserLogs;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS TimeSheets;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Options;

-- Table to manage users/employees of the POS system
CREATE TABLE Roles (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT UNIQUE NOT NULL,
    Description TEXT NOT NULL -- Hashed password
);

CREATE TABLE Users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Username TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL, -- Hashed password
    RoleID INTEGER NOT NULL,
    FOREIGN KEY (RoleID) REFERENCES Roles(ID)
);

-- Table to manage time sheets
CREATE TABLE TimeSheets (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    DailyHours REAL,
    PayPeriodHours REAL,
    YearlyHours REAL,
    YTDPay REAL,
    PayPeriodPay REAL,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

-- Table to manage user logs
CREATE TABLE UserLogs (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    Date TEXT NOT NULL,
    Message TEXT,
    Severity INTEGER,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);


-- Table to store information about customers
CREATE TABLE Customers (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Email TEXT,
    Phone TEXT
);

-- Table to store payment methods
CREATE TABLE Payments (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    SaleID INTEGER NOT NULL,
    PaymentMethod TEXT NOT NULL, -- e.g., Cash, Credit Card, etc.
    AmountPaid REAL NOT NULL,
    PaymentDate TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SaleID) REFERENCES Sales(ID)
);

-- Table to manage categories
CREATE TABLE Categories (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL
);

-- Table to manage subcategories
CREATE TABLE Subcategories (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    CategoryID INTEGER NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(ID)
);

-- Table to store information about products
CREATE TABLE Products (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Description TEXT,
    Price REAL NOT NULL,
    QuantityInStock INTEGER NOT NULL,
    SubcategoryID INTEGER NOT NULL,
    FOREIGN KEY (SubcategoryID) REFERENCES Subcategories(ID)
);

-- Table to store sales transactions
CREATE TABLE Sales (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    SaleDate TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CustomerID INTEGER,
    TotalAmount REAL NOT NULL,
    IsComplete BOOLEAN,
    FOREIGN KEY (CustomerID) REFERENCES Customers(ID)
);

-- Table to store details of each sale (line items)
CREATE TABLE SaleItems (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    SaleID INTEGER NOT NULL,
    ProductID INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    Price REAL NOT NULL,
    FOREIGN KEY (SaleID) REFERENCES Sales(ID),
    FOREIGN KEY (ProductID) REFERENCES Products(ID)
);

CREATE TABLE SaleItemOptions (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    SaleItemID INTEGER NOT NULL,
    OptionID INTEGER NOT NULL,
    FOREIGN KEY (SaleItemID) REFERENCES SaleItems(ID),
    FOREIGN KEY (OptionID) REFERENCES Options(ID)
);

-- Table to manage item options
CREATE TABLE Options (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Price REAL
);

-- Sample Test Data

-- Insert sample roles
INSERT INTO Roles (Name, Description) VALUES ('Admin', 'This is the admin role');
INSERT INTO Roles (Name, Description) VALUES ('Cashier', 'This is the cashier role');
INSERT INTO Roles (Name, Description) VALUES ('Manager', 'This is the manager role');

-- Insert sample users
INSERT INTO Users (Username, Password, RoleID) VALUES ('admin', 'hashedpassword123', 1);
INSERT INTO Users (Username, Password, RoleID) VALUES ('cashier', 'hashedpassword456', 2);
INSERT INTO Users (Username, Password, RoleID) VALUES ('manager', 'hashedpassword789', 3);

-- Insert sample timesheets
INSERT INTO TimeSheets (UserID, DailyHours, PayPeriodHours, YearlyHours, YTDPay, PayPeriodPay) 
VALUES (1, 8, 40, 1600, 40000, 1000);
INSERT INTO TimeSheets (UserID, DailyHours, PayPeriodHours, YearlyHours, YTDPay, PayPeriodPay) 
VALUES (2, 6, 30, 1200, 30000, 750);

-- Insert sample user logs
INSERT INTO UserLogs (UserID, Date, Message, Severity) 
VALUES (1, datetime('now'), 'User logged in', 1);
INSERT INTO UserLogs (UserID, Date, Message, Severity) 
VALUES (2, datetime('now'), 'User processed a sale', 2);

-- Insert sample customers
INSERT INTO Customers (Name, Email, Phone) VALUES ('John Doe', 'john.doe@example.com', '1234567890');
INSERT INTO Customers (Name, Email, Phone) VALUES ('Jane Smith', 'jane.smith@example.com', '0987654321');

-- Insert sample categories
INSERT INTO Categories (Name) VALUES ('Food');
INSERT INTO Categories (Name) VALUES ('Beverages');

-- Insert sample subcategories
INSERT INTO Subcategories (Name, CategoryID) VALUES ('Appetizers', 1);
INSERT INTO Subcategories (Name, CategoryID) VALUES ('Soft Drinks', 2);

-- Insert sample products
INSERT INTO Products (Name, Description, Price, QuantityInStock, SubcategoryID) 
VALUES ('Burger', 'Delicious beef burger', 8.99, 50, 1);
INSERT INTO Products (Name, Description, Price, QuantityInStock, SubcategoryID) 
VALUES ('Coke', 'Refreshing soda', 1.99, 100, 2);

-- Insert sample sales
INSERT INTO Sales (SaleDate, CustomerID, TotalAmount, IsComplete) 
VALUES (datetime('now'), 1, 10.98, 1);
INSERT INTO Sales (SaleDate, CustomerID, TotalAmount, IsComplete) 
VALUES (datetime('now'), 2, 4.99, 0);

-- Insert sample sale items
INSERT INTO SaleItems (SaleID, ProductID, Quantity, Price) 
VALUES (1, 1, 1, 8.99);
INSERT INTO SaleItems (SaleID, ProductID, Quantity, Price) 
VALUES (1, 2, 1, 1.99);
INSERT INTO SaleItems (SaleID, ProductID, Quantity, Price) 
VALUES (2, 2, 2, 1.99);

-- Insert sample item options
INSERT INTO Options (Name, Price) VALUES ('Cheese', 0.50);
INSERT INTO Options (Name, Price) VALUES ('Extra Sauce', 0.25);

-- Insert sample sale item options
INSERT INTO SaleItemOptions (SaleItemID, OptionID) 
VALUES (1, 1);
INSERT INTO SaleItemOptions (SaleItemID, OptionID) 
VALUES (1, 2);
