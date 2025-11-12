import Buttonss from "./Button/Button";

function PopularButton({ setColor }) {


    const handleStop = () => setColor("red");
    const handleWait = () => setColor("yellow");
    const handleGo = () => setColor("green");
    const handleReset = () => setColor("off");

    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="row">

                    <div className="col-6 col-md-3">
                        <Buttonss onClick={handleStop} title="Stop" />
                    </div>

                    <div className="col-6 col-md-3">
                        <Buttonss onClick={handleWait} title="Wait" />
                    </div>

                    <div className="col-6 col-md-3">
                        <Buttonss onClick={handleGo} title="Go" />
                    </div>

                    <div className="col-6 col-md-3">
                        <Buttonss onClick={handleReset} title="Reset" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PopularButton;