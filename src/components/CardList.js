import React from 'react';
import Card from "./Card";

/* Creating a separate Class to store Robofriends info.
*  From here we will call this class (CardList) into our index.js file.*/

//robotos properties being passed here
const CardList = ({robots}) => {
    /* cardComponent = cardArray i.e.
    * We are for-looping/ iterating through Robots info from the
    * robots.js file.
    *
    * In Java terms, think of this as;
    *
    * for(int i = 0; i < className.length; i++) {
    *       sout(className[i].id, className[i].name, className[i].email);
    *     }
    * */
    return (
        <div>
            { //the {} represent JS, make sure to input JS code in between these braces
                //now we can loop/ iterate through robots.js
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;
