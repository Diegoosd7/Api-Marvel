import React, { useState } from 'react';
import './App.css';

import WishInput from './WishInput';    // Añadir tareas
import WishList from './WishList';  // Lista de Tareas

const initialWishes = [
    { text: 'Terminar TFG', done: false },
    { text: 'Hacer Wishlist', done: true },
    { text: 'Ver serie', done: false }
]

const App = () => {
    const [wishes, setWishes]= useState(initialWishes);//Le paso pr defecto los wishes que hemos creado a mano
    return (
        <div className='app'>
            <h1>My Wishlist</h1>
            <WishInput onNewWish={wish => setWishes([wish, ... wishes])} /> {/*Capturamos el evento de onNewWish que le pasamos a wishinput.*/}
            {/* Setwishes -> Estiy creando un array con el deseo nuevo que le paso en la función y los otros que ya había
            Con los 3 puntos, creamos un nuevo array con todos lo elementos que había + el nuevo wish */}
            <WishList wishes={wishes} onWishesChange={setWishes} /> 
            {/*Le paso los whishes.
                Con el onwisheschange lo que hago es actualizar la lista con los nuevos estados de los wishes
            */}
            <button className='wish-clear' type="button" onClick={()=>setWishes(wishes.filter(wish => !wish.done))}>Archive done wishes</button>
            {/*Lo que hace el evento onClick es: devuelve un array de wishes filtrado por los que no están hechos*/}
        </div>
    )
}


export default App;


