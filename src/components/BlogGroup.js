import React from "react";
import './Ash.css';

const BlogGroup = () => {

    const imgArray = [
        '01.jpg','02.jpg','03.jpg',
        '04.jpg','05.jpg','06.jpg',
        '07.jpg','07.jpg','09.jpg',
        'n1.jpg','n2.jpg','n3.jpg',
        '1.png', '2.png', '3.png', '4.png', '5.png',
        '6.png', '7.png', '8.png', '9.png', '10.png',
        '11.png', '12.png', '13.png', '14.png', '15.png',
        '16.png', '17.png', '18.jpg', '19.jpg', '20.jpg',
        '21.png', '22.jpg', '23.jpeg', '24.jpeg', '25.jpeg',
        '26.jpeg', '27.jpeg', '28.png', '29.png', '30.png'
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
