const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Find elements with specific classes and add data-aos="fade-up" if they don't have it
            const classesToAnimate = [
                'panel',
                'stat-card',
                'dashboard-header',
                'content-section',
                'login-box',
                'hero-content',
                'footer-col'
            ];

            classesToAnimate.forEach(cls => {
                // Regex to find elements with the class
                const regex = new RegExp(`<([^>]+)class="([^"]*)\\b${cls}\\b([^"]*)"([^>]*)>`, 'g');
                content = content.replace(regex, (match, p1, p2, p3, p4) => {
                    if (!match.includes('data-aos')) {
                        return `<${p1}class="${p2}${cls}${p3}"${p4} data-aos="fade-up">`;
                    }
                    return match;
                });
            });

            // Also for <section>
            content = content.replace(/<section([^>]*)>/g, (match, p1) => {
                if (!p1.includes('data-aos')) {
                    return `<section${p1} data-aos="fade-up">`;
                }
                return match;
            });

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated more elements in ${file}`);
        }
    });
});
