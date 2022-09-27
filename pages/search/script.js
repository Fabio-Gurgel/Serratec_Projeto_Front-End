
    const API_KEY = "9465eddd"
    const url = `https://www.omdbapi.com/t=${search}&apikey=${API_KEY}` ;

    document.getElementById("submit").onclick = async () => {
        var search = document.getElementById("search").value;

        var response = await fetch("https://www.omdbapi.com/?s=" + search + "&apikey="+ API_KEY);
        var filme = await response.json();

        document.getElementById("image").src = filme[0].Poster
    }



  var data;
  function getanswer(q){
    $get("https://www.omdbapi.com/?s=" + q + "&apikey="+ API_KEY, function() {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var title = data.Search[0].Title;
        var year = data.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/"+data.Search[0].imdbID+"/";
        var posturl = data.Search[0].Poster;
        document.getElementById('answer').innerHTML="<h1>'"+title+"'<h1><br><img src='"+posturl+"'/><br><p>Year Released:'"+year+"'</p><br><p>IMDb page:<a href='"+imdburl+"' target='_blank'>'"+imdburl+"'</a></p>";
    })
  }