
# Analizador de Lenguaje "Domotica" basado en ANTLR y JavaScript 
(nombre creado sin ningún significado)

Este proyecto implementa un analizador sintáctico para un lenguaje específico de dominio (DSL) en español, orientado a la automatización de dispositivos en un sistema domótico. Usa ANTLR4 para generar el parser y Node.js para ejecutar las reglas sobre un texto de entrada.

El sistema reconoce reglas como:  
cuando luz es encendido entonces desactivar luz;

Y las interpreta como condiciones para ejecutar una acción sobre un dispositivo si se cumple un estado o valor.

Permite a usuarios escribir reglas domóticas en lenguaje natural simplificado, para luego traducirlas a acciones programables dentro de un sistema.

Una regla se estructura así:  
cuando <dispositivo> <condición> <valor> entonces <acción> ;

Palabras clave reconocidas:  
cuando, entonces, es, mayor que, menor que, encendido, apagado, activar, desactivar, ajustar, a

Dispositivos: cualquier identificador (por ejemplo: luz, ventilador, alarma)  
Valores: estados como encendido o apagado, o números como 1, 2, etc.  
Acciones posibles: activar, desactivar o ajustar un dispositivo


Se debe ingresar su regla en el archivo "input.txt", allí encontrará un ejemplo, pero usted puede cambiarlo por alguno de los 4 ejemplos dados o incluir uno propio basado en la estructura indicada anteriormente.



Ejemplos válidos (input.txt):

cuando ventilador es encendido entonces ajustar ventilador a 9;

cuando alarma es apagado entonces activar alarma;



Ejemplos inválidos (para probar errores):

cuando luz está encendido entonces desactivar luz;
→ Error: "está" no es válido. Debe ser "es".

cuando ventilador mayor que 5 entonces ajustar ventilador a 2
→ Error: falta el punto y coma al final.

Cómo usar el analizador:

1. Instala las dependencias:  
npm install antlr4

2. Genera los archivos de parser con ANTLR4:  
antlr4 -Dlanguage=JavaScript Domotica.g4 -o generated

Si no tienes el comando antlr4, puedes usar:  
java -jar /ruta/a/antlr-4.X-complete.jar -Dlanguage=JavaScript Domotica.g4 -o generated

3. Ejecuta el analizador:  
node index.js


Entrada:  Debe ingresarse en el archivo "input.txt". Ejemplo:

cuando luz es encendido entonces desactivar luz;

Equivalente en JavaScript:  
const luz = { encendido: true, desactivar: () => { luz.encendido = false; } };  
if (luz.encendido) luz.desactivar();

Para ejecutarlo se debe clonar el repositorio: bash - git clone https://github.com/Waqiqq/51924
Cambiar el directorio: bash - cd Analizador
ejecutar: bash - node index.js

