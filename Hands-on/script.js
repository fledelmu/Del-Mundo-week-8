const api = "https://meme-api.com/gimme/1";

function fetchMeme() {
    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => { 
            const meme = data.memes[0]; 
            const display = document.getElementById('main');
            display.innerHTML = `<h1>${meme.title}</h1>
            <img src="${meme.url}" alt="Meme" width="300"/>`;
        })
        .catch(error => console.error("Error fetching meme:", error));
}

fetchMeme();

const button = document.getElementById('btn');

button.addEventListener('mouseover', function(){
    button.classList.add('color');
});

button.addEventListener('mouseout', function(){
    button.classList.remove('color');
});