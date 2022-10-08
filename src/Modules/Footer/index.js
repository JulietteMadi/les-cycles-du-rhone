import './style.css'
import '../../Datas/FooterData'
import { FooterData } from '../../Datas/FooterData'
import logo from "../../Assets/TitreLCDR_BLANC.svg"

function Footer () {
    return(
        <div className='footerStyle'>
            <img src={logo} style={{width : '15%'}}/>
            <p className='mentionsLegales' onClick={()=> window.open("mailto:lescyclesdurhone@gmail.com", "_blank")}>lescyclesdurhone@gmail.com</p>
            <p className='mentionsLegales' onClick={()=> window.open("tel:+33666944303", "_blank")}>06 66 94 43 03</p>
            <br></br>
            <div className='footerData'> {FooterData.map((list) =>
            <p className='mentionsLegales' onClick={() => {window.open(list.URL, "_blank")}}>{list.Texte}</p>
            )}
                
            </div>
        </div>
    )
}

export default Footer