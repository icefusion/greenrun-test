

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    role_id INT NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    phone VARCHAR(50) NOT NULL, 
    email VARCHAR(400) NOT NULL, 
    address VARCHAR(500) NOT NULL, 
    gender VARCHAR(50) NOT NULL, 
    birthdate DATETIME NOT NULL, 
    phone VARCHAR(50) NOT NULL, 
    city VARCHAR(500) NOT NULL, 
    category_id INT NOT NULL,
    document VARCHAR(50) NOT NULL, 
    user_state VARCHAR(50) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    deleted_at DATETIME,
    deleted TINYINT;
)  ENGINE=INNODB;


id, role, first_name, last_name, phone, email, username, address, gender, birth_date, country_id, city, category, 
document_id, user_state, created_at, updated_at, deleted, deleted_at
