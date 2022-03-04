// Clave Pública: 1928dbc9bba11631437d27c1258a8e7a
// Clave Privada: fcf7345eb9fe3697999b6dbc2df107826d739ceb
// Ts: 1

// HASH= TS + CLAVE PRIVADA + CLAVE PUBLICA
// CLAVE A ENCRIPTAR= 1fcf7345eb9fe3697999b6dbc2df107826d739ceb1928dbc9bba11631437d27c1258a8e7a

//  CON UN CONVERTIDOR ONLINE
// MD5 = 79b39bc45ede5e3689d0b2c12862b630

const hash = '79b39bc45ede5e3689d0b2c12862b630';
const publicKey='1928dbc9bba11631437d27c1258a8e7a';
const URLPersonajes = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

async function accedePersonajes() {
    let response = await fetch(URLPersonajes);
    let personajes = await response.json();
    return personajes;
}