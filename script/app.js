
const jokeContent = document.querySelector('.js-joke-content');
const jokeBtn = document.querySelector('.js-joke-btn');
const jokeLoader = document.querySelector('.js-loading-state');

let loadingDelay;

const fetchJoke = () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
        .then((response) => response.json())
}

const showloader = () => {
    loadingDelay = setTimeout(() => {
        jokeLoader.classList.remove('u-hidden');
    }, 500);
    jokeContent.classList.add('u-hidden');
}

const removeLoeader = () => {
    if (loadingDelay) {
        clearTimeout(loadingDelay);
        loadingDelay = null;
    }
    jokeLoader.classList.add('u-hidden');
    jokeContent.classList.remove('u-hidden');
}

const generateJoke = async () => {
    showloader();
    const { joke } = await fetchJoke();
    jokeContent.innerHTML = joke;
    removeLoeader();
}

const init = function () {
    console.log('script loaded');
    generateJoke();

    jokeBtn.addEventListener('click', generateJoke);
}

init();