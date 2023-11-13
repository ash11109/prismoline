import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './ProductList.css';
import { proImgUrl , THERMOPLASTICPAINT , OTHER , GLASSBEAD , THTEEMPRODUCT } from './dataVar';

const ProductList = () => {

    const productTemplate = (item) => {
        return (
            <div className="ashhcard" key={item.id}>
                <img className="ashaskimg" src={ proImgUrl + item.img } alt="img" />
                <p className="ashText">{item.name}</p>
            </div>
        )
    }

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
                            {
                                THERMOPLASTICPAINT.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            {
                                OTHER.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            {
                                GLASSBEAD.map((item) => productTemplate (item) )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ash">
                            {
                                THTEEMPRODUCT.map((item) => productTemplate (item) )
                            }
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