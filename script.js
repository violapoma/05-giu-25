console.log('linking script.js');

window.addEventListener('load', () => {
  fetchSongs('eminem');
  fetchSongs('metallica');
  fetchSongs('queen');

});

  //per la parte di ricerca
const searchField = document.getElementById('searchField'); //input
const searchSection = document.getElementById('searchSection');
const foundDiv = document.getElementById('found');

function fetchSongs(artist, search=false) {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
    .then(resp => resp.json())
    .then( data => {
      console.log(data);
      renderArtist(data.data, artist, search);
    })
    .catch (err => console.log(err));
}

function renderArtist(songs, artist, search=false) {
  let artistSection = document.getElementById(`${artist}Section`); 
  let artistContainer = document.getElementById(artist); 

  if (search) {
    artistSection = searchSection; 
    artistContainer = foundDiv; 
    //aggiunto span -> div#found>h2>span#artistSearch
    foundDiv.querySelector('#artistSearch').innerHTML = ` <i>${artist}</i>`;
  }

  console.log('artistSection', artistSection);
  console.log('artistContainer', artistContainer);

  //reset sezione
  artistSection.innerHTML = '';

  for (let song of songs) {
 
    const col = document.createElement('div'); //div principale in cui andrà la card
    col.classList.add('col', 'mb-4');

    const songCard = document.createElement('div'); 
    songCard.className = 'card h-100 text-dark shadow-sm';
    songCard.width='18rem';

    const songImg = document.createElement('img');
      songImg.src = song.album.cover_medium;
      songImg.alt = song.title; 
      songImg.className = 'card-img-top';
    songCard.appendChild(songImg); 

    const songBody = document.createElement('div');
    songBody.className = 'card-body d-flex flex-column justify-content-between align-items-start';

    const songTitle = document.createElement('h3');
      songTitle.className = 'card-title ps-3';
      songTitle.innerText = song.title;
    songBody.appendChild(songTitle);

    const songInfo = document.createElement('p');
      //fs-5 e fw-light sono di bs5, aggiunte a style.css
      songInfo.className = 'card-text ps-3 fs-5 fw-light'; 
      songInfo.innerHTML = `${song.artist.name} &sdot; ${song.album.title}`;
    songBody.appendChild(songInfo); 

    const player = document.createElement('audio');
      player.setAttribute('controls', true);
      player.classList.add('w-100');
      player.src = song.preview;
    songBody.appendChild(player);

    songCard.appendChild(songBody);
    col.appendChild(songCard);

    artistSection.appendChild(col);
  }

  artistContainer.classList.remove('d-none'); //rendo visibile la sezione 
}

function hideArtistContent() {
  const nodes = document.querySelectorAll('[id$="Section"]');
  const artistSections = Array.from(nodes);
  artistSections.pop();
  console.log('artistSections', artistSections);
  artistSections.forEach(section => {
    console.log('parent Node', section.parentElement);
    section.parentElement.classList.add('d-none');
  });
}
function search() {
  const searchValue = searchField.value; 
  console.log('searchField value', searchValue);

  if (!searchValue) { //controllo sul contenuto
    searchField.placeholder = 'Type something';
    return;
  }
  
  hideArtistContent();

  
  fetchSongs(searchValue, true);

}


