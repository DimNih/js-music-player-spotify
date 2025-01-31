const clientId = "fec8f7ec5c2345e18f8dd30b64a2661f"; //your api...
const clientSecret = "76d26f5e3bd6480388013cb91ae2805b";
let accessToken = "";

async function getSpotifyToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
        },
        body: "grant_type=client_credentials"
    });
    const data = await response.json();
    accessToken = data.access_token;
}



async function searchTrack(query) {
    await getSpotifyToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
    });
    const data = await response.json();
    return data.tracks.items;
}


async function searchSong() {
    const query = document.getElementById("search").value;
    if (!query) return;

    document.getElementById("loading").style.display = "block";
    document.getElementById("result").innerHTML = "";

    try {
        const tracks = await searchTrack(query);
        let html = tracks.map(track => `
            <div class="song">
                <img src="${track.album.images[0].url}" alt="Album Art">
                <p>${track.name} - ${track.artists[0].name}</p>
                <button class="go-btn" onclick="goToSpotify('${track.uri}')">PLAY</button>
            </div>
        `).join("");
        document.getElementById("result").innerHTML = html;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p style="color: #ff4d4d;">Gagal memuat lagu. Coba lagi.</p>`;
    } finally {
        //Loading Anim
        document.getElementById("loading").style.display = "none";
    }
}

// Iframe to Play
function goToSpotify(uri) {
    const trackId = uri.split(":")[2];
    const iframeHtml = `
        <iframe src="https://open.spotify.com/embed/track/${trackId}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `;
    document.getElementById("result").innerHTML = iframeHtml;
}