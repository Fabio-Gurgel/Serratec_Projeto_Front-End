var user = localStorage.getItem("user")

    if(user != "") {
        document.getElementById("bem_vindo").innerHTML += `
            <p>Usuário: <span>${user}<span></p>
            `;
    }