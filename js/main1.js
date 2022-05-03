//creo il "database" in cui sono contenuti i dati
const users = ["antonio886","luca942","andrea765"];
//faccio immetere l'user name da inserire
const  Insert = (prompt("Inserisci Nome Utente"));
//dichiaro una variabile per stabilire se la condizione è vera o falsa
let Access = false;
//eseguo una verifica sul contenuto dell array
for(let i = 0; i<users.length;i++){
if(users[i] === Insert){
     Access = true;}}
// stampo il risultato
if(Access === true){
    document.getElementById("visual").innerHTML = `Accesso Effettuato`;}
else{
    document.getElementById("visual").innerHTML = `Accesso Negato`;}