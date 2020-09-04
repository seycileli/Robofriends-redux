import React from 'react';

//adding properties within the braces
//think of this as a constructor in java
const Card = ({id, name, email}) => {
    return (
        <div className='
        tc white br3 bl
        bg-inherit hover-bg-black-70
         dib pa2 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
