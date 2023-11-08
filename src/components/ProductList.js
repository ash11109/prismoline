import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './ProductList.css';

const ProductList = () => {
    return (
        <>
            <div className="mt--10">
                <Tabs className="mb10">
                    <TabList>
                        <Tab>THERMO PLASTIC PAINT</Tab>
                        <Tab>OTHERS</Tab>
                        <Tab>GLASS BEADS</Tab>
                        <Tab>3M PRODUCTS</Tab>
                        <Tab>CRASH BARRIER</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">SNOWLINE</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p2.jpg" alt="img" />
                                <p className="ashText">PRISMOLINE</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p2.jpg" alt="img" />
                                <p className="ashText">PRISMOLINE COMMERCIAL</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">PRISMOLINE PREMIUM</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p2.jpg" alt="img" />
                                <p className="ashText">KERB MARKING PAINT</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">RIB MARKING PAINT</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p2.jpg" alt="img" />
                                <p className="ashText">PRIMER</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">PRISMOLITE GLASS BEAD</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p2.jpg" alt="img" />
                                <p className="ashText">PRISMOLITE PRO GLASS BEAD</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">SOVITECH GLASS BEAD</p>
                            </div>
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">POTTERS THAT GLASS BEAD</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            <div className="ashhcard">
                                <img className="ashaskimg" src="assets/img/product/p1.jpg" alt="img" />
                                <p className="ashText">POTTERS THAT GLASS BEAD</p>
                            </div>
                            
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ProductList;