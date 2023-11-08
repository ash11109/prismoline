import React from "react";
import { Tabs, TabList, Tab, TabPanel }  from 'react-tabs';
import './tabbed.css';

const BlogGroup = () => {
    return (
        <>
            {/* <img src='assets/img/blog/1.png' alt='img' /> */}
            {/* =============== Blog Group start ===============*/}
            {/* <div className='blog-area pd-top-120 pd-bottom-120 haskbgclr'>
        <div className='container'>

          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/1.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/2.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/3.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>

          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/4.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/7.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/11.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>

          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/8.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/17.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/9.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>
            
          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/13.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/12.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/5.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>

          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/14.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/16.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/19.jpg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>

          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/23.jpeg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/24.jpeg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/25.jpeg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>
          <div className='row'>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/26.jpeg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/28.png" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            <div className='col-sm mt-2'>
            <div className="cardholder">
                    <div className="ashhcard">
                        <img className="ashaskimg" src="assets/img/blog/27.jpeg" alt="img" />
                        <div className="hprism"></div>
                    </div>
                </div>
                </div>
            </div>

 
        </div>
      </div> */}
            {/* =============== Blog Group End ===============*/}
            <div className="mt--10">
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
            </div>
        </>
    );
};

export default BlogGroup;
