const fs = require('fs');

let content = fs.readFileSync('./constants.ts', 'utf8');

// Fix the literal \n\n
content = content.replace(/\\n\\nconst CLASS_7/g, '\n\nconst CLASS_7');
content = content.replace(/\\n\\nconst CLASS_8/g, '\n\nconst CLASS_8');
content = content.replace(/\\n\\nconst CLASS_9/g, '\n\nconst CLASS_9');
content = content.replace(/\\n\\nconst CLASS_10/g, '\n\nconst CLASS_10');
content = content.replace(/\\n\\nconst EXAM_1/g, '\n\nconst EXAM_1');

fs.writeFileSync('./constants.ts', content);
console.log('Fixed newlines');
