const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const preloaderHtml = `\n    <!-- Preloader -->\n    <div id="preloader">\n        <div class="spinner"></div>\n    </div>\n`;

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Only add if it doesn't already have it
            if (!content.includes('id="preloader"')) {
                // Add right after <body>
                content = content.replace(/<body([^>]*)>/i, `<body$1>${preloaderHtml}`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Added preloader to ${file}`);
            }
        }
    });
});
