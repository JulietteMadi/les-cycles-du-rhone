import Image from '../../Atoms/Image'
import ArthurBG from '../../../Assets/ArthurLyon.jpg'

import './style.css';

function Introduction () {
    return (
        <div className='leConcept'>
            <div className='leConceptText'>
                <h2>Le concept</h2>
                <p>Je suis réparateur cycles itinérant, je me déplace pour <em>réparer votre vélo à domicile</em>. Je prends en charge <em>tous types de vélos</em> : que vous ayez un vélo électrique, un VTT ou un Brompton je peux <em>réparer et entretenir votre cycle !</em></p>
                <p>Une fois sur place pour réparer votre vélo, en plus de mon intervention je vous donne des <em>conseils d’entretien et d’utilisations</em> pour vous aider à préserver un vélo en bon état <em>le plus longtemps possible</em></p>
                <h3>Qui suis-je ?</h3>
                <p>Issu d’une <em>école d’ingénieur et passioné par le cyclisme</em>, je me suis reconverti dans ce domaine en 2020. Après une première expérience en tant que réparateur vélo, je suis désormais à mon compte pour exercer ma passion selon mes valeurs : <em>transparence, équité et respect !</em></p>
            </div>
            <Image
                bg = {ArthurBG}
            />
        </div>
    );
}

export default Introduction;