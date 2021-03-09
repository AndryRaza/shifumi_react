import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Ecran from './Ecran';
import Player from './Player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Display extends Component {

    state = {
        ecran: [{ img: null, light: ['black', 'black', 'black'] }, { img: null, light: ['black', 'black', 'black'] }],
        score_joueur:0,
        score_ia:0
    }

    //On allume les led, c'est à dire on remplace les black par yellow
    allumer = (nbre) => {
        let tab = Array(3);
        for (let i = 0; i < tab.length; i++) {
            if (nbre > 0) {
                tab[i] = 'yellow';
                nbre--;
            }
            else {
                tab[i] = 'black';
            }
        }
        return tab;
    }

    //Fonction pour afficher le choix du coup du joueur
    jeu = (coup_joueur, valeur_joueur, coup_ia, valeur_ia) => {

        //Si le joueur gagne
        if ((valeur_joueur === 0 && valeur_ia === 1) || (valeur_joueur === 1 && valeur_ia === 2) || (valeur_joueur === 2 && valeur_ia === 0)) {
            this.state.score_joueur++;
        };

        //Si l'ordinateur gagne 
        if ((valeur_joueur === 1 && valeur_ia === 0) || (valeur_joueur === 2 && valeur_ia === 1) || (valeur_joueur === 0 && valeur_ia === 2)) {
            this.state.score_ia++;
        };

        this.setState({
            ecran: [{ img: coup_joueur, light: this.allumer(this.state.score_joueur) }, { img: coup_ia, light: this.allumer(this.state.score_ia) }]
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
                        <Player leState={this.state} func={this.jeu} />
                    </Row>
                </Container>

            </>
        )
    }
}


// On fait passer la fonction jeu (qui vient du parent) comme un props pour que l'enfant puisse l'utiliser

export default Display;