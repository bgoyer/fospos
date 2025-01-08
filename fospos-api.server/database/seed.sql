-- Drop tables if they exist
DROP TABLE IF EXISTS CartItemOption;
DROP TABLE IF EXISTS CartItem;
DROP TABLE IF EXISTS Cart;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS SubCategory;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Payment;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS UserLog;
DROP TABLE IF EXISTS TimeSheet;
DROP TABLE IF EXISTS UserRole;
DROP TABLE IF EXISTS Role;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS ProductOption;

-- Table to manage users/employees of the POS system
CREATE TABLE Role (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT UNIQUE NOT NULL,
    Description TEXT NOT NULL
);

CREATE TABLE User (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Username TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL, -- Hashed password
    RoleID INTEGER NOT NULL,
    FOREIGN KEY (RoleID) REFERENCES Role(ID)
);

CREATE TABLE UserRole (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    RoleID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    FOREIGN KEY (RoleID) REFERENCES Role(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

-- Table to manage time sheets
CREATE TABLE TimeSheet (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    DailyHours REAL,
    PayPeriodHours REAL,
    YearlyHours REAL,
    YTDPay REAL,
    PayPeriodPay REAL,
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

-- Table to manage user logs
CREATE TABLE UserLog (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    LogDate TEXT NOT NULL,
    Message TEXT,
    Severity INTEGER,
    FOREIGN KEY (UserID) REFERENCES User(ID)
);


-- Table to store information about customers
CREATE TABLE Customer (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Email TEXT,
    Phone TEXT
);

-- Table to store payment methods
CREATE TABLE Payment (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CartID INTEGER NOT NULL,
    PaymentMethod TEXT NOT NULL, -- e.g., Cash, Credit Card, etc.
    AmountPaid REAL NOT NULL,
    PaymentDate TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CartID) REFERENCES Cart(ID)
);

-- Table to manage categories
CREATE TABLE Category (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL
);

-- Table to manage subcategories
CREATE TABLE SubCategory (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    CategoryID INTEGER NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Category(ID)
);

-- Table to store information about products
CREATE TABLE Product (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Description TEXT,
    Price REAL NOT NULL,
    QuantityInStock INTEGER NOT NULL,
    SubCategoryID INTEGER NOT NULL,
    FOREIGN KEY (SubCategoryID) REFERENCES SubCategory(ID)
);

-- Table to store sales transactions
CREATE TABLE Cart (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    SaleDate TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CustomerID INTEGER NOT NULL,
    TotalAmount REAL NOT NULL,
    IsComplete BOOLEAN NOT NULL DEFAULT 0,
    RawSaleData TEXT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(ID)
);

-- Table to store details of each sale (line items)
CREATE TABLE CartItem (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CartID INTEGER NOT NULL,
    ProductID INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    Price REAL NOT NULL,
    FOREIGN KEY (CartID) REFERENCES Cart(ID),
    FOREIGN KEY (ProductID) REFERENCES Product(ID)
);

CREATE TABLE CartItemOption (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CartItemID INTEGER NOT NULL,
    ProductOptionID INTEGER NOT NULL,
    FOREIGN KEY (CartItemID) REFERENCES CartItem(ID),
    FOREIGN KEY (ProductOptionID) REFERENCES ProductOption(ID)
);

-- Table to manage item options
CREATE TABLE ProductOption (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductID INTEGER NOT NULL,
    Name TEXT,
    Price REAL
);
-- Sample Test Data

-- Insert sample roles
INSERT INTO Role (Name, Description) VALUES ('Admin', 'This is the admin role');
INSERT INTO Role (Name, Description) VALUES ('Cashier', 'This is the cashier role');
INSERT INTO Role (Name, Description) VALUES ('Manager', 'This is the manager role');

-- Insert sample users
INSERT INTO User (Username, Password, RoleID) VALUES ('admin', 'hashedpassword123', 1);
INSERT INTO User (Username, Password, RoleID) VALUES ('cashier', 'hashedpassword456', 2);
INSERT INTO User (Username, Password, RoleID) VALUES ('manager', 'hashedpassword789', 3);

-- Insert sample timesheets
INSERT INTO TimeSheet (UserID, DailyHours, PayPeriodHours, YearlyHours, YTDPay, PayPeriodPay) 
VALUES (1, 8, 40, 1600, 40000, 1000);
INSERT INTO TimeSheet (UserID, DailyHours, PayPeriodHours, YearlyHours, YTDPay, PayPeriodPay) 
VALUES (2, 6, 30, 1200, 30000, 750);

-- Insert sample user logs
INSERT INTO UserLog (UserID, LogDate, Message, Severity) 
VALUES (1, datetime('now'), 'User logged in', 1);
INSERT INTO UserLog (UserID, LogDate, Message, Severity) 
VALUES (2, datetime('now'), 'User processed a sale', 2);

-- Insert sample customers
INSERT INTO Customer (Name, Email, Phone) VALUES ('John Doe', 'john.doe@example.com', '1234567890');
INSERT INTO Customer (Name, Email, Phone) VALUES ('Jane Smith', 'jane.smith@example.com', '0987654321');

-- Insert sample categories
INSERT INTO Category (Name) VALUES ('Food');
INSERT INTO Category (Name) VALUES ('Beverages');

-- Insert sample subcategories
INSERT INTO SubCategory (Name, CategoryID) VALUES ('Appetizers', 1);
INSERT INTO SubCategory (Name, CategoryID) VALUES ('Soft Drinks', 2);

-- Insert sample products
INSERT INTO Product (Name, Description, Price, QuantityInStock, SubCategoryID) 
VALUES ('Burger', 'Delicious beef burger', 8.99, 50, 1);
INSERT INTO Product (Name, Description, Price, QuantityInStock, SubCategoryID) 
VALUES ('Coke', 'Refreshing soda', 1.99, 100, 2);

-- Insert sample sales
INSERT INTO Cart (SaleDate, CustomerID, TotalAmount, IsComplete) 
VALUES (datetime('now'), 1, 10.98, 1);
INSERT INTO Cart (SaleDate, CustomerID, TotalAmount, IsComplete) 
VALUES (datetime('now'), 2, 4.99, 0);

-- Insert sample sale items
INSERT INTO CartItem (CartID, ProductID, Quantity, Price) 
VALUES (1, 1, 1, 8.99);
INSERT INTO CartItem (CartID, ProductID, Quantity, Price) 
VALUES (1, 2, 1, 1.99);
INSERT INTO CartItem (CartID, ProductID, Quantity, Price) 
VALUES (2, 2, 2, 1.99);

-- Insert sample item options
INSERT INTO ProductOption (ProductID, Name, Price) VALUES (1, 'Cheese', 0.50);
INSERT INTO ProductOption (ProductID, Name, Price) VALUES (1, 'Extra Sauce', 0.25);
INSERT INTO ProductOption (ProductID, Name, Price) VALUES (2, 'Vanilla Flavor', 0.05);
INSERT INTO ProductOption (ProductID, Name, Price) VALUES (2, 'Upsize', 0.50);

-- Insert sample sale item options
INSERT INTO CartItemOption (CartItemID, ProductOptionID) 
VALUES (1, 1);
INSERT INTO CartItemOption (CartItemID, ProductOptionID) 
VALUES (1, 2);
