import { mesHoraires } from '../../../Datas/Horaires';
import carteRhone from '../../../Assets/CarteRhone.png';

import "./style.css";

function PracticalDetails () {
    return (
        <div className='infoPratique'>
            <img src={carteRhone} className='infoPratiqueCarte'/>
            <div>
                <h2>Infos pratiques</h2>
                <h3>Où suis-je présent ?</h3>
                <p>Je suis mobile sur l’intégralité du département du Rhône (69). En fonction de votre localisation exacte, la tarification de mes déplacements peut changer. N'hésitez pas à consulter ma grille tarifaire pour en savoir plus !</p>
                <button onClick={() => {window.open('https://drive.google.com/file/d/1WWrITYRr0EOO39G3IYnOkH_oVsbOiLdt/view?usp=sharing', "_blank")}}>Voir mes tarifs</button>
                <h3>Quelles sont mes horaires ?</h3>
                <div> {mesHoraires.map((list) =>
                    <div className='infoPratiqueHorairesFlex'>
                        <div className='infoPratiqueJours'>{list.Jour}</div>
                        <div className='infoPratiquesHoraires'>{list.Horaires}</div>
                    </div>
                )}</div>
            </div>
        </div>
    );
}

export default PracticalDetails;