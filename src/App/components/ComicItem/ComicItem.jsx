import React from 'react'

const ComicItem = ({ item }) => {

    return (
        <div className='content2'>
            <div className='content2-inner'>
                <div className='content2-front'>
                    <img src={item.thumbnail.path + ".jpg"} alt='' />
                </div>
                <div className='content2-back'>
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