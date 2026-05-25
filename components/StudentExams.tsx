import React, { useState, useEffect } from 'react';
import { Download, ChevronLeft, CheckCircle, XCircle, BrainCircuit, FileDown } from 'lucide-react';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const taller_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Mini Taller de Repaso: Integración Práctica</h1>
    <p><strong>Objetivo:</strong> Preparación intensiva para el examen parcial combinando lógica, maquetación e interactividad.</p>
    <hr />
    
    <h3>Enunciado del Proyecto: "Simulador de Excursiones Extremas"</h3>
    <p>Debes crear un cotizador interactivo que valide tanto las aptitudes físicas del usuario, como su capacidad de pago antes de autorizar una expedición de aventura. Tendrá un nivel de complejidad intermedio, ideal para repasar los temas centrales de la Unidad I, II y III.</p>

    <ol>
        <li><strong>Estructura y Diseño (HTML y CSS):</strong>
            <ul>
                <li>Crea un contenedor principal (tarjeta) con fondo claro y bordes redondeados.</li>
                <li>Incluye cuatro campos de entrada (<code>&lt;input type="number"&gt;</code>) debidamente etiquetados:
                    <ol type="a">
                        <li>Edad.</li>
                        <li>Altura (en centímetros).</li>
                        <li>Días de Excursión.</li>
                        <li>Presupuesto Disponible (en $).</li>
                    </ol>
                </li>
                <li>Coloca un botón llamativo que diga "Evaluar Excursión".</li>
                <li>Debajo del botón, añade un elemento <code>&lt;div id="resultado"&gt;&lt;/div&gt;</code> vacío donde se inyectarán las respuestas.</li>
                <li>Aplica estilos en CSS para que los elementos estén centrados, tengan espaciado y los inputs se vean uniformes.</li>
            </ul>
        </li>
        <li><strong>Lógica de Validación (JavaScript):</strong>
            <ul>
                <li>Crea una función que se ejecute al hacer clic en el botón.</li>
                <li>Captura los valores de los cuatro inputs usando <code>document.getElementById("id").value</code>.</li>
                <li><strong>Fase 1 (Validación Física):</strong> Utiliza una estructura condicional. Para acceder, el usuario debe tener <strong>al menos 14 años</strong> Y medir <strong>150 centímetros o más</strong>. Si no cumple alguno de estos dos, el programa debe mostrar en el <code>div</code> respectivo: <em>"Lo sentimos, no cumples con los requisitos físicos para la excursión extrema."</em></li>
                <li><strong>Fase 2 (Validación Económica):</strong> Si superó la fase 1, debes calcular el costo de la excursión. El costo es de <strong>$80 por día</strong>.
                <li>Compara el costo total con el presupuesto. Si el presupuesto alcanza o sobra, imprime: <em>"¡Acceso Aprobado! El costo total es $XX. ¡Prepárate para la aventura!"</em>.</li>
                <li>Si el dinero no es suficiente, imprime: <em>"Aptitud física aprobada, pero Presupuesto Insuficiente. Cotización: $XX."</em></li>
            </ul>
        </li>
    </ol>
    <p><em>Consejo: Recuerda parsear (con <code>parseInt()</code>) los números que obtienes de los inputs. Tómate tu tiempo para organizar los condicionales dentro de otros condicionales (if anidados) o estructurar el flujo como te parezca mejor.</em></p>
</div>
`;

// Quiz Data
const quizQuestions = [
    {
        id: 1,
        type: "multiple-choice",
        question: "¿Qué propiedad de CSS se utiliza para cambiar el color del texto?",
        options: ["background-color", "color", "text-color", "font-color"],
        correctAnswer: "color",
        explanation: "La propiedad 'color' define el color de primer plano (generalmente el texto) del elemento."
    },
    {
        id: 2,
        type: "true-false",
        question: "En HTML, la etiqueta <script> siempre debe colocarse en la sección <head>.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso",
        explanation: "Falso. La etiqueta <script> puede ubicarse tanto en el <head> como en el final del <body>. De hecho, colocarla antes del cierre del </body> es común para evitar que bloquee la carga visual de la página."
    },
    {
        id: 3,
        type: "multiple-choice",
        question: "En JavaScript, ¿cuál es el operador lógico para O (OR)?",
        options: ["&&", "!", "||", "=="],
        correctAnswer: "||",
        explanation: "El operador || se conoce como OR. Retorna verdadero si al menos uno de los operandos es verdadero."
    },
    {
        id: 4,
        type: "complete",
        question: "Para referenciar un elemento HTML por su atributo 'id' en JavaScript, utilizamos el método: document.___________________('miId')",
        options: ["getElementById", "querySelector", "selectById", "getId"],
        correctAnswer: "getElementById",
        explanation: "getElementById es el método estándar y más directo para apuntar a un elemento único a través de su ID."
    },
    {
        id: 5,
        type: "true-false",
        question: "Una const (constante) en JavaScript permite que su valor sea reasignado libremente en cualquier parte del código.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso",
        explanation: "Falso. Las variables declaradas con 'const' no pueden ser reasignadas tras su inicialización. Para valores variables se utiliza 'let'."
    },
    {
        id: 6,
        type: "multiple-choice",
        question: "¿Qué significa CSS?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        explanation: "Cascading Style Sheets (Hojas de Estilo en Cascada) describe cómo los elementos HTML deben ser renderizados."
    },
    {
        id: 7,
        type: "multiple-choice",
        question: "Si declaras: let x = '5' + 5; ¿Qué resultado tendrá la variable x en JavaScript?",
        options: ["10", "'55'", "Error", "undefined"],
        correctAnswer: "'55'",
        explanation: "Al combinar un string y un número con el operador +, JavaScript convierte el número a string y los concatena."
    },
    {
        id: 8,
        type: "matching-simulator",
        question: "Relaciona correctamente los conceptos: (A) string, (B) int, (C) boolean. \nSelecciona la combinación correcta de tipos de dato:",
        options: [
            "A: 'Hola', B: true, C: 15",
            "A: 15, B: 'Hola', C: false",
            "A: 'Hola', B: 15, C: false",
            "A: false, B: 15, C: 'Hola'"
        ],
        correctAnswer: "A: 'Hola', B: 15, C: false",
        explanation: "Un string (A) es texto ('Hola'), un número entero/int (B) es 15, y un valor booleano (C) es false."
    },
    {
        id: 9,
        type: "complete",
        question: "Completa el espacio para añadir un evento de click al botón: \n boton.___________________('click', funcion);",
        options: ["addEventListener", "on", "attachEvent", "listen"],
        correctAnswer: "addEventListener",
        explanation: "addEventListener es el estándar moderno en JavaScript para suscribirse a un evento en el DOM."
    },
    {
        id: 10,
        type: "multiple-choice",
        question: "¿Qué ocurre con una variable definida con 'let' dentro de una función si intentamos accederla desde fuera de dicha función?",
        options: [
            "Devuelve su último valor asignado.",
            "Lanza un error ('not defined').",
            "Devuelve 'undefined'.",
            "Se convierte automáticamente en global."
        ],
        correctAnswer: "Lanza un error ('not defined').",
        explanation: "Las variables declaradas con 'let' dentro de una función tienen 'scope' (alcance) local, por lo que no existen fuera de ella."
    },
    {
        id: 11,
        type: "debugging",
        question: "Encuentra el error en el siguiente código CSS: `#caja { background-color: red; margin: 10px 20px; color: }`",
        options: [
            "El ID no debería llevar #",
            "Falta el valor para la propiedad color",
            "margin no acepta 2 valores",
            "background-color no se puede aplicar a #caja"
        ],
        correctAnswer: "Falta el valor para la propiedad color",
        explanation: "La propiedad 'color' está declarada pero falta asignarle un valor antes del cierre (por ejemplo: color: white;)."
    },
    {
        id: 12,
        type: "multiple-choice",
        question: "¿Cuál de las siguientes etiquetas HTML se utiliza para crear una lista numerada?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correctAnswer: "<ol>",
        explanation: "<ol> significa 'Ordered List' (Lista ordenada) y muestra los elementos enumerados, mientras que <ul> crea listas con viñetas."
    },
    {
        id: 13,
        type: "complete",
        question: "Rellena el espacio: Para seleccionar un elemento con la clase 'btn-principal' en JavaScript, usas document.querySelector('____btn-principal')",
        options: ["#", ".", "/", "@"],
        correctAnswer: ".",
        explanation: "En los selectores CSS y document.querySelector, el punto (.) representa a una clase."
    },
    {
        id: 14,
        type: "true-false",
        question: "En JavaScript, el método parseInt('10.5') devolverá 10.5",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso",
        explanation: "Falso. parseInt siempre devuelve un número entero truncando los decimales. Devolverá 10. Para mantener decimales debes usar parseFloat."
    },
    {
        id: 15,
        type: "multiple-choice",
        question: "¿Qué propiedad de Flexbox se usa para distribuir el espacio restante ENTRE los elementos en el eje principal?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        correctAnswer: "justify-content",
        explanation: "justify-content distribuye los elementos en un contenedor flex a lo largo del eje principal (horizontalmente si es flex-direction: row)."
    },
    {
        id: 16,
        type: "multiple-choice",
        question: "Si queremos acceder al valor que escribió el usuario en un <input> referenciado como 'campo', usamos la sintaxis:",
        options: ["campo.text()", "campo.innerHTML", "campo.value", "campo.textContent"],
        correctAnswer: "campo.value",
        explanation: "La propiedad 'value' permite obtener (y también establecer) el contenido ingresado dentro de un elemento <input> en el DOM form."
    },
    {
        id: 17,
        type: "debugging",
        question: "Depuración JS: Un evento keyDown no reacciona al presionar Enter. Código: `if (event.key == 'enter') { action(); }`",
        options: [
            "Debe ser 'Enter' (sensible a mayúsculas)",
            "Debe usarse event.keyCode == 13 obligatoriamente",
            "La propiedad es event.keyboard",
            "Debe usarse === sino no funciona"
        ],
        correctAnswer: "Debe ser 'Enter' (sensible a mayúsculas)",
        explanation: "El valor de event.key es sensible a mayúsculas y minúsculas. La tecla Enter se representa siempre como 'Enter'."
    },
    {
        id: 18,
        type: "matching-simulator",
        question: "Empareja los selectores CSS: (A) Universal, (B) ID, (C) Clase. Opciones:",
        options: [
            "A: *, B: #, C: .",
            "A: &, B: ., C: #",
            "A: @, B: #, C: .",
            "A: *, B: &, C: ."
        ],
        correctAnswer: "A: *, B: #, C: .",
        explanation: "El asterisco (*) es el selector universal. El hash (#) apunta a un ID, y el punto (.) a una clase."
    },
    {
        id: 19,
        type: "multiple-choice",
        question: "¿Para qué sirve el método console.log() en JavaScript?",
        options: ["Para mostrar un pop-up al usuario", "Para recargar la página", "Para imprimir mensajes o variables en la consola de depuración", "Para detener la ejecución del script"],
        correctAnswer: "Para imprimir mensajes o variables en la consola de depuración",
        explanation: "console.log es usado para mostrar mensajes en la consola de desarrollo del navegador, útil para debugging."
    },
    {
        id: 20,
        type: "true-false",
        question: "Un evento hover (pasar el ratón por encima) en CSS se desencadena usando la pseudo-clase :hover.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        explanation: "La pseudo-clase :hover en CSS permite que cambien los estilos de un elemento cuando el puntero del ratón se encuentra encima de él."
    },
    {
        id: 21,
        type: "multiple-choice",
        question: "¿Qué atributo HTML es usado para especificar el destino del enlace de la etiqueta <a>?",
        options: ["src", "href", "link", "url"],
        correctAnswer: "href",
        explanation: "El atributo href (Hypertext REFerence) define la URL a la que el hipervínculo apunta."
    },
    {
        id: 22,
        type: "complete",
        question: "Completa el código: document.body._______.backgroundColor = 'blue';",
        options: ["css", "style", "format", "color"],
        correctAnswer: "style",
        explanation: "Para modificar propiedades CSS desde JavaScript de manera directa, se accede a la propiedad DOM '.style'."
    },
    {
        id: 23,
        type: "multiple-choice",
        question: "En CSS, ¿qué significa 'margin: 0 auto;'?",
        options: [
            "Aplica un margen de 0 arriba y abajo, y centra el elemento horizontalmente",
            "Aplica margen superior de 0 y deja que el margen inferior se defina automáticamente",
            "Elimina todos los márgenes",
            "Aplica márgenes automáticos pero da prioridad al 0"
        ],
        correctAnswer: "Aplica un margen de 0 arriba y abajo, y centra el elemento horizontalmente",
        explanation: "Un margen de '0 auto' es el estándar para centrar contenedores de bloque (que tengan un width definido) de manera horizontal."
    },
    {
        id: 24,
        type: "debugging",
        question: "Encuentra el error al añadir un HTML: `div.innerHTML = <p>Hola</p>;`",
        options: [
            "Faltan comillas rodeando <p>Hola</p>",
            "Debe ser innerText en vez de innerHTML",
            "Debe ser un array de HTML",
            "El formato <p> no existe en JS"
        ],
        correctAnswer: "Faltan comillas rodeando <p>Hola</p>",
        explanation: "Cuando asignamos un contenido a innerHTML, este debe ser proveído como una cadena de texto (String) envuelto en comillas."
    },
    {
        id: 25,
        type: "multiple-choice",
        question: "¿Qué devuelve la condición (5 === '5') en JavaScript?",
        options: ["true", "false", "undefined", "Lanza una Excepción"],
        correctAnswer: "false",
        explanation: "El operador de estricta igualdad (===) revisa tanto el valor como el TIPO de dato. Al ser uno Number y otro String, devuelve false."
    },
    {
        id: 26,
        type: "true-false",
        question: "En flexbox, la propiedad 'flex-direction: column' organiza los hijos de arriba hacia abajo de forma vertical.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        explanation: "Verdadero. Cambia el eje principal de modo que los elementos pasen de estar lado a lado (row) a estar apilados (column)."
    },
    {
        id: 27,
        type: "complete",
        question: "Para ejecutar un bloque de código MIENTRAS una condición sea verdadera, usamos el bucle: _________ (condición) { ... }",
        options: ["if", "for", "while", "do"],
        correctAnswer: "while",
        explanation: "El bucle 'while' ejecuta la repetición siempre que se evalúe afirmativa su condición interna."
    },
    {
        id: 28,
        type: "multiple-choice",
        question: "¿Cuál de estos NO es un evento válido en JavaScript?",
        options: ["click", "mouseenter", "keypress", "onmousewalk"],
        correctAnswer: "onmousewalk",
        explanation: "onmousewalk no existe. Son eventos estándar click, keypress, mouseenter, mouseleave, dblclick, etc."
    },
    {
        id: 29,
        type: "matching-simulator",
        question: "Empareja: (A) padding, (B) border, (C) margin. Opciones referidas a la ubicación en el Box Model (de adentro hacia afuera):",
        options: [
            "A: Interno, B: Medio, C: Externo",
            "A: Externo, B: Interno, C: Medio",
            "A: Medio, B: Externo, C: Interno",
            "A: Interno, B: Externo, C: Medio"
        ],
        correctAnswer: "A: Interno, B: Medio, C: Externo",
        explanation: "El Padding es el espacio hacia el contenido, el Border es la barrera exterior de ese fondo, y el Margin separa al elemento de otros adyacentes."
    },
    {
        id: 30,
        type: "multiple-choice",
        question: "Para definir una variable global, en el contexto de ECMAscript moderno (ES6+), NO se recomienda utilizar:",
        options: ["let", "var", "const", "Ninguna"],
        correctAnswer: "var",
        explanation: "'var' tiene alcance de función y permite hoisiting de forma confusa. Es mejor práctica utilizar siempre 'let' o 'const'."
    },
    {
        id: 31,
        type: "debugging",
        question: "El usuario presiona una tecla pero no se mueve. `let x = 10; document.addEventListener('keydown', (e)=>{ if(e.key=='w') x+10; })` ¿Cuál es el error en la acumulación de la variable?",
        options: [
            "Debería ser e.key=='w'",
            "Debería ser x = x + 10",
            "x debe ser const",
            "Los eventos no pueden leer variables de afuera"
        ],
        correctAnswer: "Debería ser x = x + 10",
        explanation: "La expresión x+10 calcula el nuevo número pero no lo guarda. Para cambiar el estado debe asignarse (x = x + 10 o x += 10)."
    },
    {
        id: 32,
        type: "multiple-choice",
        question: "En CSS, ¿qué unidad de medida es relativa al tamaño de la pantalla (viewport width)?",
        options: ["px", "em", "vw", "rem"],
        correctAnswer: "vw",
        explanation: "vw significa Viewport Width, donde 1vw equivale al 1% de la franja visible horizontal completa del navegador."
    },
    {
        id: 33,
        type: "complete",
        question: "En HTML, la etiqueta para definir una imagen es: <________ src='foto.jpg'>",
        options: ["image", "picture", "img", "src"],
        correctAnswer: "img",
        explanation: "La etiqueta <img> se utiliza para mostrar imágenes, siendo su atributo obligatorio 'src' la ruta de la misma."
    },
    {
        id: 34,
        type: "true-false",
        question: "Es posible aplicar múltiples clases a un mismo elemento HTML simplemente separándolas por espacios (class='caja error resaltado').",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        explanation: "Verdadero. Puedes aplicar infinitas clases a un elemento en HTML con solo declarar los nombres separados con espacio."
    },
    {
        id: 35,
        type: "multiple-choice",
        question: "La función `document.createElement('div')` hace lo siguiente:",
        options: [
            "Encuentra en el documento un div",
            "Crea en la memoria un nuevo elemento <div> pero no lo dibuja",
            "Agrega mágicamente un <div> a la pantalla",
            "Reemplaza el body actual con un div"
        ],
        correctAnswer: "Crea en la memoria un nuevo elemento <div> pero no lo dibuja",
        explanation: "createElement instancia el elemento a nivel lógico en JS. Para añadirlo a la pantalla debes usar posteriormente appendChild."
    },
    {
        id: 36,
        type: "multiple-choice",
        question: "En CSS, la selección de '#nav .item p' afectará a:",
        options: [
            "Todos los <p> que estén dentro de un .item que esté dentro de un #nav",
            "Los tres elementos simultáneamente, aplicándole a los 3 los estilos",
            "Afectará solamente al elemento #nav",
            "Lanzará un error de jerarquía"
        ],
        correctAnswer: "Todos los <p> que estén dentro de un .item que esté dentro de un #nav",
        explanation: "Este es un selector descendente. La cascada CSS viaja a los elementos contenidos en los del paso anterior."
    },
    {
        id: 37,
        type: "debugging",
        question: "Falla de rediseño. `btn.classList.add('hide');` ¿Por qué el botón se sigue viendo en pantalla si agregué la clase 'hide' en JS?",
        options: [
            "Porque la clase no existe o no tiene 'display: none;' en el archivo CSS.",
            "Porque add no acepta strings.",
            "Porque se debe utilizar removeList.",
            "Porque JS no puede ocultar cosas."
        ],
        correctAnswer: "Porque la clase no existe o no tiene 'display: none;' en el archivo CSS.",
        explanation: "JavaScript solo añade el 'texto' de la clase al elemento. Si el CSS adjunto no contiene una regia '.hide { display: none; }', esta clase agregada no tendrá impacto visual."
    },
    {
        id: 38,
        type: "multiple-choice",
        question: "¿Qué devuelve typeof [1, 2, 3] en JavaScript?",
        options: ["'array'", "'object'", "'list'", "'number'"],
        correctAnswer: "'object'",
        explanation: "En JavaScript los Arrays (arreglos) son de facto objetos especiales, por lo que su tipo de dato base (typeof) responde como 'object'."
    },
    {
        id: 39,
        type: "complete",
        question: "Si quiero cambiar la opacidad de un elemento por CSS de forma suave a lo largo de 1 segundo, debo usar la propiedad: _________: opacity 1s;",
        options: ["animation", "transform", "transition", "delay"],
        correctAnswer: "transition",
        explanation: "'transition' permite hacer que el cambio de una propiedad numérica CSS hacia otro estado suceda progresiva y suavemente en una fracción de tiempo."
    },
    {
        id: 40,
        type: "multiple-choice",
        question: "¿Cuál de estos condicionales anidados se escribirá bien sintácticamente para la expresión 'si no lo anterior pero si resulta esto'?",
        options: [
            "else si ()",
            "elseif ()",
            "else if ()",
            "else (if) "
        ],
        correctAnswer: "else if ()",
        explanation: "La palabra reservada para anidar flujos lógicos excluyentes subsecuentes en JS es separar con espacio: 'else if ( condición )'."
    }
];

export default function StudentExams({ onBack, username }: { onBack: () => void, username?: string }) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    let score = 0;

    useEffect(() => {
        if (username) {
            const savedData = localStorage.getItem(`exam_data_${username}`);
            if (savedData) {
                try {
                    const parsed = JSON.parse(savedData);
                    setAnswers(parsed.answers);
                    setSubmitted(parsed.submitted);
                } catch (e) {
                    // ignore
                }
            }
        }
    }, [username]);

    const handleSubmit = () => {
        if (Object.keys(answers).length < quizQuestions.length) {
            alert("Por favor, responde todas las preguntas antes de enviar.");
            return;
        }

        setSubmitted(true);
        if (username) {
            localStorage.setItem(`exam_data_${username}`, JSON.stringify({
                answers,
                submitted: true
            }));
        }
    };

    if (submitted) {
        quizQuestions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) {
                score++;
            }
        });
    }

    const handleDownloadWord = () => {
        const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Taller de Repaso</title></head><body>`;
        const footer = "</body></html>";
        
        const sourceHTML = header + taller_HTML + footer;
        
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `Taller_Repaso_Practico.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    };

    const handleOptionSelect = (qId: number, option: string) => {
        if (submitted) return;
        setAnswers({
            ...answers,
            [qId]: option
        });
    };

    const handleDownloadPDF = () => {
        const fullName = window.prompt("Ingrese su Nombre y Apellido para generar el documento:");
        if (!fullName || fullName.trim() === "") {
            alert("Debe ingresar su nombre y apellido para descargar el PDF.");
            return;
        }

        const dateStr = new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        
        const uniqueCode = "CERT-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString(36).substring(4).toUpperCase();

        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text("Resumen de Evaluación Teórica", 14, 22);
        
        doc.setFontSize(12);
        doc.text(`Alumno: ${fullName.trim()}`, 14, 32);
        doc.text(`Fecha: ${dateStr}`, 14, 40);
        doc.text(`Puntaje: ${score} / ${quizQuestions.length}`, 14, 48);
        
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Código Único de Verificación: ${uniqueCode}`, 14, 56);
        
        const tableData = quizQuestions.map((q, i) => {
            const userAnswer = answers[q.id] || "No respondido";
            const isCorrect = userAnswer === q.correctAnswer;
            
            return [
                (i + 1).toString(),
                q.question,
                userAnswer,
                q.correctAnswer,
                isCorrect ? "Correcto" : "Incorrecto"
            ];
        });

        autoTable(doc, {
            startY: 65,
            head: [['Nº', 'Pregunta', 'Tu Respuesta', 'Respuesta Correcta', 'Estado']],
            body: tableData,
            theme: 'grid',
            headStyles: { fillColor: [41, 128, 185] },
            styles: { fontSize: 8, cellPadding: 3 },
            columnStyles: {
                0: { cellWidth: 10 },
                1: { cellWidth: 60 },
                2: { cellWidth: 40 },
                3: { cellWidth: 40 },
                4: { cellWidth: 25 }
            },
            didParseCell: function(data) {
                if (data.section === 'body' && data.column.index === 4) {
                    if (data.cell.raw === 'Correcto') {
                        data.cell.styles.textColor = [46, 204, 113];
                    } else {
                        data.cell.styles.textColor = [231, 76, 60];
                    }
                }
            }
        });

        const pageCount = (doc as any).internal.getNumberOfPages();
        for(let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.text(`Documento generado para ${fullName.trim()} - Código: ${uniqueCode} - Página ${i} de ${pageCount}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" });
        }

        doc.save(`Autoevaluacion_${fullName.replace(/\\s+/g, '_')}.pdf`);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8 animate-fade-in text-slate-200">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
                <ChevronLeft size={20} />
                Volver al Panel
            </button>

            {/* Descarga del Taller Práctico */}
            <div className="bg-dark-card border border-dark-border p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <BrainCircuit className="text-brand-500" size={32} />
                    Taller de Repaso General
                </h1>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Preparación intensiva para el examen parcial. Este módulo contiene un <strong>Taller Práctico</strong> que puedes descargar para resolver en tu editor, y un <strong>Simulador Teórico Interactivo</strong> para medir tus conocimientos de forma inmediata.
                </p>

                <div className="bg-[#1e1e1e] p-6 rounded-lg border border-slate-700 shadow-md mb-8">
                    <h2 className="text-xl font-bold text-purple-400 mb-2">1. Proyecto de Práctica</h2>
                    <p className="text-slate-300 mb-6 text-sm">
                        Descarga el enunciado en formato Word. Este mini-proyecto integrador evalúa maquetación HTML/CSS y lógica en JavaScript simulando la temática estructurada del próximo parcial.
                    </p>
                    <button 
                        onClick={handleDownloadWord}
                        className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md"
                    >
                        <Download size={18} />
                        Descargar Enunciado de Taller (.doc)
                    </button>
                </div>

                {/* Simulador Teórico */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-white mb-6">2. Simulador Teórico (Autoevaluación)</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl text-sm">
                        Pon a prueba tus fundamentos lógicos y teóricos adquiridos. Selecciona la respuesta correcta para cada premisa. Hemos agregado más "distractores" conceptuales para forzar tu razonamiento lógico.
                    </p>

                    <div className="space-y-8">
                        {quizQuestions.map((q, index) => {
                            const isAnswered = !!answers[q.id];
                            const isCorrect = answers[q.id] === q.correctAnswer;
                            
                            return (
                                <div key={q.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                    <h3 className="text-lg font-medium text-white mb-4 whitespace-pre-wrap">
                                        <span className="text-brand-400 font-bold mr-2">{index + 1}.</span> 
                                        {q.question}
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {q.options.map(opt => {
                                            const isSelected = answers[q.id] === opt;
                                            let btnClasses = "p-3 rounded-lg border text-left transition-all duration-200 ";
                                            
                                            if (!submitted) {
                                                btnClasses += isSelected 
                                                    ? "bg-brand-600 border-brand-500 text-white" 
                                                    : "bg-[#1e1e1e] border-slate-600 text-slate-300 hover:border-brand-400 hover:bg-slate-800";
                                            } else {
                                                if (opt === q.correctAnswer) {
                                                    btnClasses += "bg-emerald-900/50 border-emerald-500/50 text-emerald-400 font-medium";
                                                } else if (isSelected && !isCorrect) {
                                                    btnClasses += "bg-red-900/50 border-red-500/50 text-red-400";
                                                } else {
                                                    btnClasses += "bg-[#1e1e1e] border-slate-700 text-slate-500 opacity-50";
                                                }
                                            }

                                            return (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleOptionSelect(q.id, opt)}
                                                    className={btnClasses}
                                                    disabled={submitted}
                                                >
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {submitted && (
                                        <div className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${isCorrect ? 'bg-emerald-900/20 border border-emerald-800/50' : 'bg-red-900/20 border border-red-800/50'}`}>
                                            {isCorrect ? <CheckCircle className="text-emerald-400 shrink-0" /> : <XCircle className="text-red-400 shrink-0" />}
                                            <div>
                                                <p className={`font-medium mb-1 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                                                </p>
                                                <p className="text-sm text-slate-300">{q.explanation}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {!submitted ? (
                        <button
                            onClick={handleSubmit}
                            className="mt-8 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold transition-colors w-full sm:w-auto"
                        >
                            Corregir Respuestas
                        </button>
                    ) : (
                        <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Resultado Final</h3>
                            <div className="text-4xl font-black text-brand-400 mb-4">
                                {score} / {quizQuestions.length}
                            </div>
                            <p className="text-slate-300 mb-6">
                                {score === quizQuestions.length ? '¡Excelente! Estás listo para el parcial.' : 
                                 score >= quizQuestions.length / 2 ? 'Buen trabajo, pero te recomendamos repasar algunos puntos.' :
                                 'Te recomendamos volver a leer la teoría antes del parcial.'}
                            </p>
                            <p className="text-slate-400 mb-6 text-sm">Esta evaluación solo se puede realizar una vez.</p>
                            <button
                                onClick={handleDownloadPDF}
                                className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg shadow-brand-500/20"
                            >
                                <FileDown size={18} />
                                Descargar Resumen (PDF)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
