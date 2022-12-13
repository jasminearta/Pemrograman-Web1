document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})

function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"]

    // Pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(() => alert("YEAAAAAAAAAAAY DRAAAW!"), 300);
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("Congratulations, User WIN!")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("Congratulations, User WINN!")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("Congratulations, User WINNN!")
    } 

    // Jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Congratulations, Komputer WIN!")
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Congratulations, Komputer WINN!")
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Congratulations, Komputer WINNN!")
    }
}
