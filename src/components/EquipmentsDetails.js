import React from "react";

const EquipmentsDetails = () => {

    return (
        <>
            <div className=" p-5 haskbgclr">
                <h2 className="text-center mb-5">Equipments</h2>
                <div className="row">

                    <div className="col-md">
                        <h4 className="hasktxtclr text-center">Reflectometer</h4>
                        <ul>
                            <li>MX-7S is an optical measuring instrument devised for measuring the nighttime visibility of pavement markings.</li>
                            <li>Portable type instrument which can measure the retroreflectivity by setting it directly on the pavement markings during day and night</li>
                            <li>Its memory can record and store the real-time data.</li>
                            <li>Capable of continuous measurement for 8 hours using large-capacity battery.</li>
                        </ul>

                        <div className="row divimg">
                            <div className="col-sm">
                                <img srcSet="./assets/img/service/e1.jpeg" alt="img" loading="lazy" />
                            </div>
                        </div>

                        <div className="row divimg">
                            <div className="col-sm">
                                <img srcSet="./assets/img/service/e3.png" alt="img" loading="lazy" />
                            </div>
                        </div>

                        <div className="row divimg">
                            <div className="col-sm">
                                <img srcSet="./assets/img/service/e4.png" alt="img" loading="lazy" />
                            </div>
                        </div>

                    </div>

                    <div className="col-md ">
                        <h4 className="hasktxtclr mb-3 text-center">Fully Automatic Road</h4>
                        <h5 className="text-center">Marking Machine</h5>
                        <div className="row divimg p-3 mb-3">
                            <img srcSet="./assets/img/service/w3.png" alt="img" loading="lazy" />
                        </div>
                        <div className="row divimg p-3">
                            <img srcSet="./assets/img/service/w4.png" alt="img" loading="lazy" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default EquipmentsDetails;