import "./style.css";

function Image (props) {
    return(
        <div className='image bigRd' style={{backgroundImage : `url(${props.bg})`}}></div>
    )
}

export default Image;