var nome = window.prompt("Login:");
var senha = window.prompt("Senha:");

if(nome == "Raimundo" && senha == "0000"){
    window.location.assign("PaginaPrincipal.html");
    
}else {
    alert("Acesso negado");
   }
