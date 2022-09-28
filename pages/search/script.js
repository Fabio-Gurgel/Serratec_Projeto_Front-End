
    const API_KEY = "9465eddd"

    document.getElementById("submit").onclick = async () => {
        var lista_filmes = document.getElementById("lista_filmes");
        var search = document.getElementById("search").value;

        var response = await fetch("https://www.omdbapi.com/?s=" + search + "&apikey="+ API_KEY);
        var filme = await response.json();
        console.log(filme);
        document.getElementById("image").src = filme.Search[0].Poster
        var filme2 = document.createElement("img")
        filme2.src = filme.Search[1].Poster
        lista_filmes.appendChild(filme2)
    }