document.getElementById("submit").onclick = async () => {
    var username = document.getElementById("username").value;

    var response = await fetch('https://api.github.com/users/'+ username);
    var user = await response.json()

    localStorage.setItem("user", JSON.stringify(user))
    
    window.location.href = '../search/index.html'
}


// () => {} -- Arrow function / função anônima
// function () {} -- função anônima