// Sample movie data
const movies = [
    { title: "Inception", year: 2010, rating: "8.8", icon: "🎬" },
    { title: "The Dark Knight", year: 2008, rating: "9.0", icon: "🦇" },
    { title: "Interstellar", year: 2014, rating: "8.6", icon: "🚀" },
    { title: "Avatar", year: 2009, rating: "7.8", icon: "🌌" },
    { title: "The Matrix", year: 1999, rating: "8.7", icon: "💊" },
    { title: "Joker", year: 2019, rating: "8.7", icon: "🤡" },
    { title: "Avengers: Endgame", year: 2019, rating: "8.4", icon: "⚔️" },
    { title: "Titanic", year: 1997, rating: "7.9", icon: "🚢" }
];

// Sample music data
const music = [
    { title: "Bohemian Rhapsody", artist: "Queen", year: 1975, icon: "🎸" },
    { title: "Blinding Lights", artist: "The Weeknd", year: 2019, icon: "✨" },
    { title: "Shape of You", artist: "Ed Sheeran", year: 2017, icon: "🎤" },
    { title: "Rolling in the Deep", artist: "Adele", year: 2010, icon: "🎵" },
    { title: "Uptown Funk", artist: "Bruno Mars", year: 2014, icon: "🕺" },
    { title: "Despacito", artist: "Luis Fonsi", year: 2017, icon: "💃" },
    { title: "Bad Guy", artist: "Billie Eilish", year: 2019, icon: "👁️" },
    { title: "Someone Like You", artist: "Adele", year: 2011, icon: "🎹" }
];

// Display movies
function displayMovies() {
    const container = document.getElementById('moviesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${movie.icon}</div>
            <h3>${movie.title}</h3>
            <p>${movie.year} | ⭐ ${movie.rating}</p>
            <button class="card-button" onclick="playMovie('${movie.title.replace(/'/g, "\\'")}')">Watch Trailer</button>
        `;
        container.appendChild(card);
    });
}

// Display music
function displayMusic() {
    const container = document.getElementById('musicContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    music.forEach(song => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${song.icon}</div>
            <h3>${song.title}</h3>
            <p>${song.artist} | ${song.year}</p>
            <button class="card-button" onclick="playMusic('${song.title.replace(/'/g, "\\'")}')">Play Song</button>
        `;
        container.appendChild(card);
    });
}

// Search function
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query === '') {
        alert('Please enter a search term');
        return;
    }
    
    const movieResults = movies.filter(m => 
        m.title.toLowerCase().includes(query)
    );
    
    const musicResults = music.filter(m => 
        m.title.toLowerCase().includes(query) || 
        m.artist.toLowerCase().includes(query)
    );
    
    if (movieResults.length === 0 && musicResults.length === 0) {
        alert(`No results found for "${query}"`);
    } else {
        let message = `Found ${movieResults.length} movies and ${musicResults.length} songs matching "${query}"\n\n`;
        
        if (movieResults.length > 0) {
            message += "🎬 Movies:\n";
            movieResults.forEach(m => message += `- ${m.title} (${m.year})\n`);
        }
        
        if (musicResults.length > 0) {
            message += "\n🎵 Music:\n";
            musicResults.forEach(m => message += `- ${m.title} by ${m.artist}\n`);
        }
        
        alert(message);
    }
}

// Play functions (simulated)
function playMovie(title) {
    alert(`🎬 Now playing trailer for: ${title}\n\n(Full streaming feature coming soon!)`);
}

function playMusic(title) {
    alert(`🎵 Now playing: ${title}\n\n(Full streaming feature coming soon!)`);
}

// Handle Enter key in search
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                search();
            }
        });
    }
}

// Load everything when page loads
window.onload = function() {
    displayMovies();
    displayMusic();
    setupSearchListener();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};
