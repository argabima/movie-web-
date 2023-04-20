const APILINK = 'https://api.themoviedb.org/3/movie/550?api_key=2d8c391193b7b2567c8554012c81a981&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI = 'https://api.themoviedb.org/3/movie/550?api_key=2d8c391193b7b2567c8554012c81a981&query='

const main = document.getElementById("card");
const form = document.getElementById("form");
const search = document.getElementById("cari");

returnMovie(APILINK)
function returnMovie (url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const image = document.createElement('img');
            image.setAttribute('class', 'card-img-top');
            image.setAttribute('id', 'img');

            image.src = IMG_PATH + element.poster_path

            const div_card_body = document.createElement('div');
            div_card_body.setAttribute('class', 'card-body');

            const title = document.createElement('h5');
            title.setAttribute('class', 'card-title');
            
            title.innerHTML = '${element.title}'; 

            div_card_body.appendChild(title);
            div_card.appendChild(div_card_body);
            div_card.appendChild(image);

            main.appendChild(div_card)
        });
        
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML= ''

    const searchItem = search.value;

    if (searchItem) {
        returnMovie(SEARCHAPI + searchItem);
        search.value = "";
    }
})