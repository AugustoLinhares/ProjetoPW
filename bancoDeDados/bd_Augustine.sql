drop SCHEMA if EXISTS bd_augustine
CREATE DATABASE bd_augustine;
use bd_augustine;
CREATE TABLE login (
        id_lo int(11) NOT NULL,
        Usuario_log varchar(100) NOT NULL,
        senha_log varchar(50) NOT NULL
    ) 
-- --------------------------------------------------------

--

-- Estrutura da tabela `parceiro`

--

CREATE TABLE
    `parceiro` (
        `Id` int(11) NOT NULL,
        `Bairro` varchar(100) NOT NULL,
        `NomeFant` varchar(150) NOT NULL,
        `Pais` varchar(60) NOT NULL,
        `CNPJ` varchar(18) NOT NULL,
        `Ramo` varchar(100) NOT NULL,
        `Telefone` varchar(100) NOT NULL,
        `Servico` varchar(100) NOT NULL,
        `Email` varchar(100) NOT NULL,
        `Municipio` varchar(100) NOT NULL,
        `Estado` varchar(100) NOT NULL,
        `Rua` varchar(100) NOT NULL,
        `Numero` varchar(100) NOT NULL,
        `id_log_fk` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--

-- Estrutura da tabela `patrocinador`

--

CREATE TABLE
    `patrocinador` (
        `Id` int(11) NOT NULL,
        `Numero` int(11) NOT NULL,
        `Bairro` varchar(100) NOT NULL,
        `NomeFant` varchar(150) NOT NULL,
        `Pais` varchar(150) NOT NULL,
        `CNPJ` int(11) NOT NULL,
        `Telefone` int(11) NOT NULL,
        `Email` int(11) NOT NULL,
        `Municipio` int(11) NOT NULL,
        `Estado` int(11) NOT NULL,
        `Rua` int(11) NOT NULL,
        `id_log_fk` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--

-- Estrutura da tabela `receita`

--

CREATE TABLE
    `receita` (
        `Id` int(11) NOT NULL,
        `Titulo` varchar(100) NOT NULL,
        `Adicional` varchar(100) NOT NULL,
        `Descricao` varchar(100) NOT NULL,
        `Imagem` blob NOT NULL,
        `Ingrediente` varchar(100) NOT NULL,
        `TempoPrep` time NOT NULL,
        `Dificuldade` varchar(100) NOT NULL,
        `Porcao` int(11) NOT NULL,
        `Passo` varchar(500) NOT NULL,
        `id_usu_fk` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--

-- Extraindo dados da tabela `receita`

--

INSERT INTO
    `receita` (
        `Id`,
        `Titulo`,
        `Adicional`,
        `Descricao`,
        `Imagem`,
        `Ingrediente`,
        `TempoPrep`,
        `Dificuldade`,
        `Porcao`,
        `Passo`,
        `id_usu_fk`
    )
VALUES (
        1,
        'aa',
        'aa',
        'aaa',
        '',
        'aaa',
        '00:00:02',
        '1',
        2,
        'aa',
        0
    ), (
        2,
        'bb',
        'dd',
        'ff',
        '',
        'bb',
        '00:00:02',
        '2',
        2,
        'ff',
        0
    ), (
        3,
        'bb',
        'dd',
        'ff',
        '',
        'bb',
        '00:00:02',
        '2',
        2,
        'ff',
        0
    );

-- --------------------------------------------------------

--

-- Estrutura da tabela `tempero`

--

CREATE TABLE
    `tempero` (
        `Id` int(11) NOT NULL,
        `Nome` varchar(100) NOT NULL,
        `Cidade` varchar(100) NOT NULL,
        `Estado` varchar(70) NOT NULL,
        `Pais` varchar(70) NOT NULL,
        `Descricao` varchar(200) NOT NULL,
        `Componentes` varchar(200) NOT NULL,
        `id_usu_fk` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--

-- Estrutura da tabela `usuario`

--

CREATE TABLE
    `usuario` (
        `Id` int(11) NOT NULL,
        `DataNasc` date NOT NULL,
        `Email` varchar(100) NOT NULL,
        `CPF` varchar(12) NOT NULL,
        `Genero` varchar(40) NOT NULL,
        `Foto` blob NOT NULL,
        `Nome` varchar(100) NOT NULL,
        `Senha` varchar(50) NOT NULL,
        `id_login_fk` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--

-- Índices para tabelas despejadas

--

--

-- Índices para tabela `login`

--

ALTER TABLE `login` ADD PRIMARY KEY (`Id`);

--

-- Índices para tabela `parceiro`

--

ALTER TABLE `parceiro` ADD PRIMARY KEY (`Id`);

--

-- Índices para tabela `patrocinador`

--

ALTER TABLE `patrocinador` ADD PRIMARY KEY (`Id`);

--

-- Índices para tabela `receita`

--

ALTER TABLE `receita` ADD PRIMARY KEY (`Id`);

--

-- Índices para tabela `tempero`

--

ALTER TABLE `tempero` ADD PRIMARY KEY (`Id`);

--

-- Índices para tabela `usuario`

--

ALTER TABLE `usuario` ADD PRIMARY KEY (`Id`);

--

-- AUTO_INCREMENT de tabelas despejadas

--

--

-- AUTO_INCREMENT de tabela `login`

--

ALTER TABLE `login` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT de tabela `parceiro`

--

ALTER TABLE `parceiro` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT de tabela `patrocinador`

--

ALTER TABLE
    `patrocinador` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT de tabela `receita`

--

ALTER TABLE
    `receita` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 4;

--

-- AUTO_INCREMENT de tabela `tempero`

--

ALTER TABLE `tempero` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT de tabela `usuario`

--

ALTER TABLE `usuario` MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;



