import React from "react";
import "./AshCss.css";

const ProductDetail = () => {

    return (
        <>
            {/* <hr className="haskbgclr" /> */}
            <div className="p-5 mt-ash ash-margin-bottom">

                <div className="row">

                    <div className="container">
                        <h4 className="mb-3">Scope of Use:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Asphalt and bitumen pavements</li>
                            <li>Relining over hot thermoplastics, worn out alkyd and acrylic paints.</li>

                        </ul>

                        <h4 className="mb-3">Limitations:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Not suitable for applications over concrete pavements. use primer if needed.</li>
                            <li>After opening to traffic, soiling of road markings may occure depending on the road,traffic and  weather, due to its roughness.</li>

                        </ul>

                        <h4 className="mb-3">Application method:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Hot applications after melting the material at indicated temperature. Lower temperature may cause low adherence pf materials.</li>
                            <li>Road marking machine must be capable of automatically apply and control dosage and homogeneity</li>

                        </ul>

                        <h4 className=" mb-3">Storage:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Protect from open storage and extreme temperature changes</li>
                            <li>Use paint within one year from fabrication date</li>
                        </ul>

                        <h4 className=" mb-3">Cautions:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Do not overheat materials above its safety temperature keep the heated material constantly stirred, and use within six hours</li>
                            <li>Do not subject the materials to more than four cycles of heating and cooling</li>
                        </ul>
                        
                        <h4 className=" mb-3">Thermoplastics are commonly used for:</h4>
                        <hr className="mb-3"/>
                        <ul className="mb-3">
                            <li>Heavy traffic urban roads and highways</li>
                            <li>Edge profiled lines</li>
                            <li>Linear rumble strips</li>
                            <li>Heavy traffic urban streets: Lane lines, central edge lines, symbols (arrows, numbers, letters),pedestrian crossing</li>
                        </ul>

                    </div>

                    {/* <div className="col-md ">

                        <div className="zoomWrapper">
                            <img srcSet="./assets/img/service/p1.jpeg" alt="img" loading="lazy" />
                        </div>
                        <div className="zoomWrapper">
                            <img srcSet="./assets/img/service/g1.gif" alt="img" loading="lazy" />
                        </div>

                    </div> */}

                </div>

            </div>
        </>
    );
};

export default ProductDetail;