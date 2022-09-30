var user = localStorage.getItem("user")

    if(user != null && user !="") {
        document.getElementById("bem_vindo").innerHTML += `
            <p>Usuário: <span>${user}<span></p>
            `;
    }