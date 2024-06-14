//Luana Aparecida Tavares
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `Número de palavras: ${words.length}`;
    });
});
