
import { Unit, UnitId, ClassSession } from './types';

export const COURSE_INFO = {
  name: "Lenguaje de Programación III",
  code: "LPIII",
  semester: "3º Semestre",
  career: "Licenciatura en Análisis de Sistemas",
  description: "Desarrollo Web Front-End (HTML, CSS, JS) con enfoque práctico y por competencias.",
};

// --- CONTENIDO DETALLADO UNIDAD I (HTML) ---

const CLASS_1: ClassSession = {
  id: 1,
  title: "Introducción Web + Estructura HTML",
  description: "Fundamentos de la web y creación de la primera página HTML.",
  duration: "4 Horas",
  type: "Teórico-Práctico",
  objectives: [
    "Entender qué es front-end vs back-end",
    "Explicar qué es HTML y su función",
    "Reconocer la estructura mínima de un documento HTML",
    "Crear su primer archivo .html",
    "Dominar etiquetas de texto básicas (h1-h6, p, strong, em)"
  ],
  teacherGuide: [
    {
        type: "script",
        title: "0:00 - 0:30 | Teoría: ¿Cómo funciona la Web?",
        content: "Bienvenidos a Lenguaje de Programación III. Esta materia es fundamental porque define cómo el mundo interactúa con sus sistemas: a través de la Web.\n\nPara empezar, ¿qué pasa exactamente cuando escriben google.com y dan Enter? Ocurre una conversación entre dos partes:\n\n1. **El Cliente:** Es tu navegador (Chrome, Firefox). Pide información.\n2. **El Servidor:** Es una computadora remota que recibe el pedido y responde enviando archivos.\n\nEl archivo principal que llega es el **HTML**. Es el lenguaje que estructura esa información para que el navegador sepa dónde poner cada cosa."
    },
    {
        type: "script",
        title: "0:30 - 0:45 | Imagen: Arquitectura Cliente-Servidor",
        content: "Miren este diagrama. Aquí vemos claramente el flujo: la petición HTTP que sale del cliente hacia el servidor, y la respuesta que vuelve con el paquete de datos. Nuestro trabajo en esta materia será construir ese paquete que el servidor envía."
    },
    {
        type: "script",
        title: "0:45 - 1:15 | Teoría: Anatomía de una Etiqueta",
        content: "HTML no es programación, no tiene bucles ni lógica por sí solo. Es ESTRUCTURA, y se basa en etiquetas.\n\nLa mayoría de las etiquetas tienen una apertura y un cierre:\n- **Etiqueta de apertura:** `<p>` (Indica dónde empieza).\n- **Contenido:** El texto o elementos dentro.\n- **Etiqueta de cierre:** `</p>` (Indica dónde termina, noten la barra `/`).\n- **Atributos:** Es información extra que va en la etiqueta de apertura, como `class` o `src`."
    },
    {
        type: "code",
        title: "1:15 - 1:30 | Sintaxis General",
        content: "Esta es la sintaxis general. Vemos la etiqueta de apertura con un atributo y su valor, el contenido en el medio, y la etiqueta de cierre con la barra diagonal. Si nos olvidamos de cerrar una etiqueta, el navegador intentará arreglarlo, pero probablemente rompa el diseño de la página.",
        codeLanguage: "html",
        codeSnippet: `<etiqueta atributo="valor">\n    Contenido visible por el usuario\n</etiqueta>`
    },
    {
        type: "script",
        title: "1:30 - 2:00 | Teoría: Estructura Base (Boilerplate)",
        content: "Todo archivo HTML profesional debe seguir una estructura mínima. A esto le llamamos 'Boilerplate'. En editores como VS Code, podemos generarlo escribiendo el signo de exclamación `!` y presionando Tab."
    },
    {
        type: "code",
        title: "2:00 - 2:30 | index.html - Estructura Base",
        content: "Vamos a diseccionar este código base:\n\n1. `<!DOCTYPE html>`: Le dice al navegador 'Esto es HTML5 moderno'.\n2. `<html lang=\"es\">`: Es vital para la accesibilidad y el SEO, indica que el idioma es español.\n3. `<head>` vs `<body>`: El `<head>` es el cerebro, tiene configuración invisible como el `<meta charset=\"UTF-8\">` que permite ver tildes y eñes, y el `<title>` que va en la pestaña del navegador. El `<body>` es el cuerpo, aquí va todo lo que el usuario realmente ve en la pantalla.",
        codeLanguage: "html",
        codeSnippet: `<!DOCTYPE html> <!-- Define que es HTML5 -->\n<html lang="es"> <!-- Idioma principal del sitio -->\n<head>\n    <!-- EL CEREBRO: Configuración invisible -->\n    <meta charset="UTF-8"> <!-- Permite tildes y ñ -->\n    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Adaptable a móviles -->\n    <title>Mi Primera Página</title> <!-- Título en la pestaña -->\n</head>\n<body>\n    <!-- EL CUERPO: Todo lo que ve el usuario -->\n    <h1>Hola Mundo</h1>\n    <p>Este es mi primer sitio web.</p>\n</body>\n</html>`
    },
    {
        type: "script",
        title: "2:30 - 3:00 | Teoría: Etiquetas de Texto y Semántica",
        content: "Un concepto clave en HTML es la Semántica. No elegimos etiquetas por cómo se ven, sino por lo que significan.\n\n- `<h1>` al `<h6>`: Son encabezados. El `<h1>` es el título principal y solo debe haber uno por página.\n- `<p>`: Para párrafos de texto común.\n- `<strong>`: Pone el texto en negrita, pero además le dice a Google 'Esto es importante'.\n- `<em>`: Pone el texto en cursiva, indicando un énfasis en la entonación."
    },
    {
        type: "task",
        title: "3:00 - 4:00 | Ejercicio Práctico: Perfil Digital",
        content: "Ahora es su turno. Creen un archivo llamado `perfil.html`.\n\nSigan estos pasos:\n1. Generen la estructura base correcta.\n2. Agreguen un `<h1>` con su nombre.\n3. Agreguen un subtítulo `<h2>` que diga 'Sobre mí'.\n4. Escriban un párrafo `<p>` presentándose, y usen la etiqueta `<strong>` para resaltar su carrera.\n¡A trabajar!",
        teacherSolutionLanguage: "html",
        teacherSolution: `<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <title>Mi Perfil</title>\n</head>\n<body>\n    <h1>Juan Pérez</h1>\n    <h2>Sobre mí</h2>\n    <p>Hola, soy estudiante de <strong>Ingeniería en Informática</strong> y me apasiona la tecnología.</p>\n</body>\n</html>`
    }
  ],
  contentBlocks: [
    {
      type: "theory",
      title: "1.1 ¿Cómo funciona la Web?",
      content: "Cuando navegas, ocurre una conversación entre dos partes:\n\n1. **El Cliente (Tu navegador):** Solicita información.\n2. **El Servidor (Computadora remota):** Envía los archivos (HTML, CSS, Imágenes).\n\nEl **HTML** es el lenguaje que estructura esa información para que el navegador sepa dónde poner cada cosa."
    },
    {
      type: "image",
      title: "Arquitectura Cliente-Servidor",
      content: "Diagrama del flujo de petición y respuesta HTTP.",
      imageUrl: "https://redespomactividad.weebly.com/uploads/5/4/1/7/54172823/8091749_orig.jpg" 
    },
    {
      type: "theory",
      title: "1.2 Anatomía de una Etiqueta",
      content: "HTML se basa en etiquetas. La mayoría tiene una apertura y un cierre.\n\n* **Etiqueta de apertura:** `<p>` (Indica donde empieza).\n* **Contenido:** El texto o elementos dentro.\n* **Etiqueta de cierre:** `</p>` (Indica donde termina, nota la barra `/`).\n* **Atributos:** Información extra que va en la apertura (ej: `class`, `src`)."
    },
    {
        type: "code",
        title: "Sintaxis General",
        codeLanguage: "html",
        content: `<etiqueta atributo="valor">
    Contenido visible por el usuario
</etiqueta>`
    },
    {
      type: "theory",
      title: "1.3 Estructura Base (Boilerplate)",
      content: "Todo archivo HTML profesional debe seguir esta estructura mínima. Copia y analiza este código:"
    },
    {
      type: "code",
      title: "index.html - Estructura Base",
      codeLanguage: "html",
      content: `<!DOCTYPE html> <!-- Define que es HTML5 -->
<html lang="es"> <!-- Idioma principal del sitio -->
<head>
    <!-- EL CEREBRO: Configuración invisible -->
    <meta charset="UTF-8"> <!-- Permite tildes y ñ -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Adaptable a móviles -->
    <title>Mi Primera Página</title> <!-- Título en la pestaña -->
</head>
<body>
    <!-- EL CUERPO: Todo lo que ve el usuario -->
    <h1>Hola Mundo</h1>
    <p>Este es mi primer sitio web.</p>
</body>
</html>`
    },
    {
      type: "theory",
      title: "1.4 Etiquetas de Texto y Semántica",
      content: "No elegimos etiquetas por cómo se ven, sino por **lo que significan** (Semántica).\n\n* `<h1>` al `<h6>`: Encabezados. El H1 es el título más importante (solo 1 por página).\n* `<p>`: Párrafos de texto común.\n* `<strong>`: Negrita con importancia (ej: palabras clave).\n* `<em>`: Cursiva con énfasis (ej: cambio de tono de voz)."
    },
    {
      type: "task",
      title: "Ejercicio Práctico: Perfil Digital",
      content: "Crea un archivo llamado `perfil.html`. Debe contener:\n1. Un `h1` con tu nombre.\n2. Un subtítulo `h2` que diga 'Sobre mí'.\n3. Un párrafo `<p>` presentándote. Usa `<strong>` para resaltar tu carrera.",
      teacherSolutionLanguage: "html",
      teacherSolution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Perfil</title>
</head>
<body>
    <h1>Juan Pérez</h1>
    <h2>Sobre mí</h2>
    <p>Hola, soy estudiante de <strong>Ingeniería en Informática</strong> y me apasiona la tecnología.</p>
</body>
</html>`
    }
  ],
  homework: "Investigar e implementar una lista desordenada (<ul>) con 3 tecnologías que te gustaría aprender."
};

const CLASS_2: ClassSession = {
  id: 2,
  title: "Etiquetas de texto, Listas y Enlaces",
  description: "Profundización en la organización del contenido y navegación.",
  duration: "4h",
  type: "Práctico",
  objectives: ["Dominar listas ordenadas y desordenadas", "Crear hipervínculos absolutos y relativos", "Navegación entre directorios"],
  teacherGuide: [
    {
        type: "script",
        title: "0:00 - 0:30 | Teoría: Listas HTML",
        content: "Bienvenidos a la clase 2. Hoy vamos a organizar nuestra información y conectar nuestras páginas.\n\nEmpecemos con las listas. ¿Por qué usar una lista HTML en lugar de simplemente escribir guiones en un párrafo? La respuesta es la accesibilidad. Los lectores de pantalla para personas con discapacidad visual anuncian 'Lista de 5 elementos', ayudándoles a entender la estructura.\n\nTenemos dos tipos principales:\n1. **Listas Desordenadas (`<ul>` - Unordered List)**: Usan viñetas o 'bullets'. Se usan cuando el orden no importa, como en una lista de ingredientes.\n2. **Listas Ordenadas (`<ol>` - Ordered List)**: Usan números. Se usan cuando el orden es estricto, como en los pasos de una receta.\n\nDentro de ambas, cada ítem individual se envuelve en la etiqueta `<li>` (List Item)."
    },
    {
        type: "code",
        title: "0:30 - 1:00 | Ejemplo de Listas",
        content: "Veamos cómo se escriben. Aquí tenemos un `<ul>` para los ingredientes. Cada ingrediente está dentro de un `<li>`. El navegador se encargará de ponerle el puntito al lado.\n\nDebajo, tenemos un `<ol>` para las instrucciones. Nuevamente, usamos `<li>` para cada paso, pero esta vez el navegador pondrá automáticamente los números 1, 2 y 3.",
        codeLanguage: "html",
        codeSnippet: `<!-- Lista Desordenada (Ingredientes) -->\n<h3>Ingredientes para Pizza</h3>\n<ul>\n    <li>Harina</li>\n    <li>Queso Muzzarella</li>\n    <li>Salsa de tomate</li>\n</ul>\n\n<!-- Lista Ordenada (Pasos) -->\n<h3>Instrucciones</h3>\n<ol>\n    <li>Amasar la harina con agua.</li>\n    <li>Dejar reposar la masa.</li>\n    <li>Hornear por 20 minutos.</li>\n</ol>`
    },
    {
        type: "script",
        title: "1:00 - 1:30 | Teoría: Enlaces (Links)",
        content: "Ahora pasemos a lo que hace que la web sea una 'red': los enlaces o links. Para esto usamos la etiqueta ancla, `<a>` (Anchor).\n\nEl atributo más importante de esta etiqueta es `href` (Hypertext Reference). Aquí es donde le decimos al navegador a dónde queremos ir cuando el usuario haga clic.\n\nOtro atributo muy útil es `target=\"_blank\"`. Si agregamos esto, el enlace se abrirá en una pestaña nueva, lo cual es ideal cuando enlazamos a sitios externos para no perder al usuario de nuestra propia página."
    },
    {
        type: "code",
        title: "1:30 - 2:00 | Creando Hipervínculos",
        content: "Aquí vemos dos ejemplos. El primero es un enlace absoluto. Le decimos exactamente la dirección completa de internet, en este caso Google. Y usamos `target=\"_blank\"` para que abra en otra pestaña.\n\nEl segundo es un enlace relativo. Solo ponemos el nombre del archivo, 'contacto.html'. Esto asume que ese archivo está en la misma carpeta que nuestra página actual.",
        codeLanguage: "html",
        codeSnippet: `<!-- Enlace a una web externa (Absoluta) -->\n<a href="https://www.google.com" target="_blank">Ir a Google</a>\n\n<!-- Enlace a un archivo local (Relativa) -->\n<a href="contacto.html">Contáctanos</a>`
    },
    {
        type: "script",
        title: "2:00 - 2:30 | Teoría: Rutas Relativas",
        content: "Profundicemos en las rutas relativas. Cuando construimos un sitio web real, no tenemos todos los archivos sueltos en una sola carpeta. Los organizamos.\n\nSi desde nuestro `index.html` queremos enlazar a un archivo que está DENTRO de una carpeta llamada 'recetas', escribimos el nombre de la carpeta, una barra, y el archivo: `recetas/pizza.html`.\n\nPero, ¿qué pasa si estamos dentro de `pizza.html` y queremos volver al `index.html` que está afuera? Usamos dos puntos y una barra: `../`. Esto significa 'subir un nivel' o 'salir de la carpeta actual'. Así que escribiríamos `../index.html`."
    },
    {
        type: "task",
        title: "2:30 - 4:00 | Actividad: Recetario Web",
        content: "Vamos a poner esto en práctica creando un mini-sitio con múltiples páginas.\n\nSigan estos pasos:\n1. Creen una carpeta llamada `recetas`.\n2. Dentro de esa carpeta, creen un archivo `pizza.html`. Pongan allí los ingredientes y pasos que vimos en el ejemplo de listas.\n3. En su archivo `index.html` principal (fuera de la carpeta), creen un enlace que lleve a `recetas/pizza.html`.\n4. **El desafío:** En `pizza.html`, agreguen un enlace al final que diga 'Volver' y que los lleve de regreso a `../index.html`.",
        teacherSolutionLanguage: "html",
        teacherSolution: `<!-- index.html -->\n<h1>Mis Recetas</h1>\n<ul>\n    <li><a href="recetas/pizza.html">Receta de Pizza</a></li>\n</ul>\n\n<!-- recetas/pizza.html -->\n<h1>Pizza Casera</h1>\n<h2>Ingredientes</h2>\n<ul>\n    <li>Harina</li>\n    <li>Queso</li>\n</ul>\n<h2>Pasos</h2>\n<ol>\n    <li>Amasar</li>\n    <li>Hornear</li>\n</ol>\n<a href="../index.html">Volver al Inicio</a>`
    }
  ],
  contentBlocks: [
    {
        type: "theory",
        title: "2.1 Listas HTML",
        content: "Las listas permiten agrupar elementos relacionados. Son fundamentales para menús de navegación.\n\n* **Desordenadas (`<ul>`):** Usan viñetas (bullets). El orden no importa.\n* **Ordenadas (`<ol>`):** Usan números. El orden importa.\n* **Ítem de lista (`<li>`):** Cada elemento individual dentro de la lista."
    },
    {
        type: "code",
        title: "Ejemplo de Listas",
        codeLanguage: "html",
        content: `<!-- Lista Desordenada (Ingredientes) -->
<h3>Ingredientes para Pizza</h3>
<ul>
    <li>Harina</li>
    <li>Queso Muzzarella</li>
    <li>Salsa de tomate</li>
</ul>

<!-- Lista Ordenada (Pasos) -->
<h3>Instrucciones</h3>
<ol>
    <li>Amasar la harina con agua.</li>
    <li>Dejar reposar la masa.</li>
    <li>Hornear por 20 minutos.</li>
</ol>`
    },
    {
        type: "theory",
        title: "2.2 Enlaces (Links)",
        content: "La etiqueta `<a>` (Anchor) conecta páginas entre sí. \n\n* **href:** El atributo más importante. Indica el destino.\n* **target=\"_blank\":** Abre el enlace en una pestaña nueva."
    },
    {
        type: "code",
        title: "Creando Hipervínculos",
        codeLanguage: "html",
        content: `<!-- Enlace a una web externa (Absoluta) -->
<a href="https://www.google.com" target="_blank">Ir a Google</a>

<!-- Enlace a un archivo local (Relativa) -->
<a href="contacto.html">Contáctanos</a>`
    },
    {
        type: "theory",
        title: "2.3 Rutas Relativas",
        content: "Cuando enlazamos archivos dentro de nuestro propio proyecto, usamos rutas relativas a donde estamos parados.\n\n* `carpeta/archivo.html`: Entrar a una carpeta.\n* `../archivo.html`: **Salir** de la carpeta actual (subir un nivel)."
    },
    {
        type: "task",
        title: "Actividad: Recetario Web",
        content: "Vamos a crear un mini-sitio con múltiples páginas.\n1. Crea una carpeta `recetas`.\n2. Dentro, crea `pizza.html` con los ingredientes y pasos que vimos arriba.\n3. En tu `index.html` principal, crea un enlace que lleve a `recetas/pizza.html`.\n4. **Desafío:** En `pizza.html`, agrega un enlace que diga 'Volver' y lleve a `../index.html`.",
        teacherSolutionLanguage: "html",
        teacherSolution: `<!-- index.html -->
<h1>Mis Recetas</h1>
<ul>
    <li><a href="recetas/pizza.html">Receta de Pizza</a></li>
</ul>

<!-- recetas/pizza.html -->
<h1>Pizza Casera</h1>
<h2>Ingredientes</h2>
<ul>
    <li>Harina</li>
    <li>Queso</li>
</ul>
<h2>Pasos</h2>
<ol>
    <li>Amasar</li>
    <li>Hornear</li>
</ol>
<a href="../index.html">Volver al Inicio</a>`
    }
  ]
};

const CLASS_3: ClassSession = {
    id: 3,
    title: "Multimedia y Estructura de Datos",
    description: "Incorporando imágenes, tablas de datos y contenedores.",
    duration: "4h",
    type: "Práctico",
    objectives: [
        "Insertar y optimizar imágenes (rutas, alt, width)", 
        "Construir tablas de datos complejas (thead, rowspan, colspan)", 
        "Diferenciar entre elementos de bloque (div) y de línea (span)"
    ],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: Imágenes en HTML",
            content: "Bienvenidos a la clase 3. Hoy vamos a hacer nuestras páginas mucho más visuales. Empezaremos con las imágenes.\n\nPara insertar una imagen usamos la etiqueta `<img>`. Esta es una etiqueta especial porque es 'vacía', es decir, no tiene etiqueta de cierre `</img>`.\n\nTiene dos atributos que son absolutamente críticos:\n1. `src` (source): Le dice al navegador dónde está la imagen. Puede ser una ruta local (ej. `foto.jpg`) o una URL de internet.\n2. `alt` (alternative text): Es una descripción en texto de la imagen. Esto es VITAL. Si la imagen no carga, se mostrará este texto. Además, los lectores de pantalla para personas ciegas leen este texto. Si no lo ponen, Google penaliza su página."
        },
        {
            type: "code",
            title: "0:30 - 0:45 | Ejemplo de Imágenes",
            content: "Veamos cómo se escribe. Aquí tenemos la etiqueta `<img>` con su `src` apuntando a 'gato.jpg'. Tenemos el `alt` describiendo la imagen, y agregamos un atributo `width` para controlar el ancho. Más adelante aprenderemos a controlar el tamaño de forma mucho mejor usando CSS, pero por ahora esto nos sirve.",
            codeLanguage: "html",
            codeSnippet: `<img src="gato.jpg" alt="Un gato jugando" width="300">`
        },
        {
            type: "script",
            title: "0:45 - 1:15 | Teoría: Tablas de Datos",
            content: "Ahora pasemos a las tablas. Una aclaración importantísima: en los años 90 se usaban tablas para diseñar toda la página web. ¡Eso hoy es un pecado capital! Las tablas SOLO se usan para mostrar datos tabulares, como si fuera un Excel en la web.\n\nLa anatomía de una tabla es la siguiente:\n- `<table>`: Es el contenedor principal.\n- `<thead>`: Envuelve el encabezado de la tabla.\n- `<tbody>`: Envuelve el cuerpo o contenido principal.\n- `<tr>` (Table Row): Define una fila horizontal.\n- `<th>` (Table Header): Define una celda de título. Por defecto, el texto aquí sale en negrita y centrado.\n- `<td>` (Table Data): Define una celda de datos normal."
        },
        {
            type: "code",
            title: "1:15 - 2:00 | Estructura de Tabla",
            content: "Veamos este ejemplo. Tenemos nuestra `<table>` con un borde para poder verla. Dentro, tenemos el `<thead>` con una fila `<tr>` que contiene dos títulos `<th>`: 'Producto' y 'Precio'.\n\nLuego, en el `<tbody>`, tenemos una fila `<tr>` con los datos 'Manzana' y '$1.50' en etiquetas `<td>`.\n\nFíjense en la última fila. Usamos el atributo `colspan=\"2\"` en el `<td>`. Esto hace que esa celda se fusione y ocupe el espacio de dos columnas. También existe `rowspan` para fusionar filas hacia abajo.",
            codeLanguage: "html",
            codeSnippet: `<table border="1">\n  <thead>\n    <tr>\n        <th>Producto</th>\n        <th>Precio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>Manzana</td>\n        <td>$1.50</td>\n    </tr>\n    <tr>\n        <td colspan="2">Oferta válida por hoy</td>\n    </tr>\n  </tbody>\n</table>`
        },
        {
            type: "script",
            title: "2:00 - 2:30 | Teoría: Divs y Spans",
            content: "Para terminar la teoría de hoy, vamos a conocer a los dos mejores amigos del desarrollador web: `<div>` y `<span>`. Son contenedores genéricos que no tienen ningún significado por sí solos, pero son fundamentales cuando empecemos a usar CSS.\n\nEl `<div>` (Division) es un elemento de **Bloque**. Imagínenlo como una caja de cartón. Ocupa todo el ancho disponible en la pantalla y fuerza un salto de línea antes y después. Se usa para agrupar grandes bloques de contenido, como una tarjeta de producto o una sección entera.\n\nEl `<span>` es un elemento de **Línea**. Imagínenlo como un resaltador. No ocupa espacio extra ni rompe el texto. Se usa para envolver una palabra o frase específica dentro de un párrafo para poder darle un color o estilo diferente."
        },
        {
            type: "code",
            title: "2:30 - 2:45 | Bloque vs Línea",
            content: "En este código vemos la diferencia. El `<div>` crea un bloque entero que corta la página. En cambio, el `<span>` está metido en el medio del párrafo `<p>`. Lo usamos para envolver el precio '$500' y, usando el atributo `style`, le decimos que sea de color verde. El texto fluye normalmente, pero esa parte específica tiene otro estilo.",
            codeLanguage: "html",
            codeSnippet: `<!-- El div corta la página -->\n<div>Encabezado del sitio</div>\n\n<!-- El span fluye con el texto -->\n<p>El precio es <span style="color: green">$500</span> dólares.</p>`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Ficha de Personaje",
            content: "Ahora vamos a poner todo esto en práctica. Van a crear una ficha para un personaje ficticio, puede ser de un videojuego, película o libro.\n\nSigan estos pasos:\n1. Usen un `<div>` para agrupar toda la tarjeta del personaje.\n2. Agreguen un título y una foto (`<img>`) del personaje.\n3. Creen una tabla (`<table>`) con sus estadísticas (por ejemplo: Fuerza, Inteligencia, Velocidad).\n4. Escriban una biografía breve en un párrafo (`<p>`), y usen la etiqueta `<span>` para resaltar al menos dos palabras clave en colores diferentes usando el atributo `style`.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<div>\n    <h2>Geralt de Rivia</h2>\n    <img src="https://via.placeholder.com/200" alt="Geralt de Rivia" width="200">\n    \n    <table border="1">\n        <tr>\n            <th>Fuerza</th>\n            <th>Inteligencia</th>\n            <th>Velocidad</th>\n        </tr>\n        <tr>\n            <td>90</td>\n            <td>75</td>\n            <td>85</td>\n        </tr>\n    </table>\n    \n    <p>Geralt es un <span style="color: red;">brujo</span> mutado, cazador de <span style="color: purple;">monstruos</span> a sueldo.</p>\n</div>`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "3.1 Imágenes en HTML",
            content: "Para insertar imágenes usamos la etiqueta `<img>`. No necesita etiqueta de cierre.\n\n**Atributos principales:**\n* `src`: La ruta del archivo (puede ser local `foto.jpg` o remota `https://...`).\n* `alt`: Descripción textual de la imagen. Es fundamental para la accesibilidad."
        },
        {
            type: "code",
            title: "Ejemplo de Imágenes",
            codeLanguage: "html",
            content: `<img src="gato.jpg" alt="Un gato jugando" width="300">`
        },
        {
            type: "theory",
            title: "3.2 Tablas de Datos",
            content: "Las tablas se usan para organizar datos en filas y columnas. \n\n* `<table>`: Contenedor principal.\n* `<thead>`: Encabezado de la tabla.\n* `<tbody>`: Cuerpo de la tabla.\n* `<tr>`: Fila (Table Row).\n* `<th>`: Celda de encabezado (Table Header, negrita por defecto).\n* `<td>`: Celda de datos (Table Data)."
        },
        {
            type: "code",
            title: "Estructura de Tabla",
            codeLanguage: "html",
            content: `<table border="1">
  <thead>
    <tr>
        <th>Producto</th>
        <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Manzana</td>
        <td>$1.50</td>
    </tr>
    <tr>
        <td colspan="2">Oferta válida por hoy</td>
    </tr>
  </tbody>
</table>`
        },
        {
            type: "theory",
            title: "3.3 Divs y Spans",
            content: "Son contenedores genéricos que usaremos mucho con CSS.\n\n* **`<div>` (Bloque):** Crea una división o sección. Ocupa todo el ancho disponible y fuerza un salto de línea. Se usa para la estructura (cajas, tarjetas, cabeceras).\n* **`<span>` (Línea):** Se usa para agrupar contenido dentro de una línea de texto sin romper el flujo. Ideal para dar color a una palabra específica."
        },
        {
            type: "code",
            title: "Bloque vs Línea",
            codeLanguage: "html",
            content: `<!-- El div corta la página -->
<div>Encabezado del sitio</div>

<!-- El span fluye con el texto -->
<p>El precio es <span style="color: green">$500</span> dólares.</p>`
        },
        {
            type: "task",
            title: "Actividad: Ficha de Personaje",
            content: "Crea una página simple para un personaje ficticio:\n1. Usa un `<div>` para agrupar toda la tarjeta del personaje.\n2. Agrega una foto (`img`) del personaje.\n3. Crea una tabla (`table`) con sus estadísticas (Fuerza, Inteligencia, Velocidad).\n4. Escribe una biografía breve donde uses `<span>` para resaltar palabras clave en otro color (usando el atributo `style`).",
            teacherSolutionLanguage: "html",
            teacherSolution: `<div>
    <h2>Geralt de Rivia</h2>
    <img src="geralt.jpg" alt="Geralt de Rivia" width="200">
    
    <table border="1">
        <tr>
            <th>Fuerza</th>
            <th>Inteligencia</th>
            <th>Velocidad</th>
        </tr>
        <tr>
            <td>90</td>
            <td>75</td>
            <td>85</td>
        </tr>
    </table>
    
    <p>Geralt es un <span style="color: red;">brujo</span> mutado, cazador de <span style="color: purple;">monstruos</span> a sueldo.</p>
</div>`
        }
    ]
};

const CLASS_4: ClassSession = {
    id: 4,
    title: "Formularios",
    description: "Interacción con el usuario mediante inputs.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Crear formularios de contacto complejos", "Conocer diversos tipos de input", "Agrupar datos con fieldset"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: Estructura Básica y Envío de Datos",
            content: "Hasta ahora nuestras páginas solo muestran información. Hoy vamos a aprender a recibir información del usuario usando Formularios.\n\nTodo formulario comienza con la etiqueta `<form>`. Esta etiqueta es el contenedor principal y tiene dos atributos vitales que definen cómo y a dónde se envía la información:\n\nPrimero, el atributo `action`. Este indica la URL o el archivo en el servidor que va a procesar los datos cuando el usuario haga clic en enviar.\n\nSegundo, el atributo `method`. Este define cómo viajan los datos. Los dos métodos principales son `GET` (donde los datos se ven en la URL, útil para búsquedas) y `POST` (donde los datos van ocultos, que es el estándar y más seguro para contraseñas o datos personales).\n\nDentro del formulario, usamos `<label>` para las etiquetas de texto y `<input>` para los campos donde el usuario escribe. Es muy importante que el atributo `for` del `<label>` sea exactamente igual al `id` del `<input>`. Esto vincula el texto con el campo, mejorando la accesibilidad y permitiendo que al hacer clic en el texto, se active el campo."
        },
        {
            type: "code",
            title: "0:30 - 0:45 | Ejemplo Básico con Action y Method",
            content: "Veamos un ejemplo básico. Aquí tenemos un formulario que enviará los datos a la ruta `/procesar-suscripcion` usando el método `POST`.\n\nTenemos un `<label>` para el Email, y fíjense que su `for` es igual al `id` del input. El input es de tipo `email`, lo que hace que el navegador valide automáticamente que lo que se escriba tenga formato de correo. El atributo `name` es fundamental: es el nombre de la variable que recibirá el servidor. Y el atributo `required` hace que no se pueda enviar el formulario si este campo está vacío.",
            codeLanguage: "html",
            codeSnippet: `<form action="/procesar-suscripcion" method="POST">\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  \n  <button type="submit">Suscribirse</button>\n</form>`
        },
        {
            type: "script",
            title: "0:45 - 1:00 | Teoría: El Botón Submit",
            content: "¿Y cómo se envía esto? Para eso usamos el botón Submit. Puede ser `<button type=\"submit\">` o `<input type=\"submit\">`.\n\nEste botón es el gatillo del formulario. Al hacer clic en él, el navegador recolecta automáticamente todos los datos de los inputs (usando sus atributos `name`) y los empaqueta para enviarlos a la dirección especificada en el atributo `action`."
        },
        {
            type: "script",
            title: "1:00 - 1:30 | Teoría: Tipos de Selección",
            content: "No todo en un formulario es escribir texto libre. A veces necesitamos que el usuario elija opciones predefinidas.\n\nTenemos tres tipos principales:\n\n1. **Radio Buttons (`type=\"radio\"`)**: Sirven para elegir UNA sola opción de un grupo. Por ejemplo, el género o un método de pago. El secreto aquí es que todos los radios del mismo grupo DEBEN tener el mismo atributo `name`.\n2. **Checkboxes (`type=\"checkbox\"`)**: Sirven para elegir VARIAS opciones independientes. Por ejemplo, seleccionar intereses o ingredientes extra en una pizza.\n3. **Select (`<select>` y `<option>`)**: Es el clásico menú desplegable. Es ideal para ahorrar espacio cuando hay muchas opciones, como elegir un país de una lista larga."
        },
        {
            type: "code",
            title: "1:30 - 2:00 | Ejemplo de Selecciones",
            content: "Veamos cómo se escriben. En los Radio Buttons, fíjense que tanto 'Rojo' como 'Azul' tienen `name=\"color\"`. Esto le dice al navegador que pertenecen al mismo grupo y solo se puede elegir uno.\n\nEn los Checkboxes, cada uno es independiente, aunque aquí los agrupamos lógicamente bajo `name=\"topping\"`.\n\nY para el menú desplegable, usamos la etiqueta `<select>` que envuelve a varias etiquetas `<option>`. El atributo `value` en cada `<option>` es lo que realmente se enviará al servidor, mientras que el texto entre las etiquetas es lo que ve el usuario.",
            codeLanguage: "html",
            codeSnippet: `<!-- Radio Buttons (Solo se puede elegir uno porque comparten el name="color") -->\n<input type="radio" id="rojo" name="color" value="rojo"> <label for="rojo">Rojo</label>\n<input type="radio" id="azul" name="color" value="azul"> <label for="azul">Azul</label>\n\n<!-- Checkboxes (Se pueden elegir varios) -->\n<input type="checkbox" id="queso" name="topping" value="queso"> <label for="queso">Queso</label>\n<input type="checkbox" id="bacon" name="topping" value="bacon"> <label for="bacon">Bacon</label>\n\n<!-- Select (Menú desplegable) -->\n<label for="dia">Día preferido:</label>\n<select id="dia" name="dia">\n  <option value="lunes">Lunes</option>\n  <option value="martes">Martes</option>\n</select>`
        },
        {
            type: "script",
            title: "2:00 - 2:15 | Teoría: Agrupación (Fieldset)",
            content: "Cuando tenemos formularios muy largos, como un registro de usuario completo, es una excelente práctica agrupar campos relacionados. Para esto usamos la etiqueta `<fieldset>`.\n\nEl `<fieldset>` crea un recuadro visual alrededor de los campos, y usamos la etiqueta `<legend>` justo adentro para darle un título a esa agrupación, por ejemplo 'Datos Personales' o 'Datos de la Cuenta'."
        },
        {
            type: "code",
            title: "2:15 - 2:45 | Código: Formulario Completo",
            content: "Aquí vemos un formulario completo aplicando todo lo aprendido. Tenemos el `<form>` con su `action` y `method`.\n\nLuego, usamos un `<fieldset>` con la `<legend>` 'Información Personal' para agrupar Nombre, Email y Contraseña. Fíjense en el input de contraseña: usa `type=\"password\"` para ocultar los caracteres y `minlength=\"8\"` para obligar a que tenga al menos 8 caracteres.\n\nDespués tenemos otro `<fieldset>` para 'Preferencias', donde combinamos Radio Buttons para el nivel de experiencia, un Select para el país, y un Checkbox obligatorio para los términos y condiciones. Finalmente, nuestro botón Submit.",
            codeLanguage: "html",
            codeSnippet: `<form action="/registro" method="POST">\n    <!-- Agrupación de Datos Personales -->\n    <fieldset>\n        <legend>Información Personal</legend>\n        \n        <label for="nombre">Nombre Completo:</label>\n        <input type="text" id="nombre" name="fullname" required placeholder="Juan Pérez">\n        <br><br>\n\n        <label for="email">Correo Electrónico:</label>\n        <input type="email" id="email" name="email" required>\n        <br><br>\n        \n        <label for="pass">Contraseña:</label>\n        <input type="password" id="pass" name="password" minlength="8">\n    </fieldset>\n\n    <!-- Agrupación de Preferencias -->\n    <fieldset>\n        <legend>Preferencias</legend>\n\n        <p>Nivel de Experiencia:</p>\n        <input type="radio" id="jr" name="nivel" value="junior">\n        <label for="jr">Junior</label>\n        \n        <input type="radio" id="ssr" name="nivel" value="semisenior">\n        <label for="ssr">Semi-Senior</label>\n\n        <br><br>\n        <label for="pais">País de Residencia:</label>\n        <select id="pais" name="pais">\n            <option value="ar">Argentina</option>\n            <option value="py">Paraguay</option>\n            <option value="uy">Uruguay</option>\n        </select>\n        \n        <br><br>\n        <input type="checkbox" id="terms" name="terms" required>\n        <label for="terms">Acepto los términos y condiciones</label>\n    </fieldset>\n\n    <br>\n    <button type="submit">Registrarse</button>\n</form>`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Registro de Conferencia",
            content: "Ahora les toca a ustedes crear un formulario de registro profesional para una conferencia.\n\nSigan estos pasos:\n1. Creen la etiqueta `<form>` con `action=\"/procesar-registro\"` y `method=\"POST\"`.\n2. Creen un primer `<fieldset>` con la leyenda 'Datos Personales' que incluya inputs para Nombre, Email y Teléfono.\n3. Creen un segundo `<fieldset>` con la leyenda 'Preferencias'. Aquí deben incluir:\n   - Un Checkbox para preguntar '¿Asistirá a la cena?'.\n   - Un Select para elegir el 'Talle de remera' (S, M, L, XL).\n   - Radio Buttons para la 'Preferencia alimenticia' (Carnívoro, Vegano, Celíaco).\n4. Por último, no olviden el botón Submit para enviar la inscripción. ¡A programar!",
            teacherSolutionLanguage: "html",
            teacherSolution: `<form action="/procesar-registro" method="POST">\n    <fieldset>\n        <legend>Datos Personales</legend>\n        \n        <label for="nombre">Nombre:</label>\n        <input type="text" id="nombre" name="nombre" required>\n        <br><br>\n        \n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" required>\n        <br><br>\n        \n        <label for="telefono">Teléfono:</label>\n        <input type="tel" id="telefono" name="telefono">\n    </fieldset>\n    <br>\n    <fieldset>\n        <legend>Preferencias</legend>\n        \n        <input type="checkbox" id="cena" name="asiste_cena" value="si">\n        <label for="cena">¿Asistirá a la cena?</label>\n        <br><br>\n        \n        <label for="talle">Talle de remera:</label>\n        <select id="talle" name="talle">\n            <option value="s">S</option>\n            <option value="m">M</option>\n            <option value="l">L</option>\n            <option value="xl">XL</option>\n        </select>\n        <br><br>\n        \n        <p>Preferencia alimenticia:</p>\n        <input type="radio" id="carnivoro" name="dieta" value="carnivoro">\n        <label for="carnivoro">Carnívoro</label>\n        \n        <input type="radio" id="vegano" name="dieta" value="vegano">\n        <label for="vegano">Vegano</label>\n        \n        <input type="radio" id="celiaco" name="dieta" value="celiaco">\n        <label for="celiaco">Celíaco</label>\n    </fieldset>\n    <br>\n    <button type="submit">Enviar Inscripción</button>\n</form>`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "4.1 Estructura Básica y Envío de Datos",
            content: "Un formulario comienza con la etiqueta `<form>`. Esta etiqueta es el contenedor principal y tiene dos atributos vitales que definen cómo y a dónde se envía la información:\n\n* **`action`**: Indica la URL o archivo que procesará los datos.\n* **`method`**: Define cómo se envían los datos (`GET` o `POST`).\n\nDentro del formulario, usamos `<label>` para las etiquetas de texto y `<input>` para los campos de entrada. El atributo `for` del label debe coincidir con el `id` del input para mejorar la accesibilidad."
        },
        {
            type: "code",
            title: "Ejemplo Básico con Action y Method",
            codeLanguage: "html",
            content: `<form action="/procesar-suscripcion" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Suscribirse</button>
</form>`
        },
        {
            type: "theory",
            title: "4.2 El Botón Submit",
            content: "El botón `<button type=\"submit\">` o `<input type=\"submit\">` es el gatillo del formulario. Al hacer clic en él, el navegador recolecta todos los datos de los inputs y los empaqueta para enviarlos a la dirección especificada en el atributo `action`."
        },
        {
            type: "theory",
            title: "4.3 Tipos de Selección",
            content: "No todo es escribir texto. A veces necesitamos que el usuario elija opciones predefinidas.\n\n* **Radio (`type=\"radio\"`):** Para elegir UNA opción exclusiva de un grupo. Todos los radios del mismo grupo deben tener el mismo atributo `name`.\n* **Checkbox (`type=\"checkbox\"`):** Para elegir VARIAS opciones independientes.\n* **Select (`<select>` y `<option>`):** Un menú desplegable para ahorrar espacio cuando hay muchas opciones."
        },
        {
            type: "code",
            title: "Ejemplo de Selecciones",
            codeLanguage: "html",
            content: `<!-- Radio Buttons (Solo se puede elegir uno porque comparten el name="color") -->
<input type="radio" id="rojo" name="color" value="rojo"> <label for="rojo">Rojo</label>
<input type="radio" id="azul" name="color" value="azul"> <label for="azul">Azul</label>

<!-- Checkboxes (Se pueden elegir varios) -->
<input type="checkbox" id="queso" name="topping" value="queso"> <label for="queso">Queso</label>
<input type="checkbox" id="bacon" name="topping" value="bacon"> <label for="bacon">Bacon</label>

<!-- Select (Menú desplegable) -->
<label for="dia">Día preferido:</label>
<select id="dia" name="dia">
  <option value="lunes">Lunes</option>
  <option value="martes">Martes</option>
</select>`
        },
        {
            type: "theory",
            title: "4.4 Agrupación (Fieldset)",
            content: "Para formularios largos, es una excelente práctica agrupar campos relacionados visual y semánticamente usando `<fieldset>`. El título de esta agrupación se define con la etiqueta `<legend>`."
        },
        {
            type: "code",
            title: "Código: Formulario Completo",
            codeLanguage: "html",
            content: `<form action="/registro" method="POST">
    <!-- Agrupación de Datos Personales -->
    <fieldset>
        <legend>Información Personal</legend>
        
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" name="fullname" required placeholder="Juan Pérez">
        <br><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        
        <label for="pass">Contraseña:</label>
        <input type="password" id="pass" name="password" minlength="8">
    </fieldset>

    <!-- Agrupación de Preferencias -->
    <fieldset>
        <legend>Preferencias</legend>

        <p>Nivel de Experiencia:</p>
        <input type="radio" id="jr" name="nivel" value="junior">
        <label for="jr">Junior</label>
        
        <input type="radio" id="ssr" name="nivel" value="semisenior">
        <label for="ssr">Semi-Senior</label>

        <br><br>
        <label for="pais">País de Residencia:</label>
        <select id="pais" name="pais">
            <option value="ar">Argentina</option>
            <option value="py">Paraguay</option>
            <option value="uy">Uruguay</option>
        </select>
        
        <br><br>
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">Acepto los términos y condiciones</label>
    </fieldset>

    <br>
    <button type="submit">Registrarse</button>
</form>`
        },
        {
            type: "task",
            title: "Actividad: Registro de Conferencia",
            content: "Crea un formulario de registro profesional.\n1. **Configuración del Formulario:** Usa `<form action=\"/procesar-registro\" method=\"POST\">`.\n2. **Fieldset 1:** Datos Personales (Nombre, Email, Teléfono).\n3. **Fieldset 2:** Preferencias.\n   - '¿Asistirá a la cena?' (Checkbox).\n   - 'Talle de remera' (Select: S, M, L, XL).\n   - 'Preferencia alimenticia' (Radio: Carnívoro, Vegano, Celíaco).\n4. Botón de 'Enviar Inscripción' (`type=\"submit\"`).",
            teacherSolutionLanguage: "html",
            teacherSolution: `<form action="/procesar-registro" method="POST">
    <fieldset>
        <legend>Datos Personales</legend>
        
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono">
    </fieldset>
    <br>
    <fieldset>
        <legend>Preferencias</legend>
        
        <input type="checkbox" id="cena" name="asiste_cena" value="si">
        <label for="cena">¿Asistirá a la cena?</label>
        <br><br>
        
        <label for="talle">Talle de remera:</label>
        <select id="talle" name="talle">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
        </select>
        <br><br>
        
        <p>Preferencia alimenticia:</p>
        <input type="radio" id="carnivoro" name="dieta" value="carnivoro">
        <label for="carnivoro">Carnívoro</label>
        
        <input type="radio" id="vegano" name="dieta" value="vegano">
        <label for="vegano">Vegano</label>
        
        <input type="radio" id="celiaco" name="dieta" value="celiaco">
        <label for="celiaco">Celíaco</label>
    </fieldset>
    <br>
    <button type="submit">Enviar Inscripción</button>
</form>`
        }
    ]
};

const CLASS_5: ClassSession = {
    id: 5,
    title: "HTML5 Semántico + Proyecto Unidad I",
    description: "Estructura moderna y cierre de unidad.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Usar etiquetas semánticas", "Mejorar SEO y accesibilidad", "Integrar todo lo aprendido"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: ¿Qué es el HTML Semántico?",
            content: "Llegamos a la última clase de la Unidad I. Hoy vamos a ver un concepto fundamental: el HTML Semántico.\n\nHasta ahora, podríamos haber construido toda una página usando solo la etiqueta `<div>` para agrupar cosas. Visualmente, con CSS, podríamos hacer que se vea bien. Pero habría un gran problema: Google y los lectores de pantalla no entenderían qué es cada parte.\n\nEl HTML Semántico introduce etiquetas que describen su significado. Reemplazan al genérico `<div>` para dar estructura real a la página. Esto es crucial por tres razones:\n1. **Accesibilidad:** Ayuda a los lectores de pantalla a navegar por la página y entender qué es un menú, qué es el contenido principal, etc.\n2. **SEO:** Mejora el posicionamiento en buscadores. Google le da más importancia al texto dentro de un `<article>` que al texto dentro de un simple `<div>`.\n3. **Mantenibilidad:** Hace el código mucho más fácil de leer para nosotros los programadores."
        },
        {
            type: "script",
            title: "0:30 - 1:00 | Teoría: Las Etiquetas Semánticas Principales",
            content: "Vamos a conocer a los protagonistas del HTML Semántico:\n\n- `<header>`: Es la cabecera. Se usa para la parte superior de la página (donde suele ir el logo) o para el encabezado de un artículo.\n- `<nav>`: Viene de 'navigation'. Envuelve los enlaces principales de navegación, como el menú de tu sitio.\n- `<main>`: Es el contenido principal y dominante de la página. Solo debe haber un `<main>` por documento.\n- `<section>`: Es una sección genérica temática. Agrupa contenido relacionado, como 'Últimas Noticias' o 'Servicios'.\n- `<article>`: Define contenido independiente y autónomo. Piensa en un post de un blog o una noticia en un periódico; tiene sentido por sí solo.\n- `<aside>`: Es contenido lateral o relacionado, pero no principal. Suele usarse para barras laterales (sidebars) con publicidad o enlaces extra.\n- `<footer>`: Es el pie de página. Suele contener información de contacto, derechos de autor y enlaces legales."
        },
        {
            type: "image",
            title: "1:00 - 1:15 | Comparación Visual",
            content: "Miren esta imagen. A la izquierda, vemos cómo se estructuraban las webs antes: todo era un `<div>` con un `id` o `class`. A la derecha, vemos la web moderna y semántica. Es mucho más limpia y descriptiva, ¿verdad?",
            imageUrl: "https://static.semrush.com/blog/uploads/media/0a/0f/0a0fd07d0a6ee7a7f893b0e21379c0ae/ES-Semantic-Search-Non-Semantic.webp"
        },
        {
            type: "code",
            title: "1:15 - 2:00 | Ejemplo de Layout Semántico Completo",
            content: "Veamos cómo se arman todas estas etiquetas juntas en un ejemplo real. Aquí tenemos la estructura de un blog de tecnología.\n\nFíjense cómo el `<header>` contiene el título y el `<nav>` con el menú. Luego, todo el contenido importante va dentro de `<main>`. Dentro del `<main>`, tenemos una `<section>` para agrupar noticias, y cada noticia individual es un `<article>`. A un lado, tenemos un `<aside>` con info del autor. Y finalmente, cerramos la página con el `<footer>`.\n\nEsta estructura es el estándar de la industria hoy en día.",
            codeLanguage: "html",
            codeSnippet: `<body>\n  <!-- Cabecera principal del sitio -->\n  <header>\n    <h1>TechBlog</h1>\n    <nav>\n      <ul>\n        <li><a href="/">Inicio</a></li>\n        <li><a href="/articulos">Artículos</a></li>\n        <li><a href="/contacto">Contacto</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <!-- Contenido principal -->\n  <main>\n    <!-- Una sección temática -->\n    <section id="ultimas-noticias">\n      <h2>Últimas Noticias</h2>\n      \n      <!-- Un artículo independiente -->\n      <article>\n        <header>\n          <h3>Lanzamiento de HTML6</h3>\n          <p>Publicado el 24 de Octubre</p>\n        </header>\n        <p>El consorcio W3C ha anunciado las nuevas especificaciones...</p>\n        <a href="/leer-mas">Leer artículo completo</a>\n      </article>\n      \n      <article>\n        <header>\n          <h3>El futuro de CSS</h3>\n          <p>Publicado el 20 de Octubre</p>\n        </header>\n        <p>Las nuevas funcionalidades de CSS Grid revolucionarán...</p>\n      </article>\n    </section>\n    \n    <!-- Contenido lateral/relacionado -->\n    <aside>\n      <h3>Sobre el Autor</h3>\n      <p>Desarrollador web con 10 años de experiencia.</p>\n    </aside>\n  </main>\n\n  <!-- Pie de página -->\n  <footer>\n    <p>&copy; 2024 TechBlog. Todos los derechos reservados.</p>\n  </footer>\n</body>`
        },
        {
            type: "task",
            title: "2:00 - 3:30 | Actividad: Estructura de Blog",
            content: "Para cerrar esta unidad, van a construir la estructura semántica de su propio Blog Personal.\n\nSigan estos pasos:\n1. Creen la estructura base de HTML5.\n2. Definan el `<header>` con un `<h1>` que sea el Título de su Blog.\n3. Dentro del `<header>`, creen un `<nav>` con una lista de enlaces: Inicio, Sobre mí, Contacto.\n4. Creen la etiqueta `<main>`.\n5. Dentro del `<main>`, creen dos etiquetas `<article>`. Cada una será una entrada de blog y debe tener: una imagen (`<img>`), un título (`<h2>`), un párrafo de resumen (`<p>`) y un enlace de 'Leer más'.\n6. Creen el `<footer>` al final con un texto de Copyright y un pequeño formulario para suscribirse a un newsletter (solo email y botón).",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Mi Blog Personal</title>\n</head>\n<body>\n\n    <header>\n        <h1>El Rincón del Desarrollador</h1>\n        <nav>\n            <ul>\n                <li><a href="#inicio">Inicio</a></li>\n                <li><a href="#sobre-mi">Sobre mí</a></li>\n                <li><a href="#contacto">Contacto</a></li>\n            </ul>\n        </nav>\n    </header>\n\n    <main>\n        <section>\n            <h2>Entradas Recientes</h2>\n            \n            <article>\n                <img src="https://via.placeholder.com/400x200" alt="Código en pantalla">\n                <h2>Por qué aprender HTML Semántico</h2>\n                <p>El HTML semántico no solo hace que tu código sea más limpio, sino que es fundamental para el SEO y la accesibilidad web. En este artículo exploramos sus beneficios...</p>\n                <a href="#">Leer más</a>\n            </article>\n\n            <article>\n                <img src="https://via.placeholder.com/400x200" alt="Teclado mecánico">\n                <h2>Mis herramientas favoritas de 2024</h2>\n                <p>Un repaso por los editores de código, extensiones y utilidades que me ayudan a ser más productivo en mi día a día como programador front-end...</p>\n                <a href="#">Leer más</a>\n            </article>\n        </section>\n    </main>\n\n    <footer>\n        <p>&copy; 2024 El Rincón del Desarrollador. Creado con fines educativos.</p>\n        \n        <section>\n            <h3>Suscríbete a mi Newsletter</h3>\n            <form action="/suscribir" method="POST">\n                <label for="newsletter-email">Email:</label>\n                <input type="email" id="newsletter-email" name="email" required placeholder="tu@email.com">\n                <button type="submit">Suscribirme</button>\n            </form>\n        </section>\n    </footer>\n\n</body>\n</html>`
        },
        {
            type: "script",
            title: "3:30 - 4:00 | Evaluación y Cierre Unidad I",
            content: "Excelente trabajo. Con esto cerramos la Unidad I. Ahora saben cómo estructurar correctamente la información en la web usando HTML5 y formularios.\n\nComo habrán notado, nuestras páginas se ven muy 'blanco y negro', muy básicas. Eso es porque HTML solo se encarga de la estructura. En la próxima clase, comenzaremos la Unidad II, donde aprenderemos CSS, el lenguaje que le dará color, diseño y vida a todo lo que hemos construido hasta ahora. ¡Nos vemos en la próxima clase!"
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "5.1 ¿Qué es el HTML Semántico?",
            content: "El HTML Semántico introduce etiquetas que describen su significado tanto para el navegador como para el desarrollador. Reemplazan al genérico `<div>` para dar estructura real a la página.\n\nEs crucial para:\n1. **Accesibilidad:** Ayuda a lectores de pantalla.\n2. **SEO:** Mejora el posicionamiento en buscadores.\n3. **Mantenibilidad:** Hace el código más legible."
        },
        {
            type: "theory",
            title: "5.2 Las Etiquetas Semánticas Principales",
            content: "* **`<header>`**: Cabecera de la página o sección.\n* **`<nav>`**: Enlaces de navegación principales.\n* **`<main>`**: Contenido principal y dominante.\n* **`<section>`**: Sección genérica temática.\n* **`<article>`**: Contenido independiente y autónomo (ej. un post).\n* **`<aside>`**: Contenido lateral o relacionado.\n* **`<footer>`**: Pie de página."
        },
        {
            type: "image",
            title: "Comparación: Estructura No Semántica vs Semántica",
            content: "A la izquierda, la web antigua basada en divs. A la derecha, la web moderna y accesible.",
            imageUrl: "https://static.semrush.com/blog/uploads/media/0a/0f/0a0fd07d0a6ee7a7f893b0e21379c0ae/ES-Semantic-Search-Non-Semantic.webp"
        },
        {
            type: "code",
            title: "Ejemplo de Layout Semántico Completo",
            codeLanguage: "html",
            content: `<body>
  <!-- Cabecera principal del sitio -->
  <header>
    <h1>TechBlog</h1>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/articulos">Artículos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- Contenido principal -->
  <main>
    <!-- Una sección temática -->
    <section id="ultimas-noticias">
      <h2>Últimas Noticias</h2>
      
      <!-- Un artículo independiente -->
      <article>
        <header>
          <h3>Lanzamiento de HTML6</h3>
          <p>Publicado el 24 de Octubre</p>
        </header>
        <p>El consorcio W3C ha anunciado las nuevas especificaciones...</p>
        <a href="/leer-mas">Leer artículo completo</a>
      </article>
      
      <article>
        <header>
          <h3>El futuro de CSS</h3>
          <p>Publicado el 20 de Octubre</p>
        </header>
        <p>Las nuevas funcionalidades de CSS Grid revolucionarán...</p>
      </article>
    </section>
    
    <!-- Contenido lateral/relacionado -->
    <aside>
      <h3>Sobre el Autor</h3>
      <p>Desarrollador web con 10 años de experiencia.</p>
    </aside>
  </main>

  <!-- Pie de página -->
  <footer>
    <p>&copy; 2024 TechBlog. Todos los derechos reservados.</p>
  </footer>
</body>`
        },
        {
            type: "task",
            title: "Actividad: Estructura de Blog",
            content: "**Desarrollo Guiado:**\n1. Crear la estructura base de HTML5 (`<!DOCTYPE html>...`).\n2. Definir el `<header>` con un `<h1>` que sea el Título de tu Blog.\n3. Dentro del `<header>` (o justo debajo), crear un `<nav>` con una lista desordenada (`<ul>`) y enlaces (`<a>`) para: Inicio, Sobre mí, Contacto.\n4. Crear la etiqueta `<main>` para envolver el contenido principal.\n5. Dentro del `<main>`, crear dos etiquetas `<article>`. Cada una debe representar una entrada de blog y contener:\n   - Una imagen (`<img>`).\n   - Un título (`<h2>`).\n   - Un párrafo de resumen (`<p>`).\n6. Crear el `<footer>` al final de la página con un texto de Copyright y un pequeño formulario (`<form>`) para suscribirse a un newsletter (solo un input de email y un botón submit).",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Blog Personal</title>
</head>
<body>

    <header>
        <h1>El Rincón del Desarrollador</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Entradas Recientes</h2>
            
            <article>
                <img src="https://via.placeholder.com/400x200" alt="Código en pantalla">
                <h2>Por qué aprender HTML Semántico</h2>
                <p>El HTML semántico no solo hace que tu código sea más limpio, sino que es fundamental para el SEO y la accesibilidad web. En este artículo exploramos sus beneficios...</p>
                <a href="#">Leer más</a>
            </article>

            <article>
                <img src="https://via.placeholder.com/400x200" alt="Teclado mecánico">
                <h2>Mis herramientas favoritas de 2024</h2>
                <p>Un repaso por los editores de código, extensiones y utilidades que me ayudan a ser más productivo en mi día a día como programador front-end...</p>
                <a href="#">Leer más</a>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 El Rincón del Desarrollador. Creado con fines educativos.</p>
        
        <section>
            <h3>Suscríbete a mi Newsletter</h3>
            <form action="/suscribir" method="POST">
                <label for="newsletter-email">Email:</label>
                <input type="email" id="newsletter-email" name="email" required placeholder="tu@email.com">
                <button type="submit">Suscribirme</button>
            </form>
        </section>
    </footer>

</body>
</html>`
        }
    ]
};

// --- CONTENIDO DETALLADO UNIDAD II (CSS) ---

const CLASS_6: ClassSession = {
    id: 6,
    title: "Intro a CSS: Sintaxis y Selectores",
    description: "Dando vida al HTML con estilos. Fundamentos de CSS y su conexión vital con HTML.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: [
        "Comprender la diferencia entre Estructura (HTML) y Presentación (CSS)",
        "Conectar correctamente un archivo HTML con un archivo CSS",
        "Dominar los selectores básicos (Etiqueta, Clase, ID) y su relación",
        "Entender el concepto de 'Cascada' y 'Especificidad'"
    ],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: La Conexión Vital: HTML y CSS",
            content: "Bienvenidos a la segunda unidad. Hasta ahora hemos construido el esqueleto de nuestras páginas con HTML. Hoy vamos a empezar a pintarlas y decorarlas con CSS.\n\nSi HTML es el esqueleto y los ladrillos de la casa, CSS es la pintura, el diseño de interiores y la arquitectura visual. Pero hay un detalle vital: HTML y CSS son archivos separados. No se conocen entre sí hasta que nosotros los presentamos.\n\nPara que un archivo HTML sepa qué estilos aplicar, debemos 'vincularlo' al archivo CSS. Esto se hace dentro de la etiqueta `<head>` del HTML usando la etiqueta `<link>`. El atributo `href` debe apuntar exactamente al nombre de tu archivo CSS, por ejemplo, `style.css`."
        },
        {
            type: "code",
            title: "0:30 - 1:15 | Ejemplo 1: Vinculación y Selectores (HTML)",
            content: "Veamos cómo se ve esto en el código. En nuestro archivo HTML, dentro del `<head>`, agregamos la etiqueta `<link rel=\"stylesheet\" href=\"style.css\">`. Esta es la línea mágica que conecta ambos mundos.\n\nAdemás, en el `<body>`, hemos agregado algunos atributos nuevos a nuestras etiquetas: `id` y `class`. Estos son como 'nombres' o 'etiquetas' que le ponemos a los elementos para luego poder llamarlos desde el CSS. Un `id` debe ser único en toda la página, como un número de pasaporte. Una `class` se puede repetir en varios elementos, como un uniforme de equipo.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi Primera Web con CSS</title>\n  <!-- Conectamos el HTML con el CSS -->\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <!-- Selector de ID: Único en la página -->\n  <h1 id="titulo-principal">Bienvenidos a mi Web</h1>\n  \n  <!-- Selector de Etiqueta -->\n  <p>Este es un párrafo normal.</p>\n  \n  <!-- Selector de Clase: Reutilizable -->\n  <p class="destacado">Este párrafo es muy importante.</p>\n  <p>Otro párrafo normal, pero con una <span class="destacado">palabra destacada</span>.</p>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "1:15 - 2:00 | Ejemplo 1: Vinculación y Selectores (CSS)",
            content: "Ahora, en nuestro archivo `style.css`, vamos a usar 'selectores' para apuntar a esos elementos del HTML.\n\nPrimero, el **Selector de Etiqueta**: escribimos simplemente `p`. Esto afectará a TODOS los párrafos de la página, dándoles una fuente y un color gris oscuro.\n\nSegundo, el **Selector de ID**: usamos el símbolo de numeral `#` seguido del nombre del ID, `#titulo-principal`. Esto afectará SOLO al elemento con ese ID exacto, cambiándole el color, centrándolo y poniéndolo en mayúsculas.\n\nTercero, el **Selector de Clase**: usamos un punto `.` seguido del nombre de la clase, `.destacado`. Esto afectará a CUALQUIER elemento que tenga esa clase, ya sea un párrafo entero o solo un `<span>` dentro de un texto, dándole color rojo, negrita y un fondo.",
            codeLanguage: "css",
            codeSnippet: `/* style.css */\n\n/* Selector de Etiqueta: Afecta a todos los <p> */\np {\n  font-family: Arial, sans-serif;\n  color: #333333;\n}\n\n/* Selector de ID (#): Afecta SOLO al elemento con id="titulo-principal" */\n#titulo-principal {\n  color: #2c3e50;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n/* Selector de Clase (.): Afecta a CUALQUIER elemento con class="destacado" */\n.destacado {\n  color: #e74c3c;\n  font-weight: bold;\n  background-color: #fadbd8;\n  padding: 5px;\n}`
        },
        {
            type: "script",
            title: "2:00 - 2:30 | Teoría: Cascada y Especificidad",
            content: "¿Qué pasa si le damos dos órdenes contradictorias al navegador? Por ejemplo, si le decimos que un título sea verde y luego que sea azul. Aquí entran en juego dos conceptos clave: Cascada y Especificidad.\n\n**Cascada:** CSS significa 'Hojas de Estilo en Cascada'. El navegador lee el código de arriba hacia abajo. Si hay dos reglas con el mismo peso que afectan al mismo elemento, la última que se haya escrito es la que gana.\n\n**Especificidad:** Es el 'peso' o la importancia de un selector. No todos los selectores valen lo mismo. Un ID pesa más que una Clase, y una Clase pesa más que una Etiqueta. El navegador siempre obedecerá a la regla con mayor especificidad, sin importar el orden en que se escribió."
        },
        {
            type: "code",
            title: "2:30 - 2:45 | Ejemplo 2: Cascada y Especificidad (HTML)",
            content: "Veamos un ejemplo de esto. En este HTML tenemos un `<h2>` que tiene tanto una clase (`titulo-secundario`) como un ID (`titulo-especial`).",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Cascada y Especificidad</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h2 class="titulo-secundario" id="titulo-especial">¿De qué color seré?</h2>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "2:45 - 3:15 | Ejemplo 2: Cascada y Especificidad (CSS)",
            content: "En el CSS, tenemos tres reglas intentando cambiar el color de ese mismo `<h2>`.\n\nLa primera regla usa el selector de etiqueta `h2` y dice que sea verde. La segunda usa el selector de clase `.titulo-secundario` y dice que sea azul. La tercera usa el selector de ID `#titulo-especial` y dice que sea rojo.\n\n¿De qué color será el título? Será ROJO. Aunque la regla del ID esté al final, ganaría incluso si estuviera al principio, porque un ID tiene mucha más especificidad (peso) que una clase o una etiqueta.",
            codeLanguage: "css",
            codeSnippet: `/* style.css */\n\n/* Regla 1: Etiqueta (Peso bajo) */\nh2 {\n  color: green;\n}\n\n/* Regla 2: Clase (Peso medio) - Gana sobre la etiqueta */\n.titulo-secundario {\n  color: blue;\n}\n\n/* Regla 3: ID (Peso alto) - Gana sobre la clase y la etiqueta */\n#titulo-especial {\n  color: red; /* El título será ROJO */\n}`
        },
        {
            type: "task",
            title: "3:15 - 4:00 | Actividad: Tarjeta de Perfil",
            content: "Es hora de practicar. Van a crear una tarjeta de perfil simple.\n\n1. Creen dos archivos: `index.html` y `style.css`.\n2. En el HTML, no olviden vincular el CSS. Creen un contenedor `<div>` con la clase `perfil`. Dentro, pongan una imagen (pueden usar un placeholder), un `<h2>` para su nombre y un `<p>` para su descripción.\n3. En el CSS, denle un color de fondo al `body`. Luego, usen la clase `.perfil` para centrar el texto de la tarjeta, darle un ancho fijo y ponerle un borde. ¡Adelante!",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Perfil</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="perfil">\n    <img src="https://via.placeholder.com/100" alt="Foto" id="foto-perfil">\n    <h2 class="nombre">Ana García</h2>\n    <p>Desarrolladora Web Frontend</p>\n  </div>\n</body>\n</html>\n\n/* style.css */\nbody {\n  background-color: #f0f2f5;\n  font-family: sans-serif;\n}\n\n.perfil {\n  background-color: white;\n  width: 300px;\n  margin: 50px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  text-align: center;\n}\n\n#foto-perfil {\n  border-radius: 50%;\n}\n\n.nombre {\n  color: #3b5998;\n}\n\n/* Explicación del código:\n- El HTML estructura la tarjeta dentro de un <div> con la clase .perfil.\n- El CSS aplica un color de fondo suave al body.\n- La clase .perfil le da forma de tarjeta al contenedor: fondo blanco, ancho fijo, centrado con margin: auto, bordes redondeados y sombra/borde.\n- El ID #foto-perfil hace que la imagen sea circular con border-radius: 50%.\n- La clase .nombre le da un color específico al nombre del usuario. */`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "La Conexión Vital: HTML y CSS",
            content: "Para que un archivo HTML sepa qué estilos aplicar, debemos 'vincularlo' al archivo CSS. Esto se hace dentro de la etiqueta `<head>` del HTML usando la etiqueta `<link>`. El atributo `href` debe apuntar exactamente al nombre de tu archivo CSS."
        },
        {
            type: "code",
            title: "Ejemplo 1: Vinculación y Selectores (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi Primera Web con CSS</title>\n  <!-- Conectamos el HTML con el CSS -->\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <!-- Selector de ID: Único en la página -->\n  <h1 id="titulo-principal">Bienvenidos a mi Web</h1>\n  \n  <!-- Selector de Etiqueta -->\n  <p>Este es un párrafo normal.</p>\n  \n  <!-- Selector de Clase: Reutilizable -->\n  <p class="destacado">Este párrafo es muy importante.</p>\n  <p>Otro párrafo normal, pero con una <span class="destacado">palabra destacada</span>.</p>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 1: Vinculación y Selectores (CSS)",
            codeLanguage: "css",
            content: `/* style.css */\n\n/* Selector de Etiqueta: Afecta a todos los <p> */\np {\n  font-family: Arial, sans-serif;\n  color: #333333;\n}\n\n/* Selector de ID (#): Afecta SOLO al elemento con id="titulo-principal" */\n#titulo-principal {\n  color: #2c3e50;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n/* Selector de Clase (.): Afecta a CUALQUIER elemento con class="destacado" */\n.destacado {\n  color: #e74c3c;\n  font-weight: bold;\n  background-color: #fadbd8;\n  padding: 5px;\n}`
        },
        {
            type: "theory",
            title: "Cascada y Especificidad",
            content: "**Cascada:** CSS se lee de arriba hacia abajo. Si hay dos reglas iguales, la última gana.\n**Especificidad:** Es el 'peso' de un selector. Un ID pesa más que una Clase, y una Clase pesa más que una Etiqueta."
        },
        {
            type: "code",
            title: "Ejemplo 2: Cascada y Especificidad (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Cascada y Especificidad</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h2 class="titulo-secundario" id="titulo-especial">¿De qué color seré?</h2>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 2: Cascada y Especificidad (CSS)",
            codeLanguage: "css",
            content: `/* style.css */\n\n/* Regla 1: Etiqueta (Peso bajo) */\nh2 {\n  color: green;\n}\n\n/* Regla 2: Clase (Peso medio) - Gana sobre la etiqueta */\n.titulo-secundario {\n  color: blue;\n}\n\n/* Regla 3: ID (Peso alto) - Gana sobre la clase y la etiqueta */\n#titulo-especial {\n  color: red; /* El título será ROJO */\n}`
        },
        {
            type: "task",
            title: "Actividad: Tarjeta de Perfil",
            content: "Crea una tarjeta de perfil simple.\n1. Crea `index.html` y `style.css`.\n2. En HTML, crea un contenedor `<div>` con clase `perfil`. Dentro, pon una imagen, un `<h2>` para el nombre y un `<p>` para la descripción.\n3. En CSS, dale un color de fondo al body, centra el texto de la tarjeta y ponle un borde.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Perfil</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="perfil">\n    <img src="https://via.placeholder.com/100" alt="Foto" id="foto-perfil">\n    <h2 class="nombre">Ana García</h2>\n    <p>Desarrolladora Web Frontend</p>\n  </div>\n</body>\n</html>\n\n/* style.css */\nbody {\n  background-color: #f0f2f5;\n  font-family: sans-serif;\n}\n\n.perfil {\n  background-color: white;\n  width: 300px;\n  margin: 50px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  text-align: center;\n}\n\n#foto-perfil {\n  border-radius: 50%;\n}\n\n.nombre {\n  color: #3b5998;\n}`
        }
    ]
};

const CLASS_7: ClassSession = {
    id: 7,
    title: "Colores, Fondos y Tipografía",
    description: "Estilizado visual avanzado, manejo de fuentes y fondos.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Manejar códigos de colores (Hex, RGB, HSL)", "Importar fuentes de Google Fonts", "Trabajar con fondos e imágenes de fondo"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Teoría: Variables de Color y Tipografía",
            content: "Bienvenidos a la clase de hoy. Vamos a darle vida a nuestras páginas web con colores y tipografías.\n\nEn CSS, en lugar de escribir códigos de colores difíciles de recordar una y otra vez, podemos usar Variables CSS. Las declaramos en la raíz del documento (`:root`) con dos guiones, por ejemplo `--color-primario: #3498db;`. Luego, las usamos con la función `var()`. Si el cliente quiere cambiar el azul por verde, solo cambiamos la variable en un lugar y se actualiza en toda la web.\n\nAdemás, hoy aprenderemos a usar Google Fonts, que nos da acceso a miles de tipografías gratuitas. Cuando definimos una fuente, solemos poner algo como `font-family: 'Poppins', sans-serif;`. Ese `sans-serif` al final es una 'fuente de respaldo'. Si el navegador no puede cargar 'Poppins', usará la fuente por defecto del sistema para que el texto siempre se vea bien."
        },
        {
            type: "code",
            title: "1:00 - 1:15 | Ejemplo 1: Variables y Fuentes (HTML)",
            content: "Veamos cómo se ve esto en el código. En nuestro HTML, lo primero que hacemos es ir a Google Fonts, elegir la fuente 'Poppins' y pegar el enlace `<link>` en nuestro `<head>`. Fíjense que lo ponemos SIEMPRE antes de nuestro propio archivo `style.css`.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Colores y Fuentes</title>\n  <!-- Importamos la fuente 'Poppins' desde Google Fonts -->\n  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="caja-alerta">\n    <h1>¡Atención!</h1>\n    <p>Este es un mensaje importante usando variables de color.</p>\n    <button class="btn-primario">Aceptar</button>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "1:15 - 1:45 | Ejemplo 1: Variables y Fuentes (CSS)",
            content: "Ahora en el CSS, declaramos nuestras variables en `:root`. Tenemos colores y también nuestra `--fuente-principal`.\n\nAplicamos la fuente al `body` para que todo el texto la herede. Luego, usamos nuestras variables de color en la `.caja-alerta` y el `.btn-primario`. Vean cómo `var(--color-peligro)` se usa tanto para el borde como para el color del título, manteniendo la coherencia.",
            codeLanguage: "css",
            codeSnippet: `/* Definimos las variables en la raíz del documento */\n:root {\n  --color-primario: #3498db; /* Azul */\n  --color-peligro: #e74c3c;  /* Rojo */\n  --color-texto: #333333;    /* Gris oscuro */\n  --fuente-principal: 'Poppins', sans-serif;\n}\n\nbody {\n  font-family: var(--fuente-principal);\n  color: var(--color-texto);\n}\n\n/* .caja-alerta es un contenedor para mostrar un mensaje destacado */\n.caja-alerta {\n  border-left: 5px solid var(--color-peligro);\n  background-color: #fdf2f0;\n  padding: 20px;\n  margin: 20px;\n}\n\n.caja-alerta h1 {\n  color: var(--color-peligro);\n}\n\n.btn-primario {\n  background-color: var(--color-primario);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-family: var(--fuente-principal);\n  font-weight: 700;\n  cursor: pointer;\n}`
        },
        {
            type: "script",
            title: "1:45 - 2:00 | Teoría: Imágenes de Fondo y Gradientes",
            content: "Pasemos a los fondos. Con `background-image` podemos poner imágenes, pero hay un problema común: si ponemos texto blanco sobre una imagen clara, no se lee nada.\n\nEl truco profesional es superponer un gradiente oscuro semitransparente sobre la imagen. Combinamos `linear-gradient` y `url()` separados por coma. El gradiente va de negro con cierta opacidad a negro con la misma opacidad, creando una capa oscura uniforme que hace resaltar el texto."
        },
        {
            type: "code",
            title: "2:00 - 2:15 | Ejemplo 2: Hero Section (HTML)",
            content: "Vamos a crear un 'Hero Section', esa sección grande que vemos al entrar a muchas páginas. El HTML es sencillo: un `<header>` con la clase `hero-oscuro` y dentro un contenedor con el título, texto y botón.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Hero Section</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="hero-oscuro">\n    <div class="hero-contenido">\n      <h1>Explora el Mundo</h1>\n      <p>Descubre destinos increíbles para tus próximas vacaciones.</p>\n      <a href="#" class="btn-hero">Ver Destinos</a>\n    </div>\n  </header>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "2:15 - 2:45 | Ejemplo 2: Hero Section (CSS)",
            content: "Aquí está la magia en el CSS. En `.hero-oscuro`, fíjense en la propiedad `background-image`. Primero declaramos el `linear-gradient` con `rgba(0,0,0,0.6)` (negro al 60% de opacidad) y luego la `url()` de la imagen. El gradiente queda por encima.\n\nUsamos `background-size: cover` para que la imagen ocupe todo el espacio y `height: 100vh` para que la sección ocupe toda la altura de la pantalla.",
            codeLanguage: "css",
            codeSnippet: `body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n/* EL TRUCO DEL GRADIENTE OSCURO */\n.hero-oscuro {\n  /* Combinamos linear-gradient y url() separados por coma */\n  /* El gradiente va de negro al 60% de opacidad a negro al 60% de opacidad */\n  /* Esto crea una capa oscura uniforme sobre la imagen */\n  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), \n                    url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1');\n  background-size: cover; /* Cubre todo el espacio */\n  background-position: center; /* Centra la imagen */\n  height: 100vh; /* 100% de la altura de la pantalla */\n  \n  /* Flexbox para centrar el contenido (se verá a fondo en otra clase) */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero-contenido {\n  color: white;\n}\n\n.hero-contenido h1 {\n  font-size: 4rem;\n  margin-bottom: 10px;\n}\n\n.hero-contenido p {\n  font-size: 1.5rem;\n  margin-bottom: 30px;\n}\n\n.btn-hero {\n  background-color: #f1c40f;\n  color: #333;\n  padding: 15px 30px;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 30px;\n  font-size: 1.2rem;\n}`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Crea tu propio Hero",
            content: "Ahora les toca a ustedes. Utilizando el código del Ejemplo 2 como base, quiero que creen un Hero Section para una cafetería. Cambien la URL de la imagen de fondo por una de café, busquen y usen una fuente elegante de Google Fonts para el título, y ajusten los colores del botón para que combinen con la temática. ¡Manos a la obra!",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Cafetería Hero</title>\n  <!-- 1. Importamos la fuente 'Playfair Display' de Google Fonts -->\n  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="hero-cafe">\n    <div class="hero-contenido">\n      <h1 class="titulo-cafe">El Aroma Perfecto</h1>\n      <p>Disfruta del mejor café de especialidad en tu ciudad.</p>\n      <a href="#" class="btn-cafe">Ver Menú</a>\n    </div>\n  </header>\n</body>\n</html>\n\n/* style.css */\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n.hero-cafe {\n  /* 2. Cambiamos la URL de la imagen por una de café y mantenemos el gradiente */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), \n                    url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero-contenido {\n  color: white;\n}\n\n.titulo-cafe {\n  /* 3. Aplicamos la fuente importada al título */\n  font-family: 'Playfair Display', serif;\n  font-size: 5rem;\n  margin-bottom: 10px;\n  color: #f39c12; /* Un tono café/dorado */\n}\n\n.hero-contenido p {\n  font-size: 1.5rem;\n  margin-bottom: 30px;\n}\n\n.btn-cafe {\n  background-color: #d35400; /* Color naranja oscuro/café */\n  color: white;\n  padding: 15px 30px;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 5px; /* Bordes menos redondeados que el ejemplo original */\n  font-size: 1.2rem;\n  transition: background-color 0.3s;\n}\n\n.btn-cafe:hover {\n  background-color: #e67e22; /* Color más claro al pasar el mouse */\n}\n\n/* Explicación del código:\n- En el HTML, agregamos el <link> de Google Fonts en el <head>.\n- En el CSS, cambiamos la imagen de fondo en .hero-cafe usando una foto de Unsplash.\n- Aplicamos la fuente 'Playfair Display' a la clase .titulo-cafe para darle un toque elegante.\n- Cambiamos los colores del título y del botón a tonos cálidos (naranjas/marrones) que encajan con la temática de una cafetería.\n- Agregamos un efecto :hover al botón para mejorar la interactividad. */`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Variables de Color y Tipografía",
            content: "Las variables CSS (`--nombre`) nos permiten guardar colores para no tener que recordar códigos hexadecimales. Google Fonts nos da acceso a miles de tipografías gratuitas.\n\n**Variables CSS (`:root`):**\n- `:root` representa el elemento raíz del documento (el `<html>`). Declarar variables aquí hace que estén disponibles en todo el CSS.\n- Se declaran con dos guiones: `--color-primario: #3498db;`.\n- Se usan con la función `var()`: `color: var(--color-primario);`.\n\n**Fuentes de Respaldo (Fallback):**\nCuando veas algo como `font-family: 'Poppins', sans-serif;`, significa que el navegador intentará usar 'Poppins' primero. Si no puede cargarla (ej. falla el internet o Google Fonts), usará la fuente `sans-serif` por defecto del sistema (como Arial o Helvetica). Es una medida de seguridad para que tu texto siempre se vea bien."
        },
        {
            type: "code",
            title: "Ejemplo 1: Variables y Fuentes (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Colores y Fuentes</title>\n  <!-- Importamos la fuente 'Poppins' desde Google Fonts -->\n  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="caja-alerta">\n    <h1>¡Atención!</h1>\n    <p>Este es un mensaje importante usando variables de color.</p>\n    <button class="btn-primario">Aceptar</button>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 1: Variables y Fuentes (CSS)",
            codeLanguage: "css",
            content: `/* Definimos las variables en la raíz del documento */\n:root {\n  --color-primario: #3498db; /* Azul */\n  --color-peligro: #e74c3c;  /* Rojo */\n  --color-texto: #333333;    /* Gris oscuro */\n  --fuente-principal: 'Poppins', sans-serif;\n}\n\nbody {\n  font-family: var(--fuente-principal);\n  color: var(--color-texto);\n}\n\n/* .caja-alerta es un contenedor para mostrar un mensaje destacado */\n.caja-alerta {\n  border-left: 5px solid var(--color-peligro);\n  background-color: #fdf2f0;\n  padding: 20px;\n  margin: 20px;\n}\n\n.caja-alerta h1 {\n  color: var(--color-peligro);\n}\n\n.btn-primario {\n  background-color: var(--color-primario);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-family: var(--fuente-principal);\n  font-weight: 700;\n  cursor: pointer;\n}`
        },
        {
            type: "theory",
            title: "Imágenes de Fondo y Gradientes",
            content: "La propiedad `background-image` permite usar imágenes o gradientes. Un truco muy común es superponer un gradiente oscuro semitransparente sobre una imagen para que el texto superpuesto sea legible.\n\n**El truco del gradiente oscuro:**\nCombinamos `linear-gradient` y `url()` separados por coma. El gradiente va de negro con cierta opacidad a negro con la misma opacidad, creando una capa oscura uniforme sobre la imagen."
        },
        {
            type: "code",
            title: "Ejemplo 2: Hero Section (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Hero Section</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="hero-oscuro">\n    <div class="hero-contenido">\n      <h1>Explora el Mundo</h1>\n      <p>Descubre destinos increíbles para tus próximas vacaciones.</p>\n      <a href="#" class="btn-hero">Ver Destinos</a>\n    </div>\n  </header>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 2: Hero Section (CSS)",
            codeLanguage: "css",
            content: `body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n/* EL TRUCO DEL GRADIENTE OSCURO */\n.hero-oscuro {\n  /* Combinamos linear-gradient y url() separados por coma */\n  /* El gradiente va de negro al 60% de opacidad a negro al 60% de opacidad */\n  /* Esto crea una capa oscura uniforme sobre la imagen */\n  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), \n                    url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1');\n  background-size: cover; /* Cubre todo el espacio */\n  background-position: center; /* Centra la imagen */\n  height: 100vh; /* 100% de la altura de la pantalla */\n  \n  /* Flexbox para centrar el contenido (se verá a fondo en otra clase) */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero-contenido {\n  color: white;\n}\n\n.hero-contenido h1 {\n  font-size: 4rem;\n  margin-bottom: 10px;\n}\n\n.hero-contenido p {\n  font-size: 1.5rem;\n  margin-bottom: 30px;\n}\n\n.btn-hero {\n  background-color: #f1c40f;\n  color: #333;\n  padding: 15px 30px;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 30px;\n  font-size: 1.2rem;\n}`
        },
        {
            type: "task",
            title: "Actividad: Crea tu propio Hero",
            content: "Utilizando el Ejemplo 2 como base, crea un Hero Section para una cafetería. Cambia la imagen de fondo, usa una fuente elegante de Google Fonts para el título, y ajusta los colores del botón.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Cafetería Hero</title>\n  <!-- 1. Importamos la fuente 'Playfair Display' de Google Fonts -->\n  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="hero-cafe">\n    <div class="hero-contenido">\n      <h1 class="titulo-cafe">El Aroma Perfecto</h1>\n      <p>Disfruta del mejor café de especialidad en tu ciudad.</p>\n      <a href="#" class="btn-cafe">Ver Menú</a>\n    </div>\n  </header>\n</body>\n</html>\n\n/* style.css */\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n.hero-cafe {\n  /* 2. Cambiamos la URL de la imagen por una de café y mantenemos el gradiente */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), \n                    url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero-contenido {\n  color: white;\n}\n\n.titulo-cafe {\n  /* 3. Aplicamos la fuente importada al título */\n  font-family: 'Playfair Display', serif;\n  font-size: 5rem;\n  margin-bottom: 10px;\n  color: #f39c12; /* Un tono café/dorado */\n}\n\n.hero-contenido p {\n  font-size: 1.5rem;\n  margin-bottom: 30px;\n}\n\n.btn-cafe {\n  background-color: #d35400; /* Color naranja oscuro/café */\n  color: white;\n  padding: 15px 30px;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 5px; /* Bordes menos redondeados que el ejemplo original */\n  font-size: 1.2rem;\n  transition: background-color 0.3s;\n}\n\n.btn-cafe:hover {\n  background-color: #e67e22; /* Color más claro al pasar el mouse */\n}\n\n/* Explicación del código:\n- En el HTML, agregamos el <link> de Google Fonts en el <head>.\n- En el CSS, cambiamos la imagen de fondo en .hero-cafe usando una foto de Unsplash.\n- Aplicamos la fuente 'Playfair Display' a la clase .titulo-cafe para darle un toque elegante.\n- Cambiamos los colores del título y del botón a tonos cálidos (naranjas/marrones) que encajan con la temática de una cafetería.\n- Agregamos un efecto :hover al botón para mejorar la interactividad. */`
        }
    ]
};

const CLASS_8: ClassSession = {
    id: 8,
    title: "El Modelo de Caja (Box Model)",
    description: "El concepto más importante de CSS para estructurar layouts.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Entender Content, Padding, Border y Margin", "Usar box-sizing: border-box", "Comprender el colapso de márgenes"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: El Modelo de Caja (Box Model)",
            content: "Bienvenidos a la clase de hoy. Vamos a hablar del concepto más importante de CSS para estructurar layouts: El Modelo de Caja o Box Model.\n\nCada elemento HTML que vemos en la pantalla es, en realidad, una caja rectangular. Entender cómo se compone esta caja es la clave para dominar el diseño web.\n\nImaginemos un cuadro enmarcado en la pared. Las 4 capas de nuestra caja web son:\n\n1. **Content (Contenido):** Es la pintura en sí. El texto, la imagen o el contenido real del elemento.\n2. **Padding (Relleno):** Es el paspartú, el espacio transparente *dentro* de la caja, entre el contenido y el marco. Este espacio toma el color de fondo del elemento.\n3. **Border (Borde):** Es el marco de madera. La línea que rodea el padding y el contenido.\n4. **Margin (Margen):** Es la distancia a otros cuadros en la pared. Es un espacio transparente *fuera* de la caja que separa el elemento de sus vecinos."
        },
        {
            type: "image",
            title: "0:30 - 0:45 | Anatomía del Modelo de Caja",
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLnRleHQgeyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZpbGw6ICMzMzM7IH0KICAgICAgLnRleHQtbGlnaHQgeyBmaWxsOiB3aGl0ZTsgfQogICAgICAubWFyZ2luIHsgZmlsbDogI2ZlY2FjYTsgc3Ryb2tlOiAjZjk3MzE2OyBzdHJva2Utd2lkdGg6IDI7IHN0cm9rZS1kYXNoYXJyYXk6IDUgNTsgfQogICAgICAuYm9yZGVyIHsgZmlsbDogI2ZkZWUwNDsgc3Ryb2tlOiAjZWFiMzA4OyBzdHJva2Utd2lkdGg6IDI7IH0KICAgICAgLnBhZGRpbmcgeyBmaWxsOiAjYmJmN2QwOyBzdHJva2U6ICMyMmMyNTY7IHN0cm9rZS13aWR0aDogMjsgfQogICAgICAuY29udGVudCB7IGZpbGw6ICNiZmRiZmU7IHN0cm9rZTogIzNiODJmNjsgc3Ryb2tlLXdpZHRoOiAyOyB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICAKICA8IS0tIE1hcmdpbiAtLT4KICA8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBjbGFzcz0ibWFyZ2luIiByeD0iOCIgLz4KICA8dGV4dCB4PSI2MCIgeT0iNzAiIGNsYXNzPSJ0ZXh0IiBmb250LXNpemU9IjE2Ij5NYXJnaW4gKEVzcGFjaW8gRXh0ZXJubyk8L3RleHQ+CgogIDwhLS0gQm9yZGVyIC0tPgogIDxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgY2xhc3M9ImJvcmRlciIgLz4KICA8dGV4dCB4PSIxMTAiIHk9IjEyMCIgY2xhc3M9InRleHQiIGZvbnQtc2l6ZT0iMTYiPkJvcmRlciAoTMOtbWl0ZSk8L3RleHQ+CgogIDwhLS0gUGFkZGluZyAtLT4KICA8cmVjdCB4PSIxMzAiIHk9IjEzMCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSIxNDAiIGNsYXNzPSJwYWRkaW5nIiAvPgogIDx0ZXh0IHg9IjE0MCIgeT0iMTUwIiBjbGFzcz0idGV4dCIgZm9udC1zaXplPSIxNiI+UGFkZGluZyAoUmVsbGVubyBJbnRlcm5vKTwvdGV4dD4KCiAgPCEtLSBDb250ZW50IC0tPgogIDxyZWN0IHg9IjE4MCIgeT0iMTgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjQwIiBjbGFzcz0iY29udGVudCIgLz4KICA8dGV4dCB4PSIzMDAiIHk9IjIwNSIgY2xhc3M9InRleHQiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnRlbmlkbyBSZWFsPC90ZXh0Pgo8L3N2Zz4=",
            content: "Miren este gráfico en sus pantallas. Aquí podemos ver claramente las 4 capas. Noten cómo el Margin es la capa más externa y es transparente, empujando a otros elementos. El Border es el límite visible. El Padding está por dentro del borde, dando espacio al contenido, y toma el color de fondo que le demos a la caja. Y en el centro, nuestro contenido real."
        },
        {
            type: "code",
            title: "0:45 - 1:15 | Ejemplo 1: Padding vs Margin (HTML)",
            content: "Vamos a ver esto en código. En este primer ejemplo, tenemos un HTML muy sencillo con dos cajas (`div`) a las que les hemos dado las clases `caja-1` y `caja-2` para poder estilizarlas por separado y comparar cómo se comportan el padding y el margin.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Box Model</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="caja caja-1"> <!-- Primera caja con mucho padding -->\n    Caja 1: Mucho Padding (Relleno interno)\n  </div>\n  \n  <div class="caja caja-2"> <!-- Segunda caja con mucho margin -->\n    Caja 2: Mucho Margin (Separación externa)\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "1:15 - 1:45 | Ejemplo 1: Padding vs Margin (CSS)",
            content: "Ahora veamos el CSS. Primero, noten la regla `* { box-sizing: border-box; }`. Esto es fundamental en el diseño web moderno. Le dice al navegador que si le damos un ancho de 300px a una caja, y luego le agregamos padding o borde, la caja siga midiendo 300px en total, encogiendo el espacio del contenido en lugar de hacer la caja más grande.\n\nEn la `.caja-1`, aplicamos `padding: 50px`. Fíjense cómo el espacio crece hacia ADENTRO del borde, y el fondo azul cubre este espacio.\n\nEn la `.caja-2`, aplicamos `margin-top: 50px` y `margin-left: 50px`. Este espacio crece hacia AFUERA del borde, empujando la caja hacia abajo y hacia la derecha, separándola de los demás elementos. Este espacio es completamente transparente.",
            codeLanguage: "css",
            codeSnippet: `/* Reset básico */\n* {\n  box-sizing: border-box; /* Fundamental: El padding no aumenta el tamaño de la caja */\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #e2e8f0;\n  padding: 20px;\n}\n\n.caja {\n  background-color: #3b82f6; /* Color de fondo azul */\n  color: white;\n  border: 5px solid #1e3a8a; /* Borde azul oscuro de 5px */\n  width: 300px; /* Ancho fijo de 300px */\n}\n\n.caja-1 {\n  padding: 50px; /* El espacio crece hacia ADENTRO del borde. El fondo azul cubre este espacio. */\n  margin-bottom: 10px; /* Separación pequeña con la caja de abajo. */\n}\n\n.caja-2 {\n  padding: 10px; /* Poco relleno interno. */\n  margin-top: 50px; /* El espacio crece hacia AFUERA del borde, empujando a otros elementos. Es transparente. */\n  margin-left: 50px; /* Empuja la caja hacia la derecha. */\n}`
        },
        {
            type: "script",
            title: "1:45 - 2:00 | Teoría: Tarjetas de Componentes",
            content: "Aplicando lo que acabamos de ver del Box Model, podemos empezar a crear componentes de interfaz reales, como las famosas 'Cards' o Tarjetas que vemos en casi todas las páginas web.\n\nUsamos `border-radius` para redondear las esquinas, `box-shadow` para darles un efecto de profundidad, y jugamos con el `padding` y el `margin` para dar respiro a los textos y separar las tarjetas entre sí."
        },
        {
            type: "code",
            title: "2:00 - 2:15 | Ejemplo 2: Tarjetas de Producto (HTML)",
            content: "En este segundo ejemplo, vamos a construir una tarjeta de producto. Observen la estructura HTML: tenemos un contenedor principal `<div class=\"card\">`. Dentro, colocamos una imagen, y luego otro contenedor `<div class=\"card-body\">` que agrupa el título, la descripción y el botón. Agrupar elementos así es clave para poder aplicarles padding a todos juntos.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Tarjetas</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="card"> <!-- Contenedor principal de la tarjeta -->\n    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Producto" class="card-img"> <!-- Imagen superior -->\n    <div class="card-body"> <!-- Contenedor para el contenido de texto -->\n      <h3 class="card-title">Zapatillas Deportivas</h3>\n      <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>\n      <a href="#" class="card-btn">Comprar Ahora</a>\n    </div>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "2:15 - 2:45 | Ejemplo 2: Tarjetas de Producto (CSS)",
            content: "Analicemos el CSS de nuestra tarjeta. En `.card`, le damos un ancho, fondo blanco, bordes redondeados y una sombra. Un detalle muy importante aquí es `overflow: hidden;`: esto evita que las esquinas cuadradas de la imagen sobresalgan de las esquinas redondeadas de nuestra tarjeta.\n\nEn `.card-body`, aplicamos un `padding: 20px` para que el texto respire y no toque los bordes.\n\nY finalmente, en el botón `.card-btn`, usamos `display: inline-block;`. Por defecto, los enlaces (`<a>`) son elementos en línea y no respetan bien el padding y margin vertical. Al cambiarlo a `inline-block`, se comporta como un bloque, permitiéndonos darle relleno, bordes y hacer que ocupe el 100% del ancho disponible.",
            codeLanguage: "css",
            codeSnippet: `* {\n  box-sizing: border-box; /* El padding no aumenta el tamaño de las cajas */\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #f8fafc;\n  font-family: Arial, sans-serif;\n  padding: 40px;\n}\n\n.card {\n  background-color: white;\n  width: 300px;\n  border-radius: 10px;\n  overflow: hidden; /* Evita que la imagen sobresalga de las esquinas redondeadas */\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra para dar profundidad */\n  margin-bottom: 30px; /* Separación con el elemento de abajo */\n}\n\n.card-img {\n  width: 100%;\n  display: block; /* Elimina el espacio fantasma debajo de las imágenes */\n}\n\n.card-body {\n  padding: 20px; /* Respiro interior para que el texto no toque los bordes */\n}\n\n.card-title {\n  margin-bottom: 10px; /* Separación entre el título y el texto */\n  color: #333;\n}\n\n.card-text {\n  color: #666;\n  margin-bottom: 20px; /* Separación entre el texto y el botón */\n  line-height: 1.5;\n}\n\n.card-btn {\n  display: inline-block; /* Permite aplicar padding y margin vertical a un enlace */\n  background-color: #10b981;\n  color: white;\n  padding: 10px 20px; /* Relleno interno del botón */\n  text-decoration: none; /* Quita el subrayado del enlace */\n  border-radius: 5px;\n  text-align: center;\n  width: 100%; /* El botón ocupa todo el ancho de la tarjeta */\n}`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Galería de Tarjetas",
            content: "Ahora es su turno. Copien el código del Ejemplo 2 y dupliquen el HTML de la tarjeta para tener 3 productos diferentes. Ajusten los márgenes para que no estén pegadas una debajo de la otra. ¡Adelante!",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Galería de Tarjetas</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <!-- Contenedor para la galería -->\n  <div class="galeria">\n    <!-- Tarjeta 1 -->\n    <div class="card">\n      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Producto 1" class="card-img">\n      <div class="card-body">\n        <h3 class="card-title">Zapatillas Deportivas</h3>\n        <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>\n        <a href="#" class="card-btn">Comprar Ahora</a>\n      </div>\n    </div>\n\n    <!-- Tarjeta 2 -->\n    <div class="card">\n      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="Producto 2" class="card-img">\n      <div class="card-body">\n        <h3 class="card-title">Reloj Inteligente</h3>\n        <p class="card-text">Monitorea tu actividad física y recibe notificaciones en tu muñeca.</p>\n        <a href="#" class="card-btn">Comprar Ahora</a>\n      </div>\n    </div>\n\n    <!-- Tarjeta 3 -->\n    <div class="card">\n      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Producto 3" class="card-img">\n      <div class="card-body">\n        <h3 class="card-title">Auriculares Inalámbricos</h3>\n        <p class="card-text">Sonido de alta calidad con cancelación de ruido activa.</p>\n        <a href="#" class="card-btn">Comprar Ahora</a>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n\n/* style.css (Añadir al CSS del Ejemplo 2) */\n.galeria {\n  display: flex; /* Usamos Flexbox para alinear las tarjetas una al lado de la otra */\n  gap: 20px; /* Espacio entre tarjetas, reemplaza al margin en este caso */\n  flex-wrap: wrap; /* Permite que las tarjetas bajen a la siguiente línea si no caben */\n  justify-content: center; /* Centra las tarjetas horizontalmente */\n}`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "El Modelo de Caja (Box Model)",
            content: "Cada elemento HTML es una caja rectangular. Entender cómo se compone esta caja es la clave para dominar el diseño web.\n\nLas 4 capas de la caja son:\n1. **Content (Contenido):** El texto, imagen o contenido real del elemento.\n2. **Padding (Relleno):** Espacio transparente *dentro* de la caja, entre el contenido y el borde. Toma el color de fondo del elemento.\n3. **Border (Borde):** La línea que rodea el padding y el contenido.\n4. **Margin (Margen):** Espacio transparente *fuera* de la caja. Separa el elemento de sus vecinos."
        },
        {
            type: "image",
            title: "Anatomía del Modelo de Caja",
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLnRleHQgeyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZpbGw6ICMzMzM7IH0KICAgICAgLnRleHQtbGlnaHQgeyBmaWxsOiB3aGl0ZTsgfQogICAgICAubWFyZ2luIHsgZmlsbDogI2ZlY2FjYTsgc3Ryb2tlOiAjZjk3MzE2OyBzdHJva2Utd2lkdGg6IDI7IHN0cm9rZS1kYXNoYXJyYXk6IDUgNTsgfQogICAgICAuYm9yZGVyIHsgZmlsbDogI2ZkZWUwNDsgc3Ryb2tlOiAjZWFiMzA4OyBzdHJva2Utd2lkdGg6IDI7IH0KICAgICAgLnBhZGRpbmcgeyBmaWxsOiAjYmJmN2QwOyBzdHJva2U6ICMyMmMyNTY7IHN0cm9rZS13aWR0aDogMjsgfQogICAgICAuY29udGVudCB7IGZpbGw6ICNiZmRiZmU7IHN0cm9rZTogIzNiODJmNjsgc3Ryb2tlLXdpZHRoOiAyOyB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICAKICA8IS0tIE1hcmdpbiAtLT4KICA8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBjbGFzcz0ibWFyZ2luIiByeD0iOCIgLz4KICA8dGV4dCB4PSI2MCIgeT0iNzAiIGNsYXNzPSJ0ZXh0IiBmb250LXNpemU9IjE2Ij5NYXJnaW4gKEVzcGFjaW8gRXh0ZXJubyk8L3RleHQ+CgogIDwhLS0gQm9yZGVyIC0tPgogIDxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgY2xhc3M9ImJvcmRlciIgLz4KICA8dGV4dCB4PSIxMTAiIHk9IjEyMCIgY2xhc3M9InRleHQiIGZvbnQtc2l6ZT0iMTYiPkJvcmRlciAoTMOtbWl0ZSk8L3RleHQ+CgogIDwhLS0gUGFkZGluZyAtLT4KICA8cmVjdCB4PSIxMzAiIHk9IjEzMCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSIxNDAiIGNsYXNzPSJwYWRkaW5nIiAvPgogIDx0ZXh0IHg9IjE0MCIgeT0iMTUwIiBjbGFzcz0idGV4dCIgZm9udC1zaXplPSIxNiI+UGFkZGluZyAoUmVsbGVubyBJbnRlcm5vKTwvdGV4dD4KCiAgPCEtLSBDb250ZW50IC0tPgogIDxyZWN0IHg9IjE4MCIgeT0iMTgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjQwIiBjbGFzcz0iY29udGVudCIgLz4KICA8dGV4dCB4PSIzMDAiIHk9IjIwNSIgY2xhc3M9InRleHQiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnRlbmlkbyBSZWFsPC90ZXh0Pgo8L3N2Zz4=",
            content: "Representación visual de las 4 capas del Modelo de Caja."
        },
        {
            type: "code",
            title: "Ejemplo 1: Padding vs Margin (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caja caja-1"> <!-- Primera caja con mucho padding -->
    Caja 1: Mucho Padding (Relleno interno)
  </div>
  
  <div class="caja caja-2"> <!-- Segunda caja con mucho margin -->
    Caja 2: Mucho Margin (Separación externa)
  </div>
</body>
</html>`
        },
        {
            type: "code",
            title: "Ejemplo 1: Padding vs Margin (CSS)",
            codeLanguage: "css",
            content: `/* Reset básico */
* {
  box-sizing: border-box; /* Fundamental: El padding no aumenta el tamaño de la caja */
}

body {
  font-family: sans-serif;
  background-color: #e2e8f0;
  padding: 20px;
}

.caja {
  background-color: #3b82f6; /* Color de fondo azul */
  color: white;
  border: 5px solid #1e3a8a; /* Borde azul oscuro de 5px */
  width: 300px; /* Ancho fijo de 300px */
}

.caja-1 {
  padding: 50px; /* El espacio crece hacia ADENTRO del borde. El fondo azul cubre este espacio. */
  margin-bottom: 10px; /* Separación pequeña con la caja de abajo. */
}

.caja-2 {
  padding: 10px; /* Poco relleno interno. */
  margin-top: 50px; /* El espacio crece hacia AFUERA del borde, empujando a otros elementos. Es transparente. */
  margin-left: 50px; /* Empuja la caja hacia la derecha. */
}`
        },
        {
            type: "theory",
            title: "Tarjetas de Componentes",
            content: "Aplicando el Box Model podemos crear componentes de interfaz como 'Cards' (Tarjetas). Usamos `border-radius` para redondear esquinas, `box-shadow` para dar profundidad, y jugamos con `padding` y `margin` para dar respiro a los elementos."
        },
        {
            type: "code",
            title: "Ejemplo 2: Tarjetas de Producto (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tarjetas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card"> <!-- Contenedor principal de la tarjeta -->
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Producto" class="card-img"> <!-- Imagen superior -->
    <div class="card-body"> <!-- Contenedor para el contenido de texto -->
      <h3 class="card-title">Zapatillas Deportivas</h3>
      <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>
      <a href="#" class="card-btn">Comprar Ahora</a>
    </div>
  </div>
</body>
</html>`
        },
        {
            type: "code",
            title: "Ejemplo 2: Tarjetas de Producto (CSS)",
            codeLanguage: "css",
            content: `* {
  box-sizing: border-box; /* El padding no aumenta el tamaño de las cajas */
  margin: 0;
  padding: 0;
}

body {
  background-color: #f8fafc;
  font-family: Arial, sans-serif;
  padding: 40px;
}

.card {
  background-color: white;
  width: 300px;
  border-radius: 10px;
  overflow: hidden; /* Evita que la imagen sobresalga de las esquinas redondeadas */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra para dar profundidad */
  margin-bottom: 30px; /* Separación con el elemento de abajo */
}

.card-img {
  width: 100%;
  display: block; /* Elimina el espacio fantasma debajo de las imágenes */
}

.card-body {
  padding: 20px; /* Respiro interior para que el texto no toque los bordes */
}

.card-title {
  margin-bottom: 10px; /* Separación entre el título y el texto */
  color: #333;
}

.card-text {
  color: #666;
  margin-bottom: 20px; /* Separación entre el texto y el botón */
  line-height: 1.5;
}

.card-btn {
  display: inline-block; /* Permite aplicar padding y margin vertical a un enlace */
  background-color: #10b981;
  color: white;
  padding: 10px 20px; /* Relleno interno del botón */
  text-decoration: none; /* Quita el subrayado del enlace */
  border-radius: 5px;
  text-align: center;
  width: 100%; /* El botón ocupa todo el ancho de la tarjeta */
}`
        },
        {
            type: "task",
            title: "Actividad: Galería de Tarjetas",
            content: "Copia el código del Ejemplo 2 y duplica el HTML de la tarjeta para tener 3 productos diferentes. Ajusta los márgenes para que no estén pegadas.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Galería de Tarjetas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Contenedor para la galería -->
  <div class="galeria">
    <!-- Tarjeta 1 -->
    <div class="card">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Producto 1" class="card-img">
      <div class="card-body">
        <h3 class="card-title">Zapatillas Deportivas</h3>
        <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>
        <a href="#" class="card-btn">Comprar Ahora</a>
      </div>
    </div>

    <!-- Tarjeta 2 -->
    <div class="card">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="Producto 2" class="card-img">
      <div class="card-body">
        <h3 class="card-title">Reloj Inteligente</h3>
        <p class="card-text">Monitorea tu actividad física y recibe notificaciones en tu muñeca.</p>
        <a href="#" class="card-btn">Comprar Ahora</a>
      </div>
    </div>

    <!-- Tarjeta 3 -->
    <div class="card">
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Producto 3" class="card-img">
      <div class="card-body">
        <h3 class="card-title">Auriculares Inalámbricos</h3>
        <p class="card-text">Sonido de alta calidad con cancelación de ruido activa.</p>
        <a href="#" class="card-btn">Comprar Ahora</a>
      </div>
    </div>
  </div>
</body>
</html>

/* style.css (Añadir al CSS del Ejemplo 2) */
.galeria {
  display: flex; /* Usamos Flexbox para alinear las tarjetas una al lado de la otra */
  gap: 20px; /* Espacio entre tarjetas, reemplaza al margin en este caso */
  flex-wrap: wrap; /* Permite que las tarjetas bajen a la siguiente línea si no caben */
  justify-content: center; /* Centra las tarjetas horizontalmente */
}`
        }
    ]
};

const CLASS_9: ClassSession = {
    id: 9,
    title: "Layouts Modernos: Flexbox",
    description: "Distribución de elementos en una dimensión de forma flexible.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Dominar el contenedor flex", "Alinear ejes (justify-content, align-items)", "Crear una barra de navegación y galerías"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: Flexbox: El Padre y los Hijos",
            content: "Para usar Flexbox, la regla de oro es que debes aplicarlo al contenedor padre usando `display: flex`. Al hacer esto, automáticamente todos sus hijos directos se convertirán en elementos flex y se colocarán uno al lado del otro en una fila. A partir de ahí, puedes usar otras propiedades en el padre para distribuirlos y alinearlos como quieras."
        },
        {
            type: "code",
            title: "0:30 - 1:00 | Ejemplo 1: Navbar con Flexbox (HTML)",
            content: "Veamos cómo construir una barra de navegación típica. En nuestro HTML, tenemos un elemento `<nav>` con la clase `navbar`. Dentro de este contenedor padre, tenemos dos hijos directos: un `div` para el logo y una lista `ul` para los enlaces. Noten cómo están estructurados.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Navbar Flexbox</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">MiLogo</div>\n    <ul class="nav-links">\n      <li><a href="#">Inicio</a></li>\n      <li><a href="#">Servicios</a></li>\n      <li><a href="#">Contacto</a></li>\n    </ul>\n  </nav>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "1:00 - 1:30 | Ejemplo 1: Navbar con Flexbox (CSS)",
            content: "Ahora la magia en el CSS. Al `.navbar` le damos `display: flex`. Luego usamos `justify-content: space-between;`. Esto empuja el primer hijo (el logo) totalmente a la izquierda y el último hijo (la lista de enlaces) totalmente a la derecha. Con `align-items: center;` nos aseguramos de que ambos estén centrados verticalmente.\n\nPero miren la lista `.nav-links`. También le pusimos `display: flex;`. ¡Podemos anidar Flexbox! Esto hace que los enlaces se pongan uno al lado del otro, y con `gap: 20px;` les damos una separación perfecta sin usar márgenes.",
            codeLanguage: "css",
            codeSnippet: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; }\n\n.navbar {\n  background-color: #1e293b;\n  color: white;\n  padding: 15px 30px;\n  \n  /* MAGIA FLEXBOX */\n  display: flex; \n  justify-content: space-between; /* Logo a la izq, links a la der */\n  align-items: center; /* Centrado vertical */\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav-links {\n  list-style: none;\n  \n  /* FLEXBOX ANIDADO para los enlaces */\n  display: flex;\n  gap: 20px; /* Espacio entre los enlaces */\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.nav-links a:hover {\n  color: #38bdf8;\n}`
        },
        {
            type: "script",
            title: "1:30 - 2:00 | Teoría: Flex Wrap: Envolviendo elementos",
            content: "Por defecto, Flexbox es un poco terco: intentará meter todos los elementos en una sola línea, encogiéndolos si es necesario para que quepan. Pero a veces no queremos eso, especialmente en galerías. Con la propiedad `flex-wrap: wrap;`, le decimos al contenedor que si los elementos ya no caben en la línea, pasen a la siguiente. Esto es ideal para hacer diseños que se adapten a diferentes pantallas."
        },
        {
            type: "code",
            title: "2:00 - 2:15 | Ejemplo 2: Galería Flex Wrap (HTML)",
            content: "Para probar esto, tenemos un HTML muy sencillo. Un contenedor principal llamado `galeria` y dentro 5 cajas numeradas.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Galería Flex</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="galeria">\n    <div class="caja">1</div>\n    <div class="caja">2</div>\n    <div class="caja">3</div>\n    <div class="caja">4</div>\n    <div class="caja">5</div>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "2:15 - 2:45 | Ejemplo 2: Galería Flex Wrap (CSS)",
            content: "En el CSS, a la `.galeria` le damos `display: flex;` y la clave aquí es `flex-wrap: wrap;`. Como cada `.caja` tiene un ancho fijo de 200px, cuando la pantalla sea muy pequeña para acomodarlas todas en una fila, automáticamente saltarán a la línea de abajo. Además, usamos `gap: 20px;` para separarlas tanto horizontal como verticalmente, y `justify-content: center;` para que todo el bloque quede centrado en la pantalla.\n\nNoten también que cada `.caja` tiene su propio `display: flex; justify-content: center; align-items: center;`. Esto es un truco excelente para centrar el texto (el número) exactamente en el medio de la caja.",
            codeLanguage: "css",
            codeSnippet: `body {\n  padding: 40px;\n  background-color: #f1f5f9;\n}\n\n.galeria {\n  display: flex;\n  flex-wrap: wrap; /* Permite que bajen a la siguiente línea */\n  gap: 20px; /* Espacio entre filas y columnas */\n  justify-content: center; /* Centra las cajas en la pantalla */\n}\n\n.caja {\n  background-color: #8b5cf6;\n  color: white;\n  width: 200px;\n  height: 200px;\n  font-size: 3rem;\n  \n  /* Flexbox también sirve para centrar contenido dentro de un div */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Centrado Absoluto",
            content: "Para terminar, un reto clásico de CSS que antes era muy difícil y ahora con Flexbox es facilísimo. Quiero que usen Flexbox para centrar un único `<div>` exactamente en el medio de la pantalla, tanto vertical como horizontalmente. Les doy una pista: Necesitan que el `body` ocupe todo el alto de la pantalla usando `height: 100vh` y que sea un contenedor flex.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Centrado Absoluto</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="caja-centrada">\n    ¡Estoy en el centro!\n  </div>\n</body>\n</html>\n\n/* style.css */\nbody {\n  margin: 0;\n  height: 100vh; /* Ocupa el 100% del alto de la ventana */\n  display: flex;\n  justify-content: center; /* Centra horizontalmente */\n  align-items: center; /* Centra verticalmente */\n  background-color: #333;\n}\n\n.caja-centrada {\n  width: 200px;\n  height: 200px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n/* Explicación del código:\n- El secreto para el centrado vertical perfecto es darle al contenedor padre (el body en este caso) una altura definida, usualmente '100vh' (100% del viewport height).\n- Luego, 'display: flex', 'justify-content: center' y 'align-items: center' hacen el resto del trabajo.\n- La caja interna también usa Flexbox para centrar su propio texto. */`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Flexbox: El Padre y los Hijos",
            content: "Para usar Flexbox, debes aplicarlo al contenedor padre. Automáticamente, todos sus hijos directos se colocarán uno al lado del otro. Luego usas propiedades en el padre para distribuirlos."
        },
        {
            type: "code",
            title: "Ejemplo 1: Navbar con Flexbox (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Navbar Flexbox</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">MiLogo</div>\n    <ul class="nav-links">\n      <li><a href="#">Inicio</a></li>\n      <li><a href="#">Servicios</a></li>\n      <li><a href="#">Contacto</a></li>\n    </ul>\n  </nav>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 1: Navbar con Flexbox (CSS)",
            codeLanguage: "css",
            content: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; }\n\n.navbar {\n  background-color: #1e293b;\n  color: white;\n  padding: 15px 30px;\n  \n  /* MAGIA FLEXBOX */\n  display: flex; \n  justify-content: space-between; /* Logo a la izq, links a la der */\n  align-items: center; /* Centrado vertical */\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav-links {\n  list-style: none;\n  \n  /* FLEXBOX ANIDADO para los enlaces */\n  display: flex;\n  gap: 20px; /* Espacio entre los enlaces */\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.nav-links a:hover {\n  color: #38bdf8;\n}`
        },
        {
            type: "theory",
            title: "Flex Wrap: Envolviendo elementos",
            content: "Por defecto, Flexbox intenta meter todos los elementos en una sola línea, encogiéndolos si es necesario. Con `flex-wrap: wrap;`, le decimos que si no caben, pasen a la siguiente línea. Ideal para galerías."
        },
        {
            type: "code",
            title: "Ejemplo 2: Galería Flex Wrap (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Galería Flex</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="galeria">\n    <div class="caja">1</div>\n    <div class="caja">2</div>\n    <div class="caja">3</div>\n    <div class="caja">4</div>\n    <div class="caja">5</div>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 2: Galería Flex Wrap (CSS)",
            codeLanguage: "css",
            content: `body {\n  padding: 40px;\n  background-color: #f1f5f9;\n}\n\n.galeria {\n  display: flex;\n  flex-wrap: wrap; /* Permite que bajen a la siguiente línea */\n  gap: 20px; /* Espacio entre filas y columnas */\n  justify-content: center; /* Centra las cajas en la pantalla */\n}\n\n.caja {\n  background-color: #8b5cf6;\n  color: white;\n  width: 200px;\n  height: 200px;\n  font-size: 3rem;\n  \n  /* Flexbox también sirve para centrar contenido dentro de un div */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}`
        },
        {
            type: "task",
            title: "Actividad: Centrado Absoluto",
            content: "Usa Flexbox para centrar un único `<div>` exactamente en el medio de la pantalla (tanto vertical como horizontalmente). Pista: Necesitas que el `body` tenga `height: 100vh` y sea `display: flex`.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Centrado Absoluto</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="caja-centrada">\n    ¡Estoy en el centro!\n  </div>\n</body>\n</html>\n\n/* style.css */\nbody {\n  margin: 0;\n  height: 100vh; /* Ocupa el 100% del alto de la ventana */\n  display: flex;\n  justify-content: center; /* Centra horizontalmente */\n  align-items: center; /* Centra verticalmente */\n  background-color: #333;\n}\n\n.caja-centrada {\n  width: 200px;\n  height: 200px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n/* Explicación del código:\n- El secreto para el centrado vertical perfecto es darle al contenedor padre (el body en este caso) una altura definida, usualmente '100vh' (100% del viewport height).\n- Luego, 'display: flex', 'justify-content: center' y 'align-items: center' hacen el resto del trabajo.\n- La caja interna también usa Flexbox para centrar su propio texto. */`
        }
    ]
};

const CLASS_10: ClassSession = {
    id: 10,
    title: "Responsive Design (Diseño Adaptable)",
    description: "Haciendo que la web funcione perfectamente en celulares, tablets y escritorio.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Entender el Viewport", "Usar Media Queries", "Implementar enfoque Mobile-First"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Teoría: Media Queries y Mobile First",
            content: "Bienvenidos. Hoy vamos a ver cómo hacer que nuestras páginas se vean bien en cualquier dispositivo, desde un celular hasta un monitor gigante. A esto le llamamos Diseño Responsivo.\n\nLo primero y más importante es la etiqueta `<meta name='viewport'>` en nuestro HTML. Sin ella, los celulares intentarán mostrar la página como si fuera de escritorio, viéndose todo diminuto.\n\nEl enfoque moderno para esto es 'Mobile First' (Móvil Primero). Esto significa que escribimos nuestro CSS base pensando en cómo se verá en un celular. Luego, usamos algo llamado 'Media Queries' con la regla `@media (min-width: ...)` para agregar estilos específicos solo cuando la pantalla sea más grande, como en una tablet o computadora."
        },
        {
            type: "code",
            title: "1:00 - 1:15 | Ejemplo 1: Cambio de Color Responsive (HTML)",
            content: "Veamos un ejemplo básico. En nuestro HTML, presten mucha atención a la línea 5: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`. Esta es la etiqueta vital que les mencioné. Le dice al navegador móvil que el ancho de la página debe ser igual al ancho del dispositivo.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <!-- VITAL PARA RESPONSIVE -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Media Queries</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="mensaje">\n    <h1>Redimensiona la ventana</h1>\n    <p>El color de fondo cambiará según el tamaño de la pantalla.</p>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "1:15 - 1:45 | Ejemplo 1: Cambio de Color Responsive (CSS)",
            content: "Ahora veamos cómo funcionan las Media Queries en CSS. Primero, definimos los estilos por defecto para el `body`. Como usamos Mobile First, este color rojo (`#ef4444`) será el que se vea en celulares.\n\nLuego, agregamos `@media (min-width: 768px)`. Esto se lee como: 'Si el ancho de la pantalla es de al menos 768 píxeles (tamaño típico de tablet), aplica estos estilos'. Aquí cambiamos el fondo a azul.\n\nY finalmente, otra media query para `@media (min-width: 1024px)` (tamaño de escritorio), donde cambiamos el fondo a verde. Si redimensionan la ventana de su navegador, verán cómo el color cambia automáticamente.",
            codeLanguage: "css",
            codeSnippet: `body {\n  margin: 0;\n  font-family: sans-serif;\n  /* 1. DISEÑO MÓVIL (Por defecto) */\n  background-color: #ef4444; /* Rojo en celular */\n  color: white;\n  text-align: center;\n  padding: 50px;\n}\n\n/* 2. DISEÑO TABLET (Pantallas de 768px o más) */\n@media (min-width: 768px) {\n  body {\n    background-color: #3b82f6; /* Azul en tablet */\n  }\n}\n\n/* 3. DISEÑO ESCRITORIO (Pantallas de 1024px o más) */\n@media (min-width: 1024px) {\n  body {\n    background-color: #10b981; /* Verde en PC */\n  }\n}`
        },
        {
            type: "script",
            title: "1:45 - 2:00 | Teoría: Grilla Responsive con Flexbox",
            content: "El verdadero poder de las Media Queries se ve cuando las combinamos con Flexbox. Podemos crear grillas que cambian el número de columnas según el tamaño de la pantalla.\n\nLa técnica es simple: en móvil, hacemos que los elementos ocupen el 100% del ancho (1 columna). Luego, en pantallas más grandes, usamos Media Queries para cambiar su ancho al 50% (2 columnas), 25% (4 columnas), etc."
        },
        {
            type: "code",
            title: "2:00 - 2:15 | Ejemplo 2: Grilla Adaptable (HTML)",
            content: "Aquí tenemos la estructura HTML para nuestra grilla. Un contenedor `.grid-container` y 4 elementos `.item` dentro.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grilla Responsive</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid-container">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "2:15 - 2:45 | Ejemplo 2: Grilla Adaptable (CSS)",
            content: "En el CSS, el `.grid-container` usa `display: flex; flex-wrap: wrap; gap: 20px;`. Para el `.item`, nuestro diseño Mobile First le da un `width: 100%;`.\n\nPara la versión de tablet (768px), queremos 2 columnas. Usamos la función `calc()` de CSS: `width: calc(50% - 10px);`. ¿Por qué restamos 10px? Porque tenemos un `gap` de 20px entre las dos columnas, y necesitamos restar la mitad de ese gap a cada elemento para que quepan perfectamente.\n\nPara escritorio (1024px), queremos 4 columnas. Usamos `width: calc(25% - 15px);`. El cálculo del gap se vuelve un poco más complejo, pero la idea es restar la porción correspondiente del espacio total de los gaps.",
            codeLanguage: "css",
            codeSnippet: `* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { padding: 20px; font-family: sans-serif; }\n\n.grid-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.item {\n  background-color: #6366f1;\n  color: white;\n  padding: 40px;\n  text-align: center;\n  font-size: 2rem;\n  border-radius: 8px;\n  \n  /* MOBILE FIRST: 1 columna (100% ancho) */\n  width: 100%; \n}\n\n/* TABLET: 2 columnas */\n@media (min-width: 768px) {\n  .item {\n    /* 50% menos la mitad del gap (20px/2 = 10px) */\n    width: calc(50% - 10px); \n  }\n}\n\n/* ESCRITORIO: 4 columnas */\n@media (min-width: 1024px) {\n  .item {\n    /* 25% menos una porción del gap */\n    width: calc(25% - 15px); \n  }\n}`
        },
        {
            type: "task",
            title: "2:45 - 4:00 | Actividad: Navbar Responsive",
            content: "Es hora de practicar. Tomen el código del Navbar que hicimos en la clase anterior. Su tarea es hacerlo responsive.\n\nEn la versión móvil (por defecto), quiero que el logo y los enlaces se apilen verticalmente. Luego, agreguen una Media Query para pantallas de 768px o más, donde el Navbar vuelva a su diseño horizontal original (logo a la izquierda, enlaces a la derecha). ¡A programar!",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Navbar Responsive</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">MiLogo</div>\n    <ul class="nav-links">\n      <li><a href="#">Inicio</a></li>\n      <li><a href="#">Servicios</a></li>\n      <li><a href="#">Contacto</a></li>\n    </ul>\n  </nav>\n</body>\n</html>\n\n/* style.css */\n* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; }\n\n.navbar {\n  background-color: #1e293b;\n  color: white;\n  padding: 15px 30px;\n  /* En móvil, apilamos el logo y los enlaces verticalmente */\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav-links {\n  list-style: none;\n  display: flex;\n  /* MOBILE FIRST: Enlaces apilados en columna */\n  flex-direction: column; \n  align-items: center;\n  gap: 10px;\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.nav-links a:hover {\n  color: #38bdf8;\n}\n\n/* TABLET Y ESCRITORIO (768px o más) */\n@media (min-width: 768px) {\n  .navbar {\n    /* Volvemos a la disposición horizontal: logo a la izq, enlaces a la der */\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .nav-links {\n    /* Enlaces en línea horizontal */\n    flex-direction: row; \n    gap: 20px;\n  }\n}\n\n/* Explicación del código:\n- Mobile First: Por defecto, tanto el .navbar como los .nav-links usan 'flex-direction: column' para apilarse verticalmente, ideal para pantallas estrechas.\n- Media Query: Cuando la pantalla alcanza los 768px, cambiamos ambos contenedores a 'flex-direction: row'.\n- El .navbar recupera su 'justify-content: space-between' para separar el logo de los enlaces, y los enlaces se colocan uno al lado del otro. */`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Media Queries y Mobile First",
            content: "Escribimos el CSS base pensando en celulares. Luego, usamos `@media (min-width: 768px)` para cambiar el diseño cuando la pantalla es más grande. Esto es más eficiente y fácil de mantener."
        },
        {
            type: "code",
            title: "Ejemplo 1: Cambio de Color Responsive (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <!-- VITAL PARA RESPONSIVE -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Media Queries</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="mensaje">\n    <h1>Redimensiona la ventana</h1>\n    <p>El color de fondo cambiará según el tamaño de la pantalla.</p>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 1: Cambio de Color Responsive (CSS)",
            codeLanguage: "css",
            content: `body {\n  margin: 0;\n  font-family: sans-serif;\n  /* 1. DISEÑO MÓVIL (Por defecto) */\n  background-color: #ef4444; /* Rojo en celular */\n  color: white;\n  text-align: center;\n  padding: 50px;\n}\n\n/* 2. DISEÑO TABLET (Pantallas de 768px o más) */\n@media (min-width: 768px) {\n  body {\n    background-color: #3b82f6; /* Azul en tablet */\n  }\n}\n\n/* 3. DISEÑO ESCRITORIO (Pantallas de 1024px o más) */\n@media (min-width: 1024px) {\n  body {\n    background-color: #10b981; /* Verde en PC */\n  }\n}`
        },
        {
            type: "theory",
            title: "Grilla Responsive con Flexbox",
            content: "Combinando Flexbox (`flex-wrap`) y Media Queries, podemos cambiar el ancho de los elementos para crear grillas que se adaptan a cualquier pantalla."
        },
        {
            type: "code",
            title: "Ejemplo 2: Grilla Adaptable (HTML)",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grilla Responsive</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid-container">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n  </div>\n</body>\n</html>`
        },
        {
            type: "code",
            title: "Ejemplo 2: Grilla Adaptable (CSS)",
            codeLanguage: "css",
            content: `* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { padding: 20px; font-family: sans-serif; }\n\n.grid-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.item {\n  background-color: #6366f1;\n  color: white;\n  padding: 40px;\n  text-align: center;\n  font-size: 2rem;\n  border-radius: 8px;\n  \n  /* MOBILE FIRST: 1 columna (100% ancho) */\n  width: 100%; \n}\n\n/* TABLET: 2 columnas */\n@media (min-width: 768px) {\n  .item {\n    /* 50% menos la mitad del gap (20px/2 = 10px) */\n    width: calc(50% - 10px); \n  }\n}\n\n/* ESCRITORIO: 4 columnas */\n@media (min-width: 1024px) {\n  .item {\n    /* 25% menos una porción del gap */\n    width: calc(25% - 15px); \n  }\n}`
        },
        {
            type: "task",
            title: "Actividad: Navbar Responsive",
            content: "Modifica el Navbar de la Clase 9. En versión móvil, los enlaces (`ul`) deben mostrarse en formato columna (`flex-direction: column`). En versión escritorio (`@media min-width: 768px`), deben mostrarse en fila (`flex-direction: row`).",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- CÓDIGOS DE SOLUCIÓN PARA EL DOCENTE -->\n\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Navbar Responsive</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">MiLogo</div>\n    <ul class="nav-links">\n      <li><a href="#">Inicio</a></li>\n      <li><a href="#">Servicios</a></li>\n      <li><a href="#">Contacto</a></li>\n    </ul>\n  </nav>\n</body>\n</html>\n\n/* style.css */\n* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; }\n\n.navbar {\n  background-color: #1e293b;\n  color: white;\n  padding: 15px 30px;\n  /* En móvil, apilamos el logo y los enlaces verticalmente */\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav-links {\n  list-style: none;\n  display: flex;\n  /* MOBILE FIRST: Enlaces apilados en columna */\n  flex-direction: column; \n  align-items: center;\n  gap: 10px;\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.nav-links a:hover {\n  color: #38bdf8;\n}\n\n/* TABLET Y ESCRITORIO (768px o más) */\n@media (min-width: 768px) {\n  .navbar {\n    /* Volvemos a la disposición horizontal: logo a la izq, enlaces a la der */\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .nav-links {\n    /* Enlaces en línea horizontal */\n    flex-direction: row; \n    gap: 20px;\n  }\n}\n\n/* Explicación del código:\n- Mobile First: Por defecto, tanto el .navbar como los .nav-links usan 'flex-direction: column' para apilarse verticalmente, ideal para pantallas estrechas.\n- Media Query: Cuando la pantalla alcanza los 768px, cambiamos ambos contenedores a 'flex-direction: row'.\n- El .navbar recupera su 'justify-content: space-between' para separar el logo de los enlaces, y los enlaces se colocan uno al lado del otro. */`
        }
    ]
};

const EXAM_1: ClassSession = {
    id: 100, // Special ID for Exam
    title: "PRIMER PARCIAL: HTML",
    description: "Evaluación de conocimientos de la Unidad I (Clases 1, 2 y 3).",
    duration: "2h",
    type: "Examen",
    objectives: ["Evaluar comprensión de estructura HTML", "Verificar uso de listas, enlaces e imágenes", "Comprobar creación de tablas"],
    contentBlocks: [], // No content blocks for exam
    exams: [
        {
            id: "fila_1",
            title: "Fila 1",
            questions: [
                {
                    id: 1,
                    type: "true_false",
                    question: "<ul> crea una lista ordenada.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Falso",
                    points: 1
                },
                {
                    id: 2,
                    type: "true_false",
                    question: "<img> necesita etiqueta de cierre </img>.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Falso",
                    points: 1
                },
                {
                    id: 3,
                    type: "true_false",
                    question: "<tr> define una fila en una tabla.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Verdadero",
                    points: 1
                },
                {
                    id: 4,
                    type: "multiple_choice",
                    question: "¿Cuál es la etiqueta para el título principal?",
                    options: ["<h1>", "<title>", "<head>", "<header>"],
                    correctAnswer: "<h1>",
                    points: 1
                },
                {
                    id: 5,
                    type: "multiple_choice",
                    question: "¿Qué atributo se usa para definir el destino de un enlace?",
                    options: ["src", "link", "href", "url"],
                    correctAnswer: "href",
                    points: 1
                },
                {
                    id: 6,
                    type: "multiple_choice",
                    question: "¿Qué etiqueta define una celda de encabezado en una tabla?",
                    options: ["<td>", "<th>", "<head>", "<title>"],
                    correctAnswer: "<th>",
                    points: 1
                },
                {
                    id: 7,
                    type: "multiple_choice",
                    question: "¿Cuál es la sintaxis correcta para una imagen?",
                    options: ["<img href='foto.jpg'>", "<image src='foto.jpg'>", "<img src='foto.jpg'>", "<img>foto.jpg</img>"],
                    correctAnswer: "<img src='foto.jpg'>",
                    points: 1
                },
                {
                    id: 8,
                    type: "fill_in_the_blank",
                    question: "Completa la estructura básica de un documento HTML5.",
                    codeSnippet: "___ \n<html lang=\"es\">\n  <head>\n    <title>Mi Web</title>\n  </head>\n  ___ \n    <h1>Hola</h1>\n  </body>\n</html>",
                    correctAnswer: ["<!DOCTYPE html>", "<body>"],
                    points: 4
                },
                {
                    id: 9,
                    type: "matching",
                    question: "Relaciona cada etiqueta con su función.",
                    matchingPairs: [
                        { id: "a", text: "<a>" },
                        { id: "ul", text: "<ul>" },
                        { id: "ol", text: "<ol>" },
                        { id: "p", text: "<p>" }
                    ],
                    options: ["Hipervínculo", "Lista Desordenada", "Lista Ordenada", "Párrafo"],
                    correctAnswer: {
                        "a": "Hipervínculo",
                        "ul": "Lista Desordenada",
                        "ol": "Lista Ordenada",
                        "p": "Párrafo"
                    },
                    points: 4
                }
            ]
        },
        {
            id: "fila_2",
            title: "Fila 2",
            questions: [
                {
                    id: 1,
                    type: "true_false",
                    question: "<ol> usa números por defecto.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Verdadero",
                    points: 1
                },
                {
                    id: 2,
                    type: "true_false",
                    question: "El atributo 'src' se usa para el texto alternativo de una imagen.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Falso",
                    points: 1
                },
                {
                    id: 3,
                    type: "true_false",
                    question: "<td> significa Table Data.",
                    options: ["Verdadero", "Falso"],
                    correctAnswer: "Verdadero",
                    points: 1
                },
                {
                    id: 4,
                    type: "multiple_choice",
                    question: "¿Qué etiqueta se usa para dar énfasis (cursiva)?",
                    options: ["<b>", "<strong>", "<em>", "<i>"],
                    correctAnswer: "<em>",
                    points: 1
                },
                {
                    id: 5,
                    type: "multiple_choice",
                    question: "¿Qué atributo abre un enlace en una nueva pestaña?",
                    options: ["new_tab", "blank", "_blank", "target=\"_blank\""],
                    correctAnswer: "target=\"_blank\"",
                    points: 1
                },
                {
                    id: 6,
                    type: "multiple_choice",
                    question: "¿Cuál es la etiqueta contenedora principal de una tabla?",
                    options: ["<table>", "<tr>", "<td>", "<tbody>"],
                    correctAnswer: "<table>",
                    points: 1
                },
                {
                    id: 7,
                    type: "multiple_choice",
                    question: "¿Qué ruta relativa se usa para subir un nivel en las carpetas?",
                    options: ["./", "../", "/", ".../"],
                    correctAnswer: "../",
                    points: 1
                },
                {
                    id: 8,
                    type: "fill_in_the_blank",
                    question: "Completa el código para una lista con enlace.",
                    codeSnippet: "<ul>\n  <li>\n    <a ___=\"https://google.com\">Ir a Google</a>\n  </li>\n___",
                    correctAnswer: ["href", "</ul>"],
                    points: 4
                },
                {
                    id: 9,
                    type: "matching",
                    question: "Relaciona los conceptos.",
                    matchingPairs: [
                        { id: "h1", text: "<h1>" },
                        { id: "strong", text: "<strong>" },
                        { id: "div", text: "<div>" },
                        { id: "span", text: "<span>" }
                    ],
                    options: ["Título Principal", "Negrita Importante", "Bloque (Caja)", "Línea (Resaltador)"],
                    correctAnswer: {
                        "h1": "Título Principal",
                        "strong": "Negrita Importante",
                        "div": "Bloque (Caja)",
                        "span": "Línea (Resaltador)"
                    },
                    points: 4
                }
            ]
        }
    ]
};

const CLASS_11: ClassSession = {
    id: 11,
    title: "Intro a JS y Variables",
    description: "Fundamentos de programación e interactividad.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Entender qué es JavaScript", "Vincular JS con HTML", "Declarar y usar variables (let, const)", "Tipos de datos básicos"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:20 | Teoría: ¿Qué es JavaScript?",
            content: "Bienvenidos a la Unidad III. Hasta ahora hemos construido el esqueleto de nuestra página con HTML y la hemos pintado y decorado con CSS. Pero nuestras páginas son estáticas, no hacen nada.\n\nAquí es donde entra JavaScript (JS). JS es el músculo, el cerebro, lo que le da interactividad a la web. Con JS podemos hacer que un botón muestre un mensaje, que un formulario valide si el correo es correcto antes de enviarlo, o incluso crear juegos completos en el navegador.\n\nEs importante aclarar: Java y JavaScript NO son lo mismo. Son lenguajes completamente diferentes, como un 'carro' y un 'carro de compras'."
        },
        {
            type: "code",
            title: "0:20 - 0:40 | Código: Vinculando JS a HTML",
            content: "Para usar JavaScript en nuestra página, tenemos dos formas principales, igual que con CSS.\n\nPodemos escribir el código directamente en el HTML usando la etiqueta `<script>`, generalmente justo antes de cerrar la etiqueta `</body>`.\n\nPero la mejor práctica, para mantener el orden, es tener un archivo separado (por ejemplo, `script.js`) y vincularlo usando `<script src=\"script.js\"></script>`. Veamos cómo se hace.",
            codeLanguage: "html",
            codeSnippet: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi primer JS</title>\n</head>\n<body>\n  <h1>Hola JavaScript</h1>\n  \n  <!-- Forma 1: JS Interno (No recomendada para mucho código) -->\n  <script>\n    // Aquí va el código JS\n    // alert('Hola desde el HTML!');\n  </script>\n\n  <!-- Forma 2: JS Externo (Recomendada) -->\n  <!-- Se coloca al final del body para que cargue primero el HTML -->\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        {
            type: "script",
            title: "0:40 - 1:10 | Teoría: Variables (Declaración, Asignación y Lectura)",
            content: "En programación, necesitamos guardar información en la memoria de la computadora. Para eso usamos las 'Variables'. Imaginen una variable como una caja con una etiqueta.\n\nHay tres conceptos fundamentales al trabajar con variables:\n\n1. **Declaración**: Es el acto de crear la caja y ponerle un nombre. Usamos `let` o `const`.\n2. **Inicialización / Asignación**: Es el acto de guardar un valor dentro de esa caja usando el signo igual `=`. Se lee de derecha a izquierda: 'El valor de la derecha se almacena en la variable de la izquierda'.\n3. **Lectura**: Es simplemente usar el nombre de la variable para obtener el valor que tiene guardado.\n\nEn JavaScript moderno usamos `let` para valores que van a cambiar (mutar) y `const` para valores fijos. ¡Usen siempre `const` por defecto a menos que sepan que el valor cambiará!"
        },
        {
            type: "code",
            title: "1:10 - 1:30 | Código: Trabajando con Variables",
            content: "Veamos cómo se ve esto en código. Observen cómo declaramos, inicializamos, leemos y reasignamos valores.",
            codeLanguage: "javascript",
            codeSnippet: `// ================= ARCHIVO: script.js =================\n// (Asegúrate de tener este archivo vinculado en tu index.html)\n\n// 1. Declaración e Inicialización (todo en un paso)\nlet edad = 20;\nconst nombre = "Ana";\n\n// 2. Lectura (usamos el nombre de la variable)\nconsole.log(edad); // Lee el valor 20 y lo muestra\n\n// 3. Reasignación (almacenar un nuevo valor)\nedad = 21; // El valor 20 se borra y se guarda el 21\n\n// nombre = "María"; // ERROR: No se puede reasignar una constante`
        },
        {
            type: "script",
            title: "1:30 - 1:50 | Teoría: Tipos de Datos",
            content: "¿Qué tipo de cosas podemos guardar en estas cajas? Los tipos de datos más comunes son:\n\n1. **String (Cadena de texto)**: Se escribe entre comillas (simples o dobles). Ej: `\"Hola\"`, `'Juan'`.\n2. **Number (Número)**: Se escribe sin comillas, pueden ser enteros o decimales. Ej: `25`, `3.14`.\n3. **Boolean (Booleano)**: Solo puede tener dos valores: `true` (verdadero) o `false` (falso). Sirve para tomar decisiones."
        },
        {
            type: "code",
            title: "1:50 - 2:20 | Teoría y Código: Capturar y Mostrar Datos (Consola y HTML)",
            content: "Ya sabemos guardar datos, pero ¿cómo interactuamos con el usuario?\n\n**Para capturar datos:**\nUsamos `prompt()`, que abre una ventana pidiendo al usuario que escriba algo. Ese dato lo almacenamos en una variable.\n\n**Para mostrar datos:**\n1. `console.log()`: Imprime en la 'Consola' (F12). Solo para programadores.\n2. `alert()`: Ventana emergente.\n3. **En el HTML**: Usamos `document.getElementById('id-del-elemento').innerText = miVariable;`. Esto inyecta el valor de nuestra variable directamente en la página web.",
            codeLanguage: "html",
            codeSnippet: `<!-- ================= ARCHIVO: index.html ================= -->\n<body>\n  <h1 id="saludoWeb">Esperando nombre...</h1>\n  <script src="script.js"></script>\n</body>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\n// 1. Capturar dato y almacenarlo en una variable\nlet nombreUsuario = prompt("¿Cuál es tu nombre?");\n\n// 2. Mostrar en consola (para el programador)\nconsole.log("El usuario ingresó: " + nombreUsuario);\n\n// 3. Mostrar en HTML (para el usuario final)\n// Leemos la variable 'nombreUsuario' y la escribimos en el HTML\ndocument.getElementById("saludoWeb").innerText = "¡Hola, " + nombreUsuario + "!";\n</script>`
        },
        {
            type: "task",
            title: "2:20 - 3:10 | Actividad: Calculadora de Edad",
            content: "Vamos a crear nuestro primer script interactivo.\n\n1. Creen un archivo `index.html` y un archivo `script.js`.\n2. Vinculen el script al HTML. En el HTML agreguen un `<h2 id=\"resultadoEdad\"></h2>`.\n3. En el script, usen la función `prompt()` para preguntarle al usuario su año de nacimiento y almacénenlo en una variable.\n4. Creen una constante con el año actual.\n5. Calculen la edad restando el año de nacimiento al año actual y guárdenla en una variable.\n6. Muestren el resultado en la consola.\n7. **Reto:** Muestren el resultado directamente en la página web usando `document.getElementById().innerText`.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- ================= ARCHIVO: index.html ================= -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <title>Calculadora de Edad</title>\n</head>\n<body>\n    <h1>Calculadora de Edad</h1>\n    <h2 id="resultadoEdad">Calculando...</h2>\n    \n    <script src="script.js"></script>\n</body>\n</html>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\n// 1. Capturamos el dato y lo almacenamos\nlet anioNacimiento = prompt("¿En qué año naciste?");\n\n// 2. Definimos el año actual\nconst anioActual = 2024;\n\n// 3. Calculamos la edad\nlet edad = anioActual - anioNacimiento;\n\n// 4. Mostramos en consola\nconsole.log("Tienes " + edad + " años.");\n\n// 5. Mostramos en la página web HTML\ndocument.getElementById("resultadoEdad").innerText = "Tienes " + edad + " años.";\n</script>`
        },
        {
            type: "task",
            title: "3:10 - 4:00 | Mini Desafío Lógico: El Intercambio de Pociones (Visual)",
            content: "¡Pon a prueba tu lógica de programación y tus habilidades de diseño web!\n\n**El Problema:**\nEstás programando el inventario de un videojuego. Tu personaje tiene una 'Poción de Vida' en la mano izquierda y una 'Poción de Maná' en la mano derecha. Necesitas crear una interfaz para visualizarlas y un botón que, al hacer clic, intercambie los objetos de mano.\n\n**Requisitos de Diseño (HTML/CSS):**\n1. Crea un contenedor usando **Flexbox** que muestre dos cajas (las manos).\n2. Dale estilos con CSS: La caja de Vida debe tener fondo rojo/rosado, y la de Maná fondo azul. Usa `padding`, `border-radius` y colores de texto legibles.\n3. Agrega un `<button>` debajo que diga 'Intercambiar'. Dale un buen diseño (color de fondo, sin bordes, cursor pointer).\n4. Ponle un `id` a los textos de las pociones en tu HTML (ej: `<p id=\"manoIzq\">Poción de Vida</p>`).\n\n**Requisitos de Lógica (JavaScript):**\nComo aún no hemos visto a fondo cómo conectar botones con JS (eso es la Clase 14), te regalamos la estructura de la función. Tu misión es escribir la **lógica matemática/variable** del intercambio dentro de ella usando una variable temporal.\n\n```javascript\n// ================= ARCHIVO: script.js =================\nfunction intercambiar() {\n    // 1. Leemos lo que dice el HTML actualmente y lo almacenamos en variables\n    let manoIzquierda = document.getElementById(\"manoIzq\").innerText;\n    let manoDerecha = document.getElementById(\"manoDer\").innerText;\n\n    // 2. TU MISIÓN: Escribe la lógica aquí para intercambiar los valores\n    // de manoIzquierda y manoDerecha usando una variable temporal.\n    // (¡No puedes escribir los textos directamente!)\n\n\n    // 3. Escribimos los nuevos valores de vuelta al HTML (te lo regalamos)\n    document.getElementById(\"manoIzq\").innerText = manoIzquierda;\n    document.getElementById(\"manoDer\").innerText = manoDerecha;\n}\n```\n*Nota: No olvides agregar `onclick=\"intercambiar()\"` a tu etiqueta `<button>` en el HTML.*",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- ================= ARCHIVO: index.html ================= -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <title>Inventario de Pociones</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <div class="inventario">\n        <div class="mano vida">\n            <h3>Mano Izquierda</h3>\n            <p id="manoIzq">Poción de Vida</p>\n        </div>\n        <div class="mano mana">\n            <h3>Mano Derecha</h3>\n            <p id="manoDer">Poción de Maná</p>\n        </div>\n    </div>\n    <button onclick="intercambiar()" class="btn-swap">Intercambiar Pociones</button>\n\n    <script src="script.js"></script>\n</body>\n</html>\n\n<!-- ================= ARCHIVO: style.css ================= -->\n<style>\n    body { font-family: sans-serif; text-align: center; padding: 40px; background-color: #1e293b; color: white; }\n    .inventario { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; }\n    .mano { padding: 30px; border-radius: 12px; width: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }\n    .vida { background-color: #ef4444; }\n    .mana { background-color: #3b82f6; }\n    .btn-swap { background-color: #10b981; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; transition: background 0.3s; }\n    .btn-swap:hover { background-color: #059669; }\n</style>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\nfunction intercambiar() {\n    // Leemos los valores del HTML\n    let manoIzquierda = document.getElementById("manoIzq").innerText;\n    let manoDerecha = document.getElementById("manoDer").innerText;\n\n    // SOLUCIÓN LÓGICA: Usamos una variable temporal para no perder el dato\n    let temporal = manoIzquierda; \n    manoIzquierda = manoDerecha;  \n    manoDerecha = temporal;       \n\n    // Escribimos los nuevos valores en el HTML\n    document.getElementById("manoIzq").innerText = manoIzquierda;\n    document.getElementById("manoDer").innerText = manoDerecha;\n}\n</script>`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "11.1 ¿Qué es JavaScript?",
            content: "JavaScript (JS) es el lenguaje de programación que da interactividad a las páginas web. Mientras que HTML es la estructura y CSS es el diseño, JS es el comportamiento.\n\nCon JS podemos responder a clics de botones, validar formularios, crear animaciones complejas y comunicarnos con servidores."
        },
        {
            type: "code",
            title: "Vinculando JS a HTML",
            codeLanguage: "html",
            content: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi primer JS</title>\n</head>\n<body>\n  <h1>Hola JavaScript</h1>\n  \n  <!-- Se coloca al final del body para que cargue primero el HTML -->\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        {
            type: "theory",
            title: "11.2 Variables: Declaración, Asignación y Lectura",
            content: "Las variables son 'cajas' en la memoria donde guardamos datos.\n\n1. **Declaración**: Crear la caja (`let` o `const`).\n2. **Asignación**: Guardar un valor en la caja usando `=`. El valor de la derecha se almacena en la variable de la izquierda.\n3. **Lectura**: Usar el nombre de la variable para obtener su valor.\n\n*   `let`: Crea una variable cuyo valor puede cambiar.\n*   `const`: Crea una constante cuyo valor NO puede cambiar. (¡Recomendada por defecto!)"
        },
        {
            type: "code",
            title: "Trabajando con Variables",
            codeLanguage: "javascript",
            content: `// ================= ARCHIVO: script.js =================\n\n// 1. Declaración e Inicialización\nlet edad = 20;\nconst nombre = "Ana";\n\n// 2. Lectura\nconsole.log(edad); // Muestra 20\n\n// 3. Reasignación (almacenar un nuevo valor)\nedad = 21; // Esto es válido\n\n// nombre = "María"; // ERROR: No se puede reasignar una constante`
        },
        {
            type: "theory",
            title: "11.3 Tipos de Datos",
            content: "Los datos que guardamos pueden ser de diferentes tipos:\n\n*   **String**: Texto. Va entre comillas (`\"Hola\"`, `'Mundo'`).\n*   **Number**: Números enteros o decimales (`25`, `3.14`).\n*   **Boolean**: Verdadero o falso (`true`, `false`)."
        },
        {
            type: "theory",
            title: "11.4 Capturar y Mostrar Datos (Consola y HTML)",
            content: "**Capturar datos:** Usamos `prompt(\"Mensaje\")` para pedirle un dato al usuario y lo almacenamos en una variable.\n\n**Mostrar datos:**\n1. `console.log(variable)`: Lo muestra en la consola (F12).\n2. `document.getElementById('id').innerText = variable`: Busca un elemento HTML por su ID y escribe el valor de la variable en la página web."
        },
        {
            type: "code",
            title: "Ejemplo: Capturar y Mostrar en HTML",
            codeLanguage: "html",
            content: `<!-- ================= ARCHIVO: index.html ================= -->\n<body>\n  <h1 id="saludoWeb">Esperando nombre...</h1>\n  <script src="script.js"></script>\n</body>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\n// 1. Capturar dato y almacenarlo\nlet nombreUsuario = prompt("¿Cuál es tu nombre?");\n\n// 2. Mostrar en consola\nconsole.log("El usuario ingresó: " + nombreUsuario);\n\n// 3. Mostrar en HTML\ndocument.getElementById("saludoWeb").innerText = "¡Hola, " + nombreUsuario + "!";\n</script>`
        },
        {
            type: "task",
            title: "Actividad: Calculadora de Edad",
            content: "1. Crea `index.html` y `script.js` y vincúlalos. Agrega un `<h2 id=\"resultadoEdad\"></h2>` en el HTML.\n2. En JS, usa `prompt(\"¿En qué año naciste?\")` para pedir el año al usuario y guárdalo en una variable.\n3. Crea una constante con el año actual.\n4. Calcula la edad restando ambos valores.\n5. Muestra el resultado en la consola.\n6. Muestra el resultado en el HTML usando `document.getElementById().innerText`.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- ================= ARCHIVO: index.html ================= -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <title>Calculadora de Edad</title>\n</head>\n<body>\n    <h1>Calculadora de Edad</h1>\n    <h2 id="resultadoEdad">Calculando...</h2>\n    \n    <script src="script.js"></script>\n</body>\n</html>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\n// 1. Capturamos el dato y lo almacenamos\nlet anioNacimiento = prompt("¿En qué año naciste?");\n\n// 2. Definimos el año actual\nconst anioActual = 2024;\n\n// 3. Calculamos la edad\nlet edad = anioActual - anioNacimiento;\n\n// 4. Mostramos en consola\nconsole.log("Tienes " + edad + " años.");\n\n// 5. Mostramos en la página web HTML\ndocument.getElementById("resultadoEdad").innerText = "Tienes " + edad + " años.";\n</script>`
        },
        {
            type: "task",
            title: "Mini Desafío Lógico: El Intercambio de Pociones (Visual)",
            content: "¡Pon a prueba tu lógica de programación y tus habilidades de diseño web!\n\n**El Problema:**\nEstás programando el inventario de un videojuego. Tu personaje tiene una 'Poción de Vida' en la mano izquierda y una 'Poción de Maná' en la mano derecha. Necesitas crear una interfaz para visualizarlas y un botón que, al hacer clic, intercambie los objetos de mano.\n\n**Requisitos de Diseño (HTML/CSS):**\n1. Crea un contenedor usando **Flexbox** que muestre dos cajas (las manos).\n2. Dale estilos con CSS: La caja de Vida debe tener fondo rojo/rosado, y la de Maná fondo azul. Usa `padding`, `border-radius` y colores de texto legibles.\n3. Agrega un `<button>` debajo que diga 'Intercambiar'. Dale un buen diseño (color de fondo, sin bordes, cursor pointer).\n4. Ponle un `id` a los textos de las pociones en tu HTML (ej: `<p id=\"manoIzq\">Poción de Vida</p>`).\n\n**Requisitos de Lógica (JavaScript):**\nComo aún no hemos visto a fondo cómo conectar botones con JS (eso es la Clase 14), te regalamos la estructura de la función. Tu misión es escribir la **lógica matemática/variable** del intercambio dentro de ella usando una variable temporal.\n\n```javascript\n// ================= ARCHIVO: script.js =================\nfunction intercambiar() {\n    // 1. Leemos lo que dice el HTML actualmente y lo almacenamos en variables\n    let manoIzquierda = document.getElementById(\"manoIzq\").innerText;\n    let manoDerecha = document.getElementById(\"manoDer\").innerText;\n\n    // 2. TU MISIÓN: Escribe la lógica aquí para intercambiar los valores\n    // de manoIzquierda y manoDerecha usando una variable temporal.\n    // (¡No puedes escribir los textos directamente!)\n\n\n    // 3. Escribimos los nuevos valores de vuelta al HTML (te lo regalamos)\n    document.getElementById(\"manoIzq\").innerText = manoIzquierda;\n    document.getElementById(\"manoDer\").innerText = manoDerecha;\n}\n```\n*Nota: No olvides agregar `onclick=\"intercambiar()\"` a tu etiqueta `<button>` en el HTML.*",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- ================= ARCHIVO: index.html ================= -->\n<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <title>Inventario de Pociones</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <div class="inventario">\n        <div class="mano vida">\n            <h3>Mano Izquierda</h3>\n            <p id="manoIzq">Poción de Vida</p>\n        </div>\n        <div class="mano mana">\n            <h3>Mano Derecha</h3>\n            <p id="manoDer">Poción de Maná</p>\n        </div>\n    </div>\n    <button onclick="intercambiar()" class="btn-swap">Intercambiar Pociones</button>\n\n    <script src="script.js"></script>\n</body>\n</html>\n\n<!-- ================= ARCHIVO: style.css ================= -->\n<style>\n    body { font-family: sans-serif; text-align: center; padding: 40px; background-color: #1e293b; color: white; }\n    .inventario { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; }\n    .mano { padding: 30px; border-radius: 12px; width: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }\n    .vida { background-color: #ef4444; }\n    .mana { background-color: #3b82f6; }\n    .btn-swap { background-color: #10b981; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; transition: background 0.3s; }\n    .btn-swap:hover { background-color: #059669; }\n</style>\n\n<!-- ================= ARCHIVO: script.js ================= -->\n<script>\nfunction intercambiar() {\n    // Leemos los valores del HTML\n    let manoIzquierda = document.getElementById("manoIzq").innerText;\n    let manoDerecha = document.getElementById("manoDer").innerText;\n\n    // SOLUCIÓN LÓGICA: Usamos una variable temporal para no perder el dato\n    let temporal = manoIzquierda; \n    manoIzquierda = manoDerecha;  \n    manoDerecha = temporal;       \n\n    // Escribimos los nuevos valores en el HTML\n    document.getElementById("manoIzq").innerText = manoIzquierda;\n    document.getElementById("manoDer").innerText = manoDerecha;\n}\n</script>`
        }
    ]
};

const CLASS_12: ClassSession = {
    id: 12,
    title: "Condicionales y Operadores",
    description: "Lógica de control y toma de decisiones.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Comprender operadores de comparación y lógicos", "Usar estructuras de control if/else", "Capturar datos desde inputs HTML", "Modificar estilos y contenido del DOM dinámicamente"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Teoría: Operadores de Comparación y Lógicos",
            content: "En la clase anterior aprendimos a guardar datos en variables. Hoy vamos a aprender a tomar decisiones basadas en esos datos.\n\nPara tomar decisiones, primero necesitamos comparar cosas. Usamos los **Operadores de Comparación**.\n*(Nota: En pantalla algunos símbolos pueden verse pegados, pero en tu teclado de computadora debes teclearlos así:)*\n*   `==` (Igualdad): Se escribe con dos signos igual seguidos `= =`.\n*   `===` (Igualdad estricta): Se escribe con tres signos igual `= = =`. ¡Siempre usen este!\n*   `!=` y `!==` (Desigualdad): Se escriben con el signo de exclamación y el signo igual `! =` o `! = =`.\n*   `>` (Mayor), `<` (Menor).\n*   `>=` (Mayor o igual): Se escribe tecleando el signo mayor seguido del igual `> =`.\n*   `<=` (Menor o igual): Se escribe el signo menor seguido del igual `< =`.\n\nTambién tenemos los **Operadores Lógicos** para combinar condiciones:\n*   `&&` (AND / Y): Se escribe con dos signos ampersand `& &`. Todas las condiciones deben ser verdaderas.\n*   `||` (OR / O): Se escribe con dos barras verticales (o \"tuberías\") `| |`. Al menos una condición debe ser verdadera.\n*   `!` (NOT / NO): Signo de exclamación. Invierte el valor (de verdadero a falso y viceversa)."
        },
        {
            type: "script",
            title: "0:30 - 1:00 | Ejemplo Práctico: Operadores en Consola",
            content: "Veamos cómo funcionan estos operadores en la consola. Noten la diferencia entre `==` y `===`. Muestra el siguiente código a los alumnos:"
        },
        {
            type: "code",
            title: "script.js (Consola)",
            codeLanguage: "javascript",
            content: `// Comparaciones
console.log(5 > 3); // true
console.log(10 <= 10); // true

// Igualdad vs Igualdad Estricta
console.log(5 == "5");  // true (Mismo valor, diferente tipo. JS los convierte)
console.log(5 === "5"); // false (Diferente tipo. ¡Siempre usen ===!)

// Operadores Lógicos
let edad = 20;
let tieneLicencia = true;

// AND (&&): Ambas deben ser true
console.log(edad >= 18 && tieneLicencia); // true

// OR (||): Una de las dos debe ser true
console.log(edad >= 18 || tieneLicencia); // true

// NOT (!): Invierte el valor
console.log(!tieneLicencia); // false`
        },
        {
            type: "script",
            title: "1:00 - 1:30 | Teoría: Condicionales (if, else if, else)",
            content: "Ahora que sabemos comparar, podemos usar la estructura `if` (si ocurre esto) y `else` (sino, haz esto otro).\n\nEs como un cruce de caminos: si la condición dentro del `if` es verdadera (`true`), el código dentro de sus llaves `{}` se ejecuta. Si es falsa (`false`), el programa salta esas llaves y busca un `else if` o un `else`.\n\nEsta es la base de la inteligencia en cualquier programa. 'Si el usuario tiene la contraseña correcta, déjalo entrar; sino, muestra un error'."
        },
        {
            type: "script",
            title: "1:30 - 2:00 | Ejemplo Práctico: Estructura if / else",
            content: "Vamos a escribir un pequeño programa que decida si alguien puede entrar a una montaña rusa. Muestra el siguiente código:"
        },
        {
            type: "code",
            title: "script.js",
            codeLanguage: "javascript",
            content: `let altura = 160;

if (altura >= 150) {
    // Si la condición es verdadera, entra aquí
    console.log("Puedes subir a la montaña rusa. ¡Diviértete!");
} else if (altura >= 140) {
    // Si la primera fue falsa, pero esta es verdadera
    console.log("Puedes subir, pero acompañado de un adulto.");
} else {
    // Si ninguna de las anteriores fue verdadera
    console.log("Lo siento, eres muy bajito para esta atracción.");
}`
        },
        {
            type: "script",
            title: "2:00 - 2:30 | Teoría: Capturando datos desde HTML (Inputs)",
            content: "En la clase pasada usamos `prompt()` para pedir datos. Pero en una página web real, los usuarios escriben en cajas de texto (`<input>`).\n\nPara leer lo que el usuario escribió en un `<input>`, usamos JavaScript para buscar ese elemento por su ID y luego leemos su propiedad `.value`.\n\nEs decir: `let dato = document.getElementById('miInput').value;`\n\n*Ojo:* Todo lo que viene de un input de texto es un String (texto). Si necesitamos hacer matemáticas con ese dato, debemos convertirlo a número usando `Number(dato)` o `parseInt(dato)`."
        },
        {
            type: "task",
            title: "2:30 - 3:15 | Actividad: Verificador de Edad Visual",
            content: "Vamos a crear un formulario simple que verifique si el usuario es mayor de edad.\n\n1. En HTML, crea un `<input type=\"number\" id=\"inputEdad\">`, un botón `<button onclick=\"verificar()\">Verificar</button>`, y un `<p id=\"mensaje\"></p>`.\n2. En JS, crea la función `verificar()`.\n3. Dentro de la función, captura el valor del input usando `.value` y guárdalo en una variable.\n4. Usa un bloque `if/else` para comprobar si la edad es `>= 18`.\n5. Si es mayor, muestra en el `<p>` (usando `.innerText`) el texto 'Eres mayor de edad' y cambia el color del texto a verde (usando `.style.color = 'green'`).\n6. Si es menor, muestra 'Eres menor de edad' y cambia el color a rojo.\n\n**Solución para el Docente:**"
        },
        {
            type: "code",
            title: "index.html",
            codeLanguage: "html",
            content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Verificador de Edad</title>
</head>
<body>
    <h2>¿Eres mayor de edad?</h2>
    <label for="inputEdad">Ingresa tu edad:</label>
    <input type="number" id="inputEdad">
    <button onclick="verificar()">Verificar</button>
    
    <p id="mensaje"></p>

    <script src="script.js"></script>
</body>
</html>`
        },
        {
            type: "code",
            title: "script.js",
            codeLanguage: "javascript",
            content: `function verificar() {
    // 1. Capturamos el valor del input
    let edadString = document.getElementById("inputEdad").value;
    
    // 2. Lo convertimos a número (buena práctica)
    let edad = Number(edadString);
    
    // 3. Seleccionamos el párrafo donde mostraremos el mensaje
    let parrafoMensaje = document.getElementById("mensaje");

    // 4. Lógica condicional
    if (edad >= 18) {
        parrafoMensaje.innerText = "¡Eres mayor de edad! Puedes pasar.";
        parrafoMensaje.style.color = "green";
    } else {
        parrafoMensaje.innerText = "Lo siento, eres menor de edad.";
        parrafoMensaje.style.color = "red";
    }
}`
        },
        {
            type: "task",
            title: "3:15 - 4:00 | Mini Desafío Lógico: El Semáforo Inteligente",
            content: "¡Vamos a combinar lógica y manipulación visual!\n\n**El Problema:**\nCrea un semáforo interactivo. El usuario escribirá un color ('rojo', 'amarillo' o 'verde') en un input y, al presionar un botón, el semáforo en pantalla debe cambiar a ese color y mostrar un mensaje de instrucción.\n\n**Requisitos de Diseño (HTML/CSS):**\n1. Crea un `div` que represente la luz del semáforo (un círculo gris por defecto).\n2. Crea un `<input type=\"text\">` para que el usuario escriba el color.\n3. Crea un botón 'Cambiar Luz'.\n4. Crea un `<p>` para mostrar el mensaje de instrucción.\n\n**Requisitos de Lógica (JavaScript):**\n1. Crea una función que se ejecute al hacer clic en el botón.\n2. Lee el texto del input y conviértelo a minúsculas (usando `.toLowerCase()`) para evitar errores si el usuario escribe 'ROJO' o 'Rojo'.\n3. Usa `if / else if / else` para evaluar el color:\n   - Si es 'rojo': Cambia el fondo del círculo a rojo y el texto a '¡DETENTE!'.\n   - Si es 'amarillo': Cambia el fondo a amarillo y el texto a '¡PRECAUCIÓN!'.\n   - Si es 'verde': Cambia el fondo a verde y el texto a '¡AVANZA!'.\n   - Si es cualquier otra cosa: Cambia el fondo a gris y el texto a 'Color no válido'.\n\n**Solución para el Docente:**"
        },
        {
            type: "code",
            title: "index.html",
            codeLanguage: "html",
            content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Semáforo Inteligente</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Control de Semáforo</h2>
    
    <div class="controles">
        <input type="text" id="inputColor" placeholder="rojo, amarillo o verde">
        <button onclick="cambiarSemaforo()">Cambiar Luz</button>
    </div>

    <div class="semaforo-container">
        <div id="luz" class="circulo"></div>
    </div>
    
    <h3 id="instruccion">Esperando comando...</h3>

    <script src="script.js"></script>
</body>
</html>`
        },
        {
            type: "code",
            title: "style.css",
            codeLanguage: "css",
            content: `body { font-family: sans-serif; text-align: center; padding: 40px; background-color: #f3f4f6; }
.controles { margin-bottom: 30px; }
input { padding: 10px; font-size: 1rem; border-radius: 5px; border: 1px solid #ccc; }
button { padding: 10px 20px; font-size: 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer; }
.semaforo-container { background-color: #333; width: 120px; padding: 20px; border-radius: 20px; margin: 0 auto; display: flex; justify-content: center; }
.circulo { width: 80px; height: 80px; border-radius: 50%; background-color: #555; transition: background-color 0.3s; }`
        },
        {
            type: "code",
            title: "script.js",
            codeLanguage: "javascript",
            content: `function cambiarSemaforo() {
    // 1. Capturar el valor y pasarlo a minúsculas
    let colorIngresado = document.getElementById("inputColor").value.toLowerCase();
    
    // 2. Seleccionar los elementos a modificar
    let luz = document.getElementById("luz");
    let instruccion = document.getElementById("instruccion");

    // 3. Lógica condicional
    if (colorIngresado === "rojo") {
        luz.style.backgroundColor = "#ef4444"; // Rojo Tailwind
        instruccion.innerText = "¡DETENTE!";
        instruccion.style.color = "#ef4444";
    } else if (colorIngresado === "amarillo") {
        luz.style.backgroundColor = "#f59e0b"; // Amarillo Tailwind
        instruccion.innerText = "¡PRECAUCIÓN!";
        instruccion.style.color = "#f59e0b";
    } else if (colorIngresado === "verde") {
        luz.style.backgroundColor = "#10b981"; // Verde Tailwind
        instruccion.innerText = "¡AVANZA!";
        instruccion.style.color = "#10b981";
    } else {
        luz.style.backgroundColor = "#555"; // Gris oscuro
        instruccion.innerText = "Color no válido. Usa rojo, amarillo o verde.";
        instruccion.style.color = "black";
    }
}`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "12.1 Operadores de Comparación y Lógicos",
            content: "Para tomar decisiones en código, necesitamos comparar valores. Utiliza los siguientes símbolos en tu teclado para crearlos:\n\n**Comparación:**\n*   `==` (Igualdad): Teclado: `= =`\n*   `===` (Igual estricto): Teclado: `= = =` (¡Recomendado! Compara valor y tipo)\n*   `!=` y `!==` (Desigualdad): Teclado: `! =` o `! = =`\n*   `>`, `<` (Mayor, menor)\n*   `>=`, `<=` (Mayor o igual, menor o igual): Teclado: `> =` o `< =`\n\n**Lógicos (combinar condiciones):**\n*   `&&` (AND): Teclado: `& &` (Todas deben ser verdaderas).\n*   `||` (OR): Teclado: `| |` (Al menos una debe ser verdadera).\n*   `!` (NOT): Teclado `!` (Invierte el valor)."
        },
        {
            type: "code",
            title: "script.js - Ejemplos de Operadores",
            codeLanguage: "javascript",
            content: `console.log(5 === "5"); // false (Diferente tipo. ¡Siempre usen ===!)
console.log(5 == "5");  // true (JS los convierte, puede causar bugs)

let edad = 20;
let tieneLicencia = true;

// AND (&&): Ambas deben ser true
console.log(edad >= 18 && tieneLicencia); // true

// OR (||): Una de las dos debe ser true
console.log(edad >= 18 || tieneLicencia); // true`
        },
        {
            type: "theory",
            title: "12.2 Condicionales (if, else if, else)",
            content: "La estructura `if / else` permite que el programa tome caminos diferentes según una condición.\n\n*   `if (condición)`: Si la condición es verdadera, ejecuta el bloque de código.\n*   `else if (otra condición)`: Si el primer `if` fue falso, prueba esta nueva condición.\n*   `else`: Si ninguna de las condiciones anteriores fue verdadera, ejecuta este bloque por defecto."
        },
        {
            type: "code",
            title: "script.js - Estructura if / else",
            codeLanguage: "javascript",
            content: `let altura = 160;

if (altura >= 150) {
    console.log("Puedes subir a la montaña rusa.");
} else if (altura >= 140) {
    console.log("Puedes subir, pero acompañado de un adulto.");
} else {
    console.log("Lo siento, eres muy bajito para esta atracción.");
}`
        },
        {
            type: "theory",
            title: "12.3 Capturando datos desde HTML (Inputs)",
            content: "Para leer lo que un usuario escribe en un campo de texto (`<input>`) en nuestra página web, usamos la propiedad `.value`.\n\nEjemplo:\n`let dato = document.getElementById('miInput').value;`\n\n**Importante:** Todo lo capturado de un input es texto (String). Si necesitas hacer operaciones matemáticas, conviértelo a número usando `Number(dato)`."
        },
        {
            type: "task",
            title: "Actividad: Verificador de Edad Visual",
            content: "1. En HTML, crea un `<input type=\"number\" id=\"inputEdad\">`, un botón `<button onclick=\"verificar()\">Verificar</button>`, y un `<p id=\"mensaje\"></p>`.\n2. En JS, crea la función `verificar()`.\n3. Captura el valor del input usando `.value` y guárdalo en una variable.\n4. Usa `if/else` para comprobar si la edad es `>= 18`.\n5. Si es mayor, muestra en el `<p>` (usando `.innerText`) 'Eres mayor de edad' y cambia el color a verde (`.style.color = 'green'`).\n6. Si es menor, muestra 'Eres menor de edad' y cambia el color a rojo."
        },
        {
            type: "task",
            title: "Mini Desafío Lógico: El Semáforo Inteligente",
            content: "¡Vamos a combinar lógica y manipulación visual!\n\n**El Problema:**\nCrea un semáforo interactivo. El usuario escribirá un color ('rojo', 'amarillo' o 'verde') en un input y, al presionar un botón, el semáforo en pantalla debe cambiar a ese color y mostrar un mensaje de instrucción.\n\n**Requisitos de Diseño (HTML/CSS):**\n1. Crea un `div` que represente la luz del semáforo (un círculo gris por defecto).\n2. Crea un `<input type=\"text\">` para que el usuario escriba el color.\n3. Crea un botón 'Cambiar Luz'.\n4. Crea un `<p>` para mostrar el mensaje de instrucción.\n\n**Requisitos de Lógica (JavaScript):**\n1. Crea una función que se ejecute al hacer clic en el botón.\n2. Lee el texto del input y conviértelo a minúsculas (usando `.toLowerCase()`).\n3. Usa `if / else if / else` para evaluar el color:\n   - Si es 'rojo': Cambia el fondo del círculo a rojo y el texto a '¡DETENTE!'.\n   - Si es 'amarillo': Cambia el fondo a amarillo y el texto a '¡PRECAUCIÓN!'.\n   - Si es 'verde': Cambia el fondo a verde y el texto a '¡AVANZA!'.\n   - Si es cualquier otra cosa: Cambia el fondo a gris y el texto a 'Color no válido'."
        }
    ]
};

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
            content: "¡Hola a todos! Hoy entramos a uno de los temas más poderosos de la programación: **Las Funciones**.\n\nImaginemos que una función es como una máquina expendedora o una fábrica. Tú le das ingredientes (parámetros), la máquina hace un proceso interno (código), y te devuelve un producto terminado (retorno).\n\n¿Por qué usamos funciones?\n1. **Para no repetir código (DRY - Don't Repeat Yourself):** Si hacemos la misma tarea 10 veces, es mejor escribirla una vez en una función y llamarla 10 veces.\n2. **Para ordenar el código:** Divide un problema gigante en problemas pequeños."
        },
        {
            type: "theory",
            title: "0:30 - 0:45 | Dinámica Visual: La Máquina de Hacer Jugos",
            content: "Para esta dinámica, muestra el siguiente gráfico a los alumnos como metáfora de una función.\n\n<div class=\"not-prose\"><div class=\"flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-inner border border-blue-200 my-4\">\n  <div class=\"flex flex-wrap items-center justify-center gap-4\">\n    <div class=\"text-center animate-bounce\">\n      <span class=\"text-4xl\">🍎🍊</span>\n      <p class=\"text-sm font-bold text-gray-700 mt-2\">Entradas (Parámetros)</p>\n    </div>\n    <span class=\"text-2xl text-blue-500 font-bold hidden sm:block\">➡️</span>\n    <div class=\"bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-300 relative overflow-hidden group\">\n      <div class=\"absolute top-0 left-0 w-full h-1 bg-indigo-500 animate-pulse\"></div>\n      <h3 class=\"text-xl font-bold text-indigo-700 m-0\">Caja Negra (Función)</h3>\n      <p class=\"text-sm text-gray-500 italic mt-2\">Procesando...</p>\n      <ul class=\"text-left text-xs mt-2 text-gray-600 list-disc list-inside p-0\">\n        <li>Lavar frutas</li>\n        <li>Licuar</li>\n      </ul>\n    </div>\n    <span class=\"text-2xl text-blue-500 font-bold hidden sm:block\">➡️</span>\n    <div class=\"text-center scale-110 transition-transform hover:scale-125\">\n      <span class=\"text-4xl\">🍹</span>\n      <p class=\"text-sm font-bold text-gray-700 mt-2\">Salida (Return)</p>\n    </div>\n  </div>\n</div></div>\n\n**Pregunta a la clase:** ¿Qué pasa si llamo a `hacerJugo(🍓, 🍌)`? ¡Me devuelve un jugo de fresa y plátano! La máquina (función) es la misma, los ingredientes (parámetros) cambian."
        },
        {
            type: "script",
            title: "0:45 - 1:15 | Sintaxis de una Función",
            content: "Para crear nuestra fábrica en JavaScript, usamos la palabra `function`, le damos un nombre (acción), abrimos paréntesis `()` para los ingredientes, y llaves `{}` para el horno (código).\n\nVamos a ver el caso de una función simple, y luego una que sume dos números."
        },
        {
            type: "code",
            title: "script.js - Ejemplo en vivo",
            codeLanguage: "javascript",
            content: `// 1. Declarar la función
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
sumar(100, 50); // Imprime 150`
        },
        {
            type: "task",
            title: "1:15 - 1:45 | Caso de Análisis (Debate en Clase): El Calculador de Descuentos",
            content: "Muestra este código a la clase y pídeles que analicen en conjunto qué hace, por qué es útil y qué mostrarán los `console.log`.\n\n**Preguntas guiadas para el docente:**\n1. ¿Qúe le estamos pasando entre paréntesis a `aplicarDescuento`?\n2. ¿Qué ventaja nos da esto frente a escribir la resta de porcentajes cada vez?\n3. ¿Qué pasa si le pasamos variables en lugar de números directos?\n\n**Código para analizar:**"
        },
        {
            type: "code",
            title: "script.js - Calculadora de Descuentos",
            codeLanguage: "javascript",
            content: `function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log("Precio final con " + porcentajeDescuento + "% de DSCTO: $" + precioFinal);
}

aplicarDescuento(100, 20);
aplicarDescuento(50, 10);

let precioZapatos = 120;
let dsctoVerano = 30;
aplicarDescuento(precioZapatos, dsctoVerano);`
        },
        {
            type: "script",
            title: "1:45 - 2:00 | Break",
            content: "Descanso y preguntas libres."
        },
        {
            type: "script",
            title: "2:00 - 2:30 | La sentencia 'return'",
            content: "A veces la función hace el trabajo sucio en el horno, pero **no** queremos que muestre el resultado inmediatamente en la consola. Queremos que la función le **devuelva** el resultado a la sección del código que la llamó para usarlo en otra cosa (por ejemplo, para mandarlo a una base de datos o pintarlo en el HTML).\n\nPara eso se usa la palabra mágica `return`."
        },
        {
             type: "code",
             title: "script.js - El poder del Return",
             codeLanguage: "javascript",
             content: `function multiplicar(a, b) {
    let producto = a * b;
    return producto; // Devuelve el dato hacia afuera, y "termina" la función
}

// El resultado de la función cae en la variable 'resultadoFinal'
let resultadoFinal = multiplicar(6, 4); 

// Ahora nosotros decidimos qué hacer con el dato:
console.log("El resultado es " + resultadoFinal);
// o, si estuviéramos en HTML: document.getElementById("texto").innerText = resultadoFinal;`
        },
        {
            type: "task",
            title: "2:30 - 3:00 | Otro Caso Práctico: Validador de Nombres",
            content: "Analicemos con los alumnos esta función que valida si un nombre es apto para un registro.\n\n**Pregunta clave para debate:** ¿Por qué cuando hace el `return false` la función se detiene y ya no lee lo demás? R= Porque `return` expulsa de la función."
        },
        {
            type: "code",
            title: "script.js - Validador",
            codeLanguage: "javascript",
            content: `function esNombreValido(nombre) {
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
console.log(esNombreValido("Maria")); // true`
        },
        {
            type: "task",
            title: "3:00 - 4:00 | Actividad Principal: Calculadora de IMC con UI",
            content: "Los alumnos integrarán el HTML y botones con una función con parámetros y `return`.\n\n**Instrucciones para los alumnos:**\n1. Crear un formulario con dos inputs: Peso (kg) y Altura (mts).\n2. Crear un botón que llame a una función `calcularUI()`.\n3. **El reto:** Creen una función SEPARADA llamada `calcularIMC(peso, altura)` que sólo haga la matemática y haga un `return` del resultado.\n4. `calcularUI()` extraerá los values, llamará a `calcularIMC()` pasándole los values, capturará el `return`, y modificará un párrafo indicando el IMC.\n5. *(Extra)* Aplicar condicionales para determinar si es Bajo Peso (<18.5) , Normal o Sobrepeso.\n\n**Solución para Docentes:**"
        },
        {
            type: "code",
            title: "index.html",
            codeLanguage: "html",
            content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Calculadora IMC</title>
    <!-- Tailwind para CSS rápido, u hoja de estilos propia -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

    <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 class="text-2xl font-bold mb-4">Calcula tu IMC</h2>
        
        <input type="number" id="peso" placeholder="Peso (kg)" class="w-full mb-3 p-2 border rounded">
        <input type="number" id="altura" placeholder="Altura (ej: 1.75 mts)" class="w-full mb-4 p-2 border rounded">
        
        <button onclick="calcularUI()" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Calcular</button>
        
        <div id="resultado" class="mt-4 font-bold text-lg hidden"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>`
        },
        {
            type: "code",
            title: "script.js",
            codeLanguage: "javascript",
            content: `// Función PURA: Sólo matemática y lógica
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
}`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "13.1 ¿Qué es una Función?",
            content: "Una función es un bloque de código empaquetado para realizar una tarea específica.\n\nPiensa en ello como una máquina:\n*   **Entradas (Parámetros):** Los datos que le damos a la máquina (ej: frutas).\n*   **Proceso:** Lo que el código hace con los parámetros (ej: licuar).\n*   **Salidas (Retorno / Return):** Lo que nos devuelve la máquina (ej: jugo).\n\n¿Por qué las usamos?\n1.  **D.R.Y (Don't Repeat Yourself):** No repitas código. Escríbelo una vez, úsalo mil veces.\n2.  **Organización:** Simplifica la lectura de programas complejos."
        },
        {
             type: "theory",
             title: "Dinámica: La Función como una Fábrica",
             content: "<div class=\"not-prose\"><div class=\"flex flex-col items-center justify-center p-8 bg-gradient-to-r from-emerald-50 to-teal-100 rounded-xl shadow-inner border border-teal-200 my-4\">\n  <div class=\"flex items-center gap-4\">\n    <div class=\"text-center animate-bounce\">\n      <span class=\"text-4xl\">🍓🥛</span>\n      <p class=\"text-sm font-bold text-gray-700 mt-2\">Parámetros</p>\n    </div>\n    <span class=\"text-2xl text-teal-500 font-bold hidden sm:block\">➡️</span>\n    <div class=\"bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300 relative overflow-hidden\">\n      <h3 class=\"text-xl font-bold text-teal-700 m-0\">function licuar(a, b)</h3>\n      <p class=\"text-sm text-gray-500 mt-2\">return a + b;</p>\n    </div>\n    <span class=\"text-2xl text-teal-500 font-bold hidden sm:block\">➡️</span>\n    <div class=\"text-center hover:scale-110 transition-transform\">\n      <span class=\"text-4xl\">🥤</span>\n      <p class=\"text-sm font-bold text-gray-700 mt-2\">Return (Resultado)</p>\n    </div>\n  </div>\n</div></div>"
        },
        {
            type: "code",
            title: "Ejemplos: Declarando Funciones",
            codeLanguage: "javascript",
            content: `// 1. Función Simple
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
sumar(10, 5); // Imprime: Suma: 15`
        },
        {
            type: "task",
            title: "Caso de Estudio: Calculadora de Descuentos",
            content: "Analiza el siguiente código. Observa cómo reutilizar la misma función `aplicarDescuento` nos ahorra escribir mucha matemática."
        },
        {
            type: "code",
            title: "Calculadora de Descuentos",
            codeLanguage: "javascript",
            content: `function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log("Precio con dscto: $" + precioFinal);
}

// Mismo proceso, diferentes datos:
aplicarDescuento(100, 20); // Precio con dscto: $80
aplicarDescuento(50, 10);  // Precio con dscto: $45`
        },
        {
            type: "theory",
            title: "13.2 La palabra clave 'return'",
            content: "`return` se utiliza para devolver un valor desde la función hacia la línea de código donde fue llamada. Además, `return` detiene inmediatamente la ejecución de la función."
        },
        {
            type: "code",
            title: "Uso de Return",
            codeLanguage: "javascript",
            content: `function multiplicar(a, b) {
    let producto = a * b;
    return producto; // Expulsa el dato
}

// Guardamos el retorno en una variable:
let miResultado = multiplicar(6, 4); 

// Luego lo usamos donde queramos:
console.log("El resultado guardado es: " + miResultado);`
        },
        {
            type: "task",
            title: "Actividad Principal: Calculadora de IMC",
            content: "**Instrucciones:**\n1. Crea un HTML con dos inputs (Peso en kg y Altura en mts) y un botón de 'Calcular'.\n2. Crea un div vacío para mostrar los resultados.\n3. En JS, crea una función independiente `calcularIMC(peso, altura)` que retorne el cálculo `peso / (altura * altura)`.\n4. Crea otra función `calcularUI()` (para el botón) que extraiga los values, llame a `calcularIMC()`, capture el retorno y lo muestre en HTML con un breve diagnóstico (Bajo peso, Normal, Sobrepeso)."
        }
    ]
};

const CLASS_14: ClassSession = {
    id: 14,
    title: "Eventos y DOM",
    description: "Interactividad en tiempo real escuchando acciones del usuario.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: [
        "Comprender el concepto de Evento en el navegador.",
        "Aprender a usar addEventListener para dotar de interactividad a los elementos.",
        "Diferenciar entre atributos HTML (onclick) y Listeners de JS.",
        "Capturar la información del evento (Event Object) para tomar decisiones."
    ],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | ¿Qué son los Eventos?",
            content: "Un **Evento** es cualquier cosa que sucede en la página web: un clic, mover el ratón, presionar una tecla en el teclado, hacer scroll o incluso cuando la página termina de cargar.\n\nJavaScript nos permite «escuchar» (listen) estos eventos y reaccionar a ellos ejecutando una **función**. ¡Esta es la base de toda la interactividad moderna en la web!"
        },
        {
            type: "interactive-events",
            title: "Dinámica Interactiva: El Simulador de Eventos",
            content: ""
        },
        {
            type: "script",
            title: "0:30 - 1:15 | Dos formas de escuchar eventos",
            content: "Existen dos maneras principales de asignar funciones a los eventos en JavaScript:\n\n1. **Mediante atributos HTML (La forma antigua):** `onclick=\"miFuncion()\"`. Funciona, pero mezcla HTML con JavaScript, lo que dificulta el mantenimiento.\n2. **Mediante `addEventListener` (La forma moderna):** Separamos completamente el HTML del código JS en otro archivo. Nos permite añadir múltiples 'escuchadores' a un mismo elemento sin sobrescribir."
        },
        {
            type: "code",
            title: "Ejemplos: Formas de añadir Eventos",
            codeLanguage: "javascript",
            content: `// ==========================================
// FORMA 1: Desde el HTML (NO recomendada hoy en día para UI grande)
// <button id="btn1" onclick="saludar()">Saludar</button>

function saludar() {
    console.log("¡Hola desde el HTML!");
}

// ==========================================
// FORMA 2: addEventListener (Forma Moderna / Buenas prácticas)
// <button id="btn2">Cerrar Sesión</button>

// 1. Capturamos el elemento
const botonCerrar = document.getElementById("btn2");

// 2. Le "agregamos un escuchador"
// Sintaxis: elemento.addEventListener("evento", funcion)
botonCerrar.addEventListener("click", function() {
    console.log("¡Sesión cerrada con éxito!");
});

// Nota: Al usar addEventListener, omitimos la palabra "on".
// En HTML escribimos "onclick", en JS es solo "click".`
        },
        {
            type: "script",
            title: "1:15 - 2:00 | El Objeto Event (La 'e' o 'event')",
            content: "Cuando ocurre un evento, JavaScript (DOM) inyecta escondida una variable como parámetro dentro de la función, llena de información sobre lo que acaba de suceder. A esta variable universalmente los programadores la llaman `e` o `event`.\n\nContiene datos detallados como: ¿En qué coordenadas de X e Y hizo clic? ¿Qué tecla presionó en su teclado físico? ¿Qué elemento HTML exacto fue el protagonista del clic?"
        },
        {
            type: "code",
            title: "Ejemplo: Capturando información oculta",
            codeLanguage: "javascript",
            content: `// Capturamos un input en el HTML (barra de búsqueda)
const miInput = document.getElementById("buscador");

// Evento "keyup" se activa cuando la persona suelta una tecla
miInput.addEventListener("keyup", function(event) {
    
    // Al imprimir el objeto "event", veremos sus entrañas en consola
    console.log(event);

    // Propiedad súper útil: event.key (qué tecla pulsó)
    console.log("Presionaste: " + event.key);

    // Evaluar si presionó la tecla específica "Enter"
    if (event.key === "Enter") {
        console.log("¡Buscando: " + miInput.value + "!");
    }
});`
        },
        {
            type: "task",
            title: "Actividad Principal: Controlador de Personaje Mágico",
            content: "**Instrucciones:**\nVamos a crear un minijuego simple usando eventos.\n\n1. **HTML Componente:** Elabora un `div` con el id `personaje`. Adentro ponle de texto un emoji como 🧙‍♂️, 🛸 o 🦸‍♀️. Usa CSS (o atributo style) para darle una posición absoluta inicial (`position: absolute; top: 100px; left: 100px; font-size: 50px; transition: all 0.2s`).\n2. **JS Estado Global:** Define dos variables universales (let): `posX = 100;` y `posY = 100;` para rastrear la ubicación geoespacial del personaje.\n3. **JS Listener de Sensor:** Utiliza `document.addEventListener(\"keydown\", function(e) { ... })` para escuchar la acción de tipeo sobre toda la página.\n4. **JS Flujo Logico:** Mueve al personaje usando sentencias `if`. \n   - Si `e.key === 'ArrowRight'`, suma 30 a `posX`.\n   - Si `e.key === 'ArrowLeft'`, resta 30 a `posX`.\n   - Aplica similar razonamiento para `ArrowUp` (resto en Y) y `ArrowDown` (sumo en Y).\n5. **Modificador del DOM:** Finalmente (fuera de los ifs pero dentro del evento), inyecta los nuevos ejes directamente al CSS en línea del elemento en el DOM usando `personaje.style.left = posX + \"px\";` y `personaje.style.top = posY + \"px\";`.",
            teacherSolutionLanguage: "html",
            teacherSolution: `<!-- ================= ARCHIVO: index.html ================= -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Juego Mágico</title>
    <style>
        body {
            background-color: #222;
            color: white;
            font-family: sans-serif;
            /* Evitar scroll si sale de la pantalla */
            overflow: hidden; 
        }
        #personaje {
            position: absolute;
            top: 100px;
            left: 100px;
            font-size: 60px;
            /* Suavizamos el tiron de cada tramo en teclado */
            transition: top 0.1s, left 0.1s; 
        }
        .instrucciones {
            text-align: center;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <h2 class="instrucciones">Utiliza las flechas directrices del teclado.</h2>
    <div id="personaje">🧙‍♂️</div>
    
    <script src="script.js"></script>
</body>
</html>

<!-- ================= ARCHIVO: script.js ================= -->
<script>
// 1. Obtener elemento del DOM
const mago = document.getElementById("personaje");

// 2. Instaurar el Estado inicial (Variables Numéricas Globales)
let posX = 100;
let posY = 100;

// Constante de salto en píxeles por cada vez presionar
const velocidad = 30;

// 3. Sensor Auditivo en todo el documento
document.addEventListener("keydown", function(event) {
    
    // 4. Lógica Selectiva
    if (event.key === "ArrowRight") {
        posX = posX + velocidad;
    } else if (event.key === "ArrowLeft") {
        posX = posX - velocidad;
    } else if (event.key === "ArrowUp") {
        posY = posY - velocidad;
    } else if (event.key === "ArrowDown") {
        posY = posY + velocidad;
    }

    // 5. Inyección Directa al DOM del HTML
    mago.style.left = posX + "px";
    mago.style.top = posY + "px";
});
</script>`
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "14.1 ¿Qué son los Eventos?",
            content: "Un **Evento** es cualquier cosa que sucede en la página web: un clic, mover el ratón, presionar una tecla en el teclado, hacer scroll o incluso cuando la página termina de cargar.\n\nJavaScript nos permite «escuchar» (listen) estos eventos y reaccionar a ellos ejecutando una **función**. ¡Esta es la base de interactividad!"
        },
        {
            type: "code",
            title: "Ejemplo: Sintaxis Básica de Eventos",
            codeLanguage: "javascript",
            content: `// 1. Primero atrapamos el elemento del HTML
const miBoton = document.getElementById("miBoton");

// 2. Le agregamos el 'escuchador'
// element.addEventListener("tipoDeEvento", funcion)
miBoton.addEventListener("click", function() {
    console.log("¡Clicqueaste el botón!");
});`
        },
        {
            type: "interactive-events",
            title: "Dinámica Interactiva: El Simulador de Eventos",
            content: ""
        },
        {
            type: "interactive-quiz",
            content: "¿Cuál crees que es el nombre de la herramienta JS que nos permite 'escuchar' eventos limpiamente sin mezclarlos con el HTML?",
            quizOptions: [
                { id: "A", text: "onclick" },
                { id: "B", text: "addEventListener", isCorrect: true },
                { id: "C", text: "querySelector" }
            ],
            quizExplanation: "¡Correcto! addEventListener es el método moderno preferido para añadir escuchadores."
        },
        {
            type: "interactive-code-fill",
            content: "Supongamos que atrapamos un botón en la variable 'boton'. Añade el escuchador 'click' y un console.log().",
            codeTemplate: `boton.___BLANK0___('click', function() {
    ___BLANK1___.log("Botón presionado!");
});`,
            expectedFills: ["addEventListener", "console"]
        },
        {
            type: "theory",
            title: "14.2 El Objeto Event",
            content: "Cuando ocurre un evento, JavaScript nos pasa una variable `event` (o `e`) oculta a nuestra función. Contiene detalles vitales, como qué coordenada o qué tecla exacta se pulsó."
        },
        {
            type: "code",
            title: "Ejemplo: Capturar qué tecla se presionó",
            codeLanguage: "javascript",
            content: `// Aquí escuchamos eventos del teclado en toda la página
document.addEventListener("keydown", function(event) {
    // Imprimimos la tecla específica pulsada
    console.log("Presionaste la tecla: " + event.key);
    
    // Podemos usar 'if' para tomar acciones específicas
    if (event.key === "Enter") {
        console.log("¡Iniciando búsqueda principal!");
    }
});`
        },
        {
            type: "interactive-match",
            content: "Relaciona las propiedades del objeto Event con lo que crees que significan.",
            matchItems: [
                { id: "1", left: "event.key", right: "El nombre de la tecla (ej. 'ArrowUp', 'a')" },
                { id: "2", left: "event.clientX", right: "Coordenada horizontal del ratón" },
                { id: "3", left: "event.target", right: "El elemento específico que disparó el evento" }
            ]
        },
        {
            type: "game-preview",
            content: "Prueba el resultado final de la actividad. Haz clic en 'Iniciar Prueba' y usa las flechas del teclado para mover el personaje mágico."
        },
        {
            type: "main-assignment",
            title: "Actividad Principal: Controlador de Personaje Mágico",
            content: "Vamos a crear un minijuego simple.\n\n1. Crea un `div` con id `personaje` en tu HTML y agrégale un emoji. Dale `position: absolute`.\n2. En JS, crea dos variables `posX` y `posY` que arranquen en 100.\n3. Añade un escuchador al documento de `keydown`.\n4. Verifica en la función si `event.key` equivale a las flechas (`ArrowRight`, `ArrowLeft`, etc.), e incrementa o decrementa posX y posY de a 20 px.\n5. Finalmente, asigale las coordenadas generadas a tu `personaje.style.left` y `personaje.style.top`."
        }
    ]
};

const CLASS_15: ClassSession = {
  id: 15,
  title: "Clase 15: Masterclass Autónoma - Construye tu videojuego en el DOM",
  description: "Taller autoguiado e interactivo de 90 minutos para consolidar DOM y Eventos de manera visual y práctica.",
  duration: "4 Horas",
  type: "Taller Autoguiado",
  objectives: [
    "Comprender visualmente el flujo de los eventos en el navegador",
    "Practicar la escritura de código completando plantillas",
    "Resolver un taller paso a paso de forma independiente"
  ],
  contentBlocks: [
    {
        type: "theory",
        title: "¡Bienvenido a la Masterclass Autónoma!",
        content: "Esta clase está diseñada para que la avances **a tu propio ritmo**. Te tomará aproximadamente 1 hora y media completarla. Hemos reemplazado la teoría tradicional por diagramas dinámicos, minijuegos y un taller final guiado paso a paso donde construirás de la nada un minijuego controlable."
    },
    {
        type: "interactive-diagram",
        title: "Anatomía de los Eventos"
    },
    {
        type: "interactive-quiz",
        content: "Basándote en el diagrama anterior... ¿Cómo crees que se llama a la fase que se encarga de 'procesar' y ejecutar los cambios visuales en el DOM al detectar la tecla?",
        quizOptions: [
            { id: "A", text: "El Event Trigger" },
            { id: "B", text: "El Event Handler (Función)", isCorrect: true },
            { id: "C", text: "El HTML Semántico" }
        ],
        quizExplanation: "Correcto, el Handler es tu función callback (el cerebro) que ejecuta el código lógico en respuesta al evento."
    },
    {
        type: "interactive-quiz",
        content: "Verdadero o Falso: Un Event Listener solo puede escuchar un usuario haciendo 'click'.",
        quizOptions: [
            { id: "A", text: "Verdadero" },
            { id: "B", text: "Falso", isCorrect: true }
        ],
        quizExplanation: "Es falso. Se pueden escuchar clics, teclado (keydown), movimiento del mouse (mousemove), scroll, y decenas de otros tipos."
    },
    {
        type: "interactive-match",
        content: "Parea la parte del código de Eventos de JavaScript a su nombre conceptual.",
        matchItems: [
            { id: "1", left: "document.addEventListener", right: "El Listener (El que escucha)" },
            { id: "2", left: "'keydown'", right: "El Trigger (El evento específico)" },
            { id: "3", left: "function(event) { ... }", right: "El Handler (La lógica de reacción)" },
            { id: "4", left: "event.key", right: "El detalle del Evento puntual" }
        ]
    },
    {
        type: "theory",
        title: "Repaso Práctico",
        content: "Para alterar el DOM mediante JavaScript y causar un impacto al usuario, usualmente escribimos el código apuntando a un elemento y reescribiendo su propiedad `.style.propiedad_css`. Practiquemos identificando sus partes."
    },
    {
        type: "interactive-code-fill",
        content: "Queremos cambiar el color de fondo de un contenedor guardado en la variable 'caja' al color rojo. Rellena los espacios vacíos.",
        codeTemplate: `// Ya obtuvimos la caja document.getElementById
___BLANK0___.style.___BLANK1___ = 'red';`,
        expectedFills: ["caja", "backgroundColor"]
    },
    {
        type: "interactive-quiz",
        content: "Un pequeño desliz de sintaxis: En CSS escribimos background-color, pero en JavaScript ¿cómo lo debemos invocar en la propiedad style?",
        quizOptions: [
            { id: "A", text: "Escribiéndolo idéntico: .style.background-color", },
            { id: "B", text: "Usando camelCase: .style.backgroundColor", isCorrect: true },
            { id: "C", text: "No se puede cambiar el CSS con JavaScript" }
        ],
        quizExplanation: "JavaScript no acepta guiones (-) porque los considera operadores de resta, por tanto transforma las propiedades CSS usando notación camello (camelCase)."
    },
    {
        type: "taller-guiado",
        content: "Aplica lo aprendido. Este taller integrador requiere que utilices el teclado (keydown) para controlar a tu personaje. Asegúrate de hacer los pasos."
    },
    {
        type: "game-preview",
        title: "Preview Avanzado",
        content: "Este es el resultado que buscamos lograr al finalizar la unidad. Haz clic en Iniciar Prueba e intenta atravesar la pared roja del medio o salirte de los bordes. ¡Usa las flechas!"
    },
    {
        type: "theory",
        title: "Códigos de Referencia",
        content: "Para que puedas avanzar, aquí tienes un punto de partida recomendado. Puedes copiar y pegar este código HTML/JS base en tus archivos locales e ir modificándolo."
    },
    {
        type: "code",
        codeLanguage: "html",
        content: `<!-- index.html -->
<style>
    #area-juego {
        width: 400px;
        height: 400px;
        background-color: #333;
        position: relative; /* Clave para que los hijos absolutos se muevan dentro */
    }
    #jugador {
        width: 30px;
        height: 30px;
        background-color: #4ade80; /* color verde */
        position: absolute;
    }
</style>
<div id="area-juego">
    <div id="jugador"></div>
</div>

<script>
// script.js
const jugador = document.getElementById("jugador");
let x = 0;
let y = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        x = x + 10;
    } 
    // Agrega el resto de if: ArrowLeft, ArrowDown, ArrowUp

    jugador.style.left = x + "px";
    jugador.style.top = y + "px";
});
</script>`
    },
    {
        type: "main-assignment",
        title: "Actividad Principal: Consolidación del Videojuego",
        content: "Expandiremos el taller guiado. Tu objetivo final de la unidad es el siguiente:\n\n1. Agregar límites de pantalla (usando `if`) para que el cubo no se escape al presionar las teclas hacia los bordes.\n2. Añadir un obstáculo central en el CSS/HTML.\n3. (Opcional Avanzado) Trata de detectar si las posiciones X e Y coinciden con el obstáculo, bloqueando el movimiento si es así."
    }
  ]
};

export const SYLLABUS: Unit[] = [
  {
    id: UnitId.HTML,
    title: "Unidad I: HTML",
    description: "Estructura semántica y contenido web.",
    color: "from-orange-500 to-red-600",
    weeks: "Semanas 1-5",
    classes: [
      CLASS_1,
      CLASS_2,
      CLASS_3,
      CLASS_4,
      CLASS_5,
      EXAM_1
    ]
  },
  {
    id: UnitId.CSS,
    title: "Unidad II: CSS",
    description: "Diseño visual, layout y presentación.",
    color: "from-blue-500 to-cyan-600",
    weeks: "Semanas 6-10",
    classes: [
      CLASS_6,
      CLASS_7,
      CLASS_8,
      CLASS_9,
      CLASS_10
    ]
  },
  {
    id: UnitId.JS,
    title: "Unidad III: JavaScript",
    description: "Interactividad, lógica y manipulación del DOM.",
    color: "from-yellow-400 to-yellow-600",
    weeks: "Semanas 11-16",
    classes: [
      CLASS_11,
      CLASS_12,
      CLASS_13,
      CLASS_14,
      CLASS_15,
      { id: 16, title: "Proyecto Final", description: "Defensa del sitio web completo.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] }
    ]
  }
];
