import React from 'react'

const CharacterItem = ({ item }) => {

    return (
        <div className='content'>
            <div className='container'>
                <a href='#'>
                    <img className='image' src={item.thumbnail.path + ".jpg"} alt='' />
                    <div className='titulo overlay'>{item.name}</div>
                </a>
            </div>
        </div>
    )
}

export default CharacterItem