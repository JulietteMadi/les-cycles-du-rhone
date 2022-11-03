import './style.css';

function Banner (props) {
    return (
        <div className='mainBackground'  style={{backgroundImage : `url(${props.bg})`}}>
            {props.children}
        </div>
    )
}

export default Banner;
