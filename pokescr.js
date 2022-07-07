const formPokemon = document.getElementById("formPokemon");

        formPokemon.addEventListener("submit",function(event){
            event.preventDefault();

            const formData = new FormData(formPokemon);
            const pokemon = formData.get("pokemon");


            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => {
                const showPokemon = document.getElementById("show-pokemon");

                showPokemon.innerHTML = "";
                showPokemon.innerHTML = `
                <div class="card">
                            <img src="${data.sprites.other["official-artwork"].front_default}" 
                                class="card-img-top" alt="">
                            <div class="card-body">
                                <h4 class="card-title text-dark">${data.name} 
                                </h4>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Type : ${data.types[0].type.name}</li>
                                <li class="list-group-item">Abilities : ${data.abilities.map(element => element.ability.name)}</li>
                                <li class="list-group-item">Moves : ${data.moves.map(element => element.move.name)}</li>
                            </ul>
                        </div>
                        `;
                });
        });

        