import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { proImgUrl , THERMOPLASTICPAINT , OTHER , GLASSBEAD , THTEEMPRODUCT } from './dataVar';
import 'react-tabs/style/react-tabs.css';
import './ProductList.css';

const ProductList = () => {

    const productTemplate = (item) => {
        return (
            <div className="galleryash-item" key={item.id}>
                <img className="galleryash-image" src={ proImgUrl + item.img } alt="img" />
                <p className="ashText">{item.name}</p>
            </div>
        )
    }

    return (
        <>
            <div className="ash-tab-div">
                <Tabs>
                    <TabList className="ash-tab-head">
                        <Tab>THERMO PLASTIC PAINT</Tab>
                        <Tab>OTHERS</Tab>
                        <Tab>GLASS BEADS</Tab>
                        <Tab>3M PRODUCTS</Tab>
                        <Tab>CRASH BARRIER</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="galleryash">
                            {
                                THERMOPLASTICPAINT.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="galleryash">
                            {
                                OTHER.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="galleryash">
                            {
                                GLASSBEAD.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="galleryash">
                            {
                                THTEEMPRODUCT.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gallery">

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ProductList;