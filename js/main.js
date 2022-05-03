//creo il "database" in cui sono contenuti i dati
const users = ["antonio","luca","andrea"];
//faccio immetere l'user name da inserire
const  Insert = (prompt("Inserisci Nome Utente"));
for(let i = 0; i<users.length;i++){
if(users[i] === Insert){
    document.getElementById("visual").innerHTML = `Accesso Effettuato`;
}
else{
    document.getElementById("visual").innerHTML = `Accesso Negato`;
}
}