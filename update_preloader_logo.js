const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const oldSpinnerHtml = '<div class="spinner"></div>';
const newLogoHtml = '<img src="assets/images/logo.webp" alt="Loading Stackly..." class="preloader-logo">';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            if (content.includes(oldSpinnerHtml)) {
                content = content.replace(oldSpinnerHtml, newLogoHtml);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated preloader in ${file}`);
            }
        }
    });
});
