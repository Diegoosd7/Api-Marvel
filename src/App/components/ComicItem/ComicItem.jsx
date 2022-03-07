import React from 'react'

const ComicItem = ({ item }) => {

    return (
        <div className='content'>
            <div className='content-inner'>
                <div className='content-front'>
                    <img src={item.thumbnail.path + ".jpg"} alt='' />
                </div>
                <div className='content-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong> {item.title}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ComicItem