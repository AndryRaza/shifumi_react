import React, { Component } from 'react';
import rock from '../rock.png';
import scissor from '../scissor.png';
import paper from '../paper.png';
import Button from 'react-bootstrap/Button';

class Player extends Component {
    state = {
        coup: [
            {name:'Pierre',value:'0',img:rock},
            {name:'Feuille',value:'1',img:scissor},
            {name:'Ciseaux',value:'2',img:paper}
        ]
    }

    render(){
        return (
            <>
                {
                    this.state.coup.map((elt,index) => {
                        return(
                            <button key={index} value={elt.value}>
                                <img src={elt.img} />
                            </button>
                        )
                    })
                }


            </>
        )
    };
}

export default Player;