import './style.css'
import ContactModal from '../../Components/ContactModal'
import { useState } from 'react'
import Banner from '../../Modules/Banner'
import Introduction from '../../Modules/Introduction'
import PracticalDetails from '../../Modules/PracticalDetails'
import bannerImg from "../../Assets/LCDR_Banniere_Light.jpg";


function HomePage () {

    const [modal, setModal] = useState (false);
    const closeModal = () => setModal(!modal);

    return(
        <div>
            <Banner bg={bannerImg}>
                <h2 className='iceBreaker'>Réparation de vélos électriques et mécaniques à domicile dans le département du Rhône</h2>
            </Banner>
            <Introduction/>
            <div className='callToAction'>
                <div className='callToActionButton'>
                    <button onClick={()=> window.open("mailto:lescyclesdurhone@gmail.com?subject=Demande de devis" , "_blank")}>Me contacter</button>
                </div>
                <p className='callToActionText'>Contactez-moi pour obtenir une demande de devis, un pré-diagnostique ou une demande d'information !<br></br>Je vous recontacte sous 48h jours ouvrés.</p>
            </div>
            <PracticalDetails/>
        </div>
    )
}

export default HomePage