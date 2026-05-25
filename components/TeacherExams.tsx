import React from 'react';
import { Download, FileText, ChevronLeft } from 'lucide-react';

export default function TeacherExams({ onBack }: { onBack: () => void }) {
    const handleDownloadWord = (fila: 'A' | 'B' | 'Taller', withAnswers: boolean = false) => {
        let content = '';
        if (fila === 'A') content = withAnswers ? filaA_Respuestas_HTML : filaA_HTML;
        else if (fila === 'B') content = withAnswers ? filaB_Respuestas_HTML : filaB_HTML;
        else if (fila === 'Taller') content = withAnswers ? taller_Respuestas_HTML : taller_HTML;
        
        const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Examen Fila ${fila}</title></head><body>`;
        const footer = "</body></html>";
        
        const sourceHTML = header + content + footer;
        
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `Examen_Parcial_Fila_${fila}${withAnswers ? '_Respuestas' : ''}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
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
            <div className="bg-dark-card border border-dark-border p-8 rounded-xl">
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <FileText className="text-brand-500" />
                    Banco de Exámenes
                </h1>
                <p className="text-slate-400 mb-8">
                    Aquí puedes descargar los exámenes parciales generados correspondientes a los contenidos hasta la clase 12 (HTML, CSS, JS Básico, Condicionales).
                    Los archivos se descargan en formato <strong>.doc (Word)</strong> para que puedas abrirlos con Microsoft Word, editarlos y agregarles el membrete de tu institución antes de prepararlos para impresión. También tienes disponible la versión con las respuestas correctas marcadas.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Fila A */}
                    <div className="bg-[#1e1e1e] p-6 rounded-lg border border-slate-700 flex flex-col h-full shadow-lg">
                        <h2 className="text-xl font-bold text-emerald-400 mb-4">Parcial - Fila 1</h2>
                        <ul className="text-sm text-slate-300 space-y-2 mb-6 flex-grow">
                            <li>• <strong>Parte 1:</strong> Teoría Lógica Conceptual (15 pts)</li>
                            <li>• Selección múltiple y V/F</li>
                            <li>• <strong>Parte 2:</strong> Práctica / App de Cotización (15 pts)</li>
                        </ul>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => handleDownloadWord('A')}
                                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md"
                            >
                                <Download size={18} />
                                Descargar Examen
                            </button>
                            <button 
                                onClick={() => handleDownloadWord('A', true)}
                                className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-emerald-400 rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md border border-slate-600"
                            >
                                <Download size={18} />
                                Descargar Respuestas
                            </button>
                        </div>
                    </div>

                    {/* Fila B */}
                     <div className="bg-[#1e1e1e] p-6 rounded-lg border border-slate-700 flex flex-col h-full shadow-lg">
                        <h2 className="text-xl font-bold text-blue-400 mb-4">Parcial - Fila 2</h2>
                        <ul className="text-sm text-slate-300 space-y-2 mb-6 flex-grow">
                            <li>• <strong>Parte 1:</strong> Teoría Lógica Conceptual (15 pts)</li>
                            <li>• Selección múltiple y completación de estructura</li>
                            <li>• <strong>Parte 2:</strong> Práctica / App de Admisión (15 pts)</li>
                        </ul>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => handleDownloadWord('B')}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md"
                            >
                                <Download size={18} />
                                Descargar Examen
                            </button>
                            <button 
                                onClick={() => handleDownloadWord('B', true)}
                                className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-blue-400 rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md border border-slate-600"
                            >
                                <Download size={18} />
                                Descargar Respuestas
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-[#1e1e1e] p-8 rounded-lg border border-slate-700 shadow-lg">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">Taller de Repaso General</h2>
                        <p className="text-slate-300 mb-6">
                            Un "mini taller" integrador enfocado exclusivamente en la parte práctica (HTML, CSS y JS). Mezcla las lógicas de ambos parciales (cotización económica y validación de requisitos físicos) en un solo ejercicio de nivel intermedio para preparar a los alumnos.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <button 
                                onClick={() => handleDownloadWord('Taller' as any)}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md"
                            >
                                <Download size={18} />
                                Descargar Enunciado
                            </button>
                            <button 
                                onClick={() => handleDownloadWord('Taller' as any, true)}
                                className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-purple-400 rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-md border border-slate-600"
                            >
                                <Download size={18} />
                                Descargar con Solución
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const filaA_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Examen Parcial de Programación Web - Fila 1</h1>
    <p><strong>Puntaje Total:</strong> 30 puntos | <strong>Nombre del alumno:</strong> ___________________________</p>
    <hr />
    
    <h3>PARTE 1: Lógica y Conceptos (15 puntos - 3 pts c/u)</h3>
    <p>Lee detenidamente y marca o encierra en círculo la respuesta correcta.</p>

    <div style="margin-bottom: 20px;">
        <p><strong>1. Análisis de Condicionales:</strong><br/>
        Dado el siguiente fragmento para determinar el rango de un jugador según sus puntos (<code>pts</code>) y a su experiencia (<code>exp</code>).</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let pts = prompt("Puntos:");
let exp = prompt("Experiencia:");

if (pts >= 100 ___ exp === "alta") {
    console.log("Rango Oro");
} else if (pts >= 50 ___ pts < 100) {
    console.log("Rango Plata");
} else {
    console.log("Rango Bronce");
}
</pre>
        <p>¿Qué operadores lógicos faltan en los espacios en blanco (<code>___</code>) para que un jugador sea "Rango Oro" SOLO si tiene 100 puntos o más Y su experiencia es "alta"; y sea "Rango Plata" si tiene al menos 50 puntos PERO menos de 100?</p>
        <p>
            A) <code>||</code> y <code>&&</code><br/>
            B) <code>&&</code> y <code>||</code><br/>
            C) <code>&&</code> y <code>&&</code><br/>
            D) <code>||</code> y <code>||</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>2. Seguimiento de Variables Múltiples:</strong><br/>
        Analiza el siguiente flujo en orden top-down (de arriba a abajo):</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let salud = 10;
let pocion = 5;
let veneno = 3;

salud = salud + pocion;
salud = salud - veneno;
pocion = 0;

if (salud === 12) {
    salud = salud + 10;
}
</pre>
        <p>¿Cuál es el valor final almacenado en la variable <code>salud</code>?</p>
        <p>A) 12 &nbsp;&nbsp;&nbsp;&nbsp; B) 22 &nbsp;&nbsp;&nbsp;&nbsp; C) 15 &nbsp;&nbsp;&nbsp;&nbsp; D) 10</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>3. Interacción con DOM: Verdadero o Falso</strong><br/>
        Para modificar texto visible dentro de una etiqueta HTML con <code>id="mensaje"</code> usando JavaScript, usamos exactamente esta instrucción: <br/> <code>document.getElementById("mensaje").innerText = "Hola";</code></p>
        <p>Falso &nbsp;&nbsp;&nbsp;&nbsp;  Verdadero</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>4. Identificación de Errores y Operadores Lógicos:</strong><br/>
        Evaluando este código que desea detectar adultos mayores de edad devolviendo "Mayor de edad" cuando alguien tiene 18 años o más:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let edad = prompt("Tu edad:");
if (edad > 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}
</pre>
        <p>¿Cuál es el error conceptual o de operador en la lógica pensada para aquellos que tienen <strong>exactamente</strong> 18 años?</p>
        <p>
            A) 'prompt' es visual, su retorno siempre es falso.<br/>
            B) La condición debería ser >= 18 para incluir a los que tienen 18 justos.<br/>
            C) Falta utilizar la lógica del 'else if'.<br/>
            D) La condición debe ser estrictamente === 18.
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>5. Modificación Estructural (HTML Y JS):</strong><br/>
        Dada una etiqueta renderizada como <code>&lt;div id="caja"&gt;Gato&lt;/div&gt;</code>, ¿qué acción concreta en el DOM realiza la instrucción <code>document.getElementById("caja").innerText = "Perro";</code>?</p>
        <p>
            A) Borrar el div con id "caja" y crear un div llamado "Perro".<br/>
            B) Reemplaza al instante la palabra "Gato" por "Perro".<br/>
            C) Añade un texto de "Perro" justamente acoplado a "Gato".<br/>
            D) Muestra visualmente una ventana de alerta dictando "Perro".
        </p>
    </div>

    <br/>
    <hr/>
    <h3>PARTE 2: Desarrollo Práctico (15 puntos)</h3>
    <p><strong>Instrucciones:</strong> Abre tu editor de código preferido (VS Code). Debes desarrollar este mini proyecto. Terminada la encomienda, sube los archivos de resolución (.html, .js, .css, o bien una solución compacta en un index.html unificado) a la sección estipulada de Entregas de la plataforma.</p>
    
    <p><strong>Enunciado de proyecto: Simulador de Cotización de Viajes V.1</strong></p>
    <ol>
        <li><strong>Diseño y UI (HTML y CSS):</strong>
            <ul>
                <li>Crea un campo para ingresar el "Presupuesto Disponible" (número entero).</li>
                <li>Habilita un siguiente input para la "Cantidad de días de viaje".</li>
                <li>Integra un botón de acción "Cotizar".</li>
                <li>Abajo, ubica un contenedor de texto (ej: <code>&lt;h3&gt;</code>) inicialmente en blanco, con el ID preciso donde irán los reportes.</li>
                <li>Asigna un CSS básico armónico; centra este hub y colócale color destacable al botón.</li>
            </ul>
        </li>
        <li><strong>Sistema Lógico (JavaScript):</strong>
            <ul>
                <li>Crea la estructura de evento necesaria que se gatille al usar el botón.</li>
                <li>Toma/captura los valores correspondientes a los inputs.</li>
                <li>Sabiendo que el hotel+turismo está tazado en $50 dólares el día, calcula el <strong>Costo Total</strong>. (Costo = Días por 50).</li>
                <li>Diseña tu flujo de control (if). Condición: si tu Costo Total calculado es <strong>menor o igual a</strong> el Presupuesto Disponible, lanza impreso al HTML interno el mensaje: "¡Viaje Aprobado! Costo: $XX".</li>
                <li>De forma adversa a la condición anterior, el texto del HTML interno mostrará el rechazo: "Presupuesto Insuficiente. El viaje cuesta $XX".</li>
            </ul>
        </li>
    </ol>
</div>
`;

const filaB_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Examen Parcial de Programación Web - Fila 2</h1>
    <p><strong>Puntaje Total:</strong> 30 puntos | <strong>Nombre del alumno:</strong> ___________________________</p>
    <hr />
    
    <h3>PARTE 1: Lógica y Conceptos (15 puntos - 3 pts c/u)</h3>
    <p>Lee detenidamente y marca o encierra en círculo la respuesta correcta.</p>

    <div style="margin-bottom: 20px;">
        <p><strong>1. Análisis de Condicionales Múltiples:</strong><br/>
        Observa meticulosamente el bloque lógico para un flujo de validación simple por roles:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let pass = prompt("Clave:");
let rol = prompt("Rol:");

if (pass === "1234" ___ rol === "admin") {
    console.log("Acceso Total");
} else if (pass === "1234" ___ rol === "invitado") {
    console.log("Acceso Restringido");
} else {
    console.log("Acceso Denegado");
}
</pre>
        <p>¿Qué par de variables lógicas son fundamentales rellenar en los (<code>___</code>) para garantizar que LA CONDICIONAL obligue terminantemente que la 'clave' SIEMPRE concuerde Y conjuntamente el 'rol' para acceder al sistema?</p>
        <p>
            A) <code>&&</code> y <code>&&</code><br/>
            B) <code>||</code> y <code>||</code><br/>
            C) <code>&&</code> y <code>||</code><br/>
            D) <code>||</code> y <code>&&</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>2. Interacción DOM y Mutación:</strong><br/>
        Tenemos programada la siguiente etiqueta visible en HTML: <code>&lt;span id="monedas"&gt;10&lt;/span&gt;</code>.<br/> 
        Posteriormente el hilo de JS procesa automáticamente esto:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let total = parseInt(document.getElementById("monedas").innerText);
total = total - 5;
document.getElementById("monedas").innerText = total;
</pre>
        <p>¿Qué valor presentará de inmediato el visual HTML por la última directriz?</p>
        <p>A) 10 &nbsp;&nbsp;&nbsp;&nbsp; B) "total" &nbsp;&nbsp;&nbsp;&nbsp; C) 10 - 5 &nbsp;&nbsp;&nbsp;&nbsp; D) 5</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>3. Concepto Fundamental de Variables:</strong><br/>
        En JavaScript ES6 (y actuales), si requerimos alojar en memoria un valor atómico referencial que deseamos prohíbir su alteración o sobre-escritura en compilación futura (como un token, url de red, o gravedad física = 9.8)... la asignación estructural se realiza mediante 'let' y nunca 'const'.</p>
        <p>Verdadero &nbsp;&nbsp;&nbsp;&nbsp; Falso</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>4. Operadores Relacionales de Estrictez:</strong><br/>
        Partiendo del estado vital <code>let saludJugador = 0;</code> y requerimos construir el validador ideal en una IF condicional para notificarle un Game-Over. La validación mas apta, precisa y correcta sería evaluarlo de esta manera:</p>
        <p>
            A) <code>if (saludJugador = 0)</code><br/>
            B) <code>if (saludJugador != 0)</code><br/>
            C) <code>if (saludJugador === 0)</code><br/>
            D) <code>if (saludJugador > 0)</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>5. Mutación Progresiva de Entidades:</strong><br/>
        Mapea el paso a paso del presente trozo lógico:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let puntos = 5;
puntos = puntos * 2;
puntos = puntos + 2;

if (puntos < 10) {
    puntos = 0;
}
console.log(puntos);
</pre>
        <p>Cuando finalice el árbol de ejecución, ¿Qué número se reflejaría en el resultado por log de Consola?</p>
        <p>A) 0 &nbsp;&nbsp;&nbsp;&nbsp; B) 10 &nbsp;&nbsp;&nbsp;&nbsp; C) 12 &nbsp;&nbsp;&nbsp;&nbsp; D) 22</p>
    </div>

    <br/>
    <hr/>
    <h3>PARTE 2: Desarrollo Práctico Integrado (15 puntos)</h3>
    <p><strong>Instrucciones:</strong> Despliega tu Editor. Esta sección validará tus unificaciones aprendidas. A la finalización, tu conjunto de códigos debe conformar un pequeño sistema interactivo (.html, .js, .css, o condensado global) al cual adjuntarás a la pestaña de Archivos subidos.</p>
    
    <p><strong>Enunciado de proyecto: Validador Cíclico de Eventos "La Montaña Rusa"</strong></p>
    <ol>
        <li><strong>Fase Visual (HTML/CSS):</strong>
            <ul>
                <li>Instaura dos campos <code>&lt;input&gt;</code> receptores numéricos enfocados en: "Edad del visitante" y "Altura en cm".</li>
                <li>Declara un botón interactivo cuyo manifiesto cite "Verificar Ingreso".</li>
                <li>Bajo su zona interaccional propicia un elemento neutro de recisión, ejemplo <code>&lt;p id="estado"&gt;</code> partiendo con la etiqueta visual "Esperando datos...".</li>
                <li>Emplea un conjunto selectivo de estilos CSS que amolde o emule la estructura de un control de acceso central o credencial corporativa.</li>
            </ul>
        </li>
        <li><strong>Ensamblaje y Flujos (JavaScript):</strong>
            <ul>
                <li>Escucha el evento sobre el botón y transfiere sus dos valores digitadores a tu contexto de control (Variables).</li>
                <li>Estructura una condición doble de severidad (Con su conjunción lógica exigente pertinente). Los mandatos exigen: la edad mínima debe ser igual o prosperar sobre los <strong>12 años</strong> Y a su vez tener un mínimo físico equiparado de  <strong>140 centímetros</strong> superables de base.</li>
                <li>Al acertar las condicionales y cumplir a estricto rigor su totalidad lógica, intercala la propiedad HTML al dictamen "¡Acceso Permitido! Disfruta tu viaje".</li>
                <li>Con el simple hecho de reprobar uno, o en defecto, todos los eslabones lógicos exigidos; acciona tu plan b negativo mutándolo a: "Acceso Denegado. No cumples los requisitos vitales".</li>
            </ul>
        </li>
    </ol>
</div>
`;

const filaA_Respuestas_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Examen Parcial de Programación Web - Fila 1 (Respuestas)</h1>
    <p><strong>Puntaje Total:</strong> 30 puntos | <strong>Nombre del alumno:</strong> ___________________________</p>
    <hr />
    
    <h3>PARTE 1: Lógica y Conceptos (15 puntos - 3 pts c/u)</h3>
    <p>Lee detenidamente y marca o encierra en círculo la respuesta correcta.</p>

    <div style="margin-bottom: 20px;">
        <p><strong>1. Análisis de Condicionales:</strong><br/>
        Dado el siguiente fragmento para determinar el rango de un jugador según sus puntos (<code>pts</code>) y a su experiencia (<code>exp</code>).</p>
<pre style="background: #e6f7ff; padding: 10px; border-radius: 5px; font-family: monospace; border-left: 4px solid #1890ff;">
let pts = prompt("Puntos:");
let exp = prompt("Experiencia:");

if (pts >= 100 <strong>&&</strong> exp === "alta") {
    console.log("Rango Oro");
} else if (pts >= 50 <strong>&&</strong> pts < 100) {
    console.log("Rango Plata");
} else {
    console.log("Rango Bronce");
}
</pre>
        <p>¿Qué operadores lógicos faltan en los espacios en blanco (<code>___</code>) para que un jugador sea "Rango Oro" SOLO si tiene 100 puntos o más Y su experiencia es "alta"; y sea "Rango Plata" si tiene al menos 50 puntos PERO menos de 100?</p>
        <p>
            A) <code>||</code> y <code>&&</code><br/>
            B) <code>&&</code> y <code>||</code><br/>
            <strong><mark style="background-color: yellow;">C) <code>&&</code> y <code>&&</code></mark></strong><br/>
            D) <code>||</code> y <code>||</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>2. Seguimiento de Variables Múltiples:</strong><br/>
        Analiza el siguiente flujo en orden top-down (de arriba a abajo):</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let salud = 10;
let pocion = 5;
let veneno = 3;

salud = salud + pocion;
salud = salud - veneno;
pocion = 0;

if (salud === 12) {
    salud = salud + 10;
}
</pre>
        <p>¿Cuál es el valor final almacenado en la variable <code>salud</code>?</p>
        <p>A) 12 &nbsp;&nbsp;&nbsp;&nbsp; <strong><mark style="background-color: yellow;">B) 22</mark></strong> &nbsp;&nbsp;&nbsp;&nbsp; C) 15 &nbsp;&nbsp;&nbsp;&nbsp; D) 10</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>3. Interacción con DOM: Verdadero o Falso</strong><br/>
        Para modificar texto visible dentro de una etiqueta HTML con <code>id="mensaje"</code> usando JavaScript, usamos exactamente esta instrucción: <br/> <code>document.getElementById("mensaje").innerText = "Hola";</code></p>
        <p>Falso &nbsp;&nbsp;&nbsp;&nbsp;  <strong><mark style="background-color: yellow;">Verdadero</mark></strong></p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>4. Identificación de Errores y Operadores Lógicos:</strong><br/>
        Evaluando este código que desea detectar adultos mayores de edad devolviendo "Mayor de edad" cuando alguien tiene 18 años o más:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let edad = prompt("Tu edad:");
if (edad > 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}
</pre>
        <p>¿Cuál es el error conceptual o de operador en la lógica pensada para aquellos que tienen <strong>exactamente</strong> 18 años?</p>
        <p>
            A) 'prompt' es visual, su retorno siempre es falso.<br/>
            <strong><mark style="background-color: yellow;">B) La condición debería ser &gt;= 18 para incluir a los que tienen 18 justos.</mark></strong><br/>
            C) Falta utilizar la lógica del 'else if'.<br/>
            D) La condición debe ser estrictamente === 18.
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>5. Modificación Estructural (HTML Y JS):</strong><br/>
        Dada una etiqueta renderizada como <code>&lt;div id="caja"&gt;Gato&lt;/div&gt;</code>, ¿qué acción concreta en el DOM realiza la instrucción <code>document.getElementById("caja").innerText = "Perro";</code>?</p>
        <p>
            A) Borrar el div con id "caja" y crear un div llamado "Perro".<br/>
            <strong><mark style="background-color: yellow;">B) Reemplaza al instante la palabra "Gato" por "Perro".</mark></strong><br/>
            C) Añade un texto de "Perro" justamente acoplado a "Gato".<br/>
            D) Muestra visualmente una ventana de alerta dictando "Perro".
        </p>
    </div>

    <br/>
    <hr/>
    <h3>PARTE 2: Desarrollo Práctico (15 puntos) - SOLUCIÓN SUGERIDA</h3>
    <pre style="background: #e6f7ff; padding: 10px; border-radius: 5px; font-family: monospace; border-left: 4px solid #1890ff;">
&lt;!-- HTML --&gt;
&lt;div style=&quot;text-align: center; margin-top: 50px;&quot;&gt;
  &lt;h1&gt;Simulador de Cotización&lt;/h1&gt;
  &lt;input type=&quot;number&quot; id=&quot;presupuesto&quot; placeholder=&quot;Presupuesto Disponible&quot;&gt;
  &lt;input type=&quot;number&quot; id=&quot;dias&quot; placeholder=&quot;Días de Viaje&quot;&gt;
  &lt;button onclick=&quot;cotizarViaje()&quot; style=&quot;background: blue; color: white;&quot;&gt;Cotizar&lt;/button&gt;
  &lt;h3 id=&quot;resultado&quot;&gt;&lt;/h3&gt;
&lt;/div&gt;

&lt;!-- JS --&gt;
&lt;script&gt;
function cotizarViaje() {
    let presupuesto = document.getElementById("presupuesto").value;
    let dias = document.getElementById("dias").value;
    
    let costoTotal = dias * 50;
    
    if (costoTotal &lt;= presupuesto) {
        document.getElementById("resultado").innerText = "¡Viaje Aprobado! Costo: $" + costoTotal;
    } else {
        document.getElementById("resultado").innerText = "Presupuesto Insuficiente. El viaje cuesta $" + costoTotal;
    }
}
&lt;/script&gt;
    </pre>
</div>
`;

const filaB_Respuestas_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Examen Parcial de Programación Web - Fila 2 (Respuestas)</h1>
    <p><strong>Puntaje Total:</strong> 30 puntos | <strong>Nombre del alumno:</strong> ___________________________</p>
    <hr />
    
    <h3>PARTE 1: Lógica y Conceptos (15 puntos - 3 pts c/u)</h3>
    <p>Lee detenidamente y marca o encierra en círculo la respuesta correcta.</p>

    <div style="margin-bottom: 20px;">
        <p><strong>1. Análisis de Condicionales Múltiples:</strong><br/>
        Observa meticulosamente el bloque lógico para un flujo de validación simple por roles:</p>
<pre style="background: #e6f7ff; padding: 10px; border-radius: 5px; font-family: monospace; border-left: 4px solid #1890ff;">
let pass = prompt("Clave:");
let rol = prompt("Rol:");

if (pass === "1234" <strong>&&</strong> rol === "admin") {
    console.log("Acceso Total");
} else if (pass === "1234" <strong>&&</strong> rol === "invitado") {
    console.log("Acceso Restringido");
} else {
    console.log("Acceso Denegado");
}
</pre>
        <p>¿Qué par de variables lógicas son fundamentales rellenar en los (<code>___</code>) para garantizar que LA CONDICIONAL obligue terminantemente que la 'clave' SIEMPRE concuerde Y conjuntamente el 'rol' para acceder al sistema?</p>
        <p>
            <strong><mark style="background-color: yellow;">A) <code>&&</code> y <code>&&</code></mark></strong><br/>
            B) <code>||</code> y <code>||</code><br/>
            C) <code>&&</code> y <code>||</code><br/>
            D) <code>||</code> y <code>&&</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>2. Interacción DOM y Mutación:</strong><br/>
        Tenemos programada la siguiente etiqueta visible en HTML: <code>&lt;span id="monedas"&gt;10&lt;/span&gt;</code>.<br/> 
        Posteriormente el hilo de JS procesa automáticamente esto:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let total = parseInt(document.getElementById("monedas").innerText);
total = total - 5;
document.getElementById("monedas").innerText = total;
</pre>
        <p>¿Qué valor presentará de inmediato el visual HTML por la última directriz?</p>
        <p>A) 10 &nbsp;&nbsp;&nbsp;&nbsp; B) "total" &nbsp;&nbsp;&nbsp;&nbsp; C) 10 - 5 &nbsp;&nbsp;&nbsp;&nbsp; <strong><mark style="background-color: yellow;">D) 5</mark></strong></p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>3. Concepto Fundamental de Variables:</strong><br/>
        En JavaScript ES6 (y actuales), si requerimos alojar en memoria un valor atómico referencial que deseamos prohíbir su alteración o sobre-escritura en compilación futura (como un token, url de red, o gravedad física = 9.8)... la asignación estructural se realiza mediante 'let' y nunca 'const'.</p>
        <p>Verdadero &nbsp;&nbsp;&nbsp;&nbsp; <strong><mark style="background-color: yellow;">Falso</mark></strong> (Debe usar const porque prohibe alteración)</p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>4. Operadores Relacionales de Estrictez:</strong><br/>
        Partiendo del estado vital <code>let saludJugador = 0;</code> y requerimos construir el validador ideal en una IF condicional para notificarle un Game-Over. La validación mas apta, precisa y correcta sería evaluarlo de esta manera:</p>
        <p>
            A) <code>if (saludJugador = 0)</code><br/>
            B) <code>if (saludJugador != 0)</code><br/>
            <strong><mark style="background-color: yellow;">C) <code>if (saludJugador === 0)</code></mark></strong><br/>
            D) <code>if (saludJugador > 0)</code>
        </p>
    </div>

    <div style="margin-bottom: 20px;">
        <p><strong>5. Mutación Progresiva de Entidades:</strong><br/>
        Mapea el paso a paso del presente trozo lógico:</p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">
let puntos = 5;
puntos = puntos * 2;
puntos = puntos + 2;

if (puntos < 10) {
    puntos = 0;
}
console.log(puntos);
</pre>
        <p>Cuando finalice el árbol de ejecución, ¿Qué número se reflejaría en el resultado por log de Consola?</p>
        <p>A) 0 &nbsp;&nbsp;&nbsp;&nbsp; B) 10 &nbsp;&nbsp;&nbsp;&nbsp; <strong><mark style="background-color: yellow;">C) 12</mark></strong> &nbsp;&nbsp;&nbsp;&nbsp; D) 22</p>
    </div>

    <br/>
    <hr/>
    <h3>PARTE 2: Desarrollo Práctico Integrado (15 puntos) - SOLUCIÓN SUGERIDA</h3>
    <pre style="background: #e6f7ff; padding: 10px; border-radius: 5px; font-family: monospace; border-left: 4px solid #1890ff;">
&lt;!-- HTML --&gt;
&lt;div class="credencial"&gt;
  &lt;h1&gt;La Montaña Rusa&lt;/h1&gt;
  &lt;input type=&quot;number&quot; id=&quot;edad&quot; placeholder=&quot;Edad del visitante&quot;&gt;
  &lt;input type=&quot;number&quot; id=&quot;altura&quot; placeholder=&quot;Altura en cm&quot;&gt;
  &lt;button onclick=&quot;verificar()&quot;&gt;Verificar Ingreso&lt;/button&gt;
  &lt;p id=&quot;estado&quot;&gt;Esperando datos...&lt;/p&gt;
&lt;/div&gt;

&lt;!-- JS --&gt;
&lt;script&gt;
function verificar() {
    let edad = document.getElementById("edad").value;
    let altura = document.getElementById("altura").value;
    
    if (edad &gt;= 12 && altura &gt;= 140) {
        document.getElementById("estado").innerText = "¡Acceso Permitido! Disfruta tu viaje";
    } else {
        document.getElementById("estado").innerText = "Acceso Denegado. No cumples los requisitos vitales";
    }
}
&lt;/script&gt;
    </pre>
</div>
`;

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

const taller_Respuestas_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; color: #000;">
    <h1 style="text-align: center;">Mini Taller de Repaso (Solución Docente)</h1>
    <p>Esta es una sugerencia de resolución, existiendo múltiples formas válidas de resolver este ejercicio. Se incluye HTML, CSS y JS listos para copiar y probar.</p>
    <hr />

    <h3>Código Unificado Recomendado</h3>
    <pre style="background: #e6f7ff; padding: 15px; border-radius: 5px; font-family: monospace; border-left: 4px solid #1890ff; overflow-x: auto;">
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Excursiones Extremas&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        input {
            width: 90%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #ff5722;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
            margin-top: 10px;
        }
        button:hover {
            background-color: #e64a19;
        }
        #resultado {
            margin-top: 20px;
            font-weight: bold;
            color: #333;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class="card"&gt;
    &lt;h2&gt;Cotizador Extremo&lt;/h2&gt;
    
    &lt;input type="number" id="inpEdad" placeholder="Edad"&gt;
    &lt;input type="number" id="inpAltura" placeholder="Altura (cm)"&gt;
    &lt;input type="number" id="inpDias" placeholder="Días de excursión"&gt;
    &lt;input type="number" id="inpPresupuesto" placeholder="Presupuesto disponible ($)"&gt;
    
    &lt;button onclick="evaluar()"&gt;Evaluar Excursión&lt;/button&gt;
    
    &lt;div id="resultado"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
function evaluar() {
    // 1. Capturar valores
    let edad = parseInt(document.getElementById("inpEdad").value);
    let altura = parseInt(document.getElementById("inpAltura").value);
    let dias = parseInt(document.getElementById("inpDias").value);
    let presupuesto = parseInt(document.getElementById("inpPresupuesto").value);
    let resHtml = document.getElementById("resultado");

    // 2. Validación Física
    if (edad &lt; 14 || altura &lt; 150) {
        resHtml.innerText = "Lo sentimos, no cumples con los requisitos físicos para la excursión extrema.";
        resHtml.style.color = "red";
    } else {
        // 3. Validación Económica (Solo ocurre si pasó la anterior)
        let costoTotal = dias * 80;
        
        if (presupuesto &gt;= costoTotal) {
            resHtml.innerText = "¡Acceso Aprobado! El costo total es $" + costoTotal + ". ¡Prepárate para la aventura!";
            resHtml.style.color = "green";
        } else {
            resHtml.innerText = "Aptitud física aprobada, pero Presupuesto Insuficiente. Cotización: $" + costoTotal + ".";
            resHtml.style.color = "orange";
        }
    }
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>
</div>
`;
