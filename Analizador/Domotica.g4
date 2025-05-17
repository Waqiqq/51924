grammar Domotica;


// Reglas sintácticas
programa: regla+;

regla: CUANDO condicion ENTONCES accion PUNTOYCOMA;

condicion: nombre_dispositivo estado_condicion valor_condicion;

nombre_dispositivo: ID;

estado_condicion: ES | (MAYOR QUE)| (MENOR QUE);

valor_condicion: estado | NUMERO;

estado: ENCENDIDO | APAGADO;

accion: accion_simple;

accion_simple
    : activar
    | desactivar
    | ajustar
    ;

activar: ACTIVAR nombre_dispositivo;
desactivar: DESACTIVAR nombre_dispositivo;
ajustar: AJUSTAR nombre_dispositivo A NUMERO;

// Reglas léxicas
CUANDO: 'cuando';
ENTONCES: 'entonces';

ES: 'es';
MAYOR: 'mayor';
MENOR: 'menor';
QUE:'que';

ENCENDIDO: 'encendido';
APAGADO: 'apagado';

ACTIVAR: 'activar';
DESACTIVAR: 'desactivar';
AJUSTAR: 'ajustar';

A: 'a';
PUNTOYCOMA: ';';

NUMERO: DIGITO+;
fragment DIGITO: [0-9];

ID: LETRA (LETRA | DIGITO | '_')*;
fragment LETRA: [a-zA-Z];

WS: [ \t\r\n]+ -> skip;
