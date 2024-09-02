const altaNombre = (event) => {
    event.preventDefault()
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const tabla = document.getElementById('tablaNombre')

    tabla.innerHTML += `<tr><td>${nombre}</td><td>${apellido}</td></tr>`
    event.target.reset();
}