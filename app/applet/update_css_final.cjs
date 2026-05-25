const fs = require('fs');

const class6 = `const CLASS_6: ClassSession = {
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
            title: "0:00 - 0:30 | Introducción a CSS",
            content: "**Analogía:** 'Si HTML es el esqueleto y los ladrillos de la casa, CSS es la pintura, el diseño de interiores y la arquitectura visual.'\\n\\n**El Puente (Vital):** Explicar que HTML y CSS son archivos separados que no se conocen hasta que los presentamos. Esa presentación se hace en el \`<head>\` del HTML con la etiqueta \`<link rel=\\"stylesheet\\" href=\\"style.css\\">\`."
        },
        {
            type: "code",
            title: "0:30 - 1:15 | Formas de aplicar CSS",
            content: "Muestra a los alumnos las 3 formas de aplicar CSS. Explica por qué el archivo externo es la mejor práctica.",
            codeLanguage: "html",
            codeSnippet: \`<!-- 1. En línea (Mala práctica) -->\\n<h1 style="color: red;">Título Rojo</h1>\\n\\n<!-- 2. Interno (Para pruebas) -->\\n<style>\\n  p { color: blue; }\\n</style>\\n\\n<!-- 3. Externo (Profesional) -->\\n<link rel="stylesheet" href="style.css">\`
        },
        {
            type: "script",
            title: "1:15 - 2:30 | Selectores: ¿A quién pintamos?",
            content: "**La correspondencia exacta:**\\n1. **Selector de Etiqueta:** En CSS escribes \`h1\`. En HTML busca todos los \`<h1>\`.\\n2. **Selector de Clase (.):** En HTML agregas \`class=\\"caja-roja\\"\`. En CSS lo llamas con \`.caja-roja\`. (Se puede usar en muchos elementos).\\n3. **Selector de ID (#):** En HTML agregas \`id=\\"menu-principal\\"\`. En CSS lo llamas con \`#menu-principal\`. (Solo debe haber UNO por página)."
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Práctica Guiada",
            content: "Pide a los alumnos que creen un archivo HTML y uno CSS, los vinculen y apliquen estilos usando los tres tipos de selectores vistos."
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
            title: "Ejemplo 1: Vinculación y Selectores (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Mi Primera Web con CSS</title>\\n  <!-- Conectamos el HTML con el CSS -->\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <!-- Selector de ID: Único en la página -->\\n  <h1 id="titulo-principal">Bienvenidos a mi Web</h1>\\n  \\n  <!-- Selector de Etiqueta -->\\n  <p>Este es un párrafo normal.</p>\\n  \\n  <!-- Selector de Clase: Reutilizable -->\\n  <p class="destacado">Este párrafo es muy importante.</p>\\n  <p>Otro párrafo normal, pero con una <span class="destacado">palabra destacada</span>.</p>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Vinculación y Selectores (CSS)",
            codeLanguage: "css",
            content: \`/* style.css */\\n\\n/* Selector de Etiqueta: Afecta a todos los <p> */\\np {\\n  font-family: Arial, sans-serif;\\n  color: #333333;\\n}\\n\\n/* Selector de ID (#): Afecta SOLO al elemento con id="titulo-principal" */\\n#titulo-principal {\\n  color: #2c3e50;\\n  text-align: center;\\n  text-transform: uppercase;\\n}\\n\\n/* Selector de Clase (.): Afecta a CUALQUIER elemento con class="destacado" */\\n.destacado {\\n  color: #e74c3c;\\n  font-weight: bold;\\n  background-color: #fadbd8;\\n  padding: 5px;\\n}\`
        },
        {
            type: "theory",
            title: "Cascada y Especificidad",
            content: "**Cascada:** CSS se lee de arriba hacia abajo. Si hay dos reglas iguales, la última gana.\\n**Especificidad:** Es el 'peso' de un selector. Un ID pesa más que una Clase, y una Clase pesa más que una Etiqueta."
        },
        {
            type: "code",
            title: "Ejemplo 2: Cascada y Especificidad (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Cascada y Especificidad</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <h2 class="titulo-secundario" id="titulo-especial">¿De qué color seré?</h2>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Cascada y Especificidad (CSS)",
            codeLanguage: "css",
            content: \`/* style.css */\\n\\n/* Regla 1: Etiqueta (Peso bajo) */\\nh2 {\\n  color: green;\\n}\\n\\n/* Regla 2: Clase (Peso medio) - Gana sobre la etiqueta */\\n.titulo-secundario {\\n  color: blue;\\n}\\n\\n/* Regla 3: ID (Peso alto) - Gana sobre la clase y la etiqueta */\\n#titulo-especial {\\n  color: red; /* El título será ROJO */\\n}\`
        },
        {
            type: "task",
            title: "Actividad: Tarjeta de Perfil",
            content: "Crea una tarjeta de perfil simple.\\n1. Crea \`index.html\` y \`style.css\`.\\n2. En HTML, crea un contenedor \`<div>\` con clase \`perfil\`. Dentro, pon una imagen, un \`<h2>\` para el nombre y un \`<p>\` para la descripción.\\n3. En CSS, dale un color de fondo al body, centra el texto de la tarjeta y ponle un borde.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- index.html -->\\n<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Perfil</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="perfil">\\n    <img src="https://via.placeholder.com/100" alt="Foto" id="foto-perfil">\\n    <h2 class="nombre">Ana García</h2>\\n    <p>Desarrolladora Web Frontend</p>\\n  </div>\\n</body>\\n</html>\\n\\n/* style.css */\\nbody {\\n  background-color: #f0f2f5;\\n  font-family: sans-serif;\\n}\\n\\n.perfil {\\n  background-color: white;\\n  width: 300px;\\n  margin: 50px auto;\\n  padding: 20px;\\n  border: 1px solid #ccc;\\n  border-radius: 10px;\\n  text-align: center;\\n}\\n\\n#foto-perfil {\\n  border-radius: 50%;\\n}\\n\\n.nombre {\\n  color: #3b5998;\\n}\`
        }
    ]
};`;

const class7 = `const CLASS_7: ClassSession = {
    id: 7,
    title: "Colores, Fondos y Tipografía",
    description: "Estilizado visual avanzado, manejo de fuentes y fondos.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Manejar códigos de colores (Hex, RGB, HSL)", "Importar fuentes de Google Fonts", "Trabajar con fondos e imágenes de fondo"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | El Mundo del Color",
            content: "**Formatos de Color:**\\n- **Palabras clave:** \`red\`, \`blue\` (Limitado).\\n- **Hexadecimal:** \`#FF5733\` (Muy usado, 6 caracteres).\\n- **RGB/RGBA:** \`rgba(255, 0, 0, 0.5)\` (Permite transparencia/canal Alpha).\\n- **Variables CSS:** Enseñar a usar \`:root\` para guardar colores y reutilizarlos."
        },
        {
            type: "script",
            title: "1:00 - 2:00 | Tipografía con Google Fonts",
            content: "Muestra en vivo cómo entrar a fonts.google.com, seleccionar una fuente (ej. Roboto o Montserrat), copiar el código \`@import\` o \`<link>\` y aplicarlo en el CSS con \`font-family\`."
        },
        {
            type: "code",
            title: "2:00 - 2:30 | Fondos e Imágenes",
            content: "Explica cómo poner una imagen de fondo y cómo oscurecerla con un gradiente para que el texto blanco se lea bien.",
            codeLanguage: "css",
            codeSnippet: \`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('foto.jpg');\\nbackground-size: cover;\\nbackground-position: center;\`
        },
        {
            type: "task",
            title: "2:30 - 4:00 | Práctica: Hero Section",
            content: "Los alumnos deben crear la sección principal (Hero) de una página web, aplicando una imagen de fondo, una fuente de Google Fonts y colores mediante variables."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Variables de Color y Tipografía",
            content: "Las variables CSS (\`--nombre\`) nos permiten guardar colores para no tener que recordar códigos hexadecimales. Google Fonts nos da acceso a miles de tipografías gratuitas."
        },
        {
            type: "code",
            title: "Ejemplo 1: Variables y Fuentes (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Colores y Fuentes</title>\\n  <!-- Importamos la fuente 'Poppins' desde Google Fonts -->\\n  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="caja-alerta">\\n    <h1>¡Atención!</h1>\\n    <p>Este es un mensaje importante usando variables de color.</p>\\n    <button class="btn-primario">Aceptar</button>\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Variables y Fuentes (CSS)",
            codeLanguage: "css",
            content: \`/* Definimos las variables en la raíz del documento */\\n:root {\\n  --color-primario: #3498db;\\n  --color-peligro: #e74c3c;\\n  --color-texto: #333333;\\n  --fuente-principal: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n  font-family: var(--fuente-principal);\\n  color: var(--color-texto);\\n}\\n\\n.caja-alerta {\\n  border-left: 5px solid var(--color-peligro);\\n  background-color: #fdf2f0;\\n  padding: 20px;\\n  margin: 20px;\\n}\\n\\n.caja-alerta h1 {\\n  color: var(--color-peligro);\\n}\\n\\n.btn-primario {\\n  background-color: var(--color-primario);\\n  color: white;\\n  border: none;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  font-family: var(--fuente-principal);\\n  font-weight: 700;\\n  cursor: pointer;\\n}\`
        },
        {
            type: "theory",
            title: "Imágenes de Fondo y Gradientes",
            content: "La propiedad \`background-image\` permite usar imágenes o gradientes. Un truco muy común es superponer un gradiente oscuro semitransparente sobre una imagen para que el texto superpuesto sea legible."
        },
        {
            type: "code",
            title: "Ejemplo 2: Hero Section (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Hero Section</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <header class="hero">\\n    <div class="hero-contenido">\\n      <h1>Explora el Mundo</h1>\\n      <p>Descubre destinos increíbles para tus próximas vacaciones.</p>\\n      <a href="#" class="btn-hero">Ver Destinos</a>\\n    </div>\\n  </header>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Hero Section (CSS)",
            codeLanguage: "css",
            content: \`body {\\n  margin: 0;\\n  font-family: Arial, sans-serif;\\n}\\n\\n.hero {\\n  /* Gradiente negro al 60% de opacidad + Imagen de fondo */\\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), \\n                    url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1');\\n  background-size: cover; /* Cubre todo el espacio */\\n  background-position: center; /* Centra la imagen */\\n  height: 100vh; /* 100% de la altura de la pantalla */\\n  \\n  /* Flexbox para centrar el contenido (se verá a fondo en otra clase) */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n.hero-contenido {\\n  color: white;\\n}\\n\\n.hero-contenido h1 {\\n  font-size: 4rem;\\n  margin-bottom: 10px;\\n}\\n\\n.hero-contenido p {\\n  font-size: 1.5rem;\\n  margin-bottom: 30px;\\n}\\n\\n.btn-hero {\\n  background-color: #f1c40f;\\n  color: #333;\\n  padding: 15px 30px;\\n  text-decoration: none;\\n  font-weight: bold;\\n  border-radius: 30px;\\n  font-size: 1.2rem;\\n}\`
        },
        {
            type: "task",
            title: "Actividad: Crea tu propio Hero",
            content: "Utilizando el Ejemplo 2 como base, crea un Hero Section para una cafetería. Cambia la imagen de fondo, usa una fuente elegante de Google Fonts para el título, y ajusta los colores del botón.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- El docente puede mostrar cómo cambiar la URL de la imagen, \\nimportar una fuente como 'Playfair Display' y aplicarla al h1 -->\`
        }
    ]
};`;

const class8 = `const CLASS_8: ClassSession = {
    id: 8,
    title: "El Modelo de Caja (Box Model)",
    description: "El concepto más importante de CSS para estructurar layouts.",
    duration: "4h",
    type: "Teórico-Práctico",
    objectives: ["Entender Content, Padding, Border y Margin", "Usar box-sizing: border-box", "Comprender el colapso de márgenes"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Teoría: Todo es una Caja",
            content: "**Concepto Fundamental:** En web, hasta un círculo es una caja cuadrada invisible.\\n\\n**Las 4 Capas (De adentro hacia afuera):**\\n1. **Content:** El texto o imagen real.\\n2. **Padding:** El relleno (Espacio entre el contenido y el borde). Toma el color de fondo.\\n3. **Border:** El límite visible.\\n4. **Margin:** El espacio personal (Espacio entre esta caja y las vecinas). Es transparente.\\n\\n**Dibujo en Pizarra:** Dibuja un cuadro enmarcado. La pintura es el content, el paspartú es el padding, el marco de madera es el border, y la distancia a otros cuadros en la pared es el margin."
        },
        {
            type: "code",
            title: "1:00 - 1:30 | El Truco del Box Sizing",
            content: "**Problema:** Si tengo un div de \`width: 200px\` y le agrego \`padding: 20px\`, el ancho real pasa a ser 240px. Esto rompe los diseños.\\n**Solución:** \`box-sizing: border-box;\`. Hace que el padding crezca hacia adentro.",
            codeLanguage: "css",
            codeSnippet: \`/* Reset Universal (Enseñar a ponerlo siempre) */\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\`
        },
        {
            type: "script",
            title: "1:30 - 2:00 | Display: Block vs Inline",
            content: "**Block:** Ocupa todo el ancho, fuerza salto de línea (div, p, h1).\\n**Inline:** Ocupa solo su contenido, no acepta margin/padding vertical (span, a).\\n**Inline-block:** Como inline, pero SÍ acepta dimensiones y márgenes."
        },
        {
            type: "task",
            title: "2:00 - 4:00 | Práctica: Tarjetas de Producto",
            content: "Crear tarjetas de producto aplicando padding interno, margin externo, bordes y sombras para ver el Box Model en acción."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "El Modelo de Caja (Box Model)",
            content: "Cada elemento HTML es una caja rectangular. El **Padding** da espacio interior (respiro al texto), el **Border** dibuja el límite, y el **Margin** separa la caja de otros elementos exteriores."
        },
        {
            type: "code",
            title: "Ejemplo 1: Padding vs Margin (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Box Model</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="caja caja-1">\\n    Caja 1: Mucho Padding (Relleno interno)\\n  </div>\\n  \\n  <div class="caja caja-2">\\n    Caja 2: Mucho Margin (Separación externa)\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Padding vs Margin (CSS)",
            codeLanguage: "css",
            content: \`/* Reset básico */\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  background-color: #e2e8f0;\\n  padding: 20px;\\n}\\n\\n.caja {\\n  background-color: #3b82f6;\\n  color: white;\\n  border: 5px solid #1e3a8a;\\n  width: 300px;\\n}\\n\\n.caja-1 {\\n  /* El espacio crece hacia ADENTRO del borde */\\n  padding: 50px; \\n  margin-bottom: 10px;\\n}\\n\\n.caja-2 {\\n  padding: 10px;\\n  /* El espacio crece hacia AFUERA del borde, empujando a otros elementos */\\n  margin-top: 50px; \\n  margin-left: 50px;\\n}\`
        },
        {
            type: "theory",
            title: "Tarjetas de Componentes",
            content: "Aplicando el Box Model podemos crear componentes de interfaz como 'Cards' (Tarjetas). Usamos \`border-radius\` para redondear esquinas y \`box-shadow\` para dar profundidad."
        },
        {
            type: "code",
            title: "Ejemplo 2: Tarjetas de Producto (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Tarjetas</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="card">\\n    <img src="https://via.placeholder.com/300x150" alt="Producto" class="card-img">\\n    <div class="card-body">\\n      <h3 class="card-title">Zapatillas Deportivas</h3>\\n      <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>\\n      <a href="#" class="card-btn">Comprar Ahora</a>\\n    </div>\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Tarjetas de Producto (CSS)",
            codeLanguage: "css",
            content: \`* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: #f8fafc;\\n  font-family: Arial, sans-serif;\\n  padding: 40px;\\n}\\n\\n.card {\\n  background-color: white;\\n  width: 300px;\\n  border-radius: 10px;\\n  overflow: hidden; /* Evita que la imagen se salga de los bordes redondeados */\\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra suave */\\n  margin-bottom: 30px;\\n}\\n\\n.card-img {\\n  width: 100%;\\n  display: block;\\n}\\n\\n.card-body {\\n  padding: 20px; /* Respiro interior para los textos */\\n}\\n\\n.card-title {\\n  margin-bottom: 10px;\\n  color: #333;\\n}\\n\\n.card-text {\\n  color: #666;\\n  margin-bottom: 20px;\\n  line-height: 1.5;\\n}\\n\\n.card-btn {\\n  display: inline-block; /* Permite padding y margin en un enlace <a> */\\n  background-color: #10b981;\\n  color: white;\\n  padding: 10px 20px;\\n  text-decoration: none;\\n  border-radius: 5px;\\n  text-align: center;\\n  width: 100%; /* Ocupa todo el ancho disponible */\\n}\`
        },
        {
            type: "task",
            title: "Actividad: Galería de Tarjetas",
            content: "Copia el código del Ejemplo 2 y duplica el HTML de la tarjeta para tener 3 productos diferentes. Ajusta los márgenes para que no estén pegadas.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- Simplemente duplicar el div.card varias veces en el HTML -->\`
        }
    ]
};`;

const class9 = `const CLASS_9: ClassSession = {
    id: 9,
    title: "Layouts Modernos: Flexbox",
    description: "Distribución de elementos en una dimensión de forma flexible.",
    duration: "4h",
    type: "Práctico",
    objectives: ["Dominar el contenedor flex", "Alinear ejes (justify-content, align-items)", "Crear una barra de navegación y galerías"],
    teacherGuide: [
        {
            type: "script",
            title: "0:00 - 1:00 | Conceptos de Flexbox",
            content: "**Padre e Hijos:** Flexbox se aplica al contenedor padre (\`display: flex\`). Los hijos directos se convierten en 'flex items' y se acomodan automáticamente en fila.\\n**Ejes:** \\n- \`justify-content\`: Alinea en el eje principal (horizontal por defecto).\\n- \`align-items\`: Alinea en el eje cruzado (vertical por defecto).\\n**Gap:** La forma moderna de separar elementos flex sin usar margin."
        },
        {
            type: "code",
            title: "1:00 - 1:30 | Demostración de Ejes",
            content: "Muestra en vivo cómo cambiar \`justify-content\` (center, space-between, space-around) afecta a los elementos.",
            codeLanguage: "css",
            codeSnippet: \`.contenedor {\\n  display: flex;\\n  justify-content: space-between; /* Separa los elementos a los extremos */\\n  align-items: center; /* Los centra verticalmente */\\n  gap: 20px; /* Espacio entre ellos */\\n}\`
        },
        {
            type: "task",
            title: "1:30 - 4:00 | Práctica: Navbar y Galería",
            content: "Los alumnos deben construir una barra de navegación (Logo a la izquierda, links a la derecha) y una galería de imágenes que se envuelva (\`flex-wrap\`) si no hay espacio."
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
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Navbar Flexbox</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <nav class="navbar">\\n    <div class="logo">MiLogo</div>\\n    <ul class="nav-links">\\n      <li><a href="#">Inicio</a></li>\\n      <li><a href="#">Servicios</a></li>\\n      <li><a href="#">Contacto</a></li>\\n    </ul>\\n  </nav>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Navbar con Flexbox (CSS)",
            codeLanguage: "css",
            content: \`* { margin: 0; padding: 0; box-sizing: border-box; }\\nbody { font-family: sans-serif; }\\n\\n.navbar {\\n  background-color: #1e293b;\\n  color: white;\\n  padding: 15px 30px;\\n  \\n  /* MAGIA FLEXBOX */\\n  display: flex; \\n  justify-content: space-between; /* Logo a la izq, links a la der */\\n  align-items: center; /* Centrado vertical */\\n}\\n\\n.logo {\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n}\\n\\n.nav-links {\\n  list-style: none;\\n  \\n  /* FLEXBOX ANIDADO para los enlaces */\\n  display: flex;\\n  gap: 20px; /* Espacio entre los enlaces */\\n}\\n\\n.nav-links a {\\n  color: white;\\n  text-decoration: none;\\n}\\n\\n.nav-links a:hover {\\n  color: #38bdf8;\\n}\`
        },
        {
            type: "theory",
            title: "Flex Wrap: Envolviendo elementos",
            content: "Por defecto, Flexbox intenta meter todos los elementos en una sola línea, encogiéndolos si es necesario. Con \`flex-wrap: wrap;\`, le decimos que si no caben, pasen a la siguiente línea. Ideal para galerías."
        },
        {
            type: "code",
            title: "Ejemplo 2: Galería Flex Wrap (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>Galería Flex</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="galeria">\\n    <div class="caja">1</div>\\n    <div class="caja">2</div>\\n    <div class="caja">3</div>\\n    <div class="caja">4</div>\\n    <div class="caja">5</div>\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Galería Flex Wrap (CSS)",
            codeLanguage: "css",
            content: \`body {\\n  padding: 40px;\\n  background-color: #f1f5f9;\\n}\\n\\n.galeria {\\n  display: flex;\\n  flex-wrap: wrap; /* Permite que bajen a la siguiente línea */\\n  gap: 20px; /* Espacio entre filas y columnas */\\n  justify-content: center; /* Centra las cajas en la pantalla */\\n}\\n\\n.caja {\\n  background-color: #8b5cf6;\\n  color: white;\\n  width: 200px;\\n  height: 200px;\\n  font-size: 3rem;\\n  \\n  /* Flexbox también sirve para centrar contenido dentro de un div */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  \\n  border-radius: 10px;\\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n}\`
        },
        {
            type: "task",
            title: "Actividad: Centrado Absoluto",
            content: "Usa Flexbox para centrar un único \`<div>\` exactamente en el medio de la pantalla (tanto vertical como horizontalmente). Pista: Necesitas que el \`body\` tenga \`height: 100vh\` y sea \`display: flex\`.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`body {\\n  margin: 0;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center; /* Centra horizontal */\\n  align-items: center; /* Centra vertical */\\n  background-color: #333;\\n}\\n.caja-centrada {\\n  width: 200px; height: 200px; background: white;\\n}\`
        }
    ]
};`;

const class10 = `const CLASS_10: ClassSession = {
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
            content: "**Meta Viewport:** Revisar que en el HTML esté: \`<meta name='viewport' content='width=device-width, initial-scale=1.0'>\`. Sin esto, el celular simula ser una pantalla de PC alejando el zoom.\\n**Mobile First:** Diseñar primero para celular (1 columna, 100% ancho) y luego usar Media Queries (\`min-width\`) para adaptar a pantallas grandes."
        },
        {
            type: "code",
            title: "1:00 - 1:30 | Sintaxis de Media Queries",
            content: "Muestra cómo escribir una media query. Explica que el código dentro de las llaves solo se ejecuta si se cumple la condición de la pantalla.",
            codeLanguage: "css",
            codeSnippet: \`/* Estilos para celular (por defecto) */\\n.caja { width: 100%; }\\n\\n/* Si la pantalla mide 768px o más (Tablet/PC) */\\n@media (min-width: 768px) {\\n  .caja { width: 50%; }\\n}\`
        },
        {
            type: "task",
            title: "1:30 - 4:00 | Práctica: Grilla Responsive",
            content: "Los alumnos deben crear un layout que en celular se vea en 1 columna, en tablet en 2 columnas, y en PC en 4 columnas."
        }
    ],
    contentBlocks: [
        {
            type: "theory",
            title: "Media Queries y Mobile First",
            content: "Escribimos el CSS base pensando en celulares. Luego, usamos \`@media (min-width: 768px)\` para cambiar el diseño cuando la pantalla es más grande. Esto es más eficiente y fácil de mantener."
        },
        {
            type: "code",
            title: "Ejemplo 1: Cambio de Color Responsive (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <!-- VITAL PARA RESPONSIVE -->\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Media Queries</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="mensaje">\\n    <h1>Redimensiona la ventana</h1>\\n    <p>El color de fondo cambiará según el tamaño de la pantalla.</p>\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Cambio de Color Responsive (CSS)",
            codeLanguage: "css",
            content: \`body {\\n  margin: 0;\\n  font-family: sans-serif;\\n  /* 1. DISEÑO MÓVIL (Por defecto) */\\n  background-color: #ef4444; /* Rojo en celular */\\n  color: white;\\n  text-align: center;\\n  padding: 50px;\\n}\\n\\n/* 2. DISEÑO TABLET (Pantallas de 768px o más) */\\n@media (min-width: 768px) {\\n  body {\\n    background-color: #3b82f6; /* Azul en tablet */\\n  }\\n}\\n\\n/* 3. DISEÑO ESCRITORIO (Pantallas de 1024px o más) */\\n@media (min-width: 1024px) {\\n  body {\\n    background-color: #10b981; /* Verde en PC */\\n  }\\n}\`
        },
        {
            type: "theory",
            title: "Grilla Responsive con Flexbox",
            content: "Combinando Flexbox (\`flex-wrap\`) y Media Queries, podemos cambiar el ancho de los elementos para crear grillas que se adaptan a cualquier pantalla."
        },
        {
            type: "code",
            title: "Ejemplo 2: Grilla Adaptable (HTML)",
            codeLanguage: "html",
            content: \`<!DOCTYPE html>\\n<html lang="es">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Grilla Responsive</title>\\n  <link rel="stylesheet" href="style.css">\\n</head>\\n<body>\\n  <div class="grid-container">\\n    <div class="item">1</div>\\n    <div class="item">2</div>\\n    <div class="item">3</div>\\n    <div class="item">4</div>\\n  </div>\\n</body>\\n</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Grilla Adaptable (CSS)",
            codeLanguage: "css",
            content: \`* { box-sizing: border-box; margin: 0; padding: 0; }\\nbody { padding: 20px; font-family: sans-serif; }\\n\\n.grid-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 20px;\\n}\\n\\n.item {\\n  background-color: #6366f1;\\n  color: white;\\n  padding: 40px;\\n  text-align: center;\\n  font-size: 2rem;\\n  border-radius: 8px;\\n  \\n  /* MOBILE FIRST: 1 columna (100% ancho) */\\n  width: 100%; \\n}\\n\\n/* TABLET: 2 columnas */\\n@media (min-width: 768px) {\\n  .item {\\n    /* 50% menos la mitad del gap (20px/2 = 10px) */\\n    width: calc(50% - 10px); \\n  }\\n}\\n\\n/* ESCRITORIO: 4 columnas */\\n@media (min-width: 1024px) {\\n  .item {\\n    /* 25% menos una porción del gap */\\n    width: calc(25% - 15px); \\n  }\\n}\`
        },
        {
            type: "task",
            title: "Actividad: Navbar Responsive",
            content: "Modifica el Navbar de la Clase 9. En versión móvil, los enlaces (\`ul\`) deben mostrarse en formato columna (\`flex-direction: column\`). En versión escritorio (\`@media min-width: 768px\`), deben mostrarse en fila (\`flex-direction: row\`).",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* Solución CSS */\\n.nav-links {\\n  display: flex;\\n  flex-direction: column; /* Móvil: Apilados */\\n  gap: 10px;\\n}\\n\\n@media (min-width: 768px) {\\n  .nav-links {\\n    flex-direction: row; /* PC: En línea */\\n    gap: 20px;\\n  }\\n}\`
        }
    ]
};`;

let content = fs.readFileSync('./constants.ts', 'utf8');

const startIdx = content.indexOf('const CLASS_6: ClassSession = {');
const endIdx = content.indexOf('const EXAM_1: ClassSession = {');

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + class6 + '\\n\\n' + class7 + '\\n\\n' + class8 + '\\n\\n' + class9 + '\\n\\n' + class10 + '\\n\\n' + content.substring(endIdx);
    fs.writeFileSync('./constants.ts', newContent);
    console.log('Update successful');
} else {
    console.log('Could not find markers');
}
