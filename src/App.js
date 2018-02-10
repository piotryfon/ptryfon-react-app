import React from 'react';
import Data from './Data';

import Item from "./components/Item.js";

class App extends React.Component {
handleClick(id){
    //wyświetl modal
}
    render() {

        return (

             Data.filter(x => x.isActive).map(item =>
             <Item click={handleClick}
                id={item.id}
                title={item.title}
                //isActive={item.isActive}
                img={item.img}
                //description={item.description}
                date={item.date}
                tags={item.tags}
             />
        ))
    }
}
export default App
