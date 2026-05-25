const fs = require('fs');
const content = `
const CLASS_13: ClassSession = {
    id: 13,
    title: "Funciones",
    description: "Modularización del código y reutilización.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Comprender qué es una función y por qué se usa", "Declarar y llamar funciones", "Utilizar parámetros y retorno de valores", "Aplicar funciones a elementos HTML"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: ¿Qué es una Función?",
            content: "¡Hola a todos! Hoy entramos a uno de los temas más poderosos de la programación: **Las Funciones**.\\n\\nImaginemos que una función es como una máquina expendedora o una fábrica. Tú le das ingredientes (parámetros), la máquina hace un proceso interno (código), y te devuelve un producto terminado (retorno).\\n\\n¿Por qué usamos funciones?\\n1. **Para no repetir código (DRY - Don't Repeat Yourself):** Si hacemos la misma tarea 10 veces, es mejor escribirla una vez en una función y llamarla 10 veces.\\n2. **Para ordenar el código:** Divide un problema gigante en problemas pequeños."
        },
        {
            type: "theory",
            title: "0:30 - 0:45 | Dinámica Visual: La Máquina de Hacer Jugos",
            content: "Para esta dinámica, muestra el siguiente gráfico a los alumnos como metáfora de una función.\\n\\n<div class=\\"flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-inner border border-blue-200 my-4\\">\\n  <div class=\\"flex items-center gap-4\\">\\n    <div class=\\"text-center animate-bounce\\">\\n      <span class=\\"text-4xl\\">🍎🍊</span>\\n      <p class=\\"text-sm font-bold text-gray-700 mt-2\\">Entradas (Parámetros)</p>\\n    </div>\\n    <span class=\\"text-2xl text-blue-500 font-bold\\">➡️</span>\\n    <div class=\\"bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-300 relative overflow-hidden group\\">\\n      <div class=\\"absolute top-0 left-0 w-full h-1 bg-indigo-500 animate-pulse\\"></div>\\n      <h3 class=\\"text-xl font-bold text-indigo-700\\">Función hacerJugo()</h3>\\n      <p class=\\"text-sm text-gray-500 italic mt-2\\">Cuerpo de la función...</p>\\n      <ul class=\\"text-left text-xs mt-2 text-gray-600 list-disc list-inside\\">\\n        <li>Lavar frutas</li>\\n        <li>Licuar</li>\\n        <li>Servir</li>\\n      </ul>\\n    </div>\\n    <span class=\\"text-2xl text-blue-500 font-bold\\">➡️</span>\\n    <div class=\\"text-center scale-110 transition-transform hover:scale-125\\">\\n      <span class=\\"text-4xl\\">🍹</span>\\n      <p class=\\"text-sm font-bold text-gray-700 mt-2\\">Salida (Return)</p>\\n    </div>\\n  </div>\\n</div>\\n\\n**Pregunta a la clase:** ¿Qué pasa si llamo a \`hacerJugo(🍓, 🍌)\`? ¡Me devuelve un jugo de fresa y plátano! La máquina (función) es la misma, los ingredientes (parámetros) cambian."
        },
        {
            type: "script",
            title: "0:45 - 1:15 | Sintaxis de una Función",
            content: "Para crear nuestra fábrica en JavaScript, usamos la palabra \`function\`, le damos un nombre (acción), abrimos paréntesis \`()\` para los ingredientes, y llaves \`{}\` para el horno (código).\\n\\nVamos a ver el caso de una función simple, y luego una que sume dos números."
        },
        {
            type: "code",
            title: "script.js - Ejemplo en vivo",
            codeLanguage: "javascript",
            content: \`// 1. Declarar la función
function saludar() {
    console.log("¡Hola, programadores!");
}

// Para usarla, hay que "llamarla" o "invocarla"
saludar(); 
saludar(); // Puedo llamarla muchas veces

// 2. Función con parámetros
function sumar(numero1, numero2) { // numero1 y numero2 son como variables locales
    let resultado = numero1 + numero2;
    console.log("La suma es: " + resultado);
}

sumar(5, 10); // Imprime 15
sumar(100, 50); // Imprime 150\`
        },
        {
            type: "task",
            title: "1:15 - 1:45 | Caso de Análisis (Debate en Clase): El Calculador de Descuentos",
            content: "Muestra este código a la clase y pídeles que analicen en conjunto qué hace, por qué es útil y qué mostrarán los \`console.log\`.\\n\\n**Preguntas guiadas para el docente:**\\n1. ¿Qúe le estamos pasando entre paréntesis a \`aplicarDescuento\`?\\n2. ¿Qué ventaja nos da esto frente a escribir la resta de porcentajes cada vez?\\n3. ¿Qué pasa si le pasamos variables en lugar de números directos?\\n\\n**Código para analizar:**",
        },
        {
            type: "code",
            title: "script.js - Calculadora de Descuentos",
            codeLanguage: "javascript",
            content: \`function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log("Precio final con " + porcentajeDescuento + "% de DSCTO: $" + precioFinal);
}

aplicarDescuento(100, 20);
aplicarDescuento(50, 10);

let precioZapatos = 120;
let dsctoVerano = 30;
aplicarDescuento(precioZapatos, dsctoVerano);\`
        },
        {
            type: "script",
            title: "1:45 - 2:00 | Break",
            content: "Descanso y preguntas libres."
        },
        {
            type: "script",
            title: "2:00 - 2:30 | La sentencia 'return'",
            content: "A veces la función hace el trabajo sucio en el horno, pero **no** queremos que muestre el resultado inmediatamente en la consola. Queremos que la función le **devuelva** el resultado a la sección del código que la llamó para usarlo en otra cosa (por ejemplo, para mandarlo a una base de datos o pintarlo en el HTML).\\n\\nPara eso se usa la palabra mágica \`return\`."
        },
        {
             type: "code",
             title: "script.js - El poder del Return",
             codeLanguage: "javascript",
             content: \`function multiplicar(a, b) {
    let producto = a * b;
    return producto; // Devuelve el dato hacia afuera, y "termina" la función
}

// El resultado de la función cae en la variable 'resultadoFinal'
let resultadoFinal = multiplicar(6, 4); 

// Ahora nosotros decidimos qué hacer con el dato:
console.log("El resultado es " + resultadoFinal);
// o, si estuviéramos en HTML: document.getElementById("texto").innerText = resultadoFinal;
\`
        },
        {
            type: "task",
            title: "2:30 - 3:00 | Otro Caso Práctico: Validador de Nombres",
            content: "Analicemos con los alumnos esta función que valida si un nombre es apto para un registro.\\n\\n**Pregunta clave para debate:** ¿Por qué cuando hace el \`return false\` la función se detiene y ya no lee lo demás? R= Porque \`return\` expulsa de la función."
        },
        {
            type: "code",
            title: "script.js - Validador",
            codeLanguage: "javascript",
            content: \`function esNombreValido(nombre) {
    if (nombre.length < 3) {
        return false; // Muy corto
    }
    if (nombre === "Admin") {
        return false; // Nombre prohibido
    }
    return true; // Si pasó todas las pruebas
}

console.log(esNombreValido("Al")); // false
console.log(esNombreValido("Admin")); // false
console.log(esNombreValido("Maria")); // true\`
        },
        {
            type: "task",
            title: "3:00 - 4:00 | Actividad Principal: Calculadora de IMC con UI",
            content: "Los alumnos integrarán el HTML y botones con una función con parámetros y \`return\`.\\n\\n**Instrucciones para los alumnos:**\\n1. Crear un formulario con dos inputs: Peso (kg) y Altura (mts).\\n2. Crear un botón que llame a una función \`calcularUI()\`.\\n3. **El reto:** Creen una función SEPARADA llamada \`calcularIMC(peso, altura)\` que sólo haga la matemática y haga un \`return\` del resultado.\\n4. \`calcularUI()\` extraerá los values, llamará a \`calcularIMC()\` pasándole los values, capturará el \`return\`, y modificará un párrafo indicando el IMC.\\n5. *(Extra)* Aplicar condicionales para determinar si es Bajo Peso (<18.5) , Normal o Sobrepeso.\\n\\n**Solución para Docentes:**"
        },
        {
            type: "code",
            title: "index.html",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Calculadora IMC</title>
    <!-- Tailwind para CSS rápido, u hoja de estilos propia -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">

    <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 class="text-2xl font-bold mb-4">Calcula tu IMC</h2>
        
        <input type="number" id="peso" placeholder="Peso (kg)" class="w-full mb-3 p-2 border rounded">
        <input type="number" id="altura" placeholder="Altura (ej: 1.75 mts)" class="w-full mb-4 p-2 border rounded">
        
        <button onclick="calcularUI()" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Calcular</button>
        
        <div id="resultado" class="mt-4 font-bold text-lg hidden"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>\`
        },
        {
            type: "code",
            title: "script.js",
            codeLanguage: "javascript",
            content: \`// Función PURA: Sólo matemática y lógica
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc; 
}

// Función DOM: Conecta HTML con Javascript
function calcularUI() {
    let inputPeso = Number(document.getElementById('peso').value);
    let inputAltura = Number(document.getElementById('altura').value);
    let divResultado = document.getElementById('resultado');

    // Validación básica
    if (inputPeso === 0 || inputAltura === 0) {
        divResultado.innerText = "Por favor, ingresa datos válidos.";
        divResultado.className = "mt-4 font-bold text-red-500 block";
        return; 
    }

    // Llamo a la máquina de hacer matemáticas
    let resultadoIMC = calcularIMC(inputPeso, inputAltura);

    let diagnostico = "";
    if (resultadoIMC < 18.5) diagnostico = "(Bajo peso)";
    else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) diagnostico = "(Normal)";
    else diagnostico = "(Sobrepeso)";

    // Pintar en HTML (usamos .toFixed(1) para mostrar solo 1 decimal)
    divResultado.innerText = "Tu IMC es: " + resultadoIMC.toFixed(1) + " " + diagnostico;
    
    // Mostramos el div
    divResultado.className = "mt-4 font-bold text-blue-700 block p-3 bg-blue-50 rounded-lg border border-blue-200";
}\`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "13.1 ¿Qué es una Función?",
            content: "Una función es un bloque de código empaquetado para realizar una tarea específica.\\n\\nPiensa en ello como una máquina:\\n*   **Entradas (Parámetros):** Los datos que le damos a la máquina (ej: frutas).\\n*   **Proceso:** Lo que el código hace con los parámetros (ej: licuar).\\n*   **Salidas (Retorno / Return):** Lo que nos devuelve la máquina (ej: jugo).\\n\\n¿Por qué las usamos?\\n1.  **D.R.Y (Don't Repeat Yourself):** No repitas código. Escríbelo una vez, úsalo mil veces.\\n2.  **Organización:** Simplifica la lectura de programas complejos."
        },
        {
             type: "theory",
             title: "Dinámica: La Función como una Fábrica",
             content: "<div class=\\"flex flex-col items-center justify-center p-8 bg-gradient-to-r from-emerald-50 to-teal-100 rounded-xl shadow-inner border border-teal-200 my-4\\">\\n  <div class=\\"flex items-center gap-4\\">\\n    <div class=\\"text-center animate-bounce\\">\\n      <span class=\\"text-4xl\\">🍓🥛</span>\\n      <p class=\\"text-sm font-bold text-gray-700 mt-2\\">Parámetros</p>\\n    </div>\\n    <span class=\\"text-2xl text-teal-500 font-bold\\">➡️</span>\\n    <div class=\\"bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300 relative overflow-hidden\\">\\n      <h3 class=\\"text-xl font-bold text-teal-700\\">function licuar(a, b)</h3>\\n      <p class=\\"text-sm text-gray-500 mt-2\\">return a + b;</p>\\n    </div>\\n    <span class=\\"text-2xl text-teal-500 font-bold\\">➡️</span>\\n    <div class=\\"text-center hover:scale-110 transition-transform\\">\\n      <span class=\\"text-4xl\\">🥤</span>\\n      <p class=\\"text-sm font-bold text-gray-700 mt-2\\">Return (Resultado)</p>\\n    </div>\\n  </div>\\n</div>"
        },
        {
            type: "code",
            title: "Ejemplos: Declarando Funciones",
            codeLanguage: "javascript",
            content: \`// 1. Función Simple
function saludar() {
    console.log("¡Hola desde la función!");
}

// Llamar a la función:
saludar(); // Imprime: ¡Hola desde la función!

// 2. Función con Parámetros
function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log("Suma: " + resultado);
}

// Le pasamos los "ingredientes":
sumar(10, 5); // Imprime: Suma: 15\`
        },
        {
            type: "task",
            title: "Caso de Estudio: Calculadora de Descuentos",
            content: "Analiza el siguiente código con tu profesor y compañeros. Observa cómo reutilizar la misma función \`aplicarDescuento\` nos ahorra escribir mucha matemática."
        },
        {
            type: "code",
            title: "Calculadora de Descuentos",
            codeLanguage: "javascript",
            content: \`function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log("Precio con dscto: $" + precioFinal);
}

// Mismo proceso, diferentes datos:
aplicarDescuento(100, 20); // $80
aplicarDescuento(50, 10);  // $45\`
        },
        {
            type: "theory",
            title: "13.2 La palabra clave 'return'",
            content: "\`return\` se utiliza para devolver un valor desde la función hacia la línea de código donde fue llamada. Además, \`return\` detiene inmediatamente la ejecución de la función."
        },
        {
            type: "code",
            title: "Uso de Return",
            codeLanguage: "javascript",
            content: \`function multiplicar(a, b) {
    let producto = a * b;
    return producto; // Expulsa el dato
}

// Guardamos el retorno en una variable:
let miResultado = multiplicar(6, 4); 

// Luego lo usamos donde queramos:
console.log("El resultado guardado es: " + miResultado);\`
        },
        {
            type: "task",
            title: "Actividad Principal: Calculadora de IMC",
            content: "**Instrucciones:**\\n1. Crea un HTML con dos inputs (Peso en kg y Altura en mts) y un botón de 'Calcular'.\\n2. Crea un div vacío para mostrar los resultados.\\n3. En JS, crea una función independiente \`calcularIMC(peso, altura)\` que retorne el cálculo \`peso / (altura * altura)\`.\\n4. Crea otra función \`calcularUI()\` (para el botón) que extraiga los values, llame a \`calcularIMC()\`, capture el retorno y lo muestre en HTML con un breve diagnóstico (Bajo peso, Normal, Sobrepeso)."
        }
    ]
};
`;

const fileContent = fs.readFileSync('constants.ts', 'utf-8');

// replace the CLASS_13 placeholder and export const SYLLABUS
const replaceStr = '{ id: 13, title: "Funciones", description: "Modularización del código.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] }';
let newContent = fileContent.replace(replaceStr, 'CLASS_13');

// insert const CLASS_13 before export const SYLLABUS
newContent = newContent.replace('export const SYLLABUS: Unit[] = [', content + '\\nexport const SYLLABUS: Unit[] = [');

fs.writeFileSync('constants.ts', newContent, 'utf-8');
