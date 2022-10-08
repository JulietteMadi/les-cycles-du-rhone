
const ContactModal = (props) => {
    return (
        <div className='backdrop'>
            <div className="bigPicturesRadius ContactModal">
                <div>❌</div>
                <h2>{props.title}</h2>
                <p>Ceci est une modale</p>
                <p>Elle <em>fonctionne</em> à merveille</p>
                <p>Mon objectif est de créer une phrase aussi longue que possible pour créer du contenu</p>
                <p>Le but étant de régler ma modale correctement et de vérifier que tout va bien en réalité</p>
                <ul>
                    <li>Parce que la modale est parfaite</li>
                    <li>Parce que tant qu'on arrive à lire c'est suffisante</li>
                    <li>Parce que de toute façon tout ce que je fais est réussi</li>
                    <li>Parce que au moins c'est pas écrit en chinois</li>
                </ul>
                <button>Envoyer</button>
            </div>
        </div>
    )
}

export default ContactModal;