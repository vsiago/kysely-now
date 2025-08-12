-- Cria a tabela "users" para armazenar os usuários

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Cria a tabela "products" para armazenar os produtos
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id INTEGER NOT NULL REFERENCES users(id) on DELETE CASCADE,
    name VARCHAR(250) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

-- Inserir um usuário na tabela users
INSERT INTO users (name, email, password)
VALUES ('Iago Souza', 'vsiago23@gmail.com', '81510156');

-- Insert um produto para o usuário de id 1
INSERT INTO products (user_id, name, price)
VALUES (1, 'Notebook Acer', 3500.00);

-- Consulta produtos juntando os dado
s do usuário dono de cada produto
SELECT 
  p.id,         -- id do produto
  p.name,       -- nome do produto
  p.price,      -- preço do produto
  u.name AS owner_name,  -- nome do dono do produto, renomeado para owner_name
  u.email       -- email do dono do produto
FROM products p
JOIN users u ON p.user_id = u.id;  -- faz a junção das tabelas usando o relacionamento user_id = id


-- Cada propriedade perguntar:
-- - Qual é o tipo de dado?
-- - Deve ser null?
-- - É único?
-- - ID como chave estrangeira?