function addComment() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    
    if (name && message) {
        var commentList = document.getElementById("comment-list");
        var newComment = document.createElement("li");
        newComment.textContent = name + ": " + message;
        commentList.appendChild(newComment);
        
        // Limpar campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}