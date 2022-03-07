import React from 'react'

const ComicItem = ({ item }) => {

    return (
        <div className='content2'>
            <div className='container2'>
                <a href='#'>
                    <img className='image2' src={item.thumbnail.path + ".jpg"} alt='' />
                    <div className='overlay2 titulo'>{item.title}</div>
                </a>
            </div>

        </div>
    )
}

export default ComicItem