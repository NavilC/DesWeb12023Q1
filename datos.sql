create table tbl_persona
(
    id_persona int auto_increment primary key ,
    nombre_persona varchar(200),
    apellido_persona varchar(200),
    fecha_nacimiento date
);


create table tbl_telefonos
(
    id_telefono int auto_increment primary key,
    numero varchar(20),
    id_persona int,
    constraint foreign key fk_id_persona (id_persona) references tbl_persona(id_persona)
);


-- Bulk Insert
insert into tbl_persona ( nombre_persona, apellido_persona, fecha_nacimiento)
values
    ('Cristiano', 'Ronaldo', '1985-02-05'),
    ('Leonel', 'Messi', '1988-08-30'),
    ('Alex', 'Morgan', '1990-12-15');

insert into tbl_telefonos
( numero, id_persona)
values
    ('99991278', 1),
    ('89786756', 1),
    ('22334567', 2),
    ('33238912', 3);


select * from tbl_persona