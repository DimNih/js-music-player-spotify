## js-music-player-desainSpoti

## Importan
isi ke file css

```bash
   /* General Styles */
   body {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background: linear-gradient(135deg, #121212, #1DB954);
    color: white;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    max-width: 600px;
    width: 100%;
    padding: 30px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #1DB954;
    text-shadow: 0 4px 10px rgba(29, 185, 84, 0.4);
}

input {
    width: 80%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

input:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(29, 185, 84, 0.5);
}

button {
    padding: 12px 25px;
    background: #1DB954;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(29, 185, 84, 0.3);
}

button:hover {
    background: #1ed760;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(29, 185, 84, 0.5);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(29, 185, 84, 0.3);
}

#result {
    margin-top: 20px;
    text-align: left;
}

.song {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0;
    padding: 15px;
    border-radius: 15px;
    animation: slideIn 0.5s ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.song:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
}

.song img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.song p {
    margin: 0 15px;
    flex-grow: 1;
    font-size: 1rem;
    color: #fff;
}

.go-btn {
    padding: 8px 15px;
    background: #1DB954;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(29, 185, 84, 0.3);
}

.go-btn:hover {
    background: #1ed760;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(29, 185, 84, 0.5);
}

.go-btn:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(29, 185, 84, 0.3);
}

.loading {
    display: none;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #1DB954;
}

.loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #1DB954;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 600px) {
    h1 {
        font-size: 2rem;
    }

    input {
        width: 90%;
    }

    .song {
        flex-direction: column;
        align-items: flex-start;
    }

    .song p {
        margin: 10px 0;
    }

    .go-btn {
        width: 100%;
        margin-top: 10px;
    }
}
```
