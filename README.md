# DESCRIZIONE PROGETTO
**SPECIFICA:** Spotify con fetch dei brani da API → https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist} 
## MODIFICHE AI FILE FORNITI
- index.html
  - aggiunto span → div#found>h2>span#artistSearch per inserire il valore del campo di ricerca
- style.css
  - aggiunto le classi fs-5 e fw-light di bs5 per dare lo stile a songBody
## [SCRIPT.JS](https://github.com/violapoma/05-giu-25/blob/main/script.js)
- ### fetchSongs(artist, search=false)
    - artist → artista che stiamo ricercando, per cui nell'url della query sarà ?q=${artist}
    - search sarà true solo se la funzione viene richiamata dalla funzione search()
- ### renderArtist(songs, artist, search=false)
    - blocco if per reidirizzare artistSection e artistContainer in caso che il parametro search sia true
    - le card per i brani vengono create dinamicamente; per la struttura [click qui](https://github.com/violapoma/05-giu-25/blob/main/struttura.txt)
- ### search()
    - controllo sul contenuto del campo di input
    - richiama fetchSongs con search = true
- ### hideArtistContent()
    - nasconde i div con id col nome dell'artista:
      - prende i nodi con id= _qualcosa_ Section (obiettivo: solo quelli con il nome di un artista, quindi eminem, metallica, queen)
      - per rimuovere searchSection trasforma la NodeList in Array e fa il pop()
      - mette al parentNode di tutti gli elementi dell'array ottenuto la classe 'd-none'
## [STRUTTURA.TXT](https://github.com/violapoma/05-giu-25/blob/main/struttura.txt)
  - contiene la struttura delle card dei brani (aggiunte dinamicamente)
