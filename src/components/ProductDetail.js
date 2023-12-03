import React from "react";

const ProductDetail = () => {

    return (
        <>
            <hr className="haskbgclr" />
            <div className=" p-5 haskbgclr">

                <div className="row">

                    <div className="col-md">
                        <h6 className="mb-3">Scope of Use:</h6>
                        <ul>
                            <li>Asphalt and bitumen pavements</li>
                            <li>Relining over hot thermoplastics, worn out alkyd and acrylic paints.</li>

                        </ul>

                        <h6 className="mb-3">Limitations:</h6>
                        <ul>
                            <li>Not suitable for applications over concrete pavements. use primer if needed.</li>
                            <li>After opening to traffic, soiling of road markings may occure depending on the road,traffic and  weather, due to its roughness.</li>

                        </ul>

                        <h6 className="mb-3">Application method:</h6>
                        <ul>
                            <li>Hot applications after melting the material at indicated temperature. Lower temperature may cause low adherence pf materials.</li>
                            <li>Road marking machine must be capable of automatically apply and control dosage and homogeneity</li>

                        </ul>

                        <h6 className=" mb-3">Storage:</h6>
                        <ul>
                            <li>Protect from open storage and extreme temperature changes</li>
                            <li>Use paint within one year from fabrication date</li>

                        </ul>

                        <h6 className=" mb-3">Cautions:</h6>
                        <ul>
                            <li>Do not overheat materials above its safety temperature keep the heated material constantly stirred, and use within six hours</li>
                            <li>Do not subject the materials to more than four cycles of heating and cooling</li>
                        </ul>
                        <h6 className=" mb-3">Thermoplastics are commonly used for:</h6>
                        <ul>
                            <li>Heavy traffic urban roads and highways</li>
                            <li>Edge profiled lines</li>
                            <li>Linear rumble strips</li>
                            <li>Heavy traffic urban streets: Lane lines, central edge lines, symbols (arrows, numbers, letters),pedestrian crossing</li>
                        </ul>

                    </div>

                    <div className="col-md ">

                        <div className="row divimg p-3 mb-3">
                            <img srcSet="./assets/img/service/p1.jpeg" alt="img" loading="lazy" />
                        </div>
                        <div className="row">
                            <div className="row divimg">

                                <img className="m-auto" srcSet="./assets/img/service/g1.gif" alt="img" loading="lazy" />


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ProductDetail;