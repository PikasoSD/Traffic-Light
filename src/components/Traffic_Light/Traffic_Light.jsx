import "../Traffic_Light/Traffic_Light.css";

function Traffic_Light({ activeLight }) {
    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div id="Traffic_Light">
                        <div className="wrap">
                            <div className="back"></div>
                            <div className="main">

                                {/* قرمز */}
                                <label className="switch">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        checked={activeLight === "red"}
                                        readOnly
                                    />
                                    <div className="button">
                                        <div className="light"></div>
                                        <div className="dots"></div>
                                    </div>
                                </label>

                                {/* زرد */}
                                <label className="switch1">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        checked={activeLight === "yellow"}
                                        readOnly
                                    />
                                    <div className="button">
                                        <div className="light"></div>
                                        <div className="dots"></div>
                                    </div>
                                </label>

                                {/* سبز */}
                                <label className="switch2">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        checked={activeLight === "green"}
                                        readOnly
                                    />
                                    <div className="button">
                                        <div className="light"></div>
                                        <div className="dots"></div>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Traffic_Light;