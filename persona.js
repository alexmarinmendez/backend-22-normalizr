// nombre: alex
// direcion:
//     calle: descalsos
//     numero: 169
// telefonos:
//     1233
//     4566
// ==========================
// 
// En una BD No-SQL ✔
// persona
const p1 = {
    nombre: 'alex',
    direccion: {
        calle: 'descalsos',
        numero: 169
    },
    telefonos: {
        tel1: 1234,
        tel2: 4566
    }
}

// Pero... en una BD SQL => 💣
const p2 = {
    nombre: 'alex',
    direccion_calle: 'descalsos',
    direccion_numero: 169,
    tel1: 1233,
    tel2: 4566
}

nombre  |  direccion-calle    |  direccion_numero   |  tel1      | tel2
alex    |  descalsos          |  169                |  1233      | 3456

// Otra forma en BD SQL 
id| nombre  | direccion
1 | alex    |  1

//direcciones
id |  calle     |  numero
1  |  descalsos |  169

//telefonos
id  |  idPropietario   |  telefono
1   |  1               |  1233
2   |  1               |  3455