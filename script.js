const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box")
const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    showMovies(data.results);
}
const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(item => {

        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}">
            <div class="overlay">
                <div class="tittle">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>overview :</h3>
                <p>${item.overview}</p>
            </div>
            `;
        movieBox.appendChild(box);
    });
}

document.querySelector("#search").addEventListener("keyup", (evt) => {
    console.log(evt.target.value);
    if (evt.target.value != "") {
        getMovies(SEARCHAPI + evt.target.value)
    }
    else {
        getMovies(APIURL);
    }
});
getMovies(APIURL);