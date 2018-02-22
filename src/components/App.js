import React from 'react';
import Data from './Data';
import {Modal} from 'react-bootstrap'

import Item from "./Item.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: Data,
            show: false,
            item: {}
        }
    }
    handleClick=(id)=> {
        let item = this.state.itemList.find(x => x.id === id);
        this.setState({show: true, item: {...item}});

    };
    handleClose = () => {
        this.setState({show: false})
    };

    render() {
        return (
            <div>
                {this.state.itemList.filter(x => x.isActive).map(item =>
                <Item click={this.handleClick.bind(null, item.id)}
                      id={item.id}
                      title={item.title}
                      img={item.img}
                      date={item.date}
                      tags={item.tags}
                />)}

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>{this.state.item.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{this.state.item.description}</Modal.Body>

                    <Modal.Body>{this.state.item.date}</Modal.Body>

                    <Modal.Body>{this.state.item.tags}</Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default App
