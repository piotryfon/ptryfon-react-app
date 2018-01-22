import React from 'react';
import Data from './Data';

import Item from "./components/Item.js";

class App extends React.Component {

    render() {

        return (

             Data.filter(x => x.isActive).map(item =>
             <Item
                id={item.id}
                title={item.title}
                isActive={item.isActive}
                img={item.img}
                description={item.description}
                date={item.date}
                tags={item.tags}
             />
        ))
    }
}
export default App
