// Toggle visibility of answers
document.querySelectorAll('.feature-item h3').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.feature-item p').forEach(p => p.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
    });
});