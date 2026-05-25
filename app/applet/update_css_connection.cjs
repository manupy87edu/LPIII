const fs = require('fs');
let content = fs.readFileSync('./constants.ts', 'utf8');

const newClass6 = `const CLASS_6: ClassSession = {
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
            title: "0:00 - 0:30 | ¿Qué es CSS y cómo se conecta?",
            content: "**Analogía:** 'Si HTML es el esqueleto y los ladrillos de la casa, CSS es la pintura, el diseño de interiores y la arquitectura visual.'\\n\\n**El Puente (Vital):** Explicar que HTML y CSS son archivos separados que no se conocen hasta que los presentamos. Esa presentación se hace en el \`<head>\` del HTML con la etiqueta \`<link rel=\\"stylesheet\\" href=\\"style.css\\">\`.\\n\\n**Sintaxis CSS:** Escribir en pizarra:\\n\`selector { propiedad: valor; }\`"
        },
        {
            type: "code",
            title: "0:30 - 1:15 | Dónde escribir CSS",
            content: "**Explicar 3 métodos:**\\n1. **En línea:** \`<h1 style='color: red;'>\` (Mala práctica, mezcla estructura y diseño).\\n2. **Interno:** \`<style>\` en el head (Útil para pruebas rápidas).\\n3. **Externo:** Archivo \`.css\` separado (El estándar profesional).\\n\\n**Práctica:** Crear \`style.css\`, vincularlo con \`<link>\` y cambiar el fondo del body a un color oscuro.",
            codeLanguage: "html"
        },
        {
            type: "script",
            title: "1:15 - 2:30 | Selectores: ¿Cómo sabe CSS a quién pintar?",
            content: "**La correspondencia exacta:**\\n\\n1. **Selector de Etiqueta:** En CSS escribes \`h1\`. En HTML busca todos los \`<h1>\`.\\n2. **Selector de Clase (.):** En HTML agregas \`class=\\"caja-roja\\"\`. En CSS lo llamas con \`.caja-roja\`. (Se puede usar en muchos elementos).\\n3. **Selector de ID (#):** En HTML agregas \`id=\\"menu-principal\\"\`. En CSS lo llamas con \`#menu-principal\`. (Solo debe haber UNO por página).\\n\\n**Ejemplo en pizarra:** Dibujar un HTML con \`<p class=\\"destacado\\">\` y al lado el CSS \`.destacado { color: gold; }\` y trazar una flecha entre ambos."
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Ejercicio: Estilizando el 'Sobre Mí'",
            content: "**Consigna:** Vamos a ver la conexión en acción.\\n1. Crear \`index.html\` y \`style.css\`.\\n2. Vincularlos con \`<link>\`.\\n3. En HTML, crear un \`<h1>\`, un \`<img id=\\"foto-perfil\\">\` y varios \`<p>\`. A algunas palabras clave ponerles \`<span class=\\"destacado\\">\`.\\n4. En CSS, dar estilo general al \`body\`, estilo único a \`#foto-perfil\` y estilo reutilizable a \`.destacado\`."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "La Conexión Vital: HTML y CSS",
            content: "Para que un archivo HTML sepa qué estilos aplicar, debemos 'vincularlo' al archivo CSS. Esto se hace dentro de la etiqueta \`<head>\` del HTML usando la etiqueta \`<link>\`. El atributo \`href\` debe apuntar exactamente al nombre de tu archivo CSS."
        },
        {
            type: "code",
            title: "1. El Archivo HTML (index.html)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Perfil</title>
  <!-- AQUÍ OCURRE LA MAGIA: Conectamos el HTML con el CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Usamos un ID porque solo hay una foto de perfil principal -->
  <img id="foto-perfil" src="mi-foto.jpg" alt="Mi foto">
  
  <h1>Hola, soy Juan</h1>
  
  <!-- Usamos una CLASE porque podemos querer destacar varias cosas -->
  <p>Soy un estudiante de <span class="destacado">Análisis de Sistemas</span>.</p>
  <p>Me encanta el <span class="destacado">Desarrollo Web</span>.</p>
</body>
</html>\`
        },
        {
            type: "theory",
            title: "Selectores: Apuntando a los elementos",
            content: "Una vez conectados, el CSS necesita saber a qué parte del HTML aplicarle color o tamaño. Para eso usamos los **Selectores**:\\n\\n*   **Etiqueta:** Escribir \`h1\` en CSS afecta a todos los \`<h1>\` del HTML.\\n*   **Clase (\`.\`):** Escribir \`.destacado\` en CSS afecta a cualquier etiqueta HTML que tenga \`class=\\"destacado\\"\`.\\n*   **ID (\`#\`):** Escribir \`#foto-perfil\` en CSS afecta a la única etiqueta HTML que tenga \`id=\\"foto-perfil\\"\`."
        },
        {
            type: "code",
            title: "2. El Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`/* Afecta a la etiqueta <body> entera */
body {
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
}

/* Afecta a todos los <h1> */
h1 {
  text-align: center;
  color: #2c3e50;
}

/* Afecta SOLO al elemento con id="foto-perfil" */
#foto-perfil {
  width: 150px;
  border-radius: 50%; /* Lo hace circular */
  border: 3px solid #3498db;
  display: block;
  margin: 0 auto; /* Lo centra */
}

/* Afecta a CUALQUIER elemento con class="destacado" */
.destacado {
  color: #e67e22;
  font-weight: bold;
  background-color: #fdf2e9;
  padding: 2px 5px;
}\`
        },
        {
            type: "task",
            title: "Actividad: Estilizando el 'Sobre Mí'",
            content: "Copia el código HTML del ejemplo anterior en tu archivo \`index.html\`. Luego, crea el archivo \`style.css\` y escribe las reglas CSS para lograr que:\\n1. El fondo de la página sea de un color suave.\\n2. Tu foto sea redonda y esté centrada.\\n3. Las palabras clave resalten con un color de fondo y texto diferente.\\n\\n**¡Experimenta!** Cambia los colores en el CSS y observa cómo se actualiza el HTML automáticamente gracias a la etiqueta \`<link>\`.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* La solución es replicar el código CSS mostrado en el bloque anterior. 
El objetivo principal es que el alumno entienda cómo el selector .destacado 
modifica a los <span> con class="destacado", y cómo #foto-perfil modifica al <img>. */\`
        }
    ]
}`;

const newClass8 = `const CLASS_8: ClassSession = {
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
            title: "Conectando HTML y CSS en Componentes",
            content: "Para crear componentes reutilizables como 'Tarjetas' (Cards), estructuramos el HTML con clases específicas y luego apuntamos a esas clases desde el CSS. Observa cómo cada etiqueta HTML tiene una clase que describe su función."
        },
        {
            type: "code",
            title: "1. Estructura HTML de las Tarjetas",
            codeLanguage: "html",
            content: \`<!-- Contenedor principal -->
<div class="contenedor-tarjetas">
  
  <!-- Tarjeta 1 -->
  <div class="card">
    <h3 class="card-title">Producto A</h3>
    <p class="card-text">Descripción breve del producto A.</p>
    <a href="#" class="card-btn">Comprar</a>
  </div>

  <!-- Tarjeta 2 -->
  <div class="card">
    <h3 class="card-title">Producto B</h3>
    <p class="card-text">Descripción breve del producto B.</p>
    <a href="#" class="card-btn">Comprar</a>
  </div>

</div>\`
        },
        {
            type: "task",
            title: "Actividad: Estilizando las Tarjetas",
            content: "Copia el HTML de arriba en tu \`index.html\`. Luego, en tu \`style.css\`, crea las reglas para que coincidan con las clases:\\n\\n- **\`.card\`**: Ancho fijo (ej: 300px), borde gris suave, padding interno (24px), margen exterior (20px), bordes redondeados y una sombra sutil (\`box-shadow\`).\\n- **\`.card-title\`**: Tamaño de fuente mayor, negrita, color oscuro.\\n- **\`.card-text\`**: Color gris, altura de línea cómoda para leer.\\n- **\`.card-btn\`**: Color de fondo azul, texto blanco, padding, sin subrayado (\`text-decoration: none\`) y bordes redondeados.",
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

/* Apuntamos a la clase .card del HTML */
.card {
    width: 320px;
    background-color: white;
    border: 1px solid #e2e8f0;
    padding: 24px;
    margin: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Apuntamos a los elementos internos de la tarjeta */
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
};`;

const class6Regex = /const CLASS_6: ClassSession = \{[\s\S]*?\n\};\n\nconst CLASS_7: ClassSession = \{/m;
const class8Regex = /const CLASS_8: ClassSession = \{[\s\S]*?\n\};\n\nconst CLASS_9: ClassSession = \{/m;

content = content.replace(class6Regex, newClass6 + '\n\nconst CLASS_7: ClassSession = {');
content = content.replace(class8Regex, newClass8 + '\n\nconst CLASS_9: ClassSession = {');

fs.writeFileSync('./constants.ts', content);
console.log('Update complete');
