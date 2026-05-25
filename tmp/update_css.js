const fs = require('fs');
const content = fs.readFileSync('./constants.ts', 'utf8');

const newClasses = `const CLASS_6: ClassSession = {
    id: 6,
    title: "Intro a CSS: Sintaxis y Selectores",
    description: "Dando vida al HTML con estilos. Fundamentos de CSS.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: [
        "Comprender la diferencia entre Estructura (HTML) y Presentación (CSS)",
        "Implementar CSS Interno, Externo y en Línea",
        "Dominar los selectores básicos (Etiqueta, Clase, ID)",
        "Entender el concepto de 'Cascada' y 'Especificidad'"
    ],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:30 | ¿Qué es CSS?",
            content: "**Analogía:** 'Si HTML es el esqueleto y los ladrillos de la casa, CSS es la pintura, el diseño de interiores y la arquitectura visual.'\\n\\n**Sintaxis:** Escribir en pizarra:\\n\`selector { propiedad: valor; }\`\\n\\n**Regla de Oro:** Siempre terminar con punto y coma (;). Explicar que CSS (Cascading Style Sheets) funciona en cascada, lo que significa que el orden de las reglas importa."
        },
        {
            type: "code",
            title: "0:30 - 1:15 | Dónde escribir CSS",
            content: "**Explicar 3 métodos:**\\n1. **En línea:** \`<h1 style='color: red;'>\` (Mala práctica, difícil de mantener).\\n2. **Interno:** \`<style>\` en el head (Útil para pruebas rápidas).\\n3. **Externo:** Archivo \`.css\` separado (El estándar profesional).\\n\\n**Práctica:** Crear \`style.css\`, vincularlo con \`<link>\` y cambiar el fondo del body a un color oscuro.",
            codeLanguage: "html"
        },
        {
            type: "script",
            title: "1:15 - 2:30 | Selectores Básicos y Especificidad",
            content: "**Explicar:** ¿A quién le aplicamos el estilo?\\n\\n1. **Selector Universal (*):** \`* { margin: 0; }\` (Afecta a todos los elementos).\\n2. **Selector de Etiqueta:** \`h1 { color: blue; }\` (Afecta a TODOS los h1).\\n3. **Selector de Clase (.):** \`.titulo-especial { color: red; }\` (Reutilizable, el caballo de batalla).\\n4. **Selector de ID (#):** \`#header-principal\` (Único por página, alta especificidad).\\n\\n**Especificidad (Breve):** Explicar que ID gana a Clase, y Clase gana a Etiqueta. Mostrar ejemplos de conflictos de estilos y cómo se resuelven."
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Ejercicio: Estilizando el 'Sobre Mí'",
            content: "**Consigna:** Abrir el proyecto de la clase anterior.\\n1. Crear \`style.css\` y vincularlo.\\n2. Darle color de fondo (\`background-color\`) al \`body\`.\\n3. Centrar el \`h1\` (\`text-align: center\`) y cambiarle la fuente (\`font-family\`).\\n4. Crear una clase \`.destacado\` que ponga el texto en negrita y color naranja, y aplicarla a palabras clave.\\n5. Crear un ID \`#perfil\` para la imagen y darle un ancho fijo."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Sintaxis CSS",
            content: "Una regla CSS se compone de un selector y un bloque de declaración. El selector indica a qué elemento HTML se aplicará el estilo, y el bloque de declaración contiene una o más declaraciones separadas por punto y coma."
        },
        {
            type: "code",
            title: "Ejemplo de Regla CSS",
            codeLanguage: "css",
            content: \`/* Selector de Etiqueta */
p {
  color: #333;
  font-size: 16px;
}

/* Selector de Clase */
.boton-rojo {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Selector de ID */
#cabecera-principal {
  background-color: #f4f4f4;
  border-bottom: 2px solid #ccc;
}\`
        },
        {
            type: "theory",
            title: "Vinculación",
            content: "Para conectar el archivo CSS con el HTML usamos la etiqueta \`<link>\` dentro del \`<head>\`. Es la forma más recomendada y profesional de trabajar con estilos."
        },
        {
            type: "code",
            title: "HTML Link",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Página Estilizada</title>
  <!-- Vinculación del archivo CSS externo -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titulo-principal">Hola Mundo</h1>
</body>
</html>\`
        },
        {
            type: "task",
            title: "Actividad: Estilizando el 'Sobre Mí'",
            content: "Abre el proyecto de la clase anterior.\\n1. Crea un archivo \`style.css\` y vincúlalo en el HTML.\\n2. Dale color de fondo (\`background-color\`) al \`body\`.\\n3. Centra el \`h1\` (\`text-align: center\`) y cámbiale la fuente (\`font-family\`).\\n4. Crea una clase \`.destacado\` que ponga el texto en negrita y color naranja, y aplícala a palabras clave.\\n5. Aplica un ID a tu imagen de perfil y dale un borde redondeado.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* style.css */
body {
    background-color: #f4f4f9;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

.destacado {
    font-weight: bold;
    color: #e67e22;
    background-color: #fdf2e9;
    padding: 2px 5px;
    border-radius: 3px;
}

#foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%; /* Hace la imagen circular */
    border: 3px solid #3498db;
    display: block;
    margin: 0 auto; /* Centra la imagen */
}\`
        }
    ]
};

const CLASS_7: ClassSession = {
    id: 7,
    title: "Colores, Fondos y Tipografía",
    description: "Estilizado visual avanzado y manejo de fuentes.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Manejar códigos de colores (Hex, RGB, HSL)", "Importar fuentes de Google Fonts", "Propiedades de texto avanzadas", "Trabajar con fondos e imágenes de fondo"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | El Mundo del Color",
            content: "**Teoría del Color Digital:**\\nNo usaremos nombres como 'red' o 'blue'. Usaremos códigos precisos.\\n\\n**Formatos:**\\n1. **Hexadecimal:** \`#FF5733\` (Rojo, Verde, Azul en hex).\\n2. **RGB/RGBA:** \`rgb(255, 0, 0)\` o \`rgba(0,0,0,0.5)\` (El último valor es el canal Alfa para transparencia).\\n3. **HSL:** \`hsl(120, 100%, 50%)\` (Tono, Saturación, Luminosidad - muy útil para crear paletas).\\n\\n**Herramientas:** Mostrar ColorPickers online (ej. Coolors) o la herramienta de VS Code."
        },
        {
            type: "script",
            title: "1:00 - 2:00 | Tipografía Avanzada",
            content: "**Propiedades:**\\n- \`font-family\`: La fuente (Arial, Roboto). Siempre incluir fallbacks.\\n- \`font-size\`: Tamaño (\`px\` para absoluto, \`rem\`/\`em\` para relativo/accesible).\\n- \`font-weight\`: Grosor (400 normal, 700 bold).\\n- \`line-height\`: Altura de línea (crucial para legibilidad).\\n- \`letter-spacing\`: Espaciado entre letras.\\n\\n**Google Fonts:**\\nEnseñar a entrar a Google Fonts, seleccionar una fuente, copiar el \`<link>\` y pegarlo en el HTML, luego usarla en el CSS."
        },
        {
            type: "task",
            title: "2:00 - 4:00 | Práctica Visual",
            content: "**Consigna:** Mejorar el sitio personal.\\n1. Elegir una paleta de 3 colores (Fondo, Texto, Acentos) usando una herramienta como Coolors.\\n2. Importar una fuente 'Sans-Serif' moderna para el cuerpo y una 'Serif' o 'Display' para títulos.\\n3. Usar \`background-image\` para poner una textura o foto sutil de fondo en el \`header\`.\\n4. Aplicar un gradiente lineal a un botón o sección."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Tipografía Web y Unidades Relativas",
            content: "No dependas solo de las fuentes instaladas en el sistema del usuario. Usa servicios como Google Fonts. Además, prefiere unidades relativas como \`rem\` para el tamaño de fuente, lo que mejora la accesibilidad."
        },
        {
            type: "code",
            title: "Uso de Fuentes y Colores",
            codeLanguage: "css",
            content: \`/* Importando desde Google Fonts en CSS (alternativa al <link> en HTML) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

:root {
  /* Variables CSS para la paleta de colores */
  --color-primario: #3498db;
  --color-secundario: #2ecc71;
  --color-fondo: #f8f9fa;
  --color-texto: #333333;
}

body {
  font-family: 'Open Sans', sans-serif; /* Fallback a sans-serif */
  font-size: 1rem; /* 16px por defecto */
  line-height: 1.6; /* Altura de línea para legibilidad */
  color: var(--color-texto);
  background-color: var(--color-fondo);
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primario);
  letter-spacing: -0.5px;
}\`
        },
        {
            type: "theory",
            title: "Fondos y Gradientes",
            content: "CSS permite no solo colores sólidos de fondo, sino también imágenes y gradientes (transiciones suaves entre dos o más colores)."
        },
        {
            type: "code",
            title: "Ejemplos de Fondos",
            codeLanguage: "css",
            content: \`.hero-section {
  /* Imagen de fondo con overlay oscuro */
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero-bg.jpg');
  background-size: cover; /* Cubre todo el espacio */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat;
  color: white;
  padding: 100px 20px;
}

.boton-gradiente {
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
}\`
        },
        {
            type: "task",
            title: "Actividad: Práctica Visual",
            content: "Mejora tu sitio personal.\\n1. Elige una paleta de 3 colores (Fondo, Texto, Acentos).\\n2. Importa una fuente 'Sans-Serif' moderna para el cuerpo y una 'Serif' o 'Display' para los títulos desde Google Fonts.\\n3. Usa \`background-image\` para poner una textura o foto sutil de fondo en el \`<header>\` con un gradiente superpuesto para mejorar la legibilidad del texto.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap');

:root {
    --bg-color: #fdfbf7;
    --text-color: #2c3e50;
    --accent-color: #e74c3c;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Lato', sans-serif;
    line-height: 1.6;
    margin: 0;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    color: #1a252f;
}

header {
    /* Gradiente superpuesto a una imagen */
    background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 80px 20px;
    text-align: center;
}

header h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 10px;
}

.btn-contacto {
    display: inline-block;
    background-color: var(--accent-color);
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.btn-contacto:hover {
    background-color: #c0392b;
}\`
        }
    ]
};

const CLASS_8: ClassSession = {
    id: 8,
    title: "El Modelo de Caja (Box Model)",
    description: "El concepto más importante de CSS para estructurar layouts.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Entender Content, Padding, Border y Margin", "Usar box-sizing: border-box", "Comprender el colapso de márgenes", "Crear tarjetas con espaciado correcto"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Teoría: Todo es una Caja",
            content: "**Concepto Fundamental:** En web, hasta un círculo es una caja cuadrada invisible.\\n\\n**Las 4 Capas (De adentro hacia afuera):**\\n1. **Content:** El texto o imagen real.\\n2. **Padding:** El relleno (Espacio entre el contenido y el borde). Es 'intimo', toma el color de fondo.\\n3. **Border:** El límite visible.\\n4. **Margin:** El espacio personal (Espacio entre esta caja y las vecinas). Es transparente.\\n\\n**Dibujo en Pizarra:** Dibujar un cuadro enmarcado. La pintura es el content, el paspartú es el padding, el marco de madera es el border, y la distancia a otros cuadros en la pared es el margin."
        },
        {
            type: "image",
            title: "Diagrama Box Model",
            content: "Esquema visual de las capas de una caja CSS.",
            imageUrl: "https://web.dev/static/learn/css/box-model/image/the-box-model-padd-d83530773634.svg"
        },
        {
            type: "code",
            title: "1:00 - 1:30 | El Truco del Box Sizing",
            content: "**Problema Matemático:** Si tengo un div de \`width: 200px\` y le agrego \`padding: 20px\`, ¿cuánto mide en total? (Respuesta: 240px). Esto rompe layouts porque el tamaño final es mayor al declarado.\\n\\n**Solución:** \`box-sizing: border-box;\`.\\nEsto hace que el padding y border se 'coman' el espacio hacia adentro, manteniendo el ancho total fijo en 200px.\\n\\n**Reset Universal:** \`* { box-sizing: border-box; margin: 0; padding: 0; }\` (Poner siempre al inicio de todo CSS).",
            codeLanguage: "css"
        },
        {
            type: "script",
            title: "1:30 - 2:00 | Display y Colapso de Márgenes",
            content: "**Propiedad Display:**\\n- \`block\`: Ocupa todo el ancho disponible, fuerza salto de línea (div, p, h1).\\n- \`inline\`: Ocupa solo el ancho de su contenido, no acepta margin/padding vertical (span, a).\\n- \`inline-block\`: Como inline, pero sí acepta dimensiones y márgenes (botones).\\n\\n**Colapso de Márgenes:** Explicar que los márgenes verticales adyacentes de elementos bloque se fusionan (colapsan) tomando el valor del mayor, no se suman."
        },
        {
            type: "task",
            title: "2:00 - 4:00 | Práctica: Tarjetas de Producto",
            content: "**Consigna:** Crear 3 \`div\` con clase \`.card\`.\\n\\n**Estilos:**\\n- Ancho fijo (ej: 300px).\\n- Borde gris suave (\`1px solid #ccc\`) y bordes redondeados (\`border-radius\`).\\n- Padding interno para que el texto no toque el borde (20px).\\n- Margen para separarlas entre sí (20px).\\n- Sombra sutil (\`box-shadow\`).\\n- Probar qué pasa si aumentan el padding sin usar \`border-box\`."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Box Model",
            content: "Cada elemento HTML se comporta como una caja rectangular compuesta por: Margen (Margin), Borde (Border), Relleno (Padding) y Contenido (Content)."
        },
        {
            type: "code",
            title: "Reset Recomendado",
            codeLanguage: "css",
            content: \`/* Aplicar a todo el documento y pseudo-elementos */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.caja {
  width: 300px;
  padding: 20px; /* Con border-box, el ancho final sigue siendo 300px */
  border: 2px solid black;
  margin: 15px auto; /* auto centra horizontalmente elementos bloque con ancho fijo */
}\`
        },
        {
            type: "theory",
            title: "Propiedad Display",
            content: "La propiedad \`display\` determina cómo se comporta la caja en el flujo del documento. Los valores más comunes son \`block\`, \`inline\`, e \`inline-block\`."
        },
        {
            type: "task",
            title: "Actividad: Tarjetas de Producto",
            content: "Crea 3 \`<div>\` con la clase \`.card\`.\\n\\n**Aplica los siguientes estilos:**\\n- Ancho fijo (ej: 300px).\\n- Borde gris suave (\`1px solid #e2e8f0\`).\\n- Padding interno para que el texto no toque el borde (24px).\\n- Margen para separarlas entre sí (20px).\\n- Bordes redondeados (\`border-radius: 12px\`).\\n- Sombra sutil (\`box-shadow\`).",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #f8fafc;
    font-family: system-ui, -apple-system, sans-serif;
    padding: 40px;
}

.card {
    width: 320px;
    background-color: white;
    border: 1px solid #e2e8f0;
    padding: 24px;
    margin: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Transición suave para el hover */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 12px;
}

.card-text {
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 20px;
}

.card-btn {
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
}\`
        }
    ]
};

const CLASS_9: ClassSession = {
    id: 9,
    title: "Layouts Modernos: Flexbox",
    description: "Distribución de elementos en una dimensión de forma flexible.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Dominar el contenedor flex y sus propiedades", "Alinear ejes (justify-content, align-items)", "Controlar el comportamiento de los hijos (flex-grow, flex-basis)", "Crear una barra de navegación y un layout de tarjetas"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 0:45 | El fin de los 'Floats'",
            content: "**Historia:** Antes usábamos \`float: left\` y trucos matemáticos para poner cosas al lado. Era una pesadilla de mantener. Llegó **Flexbox** para salvarnos.\\n\\n**Concepto:** Relación Padre-Hijo.\\n- Al Padre (Contenedor) le decimos: \`display: flex;\`.\\n- Los Hijos (Items) automáticamente se ponen uno al lado del otro (en fila por defecto)."
        },
        {
            type: "script",
            title: "0:45 - 2:00 | Los dos Ejes",
            content: "**Eje Principal (Main Axis):** Por defecto, horizontal (fila). Se cambia con \`flex-direction\` (row, column).\\n- \`justify-content\`: Controla la distribución en este eje. (center, space-between, space-around, flex-end).\\n\\n**Eje Cruzado (Cross Axis):** Vertical (si la dirección es fila).\\n- \`align-items\`: Controla la alineación en este eje. (center, stretch, flex-start, flex-end).\\n\\n**Juego Mental:** Imaginen que son cuentas de un collar. Flexbox decide cómo se distribuyen en el hilo y cómo cuelgan de él."
        },
        {
            type: "code",
            title: "Código Flexbox Básico",
            content: \`.contenedor {
    display: flex;
    flex-direction: row; /* Valor por defecto */
    justify-content: space-between; /* Separados al máximo */
    align-items: center; /* Centrados verticalmente */
    flex-wrap: wrap; /* Permite que los elementos pasen a la siguiente línea si no caben */
}\`,
            codeLanguage: "css"
        },
        {
            type: "script",
            title: "2:00 - 2:30 | Propiedades de los Hijos (Items)",
            content: "**Control Individual:**\\n- \`flex-grow\`: ¿Cuánto debe crecer este elemento si hay espacio extra? (0 por defecto).\\n- \`flex-shrink\`: ¿Cuánto debe encogerse si falta espacio? (1 por defecto).\\n- \`flex-basis\`: El tamaño ideal antes de crecer o encogerse.\\n- Atajo: \`flex: 1;\` (Crece y ocupa el espacio disponible equitativamente)."
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Práctica: Navbar y Galería",
            content: "**Consigna:**\\n1. **Navbar:** Un \`<nav>\` con el logo a la izquierda y los links a la derecha. (Pista: \`justify-content: space-between\`).\\n2. **Centrado Perfecto:** Crear un \`div\` 'Hero' de altura completa (\`100vh\`) y centrar un texto perfectamente en el medio de la pantalla usando Flexbox.\\n3. **Galería de Tarjetas:** Tomar las tarjetas de la clase anterior, envolverlas en un contenedor flex y hacer que se distribuyan uniformemente (\`flex-wrap: wrap\`, \`gap: 20px\`)."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Flexbox",
            content: "Un modelo de diseño unidimensional diseñado para distribuir espacio entre elementos de una interfaz y mejorar las capacidades de alineación. Se activa con \`display: flex\` en el contenedor padre."
        },
        {
            type: "image",
            title: "Guía Visual Flexbox",
            content: "Propiedades de Justify Content y Align Items.",
            imageUrl: "https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg"
        },
        {
            type: "code",
            title: "Centrado Absoluto y Gap",
            codeLanguage: "css",
            content: \`.padre-centrado {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center; /* Vertical */
  height: 100vh;
}

.galeria {
  display: flex;
  flex-wrap: wrap; /* Permite múltiples líneas */
  gap: 20px; /* Espacio entre elementos (¡muy útil!) */
  justify-content: center;
}\`
        },
        {
            type: "task",
            title: "Actividad: Navbar y Galería Flex",
            content: "**Instrucciones:**\\n1. **Navbar:** Crea un \`<nav>\` con el logo a la izquierda y una lista de enlaces a la derecha usando Flexbox.\\n2. **Centrado Perfecto:** Crea un \`<div>\` 'Hero' de altura completa (\`100vh\`) y centra su contenido perfectamente.\\n3. **Galería:** Crea un contenedor para tus tarjetas de producto que use \`flex-wrap: wrap\` y \`gap\` para distribuirlas ordenadamente.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* Reset básico */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: sans-serif; }

/* 1. Navbar */
.navbar {
    display: flex;
    justify-content: space-between; /* Logo izq, links der */
    align-items: center; /* Centrado vertical */
    padding: 1rem 5%;
    background-color: #1e293b;
    color: white;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px; /* Espacio entre links */
}

.nav-links a {
    color: white;
    text-decoration: none;
}

/* 2. Hero Centrado Perfecto */
.hero {
    display: flex;
    flex-direction: column; /* Apila el contenido verticalmente */
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: #f1f5f9;
    text-align: center;
    gap: 15px;
}

/* 3. Galería de Tarjetas */
.productos-container {
    display: flex;
    flex-wrap: wrap; /* Clave para que bajen de línea */
    justify-content: center;
    gap: 30px; /* Espaciado moderno sin usar margin */
    padding: 50px 5%;
}

.card {
    /* flex-basis: 300px; flex-grow: 1; flex-shrink: 1; */
    flex: 1 1 300px; 
    max-width: 350px; /* Evita que crezcan demasiado */
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}\`
        }
    ]
};

const CLASS_10: ClassSession = {
    id: 10,
    title: "Responsive Design (Diseño Adaptable)",
    description: "Haciendo que la web funcione perfectamente en celulares, tablets y escritorio.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Entender el Viewport", "Usar Media Queries", "Implementar enfoque Mobile-First", "Crear layouts fluidos"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Filosofía Mobile First y Viewport",
            content: "**Problema:** Hoy día, más del 60% del tráfico es móvil. Si tu sitio no se ve bien en el celular, estás perdiendo a la mayoría de tus usuarios.\\n\\n**Meta Viewport:** Revisar que en el HTML esté: \`<meta name='viewport' content='width=device-width, initial-scale=1.0'>\`. Sin esto, el celular hace zoom out como si fuera una web de escritorio vieja, viéndose todo diminuto.\\n\\n**Mobile First:** Diseñar primero para la pantalla más pequeña (celular) y luego ir agregando complejidad para pantallas más grandes. Es más fácil escalar hacia arriba que comprimir hacia abajo."
        },
        {
            type: "code",
            title: "1:00 - 2:00 | Media Queries",
            content: "**La Magia:** CSS Condicional.\\n\`@media (min-width: 768px) { ... }\`\\n\\n**Traducción:** 'Navegador, aplica estas reglas SOLO SI la pantalla mide 768px o más (Tablet/PC)'.\\n\\n**Estrategia Mobile First:**\\n1. Escribir el CSS base pensando en el celular (una columna, todo vertical, 100% de ancho).\\n2. Agregar media query para Tablet (\`min-width: 768px\`) para cambiar a dos columnas.\\n3. Agregar media query para Desktop (\`min-width: 1024px\`) para tres o más columnas.",
            codeLanguage: "css"
        },
        {
            type: "script",
            title: "2:00 - 2:30 | Unidades Fluidas y Flexbox Responsive",
            content: "**Imágenes Responsivas:** \`img { max-width: 100%; height: auto; }\` (Evita que las imágenes se salgan de su contenedor).\\n\\n**Flexbox al rescate:** Cambiar \`flex-direction: column\` en móvil a \`flex-direction: row\` en desktop es el patrón más común en diseño responsive."
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Proyecto Unidad II: Landing Page Responsive",
            content: "**Desafío Final CSS:**\\nTomar el catálogo de productos de la clase anterior.\\n1. **Móvil (Base):** Las tarjetas deben estar una debajo de otra (\`flex-direction: column\` o \`width: 100%\`).\\n2. **Tablet (>= 768px):** Las tarjetas deben verse de a 2 en fila.\\n3. **Desktop (>= 1024px):** Las tarjetas deben verse de a 3 o 4 en fila.\\n4. El menú de navegación debe apilarse en móvil y estar en línea en desktop."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Media Queries y Mobile First",
            content: "Las Media Queries permiten aplicar estilos CSS condicionalmente basados en características del dispositivo, como el ancho de la pantalla. El enfoque 'Mobile First' implica escribir primero los estilos para móviles (fuera de las media queries) y luego usar \`@media (min-width: ...)\` para adaptar el diseño a pantallas más grandes."
        },
        {
            type: "code",
            title: "Estructura Mobile First",
            codeLanguage: "css",
            content: \`/* 1. Estilos base (Móvil) - Se aplican siempre */
.columna {
  width: 100%;
  padding: 10px;
}

/* 2. Tablet y superior (>= 768px) */
@media (min-width: 768px) {
  .columna {
    width: 50%; /* Dos columnas */
  }
}

/* 3. Desktop y superior (>= 1024px) */
@media (min-width: 1024px) {
  .columna {
    width: 33.33%; /* Tres columnas */
  }
}\`
        },
        {
            type: "code",
            title: "Imágenes Responsivas",
            codeLanguage: "css",
            content: \`/* Regla de oro para imágenes */
img {
  max-width: 100%; /* Nunca será más ancha que su contenedor */
  height: auto; /* Mantiene la proporción original */
  display: block;
}\`
        },
        {
            type: "task",
            title: "Proyecto Final Unidad II: Landing Page Responsive",
            content: "**Desafío Final CSS:**\\nToma el catálogo de productos de la clase anterior y hazlo responsive usando Flexbox y Media Queries.\\n1. **Móvil:** Las tarjetas deben ocupar el 100% del ancho.\\n2. **Tablet:** Las tarjetas deben verse de a 2 por fila.\\n3. **Desktop:** Las tarjetas deben verse de a 3 por fila.\\n4. Asegúrate de que las imágenes no se desborden.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* --- ESTILOS BASE (MÓVIL PRIMERO) --- */
.catalogo {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    width: 100%; /* Ocupa todo el ancho en móvil */
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    overflow: hidden; /* Para que la imagen respete el border-radius */
}

.card img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* --- TABLET (768px o más) --- */
@media (min-width: 768px) {
    .card {
        /* Restamos el gap (20px) dividido entre los elementos */
        width: calc(50% - 10px); /* 2 por fila */
    }
}

/* --- DESKTOP (1024px o más) --- */
@media (min-width: 1024px) {
    .card {
        width: calc(33.333% - 13.33px); /* 3 por fila */
    }
    
    /* Hover effect solo en desktop donde hay mouse */
    .card:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
}\`
        }
    ]
};`;

const regex = /const CLASS_6: ClassSession = \{[\s\S]*?const EXAM_1: ClassSession = \{/m;
const newContent = content.replace(regex, newClasses + '\n\nconst EXAM_1: ClassSession = {');

fs.writeFileSync('./constants.ts', newContent);
console.log('Done');
