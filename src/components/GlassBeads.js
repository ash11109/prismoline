import React from "react";
import './AshCss.css';

const GlassBeads = () => {
    return (
        <>
            <div className="haskbgclr p-5">
                <h3 className="my-5 text-center">Prismoline Recommends for Best Results</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Potters Glass Beads</h5>
                        <p className="my-3 hasktxtclr">Potters are a step superior glass beads that are very tuf and are specially coated for high reflection and which are highly water and dust resistant.</p>
                        <p className="my-3 hasktxtclr">Potters glass beads comes with maximum roundness in them thus making the glass beads appropriate for best reflection</p>
                        <img className="clrimg" srcSet="./assets/img/service/ps2.png" alt="img" loading="lazy" />

                    </div>
                    <div className="col-md-8">
                        <div className="row mt-2">
                            <img srcSet="./assets/img/service/ps1.jpg" alt="img" loading="lazy" />
                        </div>
                        <div className="row mt-5">
                            <h5>Sovitech Glass Bead</h5>
                            <p className="hasktxtclr mt-2">High performance road marking micro glass beads,for application by sprinkling . These are treated with special surface as to increase the performance of road marking beads. These in return gives a good reflective at day and night and also delivering anti skid restive properties </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlassBeads;
