import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({ done, text, id, onDoneChange }) => (
    <li
        className={classNames('wish-list__item', {
            'wish-list__item--done': done,
        })}
    > {/*Classnames sirve para combinar varias clases. La classe de done se activará cuando cumpla la condición de ser cierta*/}
        <input id={id} checked={done} onChange={e => onDoneChange(e.target.checked)} /*Capturamos el evento del checkbox*/ type="checkbox" />
        <label htmlFor={id}>{text}</label>
    </li>
);

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