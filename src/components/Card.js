import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className = 'tc dib br3 pa3 ma2 grow bw2 shadow-5 ba b--white-50'>
            <img alt ='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
               <h2 className="roboto-regular b">{name}</h2> 
               <p className="roboto-regular">{email}</p>
            </div>
        </div>
    );
}

export default Card;