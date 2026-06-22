const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const scriptHtml = `\n<script>\n    window.addEventListener('load', function() {\n        document.body.classList.add('loaded');\n    });\n</script>\n`;

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            if (!content.includes('document.body.classList.add(\'loaded\')')) {
                content = content.replace(/<\/body>/i, `${scriptHtml}</body>`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Added preloader script to ${file}`);
            }
        }
    });
});
