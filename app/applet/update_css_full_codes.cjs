const fs = require('fs');
let content = fs.readFileSync('./constants.ts', 'utf8');

const newClasses = `const CLASS_6: ClassSession = {
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
            content: "**Analogía:** 'Si HTML es el esqueleto y los ladrillos de la casa, CSS es la pintura, el diseño de interiores y la arquitectura visual.'\\n\\n**El Puente (Vital):** Explicar que HTML y CSS son archivos separados que no se conocen hasta que los presentamos. Esa presentación se hace en el \`<head>\` del HTML con la etiqueta \`<link rel=\\"stylesheet\\" href=\\"style.css\\">\`."
        },
        {
            type: "script",
            title: "0:30 - 1:15 | Selectores: ¿Cómo sabe CSS a quién pintar?",
            content: "**La correspondencia exacta:**\\n1. **Selector de Etiqueta:** En CSS escribes \`h1\`. En HTML busca todos los \`<h1>\`.\\n2. **Selector de Clase (.):** En HTML agregas \`class=\\"caja-roja\\"\`. En CSS lo llamas con \`.caja-roja\`. (Se puede usar en muchos elementos).\\n3. **Selector de ID (#):** En HTML agregas \`id=\\"menu-principal\\"\`. En CSS lo llamas con \`#menu-principal\`. (Solo debe haber UNO por página)."
        },
        {
            type: "task",
            title: "1:15 - 4:00 | Ejercicio: Estilizando el 'Sobre Mí'",
            content: "**Consigna:** Vamos a ver la conexión en acción.\\n1. Crear \`index.html\` y \`style.css\`.\\n2. Vincularlos con \`<link>\`.\\n3. Copiar el código HTML de muestra y el código CSS de muestra para ver cómo interactúan."
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
            title: "CÓDIGO 1: Archivo HTML (index.html)",
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
  <!-- ID: Único en la página -->
  <img id="foto-perfil" src="https://via.placeholder.com/150" alt="Mi foto">
  
  <h1>Hola, soy Juan</h1>
  
  <!-- CLASE: Reutilizable en varios elementos -->
  <p>Soy un estudiante de <span class="destacado">Análisis de Sistemas</span>.</p>
  <p>Me encanta el <span class="destacado">Desarrollo Web</span>.</p>
</body>
</html>\`
        },
        {
            type: "code",
            title: "CÓDIGO 2: Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`/* Selector de Etiqueta: Afecta a todo el body */
body {
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
}

/* Selector de Etiqueta: Afecta a todos los h1 */
h1 {
  text-align: center;
  color: #2c3e50;
}

/* Selector de ID (#): Afecta SOLO al elemento con id="foto-perfil" */
#foto-perfil {
  width: 150px;
  border-radius: 50%; /* Lo hace circular */
  border: 3px solid #3498db;
  display: block;
  margin: 0 auto; /* Lo centra horizontalmente */
}

/* Selector de Clase (.): Afecta a CUALQUIER elemento con class="destacado" */
.destacado {
  color: #e67e22;
  font-weight: bold;
  background-color: #fdf2e9;
  padding: 2px 5px;
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
    objectives: ["Manejar códigos de colores (Hex, RGB, HSL)", "Importar fuentes de Google Fonts", "Trabajar con fondos e imágenes de fondo"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | El Mundo del Color y Tipografía",
            content: "**Formatos de Color:** Hexadecimal (\`#FF5733\`), RGB (\`rgb(255,0,0)\`).\\n**Fuentes:** Enseñar a entrar a Google Fonts, copiar el \`@import\` o el \`<link>\` y aplicarlo con \`font-family\`."
        },
        {
            type: "task",
            title: "1:00 - 4:00 | Práctica: Hero Section",
            content: "**Consigna:** Crear una sección principal (Hero) con una imagen de fondo, un gradiente superpuesto para que el texto se lea bien, y fuentes personalizadas."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Fondos, Gradientes y Fuentes",
            content: "Aprenderemos a importar fuentes desde Google Fonts y a aplicar imágenes de fondo con gradientes superpuestos para mejorar la legibilidad."
        },
        {
            type: "code",
            title: "CÓDIGO 1: Archivo HTML (index.html)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Hero Section</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <!-- Sección Hero con clase para el fondo -->
  <header class="hero-section">
    <h1 class="titulo-principal">Bienvenidos a mi Portafolio</h1>
    <p class="subtitulo">Diseño y Desarrollo Web</p>
    <a href="#" class="btn-accion">Ver Trabajos</a>
  </header>

</body>
</html>\`
        },
        {
            type: "code",
            title: "CÓDIGO 2: Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`/* 1. Importar fuentes de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap');

/* 2. Variables de color (Buena práctica) */
:root {
  --color-primario: #e74c3c;
  --color-texto: #ffffff;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif; /* Fuente para textos normales */
}

/* 3. Estilos del Hero Section (Fondo e Imagen) */
.hero-section {
  /* Gradiente oscuro semitransparente + Imagen de fondo */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ocupa el 100% de la altura de la pantalla */
  
  /* Centrado básico del contenido interior */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-texto);
}

.titulo-principal {
  font-family: 'Montserrat', sans-serif; /* Fuente para títulos */
  font-size: 4rem;
  margin-bottom: 10px;
}

.subtitulo {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn-accion {
  background-color: var(--color-primario);
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
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
    objectives: ["Entender Content, Padding, Border y Margin", "Usar box-sizing: border-box"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Teoría: Todo es una Caja",
            content: "**Las 4 Capas:** Content (contenido), Padding (relleno interior), Border (borde), Margin (margen exterior).\\n\\n**El Truco del Box Sizing:** Explicar por qué \`box-sizing: border-box;\` es vital para que los anchos no se rompan al agregar padding."
        },
        {
            type: "task",
            title: "1:00 - 4:00 | Práctica: Tarjetas de Producto",
            content: "**Consigna:** Crear un HTML con varias tarjetas (cards) y aplicarles padding, margin y border en CSS para ver cómo se separan y respiran."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Box Model en Acción",
            content: "Vamos a crear tarjetas de producto. Observa cómo el HTML usa clases como \`.card\` y \`.card-body\`, y cómo el CSS les da forma usando márgenes (para separarlas entre sí) y padding (para separar el texto del borde)."
        },
        {
            type: "code",
            title: "CÓDIGO 1: Archivo HTML (index.html)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tarjetas Box Model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Contenedor general -->
  <div class="contenedor">
    
    <!-- Tarjeta 1 -->
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Producto 1</h2>
        <p class="card-text">Este es un ejemplo de cómo el padding da respiro al texto.</p>
      </div>
    </div>

    <!-- Tarjeta 2 -->
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Producto 2</h2>
        <p class="card-text">El margin separa esta tarjeta de la tarjeta de arriba.</p>
      </div>
    </div>

  </div>

</body>
</html>\`
        },
        {
            type: "code",
            title: "CÓDIGO 2: Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`/* 1. RESET UNIVERSAL (Obligatorio en todo proyecto) */
* {
  box-sizing: border-box; /* El padding no aumenta el ancho total */
  margin: 0;
  padding: 0;
}

body {
  background-color: #e2e8f0;
  font-family: sans-serif;
  padding: 40px; /* Padding al body para que no pegue a los bordes de la pantalla */
}

/* 2. Estilos de la Tarjeta */
.card {
  background-color: white;
  width: 300px; /* Ancho fijo */
  
  /* BOX MODEL EN ACCIÓN */
  border: 2px solid #cbd5e1; /* Borde visible */
  margin-bottom: 20px;       /* Margen EXTERIOR: separa las tarjetas entre sí */
  border-radius: 8px;        /* Bordes redondeados */
}

.card-body {
  /* BOX MODEL EN ACCIÓN */
  padding: 20px; /* Padding INTERIOR: separa el texto del borde de la tarjeta */
}

.card-title {
  margin-bottom: 10px; /* Margen inferior para separar el título del párrafo */
  color: #0f172a;
}

.card-text {
  color: #475569;
  line-height: 1.5;
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
    objectives: ["Dominar el contenedor flex", "Alinear ejes (justify-content, align-items)", "Crear una barra de navegación"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Conceptos de Flexbox",
            content: "**Padre e Hijos:** Flexbox se aplica al contenedor padre (\`display: flex\`). Los hijos se acomodan automáticamente.\\n**Ejes:** \`justify-content\` (eje principal, horizontal por defecto), \`align-items\` (eje cruzado, vertical por defecto)."
        },
        {
            type: "task",
            title: "1:00 - 4:00 | Práctica: Navbar con Flexbox",
            content: "**Consigna:** Crear una barra de navegación donde el Logo quede a la izquierda y los enlaces a la derecha, perfectamente centrados verticalmente."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Flexbox: Navbar y Galería",
            content: "Flexbox es ideal para alinear elementos. Al poner \`display: flex\` en un contenedor, sus hijos se colocan en fila. Usando \`justify-content: space-between\` podemos enviar un elemento a la izquierda y el resto a la derecha."
        },
        {
            type: "code",
            title: "CÓDIGO 1: Archivo HTML (index.html)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Navbar Flexbox</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Barra de Navegación -->
  <nav class="navbar">
    <div class="logo">MiSitio</div>
    
    <ul class="nav-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>

  <!-- Galería de elementos -->
  <section class="galeria">
    <div class="caja">1</div>
    <div class="caja">2</div>
    <div class="caja">3</div>
    <div class="caja">4</div>
  </section>

</body>
</html>\`
        },
        {
            type: "code",
            title: "CÓDIGO 2: Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: sans-serif; }

/* --- NAVBAR FLEXBOX --- */
.navbar {
  display: flex; /* Activa Flexbox */
  justify-content: space-between; /* Separa el logo (izq) de los links (der) */
  align-items: center; /* Centra verticalmente */
  
  background-color: #1e293b;
  color: white;
  padding: 15px 30px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex; /* Flexbox anidado para los links */
  gap: 20px; /* Espacio entre los enlaces */
  list-style: none; /* Quita las viñetas */
}

.nav-links a {
  color: white;
  text-decoration: none;
}

/* --- GALERÍA FLEXBOX --- */
.galeria {
  display: flex; /* Activa Flexbox */
  flex-wrap: wrap; /* Permite que los elementos bajen de línea si no caben */
  gap: 15px; /* Espacio entre cajas */
  padding: 40px;
  justify-content: center; /* Centra las cajas horizontalmente */
}

.caja {
  background-color: #3b82f6;
  color: white;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center; /* Centra el número horizontalmente */
  align-items: center; /* Centra el número verticalmente */
  font-size: 2rem;
  border-radius: 8px;
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
    objectives: ["Entender el Viewport", "Usar Media Queries", "Implementar enfoque Mobile-First"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Viewport y Mobile First",
            content: "**Meta Viewport:** Revisar que en el HTML esté: \`<meta name='viewport' content='width=device-width, initial-scale=1.0'>\`.\\n**Mobile First:** Diseñar primero para celular (1 columna) y luego usar Media Queries para pantallas grandes."
        },
        {
            type: "task",
            title: "1:00 - 4:00 | Práctica: Grilla Responsive",
            content: "**Consigna:** Crear un contenedor con 4 artículos. En celular se ven en 1 columna. En tablet en 2 columnas. En PC en 4 columnas."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Media Queries y Mobile First",
            content: "Escribimos el CSS base pensando en celulares (100% de ancho). Luego, usamos \`@media (min-width: 768px)\` para cambiar el diseño cuando la pantalla es más grande (Tablet o Desktop)."
        },
        {
            type: "code",
            title: "CÓDIGO 1: Archivo HTML (index.html)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <!-- VITAL PARA RESPONSIVE: Le dice al celular que no haga zoom out -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño Responsive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="grid-responsive">
    <article class="item">Artículo 1</article>
    <article class="item">Artículo 2</article>
    <article class="item">Artículo 3</article>
    <article class="item">Artículo 4</article>
  </div>

</body>
</html>\`
        },
        {
            type: "code",
            title: "CÓDIGO 2: Archivo CSS (style.css)",
            codeLanguage: "css",
            content: \`* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }

.grid-responsive {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  background-color: #10b981;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  
  /* 1. DISEÑO MÓVIL (Por defecto) */
  /* Ocupa el 100% del ancho de la pantalla */
  width: 100%; 
}

/* 2. DISEÑO TABLET (Pantallas de 768px o más) */
@media (min-width: 768px) {
  .item {
    /* Ocupa el 50% menos la mitad del gap para que entren 2 por fila */
    width: calc(50% - 10px); 
    background-color: #3b82f6; /* Cambiamos color para notar el cambio */
  }
}

/* 3. DISEÑO ESCRITORIO (Pantallas de 1024px o más) */
@media (min-width: 1024px) {
  .item {
    /* Ocupa el 25% para que entren 4 por fila */
    width: calc(25% - 15px); 
    background-color: #8b5cf6; /* Cambiamos color para notar el cambio */
  }
}\`
        }
    ]
};`;

const regex = /const CLASS_6: ClassSession = \{[\s\S]*?const EXAM_1: ClassSession = \{/m;
const newContent = content.replace(regex, newClasses + '\n\nconst EXAM_1: ClassSession = {');

fs.writeFileSync('./constants.ts', newContent);
console.log('Done');
