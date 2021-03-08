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



    /*On va gérer le jeu ici */
    //Fonction random ([| 0;max |[)
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var coup_ia;    //L'image du coup de l'IA
    var valeur_coup_ia = getRandomInt(3);

    //On associe la valeur du coup à l'image de l'IA
    for (var i = 0; i < coup.length; i++) {
        if (coup[i]['value'] === valeur_coup_ia)
           coup_ia = coup[i]['img']
    }

    return (
        <>
            {
                coup.map((elt, index) => {
                    return (
                        <Col key={index} >
                            <button onClick={() => props.func(elt.img, elt.value, coup_ia, valeur_coup_ia)}>
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