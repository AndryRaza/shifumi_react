import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Ecran from './Ecran';

class Display extends Component {

    state = {
        ecran: [{ img: null, light: ['black','black','black'] }, { img: null, light: ['black','black','black'] }]
    }

    render() {
        return (
            <>
                {
                    this.state.ecran.map((ecran, index) => {
                        return (
                            <Fragment key={index}>
                                <Col >
                                    <Ecran img={ecran.img} light={ecran.light} />
                                </Col>
                            </Fragment>
                        )
                    })
                }
            </>
        )
    }
}

export default Display;