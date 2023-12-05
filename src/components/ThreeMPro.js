import React from "react";
import './AshCss.css';

const ThreeMPro = () => {
    return (
        <>
            <div className="row">

                <div className="container">
                    <img src="./assets/img/product/3M PRODUCT/3MIMG.jpg" alt="img" loading="lazy" />
                </div>

                <div className="container">
                    <div>
                        <iframe src="./assets/img/product/3M PRODUCT/3M.pdf" width="100%" height="700px" title="pdf" />
                    </div>
                </div>                

            </div>
        </>
    );
};

export default ThreeMPro;
