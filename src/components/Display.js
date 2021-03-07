import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Ecran from './Ecran';
import Player from './Player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Display extends Component {

    state = {
        ecran: [{ img: null, light: ['black', 'black', 'black'] }, { img: null, light: ['black', 'black', 'black'] }]
    }

    //Fonction pour afficher le choix du coup du joueur
    choix = (param) => {
        this.setState({
            ecran:[{ img: param, light: ['black', 'black', 'black'] }, { img: null, light: ['black', 'black', 'black'] }]
        })
      
    };

    render() {
        return (
            <>
                <Container>
                    <Row className="row-cols-2">
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
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row className="row-cols-3" >
                        <Player leState={this.state} func={this.choix}/>
                    </Row>
                </Container>

            </>
        )
    }
}

export default Display;