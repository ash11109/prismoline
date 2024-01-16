import React from "react";
import './AshCss.css';

const ClientList = () => {

    const imgArray = [
        '1.png','2.avif','3.jpg',
        '4.jpg','5.png','6.jpg',
        '7.jpg'
    ];
    let i=0;
    return (
        <>
            <div className="as-gallery mt-5 mb-5">
                <div className="gallery">
                    {
                        imgArray.map ( item => 
                            <div className="zoomWrapper" key={++i}>
                                <img className="" src={"assets/img/clients/" + item } alt="pic" />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ClientList;
