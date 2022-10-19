const detail = events
let locat = location.search

let getNew = new URLSearchParams(locat)

let id = parseInt(getNew.get("id"))

let evento = detail.find((item) => item._id === id)


let card = document.getElementById("detail")

card.innerHTML = `



           
            <img src="${evento.image}" alt="${evento.name}">
            <article>
                <h3 class="card-title">${evento.name}</h3>
                <p class="card-text">${evento.description}</p>
                <h6 class="card-title">Date:</h6>
                <p class="card-text">${evento.date}</p>
                <h6 class="card-title">Place:</h6>
                <p class="card-text">${evento.place}</p>
                <h6 class="card-title">Capacity:</h6>
                <p class="card-text">${evento.capacity}</p>
                <h6 class="card-title">Assistance:</h6>
                <p class="card-text">${evento.assistance}</p>
                <h6 class="card-title">Price:</h6>
                <p class="card-text">${evento.price}</p>
            </article>
            `












