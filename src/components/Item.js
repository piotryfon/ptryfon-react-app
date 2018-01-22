import React from 'react';

const Item = (props) => {

    return(

        <ul>
            <li>
                <img src={props.img}/>
            </li>
            <li>
                {props.id}
            </li>
            <li>
                {props.title}
            </li>
            <li>
                {props.date}
            </li>
            <li>
                {props.tags.toString()}
            </li>
        </ul>
    )
};

export default Item;