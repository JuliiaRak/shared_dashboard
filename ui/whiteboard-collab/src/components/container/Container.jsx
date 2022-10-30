import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }


    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                         &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>
                </div>

                <div class="board-container">
                    <Board color={this.state.color}></Board>
                </div>
            </div>
        )
    }
}

export default Container