    var user = localStorage.getItem("user");

    if(user != null && user !="") {
        document.getElementById("bem_vindo").innerHTML += `
            <p>Usuário: <span>${user}<span></p>
            `;
    }

    const API_KEY = "9465eddd"

    document.getElementById("submit").onclick = async () => {
        let lista_filmes = document.getElementById("lista_filmes");
        let search = document.getElementById("search").value;

        let response = await fetch("https://www.omdbapi.com/?s=" + search + "&apikey="+ API_KEY);
        let filmes = await response.json();

        lista_filmes.innerHTML = "";

        for (let i = 0; i < filmes.Search.length && i < 8; i++) {

                let response = await fetch(`https://www.omdbapi.com/?t=${filmes.Search[i].Title}&apikey=${API_KEY}`);
                let filme = await response.json();

                lista_filmes.innerHTML += `
                <div id='filme_container${i}' class='filme_container'>
                    <h3><span>Título:</span> ${filme.Title}</h3>
                    <p><span>Enredo:</span> "${filme.Plot}"</p>
                </div>
                `;

                document.getElementById(`filme_container${i}`).style.backgroundImage = `url('${filmes.Search[i].Poster}')`;
            
        }

    }