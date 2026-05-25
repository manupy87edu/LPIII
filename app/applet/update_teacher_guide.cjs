const fs = require('fs');

let content = fs.readFileSync('./constants.ts', 'utf8');

const startStr = 'title: "0:30 - 1:15 | Formas de aplicar CSS",';
const endStr = 'title: "1:15 - 2:30 | Selectores: ¿A quién pintamos?",';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    // Find the beginning of the object
    const blockStart = content.lastIndexOf('{', startIdx);
    // Find the end of the object (comma before the next title)
    const blockEnd = content.lastIndexOf('{', endIdx);

    const replacement = `{
            type: "script",
            title: "0:30 - 1:15 | Formas de aplicar CSS",
            content: "**Las 3 formas de aplicar CSS:**\\n\\n**1. CSS en línea (Inline):** Se aplica directamente en la etiqueta HTML usando el atributo \`style\`.\\n*Explicación:* Es una mala práctica porque mezcla estructura con diseño, haciendo que el código sea sucio y difícil de mantener.\\n\\n**2. CSS Interno:** Se escribe dentro de la etiqueta \`<style>\` en el \`<head>\` del HTML.\\n*Explicación:* Útil para pruebas rápidas, pero no permite reutilizar estilos en otras páginas.\\n\\n**3. CSS Externo (La mejor práctica):** Se crea un archivo separado (ej. \`style.css\`) y se vincula al HTML.\\n*Explicación:* Mantiene el código limpio, separado y permite que múltiples archivos HTML usen el mismo diseño centralizado.\\n\\n**¿Cómo interactúan y se conectan?**\\nLa magia ocurre en la sección \`<head>\` del archivo HTML. Usamos la etiqueta \`<link>\` para crear un puente de comunicación entre ambos archivos. El HTML le dice al navegador: *'Oye, antes de mostrar esta página, ve a buscar las reglas de diseño a este otro archivo'*.\\n\\nLa línea exacta de conexión es:\\n\`<link rel=\\"stylesheet\\" href=\\"style.css\\">\`\\n- \`rel=\\"stylesheet\\"\`: Indica que la relación es una hoja de estilos.\\n- \`href=\\"style.css\\"\`: Es la ruta exacta del archivo CSS.\\n\\n**CÓDIGOS PARA MOSTRAR A LOS ALUMNOS (Copiar y Pegar):**\\n\\n**Archivo: index.html**\\n\`\`\`html\\n<!DOCTYPE html>\\n<html lang=\\"es\\">\\n<head>\\n  <meta charset=\\"UTF-8\\">\\n  <title>Formas de CSS</title>\\n  \\n  <!-- FORMA 2: CSS Interno (Dentro del head) -->\\n  <style>\\n    h2 { color: blue; }\\n  </style>\\n\\n  <!-- FORMA 3: CSS Externo (EL PUENTE VITAL) -->\\n  <!-- Esta línea conecta este HTML con el archivo style.css -->\\n  <link rel=\\"stylesheet\\" href=\\"style.css\\">\\n</head>\\n<body>\\n  <!-- FORMA 1: CSS En línea -->\\n  <h1 style=\\"color: red;\\">Soy un título rojo (En línea)</h1>\\n  \\n  <h2>Soy un subtítulo azul (Interno)</h2>\\n  \\n  <p>Soy un párrafo verde (Externo)</p>\\n</body>\\n</html>\\n\`\`\`\\n\\n**Archivo: style.css**\\n\`\`\`css\\n/* Este archivo se comunica con el HTML gracias a la etiqueta <link> */\\n\\np {\\n  color: green;\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\`\`\`"
        },
        `;

    const newContent = content.substring(0, blockStart) + replacement + content.substring(blockEnd);
    fs.writeFileSync('./constants.ts', newContent);
    console.log('Update successful');
} else {
    console.log('Could not find markers');
}
