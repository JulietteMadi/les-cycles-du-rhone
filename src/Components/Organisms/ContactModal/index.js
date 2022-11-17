import './style.css';
import bandeauModale from "../../../Assets/Y-banner.jpg"
import closeModale from "../../../Assets/close.png"

const ContactModal = (props) => {
    return (
        <div className='backdrop'>
            <div className="ContactModal">
                <div className='flexRow'>
                    <img src={bandeauModale} className="imgModal"></img>
                    <div className='contentModal'>
                        <div className='headerModal'>
                            <img onClick={props.displayModal} className="hover closeModale" src={closeModale}></img>
                            {/* <div onClick={props.displayModal} className="hover">❌</div> */}
                            <h2 className='contactTitle'>Me contacter</h2>
                        </div>
                        <p>Remplissez ce formulaire pour me faire <em>une demande de devis</em>, je vous répondrai en <em>48h ouvrés</em>. N’hésitez pas à ajouter des photos pour mieux me faire comprendre le problème !</p><br></br>
                        <form>
                            <div className='formLign'>
                                <div className='formLignInput'>
                                    <label for="name" className='requiredInput'>Nom, prénom</label><br></br>
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        className='littleInput'
                                        required
                                        placeholder='Hubert Bonisseur de La Bath'
                                    /><br></br>
                                </div>
                                <div className='formLignInput'>
                                    <label for="postalCode" className='requiredInput'>Code postal</label><br></br>
                                    <input
                                        name="postalCode"
                                        id="postalCode"
                                        type="text"
                                        className='littleInput'
                                        required
                                        pattern='^[0-9]{2}\s?[0-9]{3}$'
                                        placeholder='69000'
                                    />
                                    <br></br>
                                </div>
                            </div>
                            <div className='formLign'>
                                <div className='formLignInput'>
                                    <label for="email" placeholder='ex: prénom.nom@mail.com' className='requiredInput'>Mail</label><br></br>
                                    <input name="email" id="email" type="text" className='littleInput'
                                        required
                                        pattern="^[-\w\.]+@([-\w]+\.)+[-\w]{2,4}$"
                                        placeholder='prénom.nom@mail.com'
                                    />
                                </div>
                                <div className='formLignInput'>
                                    <label for="phone">Téléphone</label><br></br>
                                    <input
                                        name="phone"
                                        id="phone"
                                        className='littleInput'
                                        type="tel"
                                        pattern='^((\+(00)?33\s?[0-9])|([0-9]{2}))[\.\s]?([0-9]{2}[\.\s]?){4}$'
                                        placeholder='04 66 94 43 03'
                                    />
                                </div>
                            </div>
                            <div className='formLign'>
                                <div className='formLignInput'>
                                    <label for="bikeType" className='requiredInput'>Type de vélo</label><br></br>
                                    <select name="bikeType" id='bikeType' className='littleInput' required>
                                        <option disabled selected value=""> -- Sélectionnez une option -- </option>
                                        <option value="electricBike">Vélo électrique</option>
                                        <option value="VTT">VTT</option>
                                        <option value="VTC">VTC / Vélo de ville</option>
                                        <option value="streetBike">Vélo de route</option>
                                        <option value="childBike">Vélo pour enfants</option>
                                        <option value="oldBike">Vélo ancien (avant 1980)</option>
                                        <option value="brompton">Brompton</option>
                                        <option value="folding">Vélo pliant (hors Brompton)</option>
                                        <option value="otherBike"> Autre</option>
                                    </select>
                                </div>

                                <div className='formLignInput'>
                                    <label for='need' className='requiredInput'>Nature du besoin</label><br></br>
                                    <select className='littleInput' name="need" id='need' required>
                                        <option disabled selected value=""> -- Sélectionnez une option -- </option>
                                        <option value="transmission">Transmission</option>
                                        <option value="braking">Freinage</option>
                                        <option value="wheel">Roue</option>
                                        <option value="direction">Direction</option>
                                        <option value="saddle">Selle</option>
                                        <option value="service">Révision / remise en état</option>
                                        <option value="otherNeed">Autre (bruit, problème non-identifié, ..)</option>
                                    </select>
                                </div>
                            </div>
                            <div className='file flexFileAttached'>
                                <p>Pièce jointe :  </p>
                                <label for="file">
                                    <p className='fileInput hover'>5Mo max<br></br>PDF, IMG ou PNG</p>
                                </label>
                            </div>
                            <input type="file" id="file"></input><br></br>
                            <label for="description" className='requiredInput'>Précisez votre demande</label><br></br>
                            <textarea name="description" id="description" required placeholder='Décrivez votre besoin ou le problème rencontré. Ex : la roue avant de mon VTT fait un bruit suspect quand je freine.' className='bigInput'></textarea><br></br>
                            <button type='submit'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;