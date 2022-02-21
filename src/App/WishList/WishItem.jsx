import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({ done, text, id, onDoneChange }) {
    const [age, setAge] = useState(0);
    useEffect(() => {
        let ageInterval; //Es un intervalo que se ejecuta cada X tiempo
        if (done) {
            setAge(0); //Si está hecha, no va a tener tiempo de vida
        } else {
            ageInterval = setInterval(() => { //Los parámetros de la función son: 1º la fucnión que va a ejecutar y el 2º es cada cuánto
                if (done) {
                    clearInterval(ageInterval);
                }
                setAge((a) => a + 1); //Incrementa el valor de age. Cada vez que se ejecute, valdrá 1 segundo más
            }, 1000) //Este es el tiempo que tarda en ejecutarse el set interval
        }
        return () => clearInterval(ageInterval)
    }, [done]);//El efecto va a variar en función de si el wish está hecho o no. NO POR LA EDAD ¡CUIDADO!
    return (
        <li
            className={classNames('wish-list__item', {//Las clases de abajo dependen de una condición
                'wish-list__item--done': done,
                'wish-list__item--warn': age >= 5 && age < 10,
                'wish-list__item--danger': age >= 10,
            })}
        > {/*Classnames sirve para combinar varias clases. La classe de done se activará cuando cumpla la condición de ser cierta*/}
            <input id={id} checked={done} onChange={e => onDoneChange(e.target.checked)} /*Capturamos el evento del checkbox*/ type="checkbox" />
            <label htmlFor={id}>{text}</label>
        </li>
    )
};

WishItem.propTypes = {
    done: PropTypes.bool,
    text: PropTypes.string,
    id: PropTypes.string,
    onDoneChange: PropTypes.func,
}

WishItem.defaultProps = {
    done: false,
    text: '',
    id: '',
    onDoneChange: () => { },
};

export default WishItem;