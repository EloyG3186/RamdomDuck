let loadFox = () => {

    let generar = document.getElementById("generar")

    generar.addEventListener("click", () => {

        let URL = "https://randomfox.ca/floof/"
        let nZorros = document.getElementById("cantidad").value
        console.log("nZorros:" + nZorros)

        let cards = document.getElementById("cards")
        let plantilla = ""
        cards.innerHTML = ""
        for (let i = 1; i <= nZorros; i++) {
            fetch(URL)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    plantilla = `<div class="card" id="img${i}"> <img src="${result.image}" alt=""> </div>`
                    cards.innerHTML += plantilla
                })

                .catch(error => {

                    console.log(error);

                });
        }
        
    })
}

loadFox();