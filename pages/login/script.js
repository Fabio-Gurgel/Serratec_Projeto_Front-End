document.getElementById("submit").onclick = () => {
    var username = document.getElementById("username").value;

    localStorage.setItem("user", username)

    const liveAlert = document.getElementById('liveAlert')

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div><p>>${message}</p></div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
            ].join('')

        liveAlert.innerHTML="";
        liveAlert.append(wrapper)
    }
    
    if(username != "") {
        window.location.href = '../inicio/index.html'
    }
    else {
        alert('Usuário inválido!', 'danger')
    }
}