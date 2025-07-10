function filtrarCursos(filtro) {
    const cards = document.querySelectorAll('.curso');

    cards.forEach(card => {
        const categoria = card.getAttribute('data-categoria');
        if (filtro === 'todos' || categoria === filtro) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
