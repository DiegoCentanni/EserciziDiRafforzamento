function Saluta(){
    let nome = document.getElementById("Nome").value;
    let genere = document.getElementById("Genere").value;
    let messaggio = document.getElementById("Messaggio").value;
    let inputnome = document.getElementById("Nome");

    if (Nome === "" ){
        Messaggio.innerText = "Inserire un nome";
        inputnome.style.border = "2px solid red";
    }
    if (Genere != Uomo || Genere != Donna){
        Messaggio.innerText = "Inserire un genere valido!";
    }
    






}