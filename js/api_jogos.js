'use strict';

const jogo = (response) => {
    document.getElementById('link_jogo_1_js').value = response.game_url;
    document.getElementById('jogo_1_img_js').value = response.thumbnail;
    document.getElementById('nome_jogo_1_js').value = response.title;
}  


function JogosHome(){
    //inicio das credenciais para adentra no servidor

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7529210e88msh0161edae6673834p12a969jsn6f226d992892',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    // fim das credenciais para adentra no servidor

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
	.then(response => response.json())
	.then(response => jogo(response))
	.catch(err => console.error(err));
}

JogosHome();
alert(document.getElementById('nome_jogo_1_js').value);
