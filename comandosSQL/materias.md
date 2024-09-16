### query para inserir curso

```bash
INSERT INTO cursos (nome, periodo, modulo)
VALUES
    ('Desenvolvimento de sistemas','Noturno','primeiro');
```


### query para inserir as materias dos cursos na table `materias`

```bash
INSERT INTO materias (nome, descricao, curso_id)
VALUES 
    ('Desenvolvimento WEB I', 'aprendendo os fundamentos basicos para desenvolvimento web', 1),
    ('Programação e Algoritmos', 'aprendendo lógica de programação e estrutura de dados', 1),
    ('Banco de Dados I', 'introdução aos conceitos de banco de dados e SQL', 1),
    ('Design Digital', 'conceitos de design e ferramentas para criação de interfaces digitais', 1),
    ('Fundamentos da Informática', 'noções básicas de informática e sistemas operacionais', 1);
``` 


### query para inserir as tags

```bash
INSERT INTO tags (nome, materia_id)
VALUES 
    ('HTML', 1),         -- ID da matéria "Desenvolvimento WEB I"
    ('CSS', 1),
    ('JavaScript', 1),
    ('Algoritmos', 2),   -- ID da matéria "Programação e Algoritmos"
    ('SQL', 3),          -- ID da matéria "Banco de Dados I"
    ('Modelagem de Dados', 3),
    ('UX/UI', 4),        -- ID da matéria "Design Digital"
    ('Photoshop', 4),
    ('Hardware', 5),     -- ID da matéria "Fundamentos da Informática"
    ('Sistemas Operacionais', 5);
```