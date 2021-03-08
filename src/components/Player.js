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

    var coup_ia;
    //Fonction random ([| 0;max |[)
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /* Créer deux variables : coup_ia et valeur_coup_ia, faire un map sur coup et checker si value === getRandomInt, si oui alors on remplit les deux variables avec 
    respectivement l'image et la value */
    var valeur_coup_ia = getRandomInt(3);

    // coup.map(elt => {
    //   if (elt.value === valeur_coup_ia){

    //       return (elt.img)
    //   }
    // });

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
                            <button onClick={() => props.func(elt.img, coup_ia)}>
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