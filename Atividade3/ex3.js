//Luana Aparecida Tavares
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll("#myList li");
    
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            
            items.forEach(function(i) {
                i.classList.remove("highlight");
            });

            item.classList.add("highlight");
        });
    });
});