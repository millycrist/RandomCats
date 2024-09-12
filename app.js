const apiURL = 'https://api.thecatapi.com/v1/images/search';

function getRandomCat() {
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar a imagem');
            }
            return response.json();
        })
        .then(data => {
            const imgUrl = data[0].url;
            const catImageElement = document.getElementById('catImage');
            const errorMessageElement = document.getElementById('errorMessage');

            
            catImageElement.src = imgUrl;

          
            errorMessageElement.textContent = '';
        })
        .catch(error => {
            const errorMessageElement = document.getElementById('errorMessage');
            errorMessageElement.textContent = 'Falha ao carregar a imagem. Tente novamente.';
        });
}


window.onload = getRandomCat;
