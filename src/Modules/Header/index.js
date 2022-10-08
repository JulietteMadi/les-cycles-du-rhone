import './style.css'
import Titre from '../../Assets/TitreLCDR.png'
import Logo from "../../Assets/LogoLCDR.png"

function Header () {
    return(
        <div className='logoAndTitle'>
            <img style={{height : "60px"}} src={Logo} alt='Logo de Les Cycles du Rhône réparation de vélo dans le département du Rhône' />
            <img style={{height : "50px"}} src={Titre} alt='Les Cycles du Rhône réparation de vélo dans la région de Lyon'/>
        </div>
    )
}

export default Header;