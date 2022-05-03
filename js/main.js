//creo il "database" in cui sono contenuti i dati
const users = ["antonio886","luca942","andrea765"];
//faccio immetere l'user name da inserire
let Access = false;
const  Insert = (prompt("Inserisci Nome Utente"));
for(let i = 0; i<users.length;i++){
if(users[i] === Insert){
     Access = true;
}
}
if(Access === true){
    document.getElementById("visual").innerHTML = `Accesso Effettuato`;
}
else{
    document.getElementById("visual").innerHTML = `Accesso Negato`;
}