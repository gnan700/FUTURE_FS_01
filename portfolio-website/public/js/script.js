document.querySelectorAll('.project-filter button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const projects = document.querySelectorAll('.project-list .project');
        
        projects.forEach(project => {
            project.style.display = (category === 'all' || project.dataset.category === category) ? 'block' : 'none';
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});
