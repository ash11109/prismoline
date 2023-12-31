import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { proImgUrl , THERMOPLASTICPAINT , OTHER , GLASSBEAD , SIGNAGES } from './dataVar';
import 'react-tabs/style/react-tabs.css';
import GlassBeads from "./GlassBeads";
import ThreeMPro from "./ThreeMPro";
import ProductDetail from "./ProductDetail";
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
                        <Tab>THERMOPLASTIC PAINT FEATURES</Tab>
                        <Tab>THERMOPLASTIC PAINT</Tab>
                        <Tab>GLASS BEADS</Tab>
                        <Tab>3M PRODUCTS</Tab>
                        <Tab>SIGNAGES</Tab>
                        <Tab>OTHERS</Tab>
                    </TabList>
                    <TabPanel>
                        <ProductDetail />
                    </TabPanel>
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
                                GLASSBEAD.map((item) => productTemplate (item) )
                            }
                        </div>
                        <GlassBeads />
                    </TabPanel>
                    <TabPanel>
                        <div className="galleryash">
                            {/* {
                                THTEEMPRODUCT.map((item) => productTemplate (item) )
                            } */}
                        </div>
                        <ThreeMPro />
                    </TabPanel>
                    <TabPanel>
                        <div className="galleryash">
                            {
                                SIGNAGES.map((item) => productTemplate (item) )
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
                </Tabs>
            </div>
            <div className="margin-div"></div>
        </>
    );
};

export default ProductList;