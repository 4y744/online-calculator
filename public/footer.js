let footer = `
<div class="footer-container">
            <h3 class="footer-container-title">Project</h3>
            <a href="https://github.com/4y744/online-calculator" target=”_blank” class="footer-container-link">GitHub</a>
            <a href="#" class="footer-container-link">Documentation</a>
        </div>
        <div class="footer-container">
            <h3 class="footer-container-title">Contact</h3>
            <a href="#" class="footer-container-link">email@email.com</a>
            <a href="#" class="footer-container-link">contact</a>
        </div>
        <div class="footer-container">
            <h3 class="footer-container-title">Copyright</h3>
            <a href="https://github.com/4y744/online-calculator" target=”_blank” class="footer-container-link">License (GitHub)</a>
            <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" class="footer-container-link">GNU 3.0</a>
</div>
`;

document.head.innerHTML += `<link rel="stylesheet" href="/css/footer.css">`;
document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', footer);