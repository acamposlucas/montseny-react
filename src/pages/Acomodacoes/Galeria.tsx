import React from 'react';
import "../../sass/pages/acomodacoes.scss";

import Img1 from '../../assets/images/chaleofuro.webp';
import Img2 from '../../assets/images/master.webp';
import Img3 from '../../assets/images/familia.webp';
import Img4 from '../../assets/images/prime.png';
import Img5 from '../../assets/images/deluxe.png';
import Img6 from '../../assets/images/mezanino.jpg';
import Img7 from '../../assets/images/refúgio 1.webp';
import Img8 from '../../assets/images/standard.webp';
import Img9 from '../../assets/images/Minichalé.webp';

const Galeria = () => {

    let acomodacao = [
        {
            id: 1,
            imgSrc: Img1,
            nome:"Chalé com Ofurô",
            title:"Chalé com Ofurô",
        },
        {
            id: 2,
            imgSrc: Img2,
            nome:"Chalé Master com Hidromassagem",
            title:"Chalé Master",
        },
        {
            id: 3,
            imgSrc: Img3,
            nome:"Chalés Luxo Família",
            title:"Chalés Luxo Família",
        },
        {
            id: 4,
            imgSrc: Img4,
            nome:"Chalé Prime",
            title:"Chalé Prime",
        },
        {
            id: 5,
            imgSrc: Img5,
            nome:"Chalé Deluxe",
            title:"Chalé Deluxe",
        },
        {
            id: 6,
            imgSrc: Img6,
            nome:"Chalé luxo Mezanino",
            title:"Chalé luxo Mezanino",
        },
        {
            id: 7,
            imgSrc: Img7,
            nome:"Chalé Refúgio",
            title:"Chalé Refúgio",
        },
        {
            id: 8,
            imgSrc: Img8,
            nome:"Chalé Luxo",
            title:"Chalé Standard",
        },
        {
            id: 9,
            imgSrc: Img9,
            nome:"Minichalé",
            title:"Minichalé",
        }
    ];

    return(
        <>
        {acomodacao.map((quartos) => {
            return(
                <div key={quartos.id}>
                    <img className="secao-acomodacoes__img" src={quartos.imgSrc} title={quartos.nome} />
                    <p className="secao-acomodacoes__text">{quartos.title}</p>
                </div>
            )
        })}
        </>
    )
    
}

export default Galeria;