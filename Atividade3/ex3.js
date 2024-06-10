document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll("#myList li");
    
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remove a classe de destaque de todos os itens
            items.forEach(function(i) {
                i.classList.remove("highlight");
            });

            // Adiciona a classe de destaque ao item clicado
            item.classList.add("highlight");
        });
    });
});