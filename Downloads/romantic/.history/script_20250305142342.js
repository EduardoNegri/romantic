// Exemplo de JavaScript para um slideshow simples
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos