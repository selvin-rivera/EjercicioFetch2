fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json())
    .then(data => {
        let card = `<div class="row row-cols-1 row-cols-md-3 g-4">`
        for (let user of data) {
             card += `<div class="col">
                    <div class="card">
                        <img src="https://bodegademuebles.com/wp-content/uploads/2020/10/carpinteria-productos-madera-muebles-a-medida-archivero-oficina-mobiliario.jpg" class="card-img-top" alt="Usuario">
                        <div class="card-body">
                            <h5 class="card-title"><strong>${user.name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Imagen:</strong> ${user.image}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
        }
            card += "</div>"

    document.getElementById("list-card").innerHTML = card

}) 