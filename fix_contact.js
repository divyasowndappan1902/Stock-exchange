const fs = require('fs');

const filePath = 'c:/Users/Admin/Desktop/Stock Exchange/contact.html';
let content = fs.readFileSync(filePath, 'utf8');

// The file is corrupted between the <select> element and the FAQ section.
// Let's find a reliable anchor before the corruption and after the corruption.
// Reliable anchor before: `<option value="sales">Institutional Sales</option>`
// Reliable anchor after: `What are your withdrawal fees?`

const beforeAnchor = '<option value="sales">Institutional Sales</option>';
const afterAnchor = 'What are your withdrawal fees?';

const correctMiddle = `
                            <option value="other">Other Inquiry</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="button" onclick="window.location.href='404.html'" class="cta-btn" style="width: 100%; justify-content: center; border: none; cursor: pointer;">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Section 4: Our Office Map -->
    <section class="section-dark" data-aos="fade-up">
        <div class="container">
            <h2 class="section-title" data-aos="fade-up">Our Office</h2>
            <div style="height: 500px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); position: relative;" data-aos="fade-up">
                <iframe src="https://maps.google.com/maps?q=Salem,+Tamil+Nadu,+India&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="mt-4 text-center">
                <h4 style="color: var(--accent-color); font-size: 20px; margin-bottom: 5px;">Salem, Tamil Nadu</h4>
                <p class="text-muted">Stackly Global Headquarters</p>
            </div>
        </div>
    </section>

    <!-- Section 5: FAQ -->
    <section class="section-light" data-aos="fade-up">
        <div class="container" style="max-width: 800px;">
            <h2 class="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
            
            <div style="border-bottom: 1px solid #ddd; padding: 20px 0;">
                <h3 style="font-size: 18px; color: var(--primary-color); cursor: pointer; display: flex; justify-content: space-between;">
                    How do I open an account?
                    <span>+</span>
                </h3>
                <p class="text-muted" style="margin-top: 15px; display: none;">Click the"Login" button, select"Create Account", and follow the on-screen instructions to submit your identity documents.</p>
            </div>
            
            <div style="border-bottom: 1px solid #ddd; padding: 20px 0;">
                <h3 style="font-size: 18px; color: var(--primary-color); cursor: pointer; display: flex; justify-content: space-between;">
                    What are your withdrawal fees?`;

const startIndex = content.indexOf(beforeAnchor) + beforeAnchor.length;
const endIndex = content.indexOf(afterAnchor) + afterAnchor.length;

if (startIndex > -1 && endIndex > -1) {
    const newContent = content.substring(0, startIndex) + correctMiddle + content.substring(endIndex);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed contact.html successfully.');
} else {
    console.log('Anchors not found.');
}
