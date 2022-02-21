import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames'; //Sirve para concatenar clases
import WishItem from "./WishItem";

const WishList = ({ wishes, onWishesChange }) /*Recibo los wishes. Onwisheschange se ejecuta cuando se modifica algún wish*/ => (
    <ul className='wish-list'>
        {wishes.map(({ text, done }, i) /*Destructuramos los wishes que nos han pasado*/ => (
            // <li key={text} className={classNames('wish-list__item', { 'wish-list__item--done': done })}>
            //     <label htmlFor={`wish${i}`}>  {/* thmlFor es como el for de html */}
            //         <input id={`wish${i}`} type="checkbox" checked={done} />
            //         {text}
            //     </label>
            // </li>
            <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={value => { //Le pasamos el OnDoneChange de WishItem
                const updatedWishes = [...wishes];
                updatedWishes[i].done = value; //El value que recibo es un true o false del checked
                onWishesChange(updatedWishes);
            }} />
        ))}
    </ul>
);

/*Le dices el tipo de dato que le pasas por la prop.*/
/*En este caso, es un array de wishes. los wishes están compuestos por un boolean y un string*/
WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape({ /* El shape define una estructura de objeto de los componentes del array */
        done: PropTypes.bool, // TIPO BOOLEAN
        text: PropTypes.string,
        onWishesChange: PropTypes.func,
    })),
}

/*En caso de que la prop esté vacia, le pasará un array vacío*/
WishList.defaultProps = {
    wishes: [],
    onWishesChange: () =>{},
};


export default WishList;