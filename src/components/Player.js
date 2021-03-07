import React from 'react';
import rock from '../rock.png';
import scissor from '../scissor.png';
import paper from '../paper.png';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Player = (props) => {

    const coup = [
        { name: 'Pierre', value: 0, img: rock },
        { name: 'Feuille', value: 1, img: scissor },
        { name: 'Ciseaux', value: 2, img: paper }
    ]

        return (
            <>
                {
                    coup.map((elt, index) => {
                        return (
                            <Col key={index} >
                                <button onClick={() => props.func(elt.img)}>
                                    <img src={elt.img} alt={elt.name} />
                                </button>
                            </Col>
                        )
                    })
                }
            </>
        )

}

export default Player;