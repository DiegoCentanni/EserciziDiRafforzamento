function SalutaFN(){
    let nome = document.getElementById("Nome").value; 
    let genere = document.getElementById("Genere").value;
    let messaggio = document.getElementById("MessaggioDiBenvenuto");
    let inputnome = document.getElementById("Nome");
    if (nome === "" ){
        document.getElementById("MessaggioDiBenvenuto").innerText = "Inserire un nome";
        inputnome.style.border = "2px solid red";
    }
    if (genere != "Uomo" && genere != "Donna"){
        messaggio.innerText = "Inserire un genere valido!";
        inputnome.style.border = "2px solid red"
    }
    else if (genere === "Uomo"){
        messaggio.innerText = "Ciao " + nome + " Benevenuto!"
        messaggio.style.color = "blue"
    }
    else if (genere === "Donna"){
         messaggio.innerText = "Ciao " + nome + " Benvenuta!"
         messaggio.style.color= "pink"
    }
}