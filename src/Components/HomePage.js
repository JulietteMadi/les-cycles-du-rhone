import '../Styles/HomePage.css'
import { mesHoraires } from '../Datas/Horaires'
import carteRhone from '../Assets/CarteRhone.png'
import ContactModal from './ContactModal'
import { useState } from 'react'

function HomePage () {

    const [modal, setModal] = useState (false);
    const closeModal = () => setModal(!modal);

    return(
        <div>
            {modal && <ContactModal
            title= 'Mon Titre'/>}
            <div className='mainBackground'>
                <div style={{height : "22em"}}></div>
                <h2 className='iceBreaker'>Réparation de vélos électriques et mécaniques à domicile dans le département du Rhône</h2>
            </div>
            <div className='leConcept'>
                <div className='leConceptText'>
                    <h2>Le concept</h2>
                    <p>Je suis réparateur cycles itinérant, je me déplace pour <em>réparer votre vélo à domicile</em>. Je prends en charge <em>tous types de vélos</em> : que vous ayez un vélo électrique, un VTT ou un Brompton je peux <em>réparer et entretenir votre cycle !</em></p>
                    <p>Une fois sur place pour réparer votre vélo, en plus de mon intervention je vous donne des <em>conseils d’entretien et d’utilisations</em> pour vous aider à préserver un vélo en bon état <em>le plus longtemps possible</em></p>
                    <h3>Qui suis-je ?</h3>
                    <p>Issu d’une <em>école d’ingénieur et passioné par le cyclisme</em>, je me suis reconverti dans ce domaine en 2020. Après une première expérience en tant que réparateur vélo, je suis désormais à mon compte pour exercer ma passion selon mes valeurs : <em>transparence, équité et respect !</em></p>
                </div>
                <div  className='leConceptImage bigPicturesRadius'></div>
            </div>
            <div className='callToAction'>
                <div className='callToActionButton'>
                    <button onClick={()=> window.open("mailto:lescyclesdurhone@gmail.com?subject=Demande de devis" , "_blank")}>Me contacter</button>
                </div>
                <p className='callToActionText'>Contactez-moi pour obtenir une demande de devis, un pré-diagnostique ou une demande d'information !<br></br>Je vous recontacte sous 48h jours ouvrés.</p>
            </div>
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
        </div>
    )
}

export default HomePage