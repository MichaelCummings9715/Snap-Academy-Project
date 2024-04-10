
// This is an array
let titles = [
    {
        title: "The Fresh Prince of Bel-Air",
        year: 1990,
        genre: "Comedy",
        URL : "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",
    },
    {
        title: "Curb Your Enthusiasm",
        year: 2000,
        genre: "Comedy",
        URL : "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "East Los High",
        year: 2013,
        genre: "Drama",
        URL : "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"
    },
    {
        title: "Ballad of Songbirds ",
        year: 2023,
        genre: "Thriller",
        URL : "https://upload.wikimedia.org/wikipedia/en/9/96/The_Hunger_Games_-_The_Ballad_of_Songbirds_%26_Snakes_official_poster.jpg"
    },
    {
        title: "Wonka",
        year: 2023,
        genre: "Comedy",
        URL : "https://th.bing.com/th/id/R.841581b70c6a57f915846763edb9a7bb?rik=azJh3LCcZEr%2boA&riu=http%3a%2f%2fwww.impawards.com%2f2023%2fposters%2fwonka_ver2.jpg&ehk=A9hV4F5dUYjjleeF6x%2boVpMXGYycYghSizr0ubH31%2bs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        title: "The BeeKeeper",
        year: 2023,
        genre: "Thriller",
        URL : "https://th.bing.com/th/id/OIP.bT2bpfNzDfQP-o9cQm5zngHaKk?w=119&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
        title: "Godzilla -One",
        year: 2023,
        genre: "Thriller",
        URL : "https://th.bing.com/th/id/OIP.aApqdx77JMtJ2UbeeCdPdgAAAA?rs=1&pid=ImgDetMain",
    },
    {
        title: "Migration",
        year: 2023,
        genre: "Comedy",
        URL : "https://images.streamm4u.net/asset/2023/nov/migration-2023.jpg"
    },
    {
        title: "Five Nights at Freddy's",
        year: 2023,
        genre: "Horror",
        URL : "https://m.media-amazon.com/images/M/MV5BMzk5MTM5MWYtMjk5MS00NzUxLWIzMDYtMWU5YzljMDQ5NmFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },

];



// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i].title;

        // made more scalable
        let imageURL = "";
        imageURL = titles[i].URL;
        genre = titles[i].genre;
        year = titles[i].year;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, genre, year); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newGenre, newYear) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    const cardGenre = card.querySelector("#genre");
    const cardYear = card.querySelector("#year");
    cardHeader.textContent = newTitle;
    cardGenre.textContent = newGenre;
    cardYear.textContent = newYear;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function searchTitles() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const cardContainer = document.getElementById("card-container");

    // Loop through all cards and hide those that don't match the search term
    const cards = cardContainer.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector("h2").textContent.toLowerCase();
        if (title.includes(filter)) {
            cards[i].style.display = "block"; // Show matching cards
        } else {
            cards[i].style.display = "none"; // Hide non-matching cards
        }
    }
}

function filterByGenre() {
    const selectedGenre = document.getElementById('genre-filter').value;
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const genre = cards[i].querySelector('#genre').textContent.toLowerCase();

        if (selectedGenre === 'all' || genre === selectedGenre) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}
