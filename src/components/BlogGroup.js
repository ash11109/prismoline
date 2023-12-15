import React from "react";
import './AshCss.css';

const BlogGroup = () => {

    const imgArray = [
        'as1.jpg','as2.jpg',
        '01.jpg','02.jpg','03.jpg',
        '04.jpg', '06.jpg',
        '07.jpg','09.jpg',
        'n1.jpg','n2.jpg', 
        '14.png', '15.png', '16.png', 
        '19.jpg', '20.jpg', '22.jpg', 
        '24.jpeg', '27.jpeg', '28.png' ,
        'a1.jpg','a3.jpg',
        'a4.jpg','a5.jpg','a6.jpg',
        'a8.jpg','a9.jpg',
        'a10.jpeg','a11.jpg' ,
        'n3.jpg','a2.jpg','a7.jpg',
    ];
    let i=0;
    return (
        <>
            <div className="as-gallery">
                <div className="gallery">
                    {
                        imgArray.map ( item => 
                            <div className="zoomWrapper" key={++i}>
                                <img className="" src={"assets/img/blog/" + item } alt="pic" />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default BlogGroup;
