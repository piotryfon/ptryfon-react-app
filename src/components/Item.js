import React from 'react';

const Item = (props) => {

    return(

        <ul onClick={props.click.bind(null, props.id)}>
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