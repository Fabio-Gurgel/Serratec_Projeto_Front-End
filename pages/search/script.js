
    const API_KEY = "9465eddd"

    document.getElementById("submit").onclick = async () => {
        var lista_filmes = document.getElementById("lista_filmes");
        var search = document.getElementById("search").value;

        var response = await fetch("https://www.omdbapi.com/?s=" + search + "&apikey="+ API_KEY);
        var filmes = await response.json();
        // document.getElementById("image").src = filmes.Search[0].Poster
        var filme = document.createElement("img")
        filme.src = filmes.Search[0].Poster
        lista_filmes.appendChild(filme)
    }