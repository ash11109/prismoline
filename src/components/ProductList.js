import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './ProductList.css';

const ProductList = () => {

    const imgUrl = 'assets/img/product/';

    const THERMOPLASTICPAINT = [
        { id: 1, name: 'Snowlite', img: 'THERMO PLASTIC PAINT/SNOWLITE WHITE.jpg' },
        { id: 2, name: 'Prismoline', img: 'THERMO PLASTIC PAINT/PRESMOLINE.jpg' },
        { id: 3, name: 'Prismoline Premium', img: 'THERMO PLASTIC PAINT/PRESMOLINE PREMIUM.jpg' },
        { id: 4, name: 'Kerb Marking Paint', img: 'THERMO PLASTIC PAINT/Karb marking.png' }
    ];

    const OTHER = [
        { id: 1, name: 'Primer', img: 'OTHER/p2.jpg' }
    ];

    const GLASSBEAD = [
        { id: 1, name: 'Prismolite Glass Bead', img: 'GLASS BEAD/Prismolite glass bead.png' },
        { id: 2, name: 'Sovitech Glass Bead', img: 'GLASS BEAD/sovitech glass bead.png' },
        { id: 3, name: 'Potter Thai Glass Bead', img: 'GLASS BEAD/potter thai.png' }
    ];

    const THTEEMPRODUCT = [
        { id: 1, name: 'RED ILC', img: '3M PRODUCT/galvanised-w-beam-metal-crash-barrier-for-highway.jpg' },
        { id: 2, name: 'YELLOW ILC', img: '3M PRODUCT/plastic-speed-breaker-removebg-preview.png' },
        { id: 3, name: 'WHITE ILC', img: '3M PRODUCT/Road-Studs-removebg-preview.png' },
        { id: 4, name: 'W/R ILC', img: '3M PRODUCT/Road-Studs.jpg' },
        { id: 5, name: 'RED MOLDED', img: '3M PRODUCT/MOLDED SHANK FINAL.jpg' },
        { id: 6, name: 'YELLOW MOLDED', img: '3M PRODUCT/MOLDED SHANK FINAL.jpg' },
        { id: 7, name: 'WHITE MOLDED', img: '3M PRODUCT/MOLDED SHANK I.jpg' },
        { id: 8, name: 'W/R MOLDED', img: '3M PRODUCT/MOLDED SHANK I.jpg' },
        { id: 9, name: 'GREEN MOLDED', img: '3M PRODUCT/MOLDED SHANK.jpg' },
        { id: 10, name: 'SAFETY CONE', img: '3M PRODUCT/TWIN MOLDED SHENK.webp' },
        { id: 11, name: 'SPEED BREAKER', img: '3M PRODUCT/UTKARSH.jpg' },
        { id: 12, name: 'HARDNER BOTLE', img: '3M PRODUCT/UTKARSH.jpg' },
        { id: 13, name: 'RESIN EPOXY', img: '3M PRODUCT/UTKARSH.jpg' }
    ];

    const productTemplate = (item) => {
        return (
            <div className="ashhcard" key={item.id}>
                <img className="ashaskimg" src={imgUrl + item.img} alt="img" />
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