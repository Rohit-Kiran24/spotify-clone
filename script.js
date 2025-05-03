// Sample music data
const musicData = [
    {
        id: 1,
        title: "Top 50 - Global",
        artist: "Various Artists",
        cover: "card1img.jpeg",
        duration: "3:45"
    },
    {
        id: 2,
        title: "Today's Top Hits",
        artist: "Various Artists",
        cover: "card2img.jpeg",
        duration: "3:30"
    },
    {
        id: 3,
        title: "RapCaviar",
        artist: "Hip-Hop Essentials",
        cover: "card3img.jpeg",
        duration: "4:15"
    },
    {
        id: 4,
        title: "Rock Classics",
        artist: "Legendary Rock Hits",
        cover: "card4img.jpeg",
        duration: "3:55"
    },
    {
        id: 5,
        title: "Chill Vibes",
        artist: "Relaxing Mix",
        cover: "card5img.jpeg",
        duration: "3:20"
    },
    {
        id: 6,
        title: "Dance Party",
        artist: "EDM Essentials",
        cover: "card6img.jpeg",
        duration: "4:00"
    },
    {
        id: 7,
        title: "Indie Mix",
        artist: "Indie Artists",
        cover: "card1img.jpeg",
        duration: "3:40"
    },
    {
        id: 8,
        title: "Pop Hits",
        artist: "Today's Pop",
        cover: "card2img.jpeg",
        duration: "3:25"
    },
    {
        id: 9,
        title: "Jazz Lounge",
        artist: "Smooth Jazz",
        cover: "card3img.jpeg",
        duration: "4:10"
    },
    {
        id: 10,
        title: "Workout Mix",
        artist: "Energy Boost",
        cover: "card4img.jpeg",
        duration: "3:50"
    }
];

// DOM Elements
const playerControls = document.querySelector('.player-controls');
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');
const recentlyPlayedContainer = document.getElementById('recentlyPlayed');
const trendingContainer = document.getElementById('trending');
const featuredContainer = document.getElementById('featured');

// Player state
let isPlaying = false;
let currentSong = null;

// Initialize player
function initPlayer() {
    // Add click handlers for player controls
    const playPauseBtn = playerControls.querySelector('img[src="player_icon3.png"]');
    const prevBtn = playerControls.querySelector('img[src="player_icon2.png"]');
    const nextBtn = playerControls.querySelector('img[src="player_icon4.png"]');

    playPauseBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);

    // Progress bar functionality
    progressBar.addEventListener('input', updateProgress);
    progressBar.addEventListener('change', seek);

    // Initialize cards with music data
    renderMusicCards();
}

// Toggle play/pause
function togglePlay() {
    isPlaying = !isPlaying;
    const playPauseBtn = playerControls.querySelector('img[src="player_icon3.png"]');
    playPauseBtn.style.opacity = isPlaying ? '1' : '0.7';
    // Add actual audio control logic here
}

// Play previous song
function playPrevious() {
    if (currentSong) {
        const currentIndex = musicData.findIndex(song => song.id === currentSong.id);
        const prevIndex = (currentIndex - 1 + musicData.length) % musicData.length;
        playSong(musicData[prevIndex]);
    }
}

// Play next song
function playNext() {
    if (currentSong) {
        const currentIndex = musicData.findIndex(song => song.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % musicData.length;
        playSong(musicData[nextIndex]);
    }
}

// Update progress bar
function updateProgress() {
    const progress = (progressBar.value / 100) * 100;
    // Update visual progress
    // Add actual time update logic here
}

// Seek to position
function seek() {
    const seekTime = (progressBar.value / 100) * 180; // Assuming 3 minutes song
    // Add actual seek logic here
}

// Render music cards
function renderMusicCards() {
    // Clear containers
    recentlyPlayedContainer.innerHTML = '';
    trendingContainer.innerHTML = '';
    featuredContainer.innerHTML = '';

    // Render recently played (first 3 songs)
    musicData.slice(0, 3).forEach(song => {
        const card = createCard(song);
        recentlyPlayedContainer.appendChild(card);
    });

    // Render trending (next 4 songs)
    musicData.slice(3, 7).forEach(song => {
        const card = createCard(song);
        trendingContainer.appendChild(card);
    });

    // Render featured (last 3 songs)
    musicData.slice(7).forEach(song => {
        const card = createCard(song);
        featuredContainer.appendChild(card);
    });
}

// Create a card element
function createCard(song) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${song.cover}" class="card-img">
        <p class="card-title">${song.title}</p>
        <p class="card-info">${song.artist}</p>
    `;
    card.addEventListener('click', () => playSong(song));
    return card;
}

// Play selected song
function playSong(song) {
    currentSong = song;
    // Update player UI
    const albumCover = document.querySelector('.album');
    const songTitle = document.querySelector('.song-title');
    const artistName = document.querySelector('.artist-name');
    
    albumCover.style.backgroundImage = `url(${song.cover})`;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    totalTime.textContent = song.duration;
    // Add actual audio playback logic here
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPlayer); 