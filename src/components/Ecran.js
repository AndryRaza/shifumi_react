import React from 'react';
import cross from '../cross.svg';

const Ecran = ({ img, light }) => {

    const isImg = img ? (<img src={img} alt="" />) : (<img src={cross} alt="Pas de play" />);  //Si le joueur n'a pas encore joué, on affiche une croix 

    return (
        <>
            {isImg}
            <div className="d-flex justify-content-center mt-5">
                {light.map((elt, index) => {
                    return (
                        <div key={index} className="led" style={{ backgroundColor: elt }}></div>
                    )
                })}
            </div>
        </>
    )
};

export default Ecran;