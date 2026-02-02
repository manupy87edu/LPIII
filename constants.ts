
import { Unit, UnitId, ClassSession } from './types';

export const COURSE_INFO = {
  name: "Lenguaje de Programación III",
  code: "LPIII",
  semester: "3º Semestre",
  career: "Licenciatura en Análisis de Sistemas",
  description: "Desarrollo Web Front-End (HTML, CSS, JS) con enfoque práctico y por competencias.",
};

// --- CONTENIDO DETALLADO UNIDAD I ---

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
        title: "0:00 - 0:30 | Introducción a la Asignatura",
        content: "**Presentación:** 'Bienvenidos a LPIII. Esta materia es fundamental porque define cómo el mundo interactúa con sus sistemas: a través de la Web.'\n\n**Mapa Mental de la Materia:**\nDibujar en la pizarra 3 columnas:\n1. **Estructura (HTML):** Los cimientos y vigas de una casa.\n2. **Estilo (CSS):** La pintura, decoración y arquitectura visual.\n3. **Comportamiento (JS):** La electricidad, puertas automáticas, interactividad.\n\n**Objetivo del Semestre:** 'No vamos a usar Wix ni Wordpress. Vamos a escribir código artesanalmente para entender cómo funciona el navegador por dentro.'"
    },
    {
        type: "script",
        title: "0:30 - 1:00 | Teoría: La Arquitectura Web",
        content: "**Concepto: Cliente - Servidor - Navegador**\n\n1. **El Servidor:** Es una computadora remota que 'sirve' archivos. No tiene pantalla ni teclado usualmente. Solo espera peticiones.\n2. **El Cliente:** Es su navegador (Chrome, Firefox). Su trabajo es PEDIR archivos y luego INTERPRETARLOS (Renderizar).\n3. **El Protocolo HTTP:** Es el lenguaje en el que se hablan. (Petición GET -> Respuesta 200 OK).\n\n**Analogía Profesional:** 'El Navegador es como un arquitecto que recibe planos (HTML) y construye la casa en milisegundos para que tú la veas.'"
    },
    {
        type: "script",
        title: "1:00 - 1:30 | Sintaxis HTML: La Anatomía de una Etiqueta",
        content: "**Explicación Técnica:**\nHTML (HyperText Markup Language) no compila, se interpreta. Se basa en **Etiquetas (Tags)**.\n\n**Escribir en Pizarra:**\n`<etiqueta atributo=\"valor\"> Contenido </etiqueta>`\n\n**Desglosar:**\n1. **Apertura:** `<p>` (Signos menor y mayor).\n2. **Contenido:** Texto u otras etiquetas.\n3. **Cierre:** `</p>` (Fundamental la barra inclinada).\n4. **Atributo:** Configuración adicional (ej: `class`, `id`, `src`).\n\n**Tipos de Elementos:**\n- **Contenedores:** Tienen apertura y cierre (ej: `h1`, `p`, `body`).\n- **Vacíos (Self-closing):** No tienen contenido ni cierre explícito (ej: `<br>`, `<hr>`, `<img>`)."
    },
    {
        type: "code",
        title: "1:30 - 2:15 | Práctica: Estructura Vital (El Boilerplate)",
        content: "**Instrucción Guiada:**\n1. Abrir VS Code.\n2. Crear carpeta 'Clase1'.\n3. Crear `index.html` (Explicar por qué 'index': es el archivo por defecto que busca el servidor).\n\n**Generación de Código (Emmet):** Escriban `!` y Tab.\n\n**Análisis Línea por Línea (Crucial):**\n- `<!DOCTYPE html>`: No es una etiqueta HTML. Es una instrucción al navegador: 'Usa el modo estándar de HTML5'. Sin esto, el navegador entra en 'Quirks Mode' (modo compatibilidad antigua).\n- `<html lang=\"es\">`: La raíz. Importante definir el idioma para accesibilidad y correctores ortográficos.\n- `<head>`: Metadatos. NO se ve en el canvas.\n  - `<meta charset=\"UTF-8\">`: Vital para que se vean tildes y ñ. (Probar borrarlo y poner caracteres especiales).\n  - `<title>`: Lo que sale en la pestaña del navegador.\n- `<body>`: El viewport. Todo lo visible va aquí.",
        codeLanguage: "html"
    },
    {
        type: "script",
        title: "2:15 - 3:00 | Desarrollo: Etiquetas de Texto y Jerarquía",
        content: "**Ahora sí, vamos a escribir contenido dentro del <body>.**\n\n**1. Títulos (Headings):**\nExisten 6 niveles: `<h1>` al `<h6>`.\n- `<h1>`: El tema principal. **Regla de oro SEO:** Solo debe haber UN h1 por página.\n- `<h2>`: Subtemas.\n- `<h3>`: Sub-secciones.\n*Demostración:* Escribir los 6 niveles y ver cómo disminuye el tamaño y la importancia.\n\n**2. Párrafos (`<p>`):**\nEs la unidad básica de texto. Tiene un margen superior e inferior por defecto (display: block).\n*Truco VS Code:* Escriban `lorem20` + Tab para generar texto de relleno.\n\n**3. Elementos de Línea (Formatting):**\nDentro de un párrafo podemos destacar texto:\n- `<strong>`: Negrita. Importancia semántica fuerte.\n- `<em>`: Cursiva. Énfasis en la entonación.\n- `<b>` y `<i>`: Visualmente iguales a los anteriores, pero sin valor semántico (evitar si es posible).\n- `<br>`: Break Rule. Salto de línea forzado.\n- `<hr>`: Horizontal Rule. Línea divisoria temática."
    },
    {
        type: "code",
        title: "Código Práctico en Pizarra/Pantalla",
        codeLanguage: "html",
        content: `<body>
    <!-- Encabezado principal -->
    <h1>Desarrollo Web Profesional</h1>
    <hr>

    <h2>Capítulo 1: HTML</h2>
    <p>
        HTML es el <strong>esqueleto</strong> de la web. 
        Sin él, no tenemos estructura.
    </p>

    <h3>Historia</h3>
    <p>
        Creado por <em>Tim Berners-Lee</em>.<br>
        Ha evolucionado hasta la versión 5.
    </p>
</body>`
    },
    {
        type: "task",
        title: "3:00 - 3:45 | Actividad Práctica: 'Sobre Mí'",
        content: "**Consigna:** Ahora que conocen las etiquetas, van a crear su perfil digital.\n\n**Requisitos Técnicos:**\n1. **Estructura:** Boilerplate HTML5 completo con `lang=\"es\"`.\n2. **Encabezado:** Un `<h1>` con su Nombre Completo.\n3. **Presentación:** Un párrafo `<p>` describiendo quiénes son.\n4. **Énfasis:** Usar `<strong>` para destacar su carrera (ej: 'Estudiante de **Análisis de Sistemas**') y `<em>` para alguna cualidad personal.\n5. **Sub-secciones:** Usar `<h2>` para 'Mis Objetivos' y 'Mis Hobbies'.\n6. **Listas:** Deben investigar e implementar una lista `<ul>` para los hobbies (Introducción a la siguiente clase).\n\n**Metodología:** El docente circulará revisando identación y cierre de etiquetas."
    },
    {
        type: "script",
        title: "3:45 - 4:00 | Cierre y Buenas Prácticas",
        content: "**Resumen:**\n- HTML es estructura, no diseño.\n- Siempre cerrar etiquetas.\n- Respetar la jerarquía (no saltar del h1 al h4 solo por tamaño).\n\n**Tarea para el hogar:** Investigar cómo agregar una imagen (`<img>`) y un enlace (`<a>`) para enriquecer su perfil la próxima clase."
    }
  ],
  contentBlocks: [
    {
      type: "theory",
      title: "1.1 ¿Cómo funciona la Web?",
      content: "La web funciona mediante un modelo Cliente-Servidor. El **Cliente** (tu navegador) realiza peticiones a un **Servidor** (donde se alojan los archivos), el cual responde entregando el sitio web."
    },
    {
      type: "image",
      title: "Esquema Cliente-Servidor",
      content: "El navegador solicita información y el servidor responde con archivos HTML, CSS y JS.",
      imageUrl: "https://redespomactividad.weebly.com/uploads/5/4/1/7/54172823/8091749_orig.jpg" 
    },
    {
      type: "theory",
      title: "1.2 Estructura Base HTML",
      content: "Todo documento HTML5 debe comenzar con la declaración del tipo de documento y seguir una estructura de árbol."
    },
    {
      type: "code",
      title: "Estructura Básica",
      codeLanguage: "html",
      content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    <p>Bienvenido a Programación III</p>
</body>
</html>`
    },
    {
      type: "task",
      title: "Ejercicio en Clase: Sobre Mí",
      content: "Crea un archivo `index.html`. Agrega un título `<h1>` con tu nombre, un subtítulo `<h2>` que diga 'Mis Hobbies' y una lista de cosas que te gustan."
    }
  ],
  homework: "Crear 'Mi CV en HTML' (solo estructura básica con textos, sin estilos ni fotos aún)."
};

const CLASS_2: ClassSession = {
  id: 2,
  title: "Etiquetas de texto, Listas y Enlaces",
  description: "Profundización en la organización del contenido y navegación.",
  duration: "4h",
  type: "Práctico",
  objectives: ["Dominar listas ordenadas y desordenadas", "Crear hipervínculos absolutos y relativos", "Formateo de texto"],
  teacherGuide: [
    {
        type: "script",
        title: "0:00 - 0:30 | Repaso y Formato de Texto",
        content: "**Preguntar:** ¿Cuál es la etiqueta para el título principal? (h1). ¿Para párrafos? (p).\n\n**Explicar:** Etiquetas de formato inline.\n- `<strong>`: Negrita (importancia semántica).\n- `<em>`: Itálica (énfasis).\n- `<u>`: Subrayado (usar con cuidado, confunde con links).\n- `<br>`: Salto de línea (explicar que es etiqueta vacía, no tiene cierre).\n- `<hr>`: Línea horizontal."
    },
    {
        type: "code",
        title: "0:30 - 1:15 | Listas (OL, UL, LI)",
        content: "**Pizarra:** Dibujar una lista con puntos y una con números.\n\n**Código:**\n- `<ul>`: Unordered List (Viñetas).\n- `<ol>`: Ordered List (Números).\n- `<li>`: List Item (Cada elemento).\n\n**Práctica:** 'Vamos a hacer una lista de ingredientes para una receta (ul) y luego la lista de pasos para cocinarla (ol).'",
        codeLanguage: "html"
    },
    {
        type: "script",
        title: "1:15 - 2:00 | Enlaces (La Web)",
        content: "**Decir:** 'La web se llama WEB (telaraña) porque todo está conectado. Sin enlaces, son documentos aislados.'\n\n**Explicar:** Etiqueta `<a>` (Anchor).\n- Atributo `href`: Hacia dónde va.\n- Atributo `target='_blank'`: Abrir en nueva pestaña.\n\n**Tipos de enlaces:**\n1. **Absolutos:** `https://google.com` (Van a otro sitio).\n2. **Relativos:** `./contacto.html` (Van a un archivo en mi carpeta)."
    },
    {
        type: "task",
        title: "2:00 - 3:30 | Ejercicio Integrador",
        content: "**Consigna:** Crear un mini-sitio de 2 archivos.\n1. `index.html`: Página de bienvenida con un enlace que diga 'Ir a Contacto'.\n2. `contacto.html`: Página con una lista de emails y teléfonos, y un enlace 'Volver al Inicio'.\n\n**Desafío:** Usar `target='_blank'` para poner un link a Instagram."
    },
    {
        type: "script",
        title: "3:30 - 4:00 | Revisión",
        content: "**Revisión:** Pasar por los bancos. Verificar que los enlaces relativos funcionen (que no hayan puesto C:/Users/...). Explicar por qué las rutas locales de su PC no sirven en el servidor."
    }
  ],
  contentBlocks: [
    {
        type: "theory",
        title: "Listas en HTML",
        content: "Existen dos tipos principales: **Listas desordenadas** (`<ul>`) para items sin orden específico, y **Listas ordenadas** (`<ol>`) para pasos secuenciales. Ambas usan `<li>` para los elementos."
    },
    {
        type: "code",
        title: "Ejemplo de Listas",
        codeLanguage: "html",
        content: `<h3>Ingredientes (Desordenada)</h3>
<ul>
  <li>Harina</li>
  <li>Agua</li>
  <li>Sal</li>
</ul>

<h3>Pasos (Ordenada)</h3>
<ol>
  <li>Mezclar ingredientes</li>
  <li>Amasar</li>
  <li>Hornear</li>
</ol>`
    },
    {
        type: "theory",
        title: "Hipervínculos",
        content: "La etiqueta `<a>` es fundamental. El atributo `href` define el destino. `target='_blank'` abre el enlace en una nueva pestaña."
    },
    {
        type: "code",
        title: "Enlaces",
        codeLanguage: "html",
        content: `<!-- Enlace absoluto -->
<a href="https://google.com" target="_blank">Ir a Google</a>

<!-- Enlace relativo (interno) -->
<a href="contacto.html">Ir a Contacto</a>`
    }
  ]
};

const CLASS_3: ClassSession = {
    id: 3,
    title: "Imágenes, Tablas y Divs",
    description: "Organización básica y manejo de multimedia.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Insertar imágenes correctamente", "Estructurar datos en tablas", "Entender el concepto de contenedor (div)"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:45 | Imágenes",
            content: "**Decir:** 'Una web sin imágenes es aburrida. Vamos a usar la etiqueta `<img>`.'\n\n**Atributos Clave:**\n- `src` (Source): ¿Dónde está la imagen? (URL o ruta local).\n- `alt` (Alternative Text): IMPORTANTE para accesibilidad y SEO. Describe la foto si no carga.\n- `width/height`: Tamaño (aunque mejor controlarlo con CSS).\n\n**Práctica:** Descargar una imagen, guardarla en una carpeta `/img` y mostrarla en el HTML."
        },
        {
            type: "script",
            title: "0:45 - 1:30 | Tablas",
            content: "**Decir:** 'Antes se usaban tablas para maquetar todo el sitio. ¡NO LO HAGAN! Hoy solo se usan para DATOS tabulares (excel).'\n\n**Estructura:**\n- `<table>`: Contenedor.\n- `<thead>`: Cabecera.\n- `<tbody>`: Cuerpo.\n- `<tr>`: Fila (Table Row).\n- `<th>`: Celda de título (negrita centrada).\n- `<td>`: Celda de dato.\n\n**Ejercicio Pizarra:** Dibujar una tabla de horarios de clase y pasarla a código."
        },
        {
            type: "code",
            title: "Ejemplo Tabla",
            content: "<table>\n  <tr>\n    <th>Nombre</th>\n    <th>Edad</th>\n  </tr>\n  <tr>\n    <td>Juan</td>\n    <td>20</td>\n  </tr>\n</table>",
            codeLanguage: "html"
        },
        {
            type: "script",
            title: "1:30 - 2:00 | El Rey DIV",
            content: "**Concepto Clave:** `<div>` (Division).\nExplicar que es una caja vacía. No hace nada visualmente, pero sirve para AGRUPAR elementos.\n\n**Analogía:** 'Es como una caja de mudanza. Metemos el título y el párrafo adentro para moverlos juntos o darles el mismo fondo luego con CSS.'\n\n**Explicar Block vs Inline:**\n- Block (`div`, `p`, `h1`): Ocupan todo el ancho.\n- Inline (`span`, `a`, `img`): Ocupan solo lo que miden."
        },
        {
            type: "task",
            title: "2:00 - 3:45 | Práctica: Catálogo de Productos",
            content: "**Consigna:** Crear una página que sea un catálogo.\nDebe tener 3 'tarjetas' de producto. Cada tarjeta debe ser un `<div>` que contenga:\n1. Una imagen del producto.\n2. Un `<h3>` con el nombre.\n3. Un `<p>` con el precio.\n4. Un enlace 'Comprar'."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Imágenes",
            content: "Se usa la etiqueta `<img>`. Es una etiqueta de cierre automático. Siempre debe llevar el atributo `alt`."
        },
        {
            type: "code",
            title: "Insertar Imagen",
            codeLanguage: "html",
            content: `<img src="ruta/imagen.jpg" alt="Descripción de la imagen">`
        },
        {
            type: "theory",
            title: "Divisiones (Divs)",
            content: "El `<div>` es un contenedor genérico. Se usa para agrupar otros elementos y aplicarles estilos o scripts en conjunto."
        }
    ]
};

const CLASS_4: ClassSession = {
    id: 4,
    title: "Formularios",
    description: "Interacción con el usuario mediante inputs.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Crear formularios de contacto", "Conocer tipos de input", "Validaciones HTML5 nativas"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | Concepto de Formulario",
            content: "**Decir:** 'Hasta ahora la web es informativa. El formulario es la forma principal en que el usuario nos habla a nosotros.'\n\n**Etiqueta:** `<form>`.\n**Atributos:** `action` (a dónde van los datos) y `method` (GET/POST). Explicar que por ahora no tenemos backend, así que los datos no irán a ningún lado real."
        },
        {
            type: "script",
            title: "0:30 - 1:30 | Inputs Básicos",
            content: "**Explicar:** La etiqueta `<input>` es camaleónica. Cambia según el atributo `type`.\n\n**Tipos a probar:**\n- `type='text'` (Nombre)\n- `type='email'` (Valida arroba)\n- `type='password'` (Oculta caracteres)\n- `type='number'` (Solo números)\n- `type='date'` (Calendario)\n\n**Importante:** Explicar el atributo `name` (es como la etiqueta de la variable que llega al servidor)."
        },
        {
            type: "code",
            title: "Código de Inputs",
            content: `<label>Nombre: <input type="text" name="nombre"></label><br>\n<label>Email: <input type="email" name="correo"></label>`,
            codeLanguage: "html"
        },
        {
            type: "script",
            title: "1:30 - 2:00 | Otros controles y Botones",
            content: "**Elementos:**\n- `<textarea>`: Para mensajes largos.\n- `<select>` y `<option>`: Listas desplegables (Menú de países).\n- `<button type='submit'>`: El botón que envía.\n\n**Atributos de validación:** `required`, `placeholder`, `min`, `max`."
        },
        {
            type: "task",
            title: "2:00 - 3:45 | Desafío: Formulario de Registro",
            content: "**Consigna:** Crear un formulario de registro para un evento.\nDebe pedir:\n1. Nombre completo (requerido).\n2. Email.\n3. Edad (número, mínimo 18).\n4. Fecha de nacimiento.\n5. Un selector de 'Turno preferido' (Mañana/Tarde).\n6. Botón de 'Inscribirse'."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Formularios",
            content: "El elemento `<form>` define un formulario. Dentro usamos `<input>`, `<textarea>`, `<button>`, etc."
        },
        {
            type: "code",
            title: "Ejemplo Completo",
            codeLanguage: "html",
            content: `<form action="">
  <label for="email">Email:</label>
  <input type="email" id="email" required placeholder="ejemplo@mail.com">
  
  <label for="pass">Contraseña:</label>
  <input type="password" id="pass" required>
  
  <button type="submit">Ingresar</button>
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
            title: "0:00 - 0:45 | HTML Semántico",
            content: "**Decir:** 'Podríamos hacer todo con `<div>`, pero Google no entendería qué es qué. El HTML Semántico le da significado a las partes.'\n\n**Etiquetas Nuevas:**\n- `<header>`: Cabecera (Logo, menú).\n- `<nav>`: Navegación.\n- `<main>`: Contenido principal.\n- `<section>`: Sección temática.\n- `<article>`: Contenido independiente (post blog).\n- `<footer>`: Pie de página (Copy, redes).\n- `<aside>`: Barra lateral."
        },
        {
            type: "image",
            title: "Layout Semántico",
            content: "Dibujar en la pizarra el esquema clásico: Header arriba, Nav abajo, Main al medio con un Aside al costado, Footer abajo.",
            imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*y6C4nSvy2Woe0m7bWEn4BA.png" 
        },
        {
            type: "script",
            title: "0:45 - 1:15 | Preparación Proyecto",
            content: "**Explicar Proyecto:** 'Vamos a construir la estructura de un Blog Personal o un Sitio de Noticias.'\n\n**Requisitos:**\n- Usar Header, Nav, Main, Footer.\n- Tener al menos 2 artículos (`article`) con título, foto y texto.\n- Un formulario de suscripción en el footer."
        },
        {
            type: "task",
            title: "1:15 - 3:30 | Desarrollo Guiado",
            content: "**Paso 1:** Crear estructura base (`!`).\n**Paso 2:** Definir el Header con un `<h1>` Título del Blog.\n**Paso 3:** Crear Nav con `<ul>` y enlaces (Inicio, Sobre mí, Contacto).\n**Paso 4:** En el Main, crear dos `article`. Cada uno con imagen (`img`), título (`h2`) y resumen (`p`).\n**Paso 5:** Crear el Footer con Copyright y un pequeño form de newsletter."
        },
        {
            type: "script",
            title: "3:30 - 4:00 | Evaluación y Cierre Unidad I",
            content: "**Evaluación:** Revisar código fuente. ¿Usaron `<section>` o solo `<div>`? ¿Las imágenes tienen `alt`? ¿El código está indentado?\n\n**Adelanto:** 'La próxima clase (Unidad II) empezaremos con CSS para que esto deje de verse blanco y negro y tome vida.'"
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Etiquetas Semánticas",
            content: "Proporcionan información sobre el tipo de contenido. Ayudan a los motores de búsqueda (SEO) y lectores de pantalla."
        },
        {
            type: "code",
            title: "Layout Semántico",
            codeLanguage: "html",
            content: `<header>
  <h1>Mi Blog</h1>
  <nav>...</nav>
</header>
<main>
  <article>
    <h2>Post 1</h2>
    <p>Contenido...</p>
  </article>
</main>
<footer>
  <p>© 2024</p>
</footer>`
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
      CLASS_5
    ]
  },
  {
    id: UnitId.CSS,
    title: "Unidad II: CSS",
    description: "Diseño visual, layout y presentación.",
    color: "from-blue-500 to-cyan-600",
    weeks: "Semanas 6-10",
    classes: [
      { id: 6, title: "Sintaxis CSS y Selectores", description: "Fundamentos de estilo.", duration: "4h", type: "Teórico-Práctico", objectives: [], contentBlocks: [] },
      { id: 7, title: "Colores, fondos y tipografía", description: "Estilizado visual.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 8, title: "Modelo de Caja (Box Model)", description: "Márgenes, bordes y padding.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 9, title: "Flexbox", description: "Layouts modernos unidimensionales.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 10, title: "Responsive Design", description: "Adaptabilidad a móviles.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] }
    ]
  },
  {
    id: UnitId.JS,
    title: "Unidad III: JavaScript",
    description: "Interactividad, lógica y manipulación del DOM.",
    color: "from-yellow-400 to-yellow-600",
    weeks: "Semanas 11-16",
    classes: [
      { id: 11, title: "Intro a JS y Variables", description: "Fundamentos de programación.", duration: "4h", type: "Teórico-Práctico", objectives: [], contentBlocks: [] },
      { id: 12, title: "Condicionales y Operadores", description: "Lógica de control.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 13, title: "Funciones", description: "Modularización del código.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 14, title: "Eventos y DOM", description: "Interactividad en tiempo real.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 15, title: "Validación de Formularios", description: "Integridad de datos.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] },
      { id: 16, title: "Proyecto Final", description: "Defensa del sitio web completo.", duration: "4h", type: "Práctico", objectives: [], contentBlocks: [] }
    ]
  }
];
