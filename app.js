// URL da API para obter uma imagem aleatória de gato
const apiURL = 'https://api.thecatapi.com/v1/images/search';

// Função para buscar uma imagem de gato e exibi-la
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

            // Define o src da imagem com a URL obtida
            catImageElement.src = imgUrl;

            // Remove qualquer mensagem de erro
            errorMessageElement.textContent = '';
        })
        .catch(error => {
            const errorMessageElement = document.getElementById('errorMessage');
            errorMessageElement.textContent = 'Falha ao carregar a imagem. Tente novamente.';
        });
}

// Carregar uma imagem de gato ao carregar a página
window.onload = getRandomCat;
