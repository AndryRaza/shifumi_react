import React, { Component } from 'react';
import rock from '../rock.png';
import scissor from '../scissor.png';
import paper from '../paper.png';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Player extends Component {
    state = {
        coup: [
            { name: 'Pierre', value: '0', img: rock },
            { name: 'Feuille', value: '1', img: scissor },
            { name: 'Ciseaux', value: '2', img: paper }
        ]
    }

    render() {
        return (
            <>
                {
                    this.state.coup.map((elt, index) => {
                        return (
                            <Col key={index} >
                                <button  value={elt.value}>
                                    <img src={elt.img} alt={elt.name} />
                                </button>
                            </Col>
                        )
                    })
                }
            </>
        )
    };
}

export default Player;