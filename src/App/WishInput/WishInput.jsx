import PropTypes from "prop-types";
import React, {useState} from "react";

const WishInput = ({onNewWish}) => {
    const [newWishText, setNewWishText]= useState(''); /* Usamos un hook para el estado. Por defecto, el input estará vacío */
    return(
    <fieldset className='wish-input'>
        <legend className='wish-input__label'>New Wish</legend>
        <input className='wish-input__field' placeholder="Enter your wish here"  
        value={newWishText}/*Valor del input*/ onChange={e=> setNewWishText(e.target.value)/*Evento para cuando cambie el input*/}
        onKeyUp = { e=>{ /* Evento para ver si damos enter y si es así, creamos el wish*/
            if (e.key == 'Enter' && newWishText.length){
                onNewWish({ done: false, text: newWishText}); /* Llamamos a la función callback */
                setNewWishText(''); //Limpiamos el contenido del input
            }
        }}
            />
    </fieldset>
    );
};

WishInput.propType = {
    onNewWish: PropTypes.func, /* Es de tipo función */
}

WishInput.defaultProps = {
    onNewWish: () => {}, /* Valor por defecto: función vacía */
}

export default WishInput;