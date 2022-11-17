import './style.css'
import ContactModal from '../../Organisms/ContactModal'
import { useState } from 'react'
import Banner from '../../Organisms/Banner'
import Introduction from '../../Organisms/Introduction'
import PracticalDetails from '../../Organisms/PracticalDetails'
import bannerImg from "../../../Assets/LCDR_Banniere_Light.jpg";


function HomePage() {

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(!modal);
    // <button onClick={()=> window.open("mailto:lescyclesdurhone@gmail.com?subject=Demande de devis" , "_blank")}>Me contacter</button>

    return (
        <div>
            {modal ? <ContactModal displayModal={closeModal} /> : undefined}
            <Banner bg={bannerImg}>
                <h2 className='iceBreaker'>Réparation de vélos électriques et mécaniques à domicile dans le département du Rhône</h2>
            </Banner>
            <Introduction />
            <div className='callToAction'>
                <div className='callToActionButton'>
                    <button onClick={closeModal}>Me contacter</button>
                </div>
                <p className='callToActionText'>Contactez-moi pour obtenir une demande de devis, un pré-diagnostique ou une demande d'information !<br></br>Je vous recontacte sous 48h jours ouvrés.</p>
            </div>
            <PracticalDetails />
        </div>
    )
}

export default HomePage