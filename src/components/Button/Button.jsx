import "../Button/Button.css";




function Buttonss(props) {


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div id="btns">
                        <button className="animated-button" onClick={props.onClick}>
                            <span>{props.title}</span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Buttonss;