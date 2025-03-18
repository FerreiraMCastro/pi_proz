-- cria a base de dados
CREATE DATABASE mogmog_v2;

--acessa a base de dados
\c mogmog_v2;

-- cria a extensão necessária para uso de criptografia no banco de dados
-- será usada para proteger a senha dos usuários a com a função pgp_sym_encrypt()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- cria a tabela CLIENTE
CREATE TABLE cliente (
	id serial,
	nome varchar(100),
	email varchar(150),
	celular varchar(14),
	senha varchar(80),
	PRIMARY KEY(id),
	UNIQUE(email)
);

-- popula a tabela CLIENTE
INSERT INTO cliente (nome, email, celular, senha) VALUES 
('MARCIA', 'marcia@email.com', '(81)99999-9999', pgp_sym_encrypt('123456', 'chave_secreta_criptográfica')),
('JACKSON', 'jackson@email.com', '(82)98888-8888', pgp_sym_encrypt('654321', 'chave_secreta_criptográfica')),
('VALTER', 'valter@email.com', '(81)97777-7777', pgp_sym_encrypt('654123', 'chave_secreta_criptográfica')),
('SOFIA', 'sofia@email.com', '(82)92233-4455', pgp_sym_encrypt('123456', 'chave_secreta_criptográfica'));

-- cria a tabela ENDEREÇO
CREATE TABLE endereco (
	id serial,
	idcliente integer,
	tipo varchar(50) default 'Residencial',
	rua varchar(150),
	numero integer,
	complemento varchar(150),
	bairro varchar(150),
	cidade varchar(150),
	estado varchar(2),
	cep varchar(10),
	PRIMARY KEY(id),
	FOREIGN KEY(idcliente) REFERENCES cliente(id) ON UPDATE cascade ON DELETE cascade
);

-- popula a tabela ENDEREÇO
INSERT INTO endereco (idcliente, tipo, rua, numero, complemento, bairro, cidade, estado, cep) VALUES 
(1, 'Residencial', 'Rua 1', 1, 'Casa 1', 'Bairro 1', 'RECIFE', 'PE', '55555-555'),
(2, 'Comercial', 'Rua 4', 4, 'Casa 4', 'Bairro 4', 'MACEIÓ', 'AL', '55555-555'),
(3, 'Residencial', 'Rua 5', 52, 'Casa 5', 'Bairro 5', 'BONITO', 'PE', '55555-555'),
(3, 'Comercial', 'Rua 6', 64, 'Casa 6', 'Bairro 6', 'RECIFE', 'PE', '55555-555'),
(4, 'Comercial', 'Rua 4', 4, 'Casa 4', 'Bairro 4', 'MACEIÓ', 'AL', '55555-555');


--cria a tabela CATEGORIAS
CREATE TABLE categorias (
	id serial,
	nome varchar(50),
	PRIMARY KEY(id)
);

--popula a tabela CATEGORIAS
INSERT INTO categorias (nome) VALUES 
('Feminino'),
('Masculino'),
('Infantil'),
('Acessórios'),
('Calçados');

--cria a tabela PRODUTOS
CREATE TABLE produtos (
	id serial,
	nome varchar(250),
	preco float,
	foto varchar(250),
	PRIMARY KEY(id)
);

--popula a tabela PRODUTOS
INSERT INTO produtos (nome, preco, foto) VALUES 
('Blusa Feminina', 50.00, 'blusa_feminina.jpg'),
('Blusa Mascu	lina', 60.00, 'blusa_masculina.jpg'),
('Boné', 30.00, 'bone.jpg'),
('Tênis', 100.00, 'tenis.jpg');

--cria tabela que irá vincular PRODUTOS e CATEGORIAS no modelo N para N
CREATE TABLE produtos_categoria (
	idproduto integer,
	idcategoria integer,
	FOREIGN KEY(idproduto) REFERENCES produtos(id) ON UPDATE cascade ON DELETE no action,
	FOREIGN KEY(idcategoria) REFERENCES categorias(id) ON UPDATE cascade ON DELETE no action
);

--popula a tabela que cria o vinculo PRODUTO->CATEGORIA
INSERT INTO produtos_categoria (idproduto, idcategoria) VALUES 
(1, 1),
(2, 2),
(3, 4),
(3, 2),
(4, 5),
(4, 1);

--cria a tabela Carrinho
CREATE TABLE carrinho(
	id serial,
	idcliente integer,
	data date default current_date, -- Data da compra definida como "hoje"
	situacao varchar(30) default 'Aberto', 
	-- SITUAÇÃO: Aberto (compra em andamento),
	--           Finalizado (compra concluida esperando pagamento), 
	--           Pago (pagamento realizado),
	--           Cancelado (compra cancelada)
	meio_pagamento varchar(20) default 'Cartão', -- MEIO DE PAGAMENTO: Cartão, Dinheiro, PIX
	PRIMARY KEY(id),
	FOREIGN KEY(idcliente) REFERENCES cliente(id) ON UPDATE cascade ON DELETE no action
);

--cria a tabela que contém os ITENS do CARRINHO
CREATE TABLE carrinho_itens(
	idcarrinho integer,
	idproduto integer,
	quantidade integer,
	PRIMARY KEY(idcarrinho, idproduto),
	FOREIGN KEY(idcarrinho) REFERENCES carrinho(id) ON UPDATE cascade ON DELETE no action,
	FOREIGN KEY(idproduto) REFERENCES produtos(id) ON UPDATE cascade ON DELETE no action
);


-- seleciona a partir da tabela de clientes os clientes e seus respectivos endereços;
-- podendo haver mais de um endereço por cliente e mais de um cliente por endereço (RELACIONAMENTO N-N).
select cli.nome, cli.email, cli.celular, 
       endereco.tipo as tipo_endereco, endereco.rua, endereco.numero, endereco.complemento,
	   endereco.bairro, endereco.cidade, endereco.estado, endereco.cep
from cliente as cli inner join endereco on cli.id = endereco.idcliente;

