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
            codeSnippet: \`<!-- 1. En línea (Mala práctica) -->
<h1 style="color: red;">Título Rojo</h1>

<!-- 2. Interno (Para pruebas) -->
<style>
  p { color: blue; }
</style>

<!-- 3. Externo (Profesional) -->
<link rel="stylesheet" href="style.css">\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Primera Web con CSS</title>
  <!-- Conectamos el HTML con el CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Selector de ID: Único en la página -->
  <h1 id="titulo-principal">Bienvenidos a mi Web</h1>
  
  <!-- Selector de Etiqueta -->
  <p>Este es un párrafo normal.</p>
  
  <!-- Selector de Clase: Reutilizable -->
  <p class="destacado">Este párrafo es muy importante.</p>
  <p>Otro párrafo normal, pero con una <span class="destacado">palabra destacada</span>.</p>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Vinculación y Selectores (CSS)",
            codeLanguage: "css",
            content: \`/* style.css */

/* Selector de Etiqueta: Afecta a todos los <p> */
p {
  font-family: Arial, sans-serif;
  color: #333333;
}

/* Selector de ID (#): Afecta SOLO al elemento con id="titulo-principal" */
#titulo-principal {
  color: #2c3e50;
  text-align: center;
  text-transform: uppercase;
}

/* Selector de Clase (.): Afecta a CUALQUIER elemento con class="destacado" */
.destacado {
  color: #e74c3c;
  font-weight: bold;
  background-color: #fadbd8;
  padding: 5px;
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cascada y Especificidad</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2 class="titulo-secundario" id="titulo-especial">¿De qué color seré?</h2>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Cascada y Especificidad (CSS)",
            codeLanguage: "css",
            content: \`/* style.css */

/* Regla 1: Etiqueta (Peso bajo) */
h2 {
  color: green;
}

/* Regla 2: Clase (Peso medio) - Gana sobre la etiqueta */
.titulo-secundario {
  color: blue;
}

/* Regla 3: ID (Peso alto) - Gana sobre la clase y la etiqueta */
#titulo-especial {
  color: red; /* El título será ROJO */
}\`
        },
        {
            type: "task",
            title: "Actividad: Tarjeta de Perfil",
            content: "Crea una tarjeta de perfil simple.\\n1. Crea \`index.html\` y \`style.css\`.\\n2. En HTML, crea un contenedor \`<div>\` con clase \`perfil\`. Dentro, pon una imagen, un \`<h2>\` para el nombre y un \`<p>\` para la descripción.\\n3. En CSS, dale un color de fondo al body, centra el texto de la tarjeta y ponle un borde.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Perfil</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="perfil">
    <img src="https://via.placeholder.com/100" alt="Foto" id="foto-perfil">
    <h2 class="nombre">Ana García</h2>
    <p>Desarrolladora Web Frontend</p>
  </div>
</body>
</html>

/* style.css */
body {
  background-color: #f0f2f5;
  font-family: sans-serif;
}

.perfil {
  background-color: white;
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

#foto-perfil {
  border-radius: 50%;
}

.nombre {
  color: #3b5998;
}\`
        }
    ]
};

const class7 = \`const CLASS_7: ClassSession = {
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
            codeSnippet: \`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('foto.jpg');
background-size: cover;
background-position: center;\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Colores y Fuentes</title>
  <!-- Importamos la fuente 'Poppins' desde Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caja-alerta">
    <h1>¡Atención!</h1>
    <p>Este es un mensaje importante usando variables de color.</p>
    <button class="btn-primario">Aceptar</button>
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Variables y Fuentes (CSS)",
            codeLanguage: "css",
            content: \`/* Definimos las variables en la raíz del documento */
:root {
  --color-primario: #3498db;
  --color-peligro: #e74c3c;
  --color-texto: #333333;
  --fuente-principal: 'Poppins', sans-serif;
}

body {
  font-family: var(--fuente-principal);
  color: var(--color-texto);
}

.caja-alerta {
  border-left: 5px solid var(--color-peligro);
  background-color: #fdf2f0;
  padding: 20px;
  margin: 20px;
}

.caja-alerta h1 {
  color: var(--color-peligro);
}

.btn-primario {
  background-color: var(--color-primario);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: var(--fuente-principal);
  font-weight: 700;
  cursor: pointer;
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Hero Section</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <div class="hero-contenido">
      <h1>Explora el Mundo</h1>
      <p>Descubre destinos increíbles para tus próximas vacaciones.</p>
      <a href="#" class="btn-hero">Ver Destinos</a>
    </div>
  </header>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Hero Section (CSS)",
            codeLanguage: "css",
            content: \`body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.hero {
  /* Gradiente negro al 60% de opacidad + Imagen de fondo */
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1');
  background-size: cover; /* Cubre todo el espacio */
  background-position: center; /* Centra la imagen */
  height: 100vh; /* 100% de la altura de la pantalla */
  
  /* Flexbox para centrar el contenido (se verá a fondo en otra clase) */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-contenido {
  color: white;
}

.hero-contenido h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.hero-contenido p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn-hero {
  background-color: #f1c40f;
  color: #333;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 30px;
  font-size: 1.2rem;
}\`
        },
        {
            type: "task",
            title: "Actividad: Crea tu propio Hero",
            content: "Utilizando el Ejemplo 2 como base, crea un Hero Section para una cafetería. Cambia la imagen de fondo, usa una fuente elegante de Google Fonts para el título, y ajusta los colores del botón.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- El docente puede mostrar cómo cambiar la URL de la imagen, 
importar una fuente como 'Playfair Display' y aplicarla al h1 -->\`
        }
    ]
};\`;

const class8 = \`const CLASS_8: ClassSession = {
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
            codeSnippet: \`/* Reset Universal (Enseñar a ponerlo siempre) */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caja caja-1">
    Caja 1: Mucho Padding (Relleno interno)
  </div>
  
  <div class="caja caja-2">
    Caja 2: Mucho Margin (Separación externa)
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Padding vs Margin (CSS)",
            codeLanguage: "css",
            content: \`/* Reset básico */
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #e2e8f0;
  padding: 20px;
}

.caja {
  background-color: #3b82f6;
  color: white;
  border: 5px solid #1e3a8a;
  width: 300px;
}

.caja-1 {
  /* El espacio crece hacia ADENTRO del borde */
  padding: 50px; 
  margin-bottom: 10px;
}

.caja-2 {
  padding: 10px;
  /* El espacio crece hacia AFUERA del borde, empujando a otros elementos */
  margin-top: 50px; 
  margin-left: 50px;
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tarjetas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <img src="https://via.placeholder.com/300x150" alt="Producto" class="card-img">
    <div class="card-body">
      <h3 class="card-title">Zapatillas Deportivas</h3>
      <p class="card-text">Calzado ideal para correr largas distancias con máxima comodidad.</p>
      <a href="#" class="card-btn">Comprar Ahora</a>
    </div>
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Tarjetas de Producto (CSS)",
            codeLanguage: "css",
            content: \`* {
  box-sizing: border-box;
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
  overflow: hidden; /* Evita que la imagen se salga de los bordes redondeados */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra suave */
  margin-bottom: 30px;
}

.card-img {
  width: 100%;
  display: block;
}

.card-body {
  padding: 20px; /* Respiro interior para los textos */
}

.card-title {
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-btn {
  display: inline-block; /* Permite padding y margin en un enlace <a> */
  background-color: #10b981;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  width: 100%; /* Ocupa todo el ancho disponible */
}\`
        },
        {
            type: "task",
            title: "Actividad: Galería de Tarjetas",
            content: "Copia el código del Ejemplo 2 y duplica el HTML de la tarjeta para tener 3 productos diferentes. Ajusta los márgenes para que no estén pegadas.",
            teacherSolutionLanguage: "html",
            teacherSolution: \`<!-- Simplemente duplicar el div.card varias veces en el HTML -->\`
        }
    ]
};\`;

const class9 = \`const CLASS_9: ClassSession = {
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
            codeSnippet: \`.contenedor {
  display: flex;
  justify-content: space-between; /* Separa los elementos a los extremos */
  align-items: center; /* Los centra verticalmente */
  gap: 20px; /* Espacio entre ellos */
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Navbar Flexbox</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <div class="logo">MiLogo</div>
    <ul class="nav-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Navbar con Flexbox (CSS)",
            codeLanguage: "css",
            content: \`* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: sans-serif; }

.navbar {
  background-color: #1e293b;
  color: white;
  padding: 15px 30px;
  
  /* MAGIA FLEXBOX */
  display: flex; 
  justify-content: space-between; /* Logo a la izq, links a la der */
  align-items: center; /* Centrado vertical */
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  
  /* FLEXBOX ANIDADO para los enlaces */
  display: flex;
  gap: 20px; /* Espacio entre los enlaces */
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  color: #38bdf8;
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Galería Flex</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="galeria">
    <div class="caja">1</div>
    <div class="caja">2</div>
    <div class="caja">3</div>
    <div class="caja">4</div>
    <div class="caja">5</div>
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Galería Flex Wrap (CSS)",
            codeLanguage: "css",
            content: \`body {
  padding: 40px;
  background-color: #f1f5f9;
}

.galeria {
  display: flex;
  flex-wrap: wrap; /* Permite que bajen a la siguiente línea */
  gap: 20px; /* Espacio entre filas y columnas */
  justify-content: center; /* Centra las cajas en la pantalla */
}

.caja {
  background-color: #8b5cf6;
  color: white;
  width: 200px;
  height: 200px;
  font-size: 3rem;
  
  /* Flexbox también sirve para centrar contenido dentro de un div */
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}\`
        },
        {
            type: "task",
            title: "Actividad: Centrado Absoluto",
            content: "Usa Flexbox para centrar un único \`<div>\` exactamente en el medio de la pantalla (tanto vertical como horizontalmente). Pista: Necesitas que el \`body\` tenga \`height: 100vh\` y sea \`display: flex\`.",
            teacherSolutionLanguage: "css",
            teacherSolution: \`body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center; /* Centra horizontal */
  align-items: center; /* Centra vertical */
  background-color: #333;
}
.caja-centrada {
  width: 200px; height: 200px; background: white;
}\`
        }
    ]
};\`;

const class10 = \`const CLASS_10: ClassSession = {
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
            codeSnippet: \`/* Estilos para celular (por defecto) */
.caja { width: 100%; }

/* Si la pantalla mide 768px o más (Tablet/PC) */
@media (min-width: 768px) {
  .caja { width: 50%; }
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <!-- VITAL PARA RESPONSIVE -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Queries</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="mensaje">
    <h1>Redimensiona la ventana</h1>
    <p>El color de fondo cambiará según el tamaño de la pantalla.</p>
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 1: Cambio de Color Responsive (CSS)",
            codeLanguage: "css",
            content: \`body {
  margin: 0;
  font-family: sans-serif;
  /* 1. DISEÑO MÓVIL (Por defecto) */
  background-color: #ef4444; /* Rojo en celular */
  color: white;
  text-align: center;
  padding: 50px;
}

/* 2. DISEÑO TABLET (Pantallas de 768px o más) */
@media (min-width: 768px) {
  body {
    background-color: #3b82f6; /* Azul en tablet */
  }
}

/* 3. DISEÑO ESCRITORIO (Pantallas de 1024px o más) */
@media (min-width: 1024px) {
  body {
    background-color: #10b981; /* Verde en PC */
  }
}\`
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
            content: \`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grilla Responsive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
</body>
</html>\`
        },
        {
            type: "code",
            title: "Ejemplo 2: Grilla Adaptable (CSS)",
            codeLanguage: "css",
            content: \`* { box-sizing: border-box; margin: 0; padding: 0; }
body { padding: 20px; font-family: sans-serif; }

.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  background-color: #6366f1;
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  border-radius: 8px;
  
  /* MOBILE FIRST: 1 columna (100% ancho) */
  width: 100%; 
}

/* TABLET: 2 columnas */
@media (min-width: 768px) {
  .item {
    /* 50% menos la mitad del gap (20px/2 = 10px) */
    width: calc(50% - 10px); 
  }
}

/* ESCRITORIO: 4 columnas */
@media (min-width: 1024px) {
  .item {
    /* 25% menos una porción del gap */
    width: calc(25% - 15px); 
  }
}\`
        },
        {
            type: "task",
            title: "Actividad: Navbar Responsive",
            content: "Modifica el Navbar de la Clase 9. En versión móvil, los enlaces (\`ul\`) deben mostrarse en formato columna (\`flex-direction: column\`). En versión escritorio (\`@media min-width: 768px\`), deben mostrarse en fila (\`flex-direction: row\`).",
            teacherSolutionLanguage: "css",
            teacherSolution: \`/* Solución CSS */
.nav-links {
  display: flex;
  flex-direction: column; /* Móvil: Apilados */
  gap: 10px;
}

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row; /* PC: En línea */
    gap: 20px;
  }
}\`
        }
    ]
};\`;

let content = fs.readFileSync('./constants.ts', 'utf8');
const regex = /const CLASS_6: ClassSession = \\{[\\s\\S]*?const EXAM_1: ClassSession = \\{/m;
const newContent = content.replace(regex, class6 + '\\n\\n' + class7 + '\\n\\n' + class8 + '\\n\\n' + class9 + '\\n\\n' + class10 + '\\n\\nconst EXAM_1: ClassSession = {');

fs.writeFileSync('./constants.ts', newContent);
console.log('Done');
