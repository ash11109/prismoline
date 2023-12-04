import React from "react";
import "./AshCss.css";

const EquipmentsDetails = () => {

    return (
        <>
            <div className="wd-ash">
                <h2 className="text-center mb-5">Equipments</h2>
                <div className="row">

                    <div className="col-md">
                        <h4 className="text-center">Reflectometer</h4>
                        <ul>
                            <li>MX-7S is an optical measuring instrument devised for measuring the nighttime visibility of pavement markings.</li>
                            <li>Portable type instrument which can measure the retroreflectivity by setting it directly on the pavement markings during day and night</li>
                            <li>Its memory can record and store the real-time data.</li>
                            <li>Capable of continuous measurement for 8 hours using large-capacity battery.</li>
                        </ul>

                        <div className="row">
                            <div className="zoomWrapper">
                                <img srcSet="./assets/img/service/e1.jpeg" alt="img" loading="lazy" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="zoomWrapper">
                                    <img srcSet="./assets/img/service/e3.png" alt="img" loading="lazy" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="zoomWrapper">
                                    <img srcSet="./assets/img/service/e4.png" alt="img" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md ">
                        <h4 className="hasktxtclr mb-3 text-center">Fully Automatic Road</h4>
                        <h4 className="text-center">Marking Machine</h4>
                        <div className="row">
                            <div className="zoomWrapper">
                                <img srcSet="./assets/img/service/w3.png" alt="img" loading="lazy" />
                            </div>
                            <div className="zoomWrapper">
                                <img srcSet="./assets/img/service/w4.png" alt="img" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default EquipmentsDetails;