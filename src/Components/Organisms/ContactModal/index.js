import './style.css';

const ContactModal = (props) => {
    return (
        <div className='backdrop'>
            <div className="bigRd ContactModal">
                <div className='headerModal'>
                    <div onClick={props.displayModal} className="hover">❌</div>
                    <h3>{props.title}</h3>
                </div>
                <p>Remplissez ce formulaire pour me faire <em>une demande de devis</em>, je vous répondrai en <em>48h ouvrés</em>. N’hésitez pas à ajouter des photos pour mieux me faire comprendre le problème !</p>
                <form>
                    <label className='requiredInput' required>Nom, prénom</label><br></br>
                    <input></input><br></br>
                    <div className='formLign'>
                        <div className='formLignInput'>
                            <label>Mail</label><br></br>
                            <input></input><br></br>
                        </div>
                        <div className='formLignInput'>
                            <label>Téléphone</label><br></br>
                            <input></input><br></br>
                        </div>
                    </div>
                    <label>Type de vélo</label><br></br>
                    <input></input><br></br>
                    <label>Type de prestation</label><br></br>
                    <input></input><br></br>
                    <label>Pièce jointe :</label><br></br>
                    <input></input><br></br>
                    <label>Précisez votre demande</label><br></br>
                    <input></input><br></br>
                </form>
                <button>Envoyer</button>
            </div>
        </div>
    )
}

export default ContactModal;