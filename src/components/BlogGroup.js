import React from "react";
import './AshCss.css';

const BlogGroup = () => {

    const imgArray = [
        '01.jpg','02.jpg','03.jpg',
        '04.jpg','05.jpg','06.jpg',
        '07.jpg','07.jpg','09.jpg',
        'n1.jpg','n2.jpg','n3.jpg', 
        '14.png', '15.png', '16.png', 
        '19.jpg', '20.jpg', '22.jpg', 
        '24.jpeg', '27.jpeg', '28.png' ,
        'a1.jpg','a2.jpg','a3.jpg',
        'a4.jpg','a5.jpg','a6.jpg',
        'a7.jpg','a8.jpg','a9.jpg',
        'a10.jpeg','a11.jpg'
    ];
    let i=0;
    return (
        <>
            {/* <div className="mt--10">
                <Tabs className="mb10">
                    <TabList>
                        <Tab>LATEST EVENTS</Tab>
                        <Tab>EXHIBITION</Tab>
                        <Tab>SEMINAR</Tab>
                        <Tab>AWARDS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/n1.jfif" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/n2.jfif" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/n3.jfif" alt="img" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/1.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/2.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/3.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/4.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/5.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/6.png" alt="img" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/11.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/12.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/13.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/14.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/15.png" alt="img" />
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/16.png" alt="img" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/blog/21.png" alt="img" />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div> */}

            <div className="as-gallery">
                <div className="gallery">
                    {
                        imgArray.map ( item => 
                            <div className="gallery-item" key={++i}>
                                <img className="gallery-image" src={"assets/img/blog/" + item } alt="pic" />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default BlogGroup;
