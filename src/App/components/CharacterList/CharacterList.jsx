import React from 'react'
import CharacterItem from '../CharacterItem/CharacterItem'

const CharacterList= ({items,isLoading}) => {
    return isLoading ? <h1 className='titulo'>Loading...</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
        }
    </section>
}

export default CharacterList