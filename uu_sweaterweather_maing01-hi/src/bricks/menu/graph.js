//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import UU5 from "uu5g04";
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Css from ".././sweaterweather.css"
//@@viewOff:imports

const Graph = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Graph",
    //@@viewOff:statics

    render(gatewayName) {
        let hidden = true;
        // const [visibility, setVisibility] =useState(true) 
        // gatewayName?.gatewayName ? setVisibility(false): setVisibility(true)
        function Gateways() {
            if (gatewayName?.gatewayName.length > 1) {
                return (<div className={Css.carousel()} style={{ paddingTop: "50px" }} >
                    <Carousel controls={false}>
                        {gatewayName.gatewayName.map(item =>
                            <UuSweaterweather.Data.ListByGateway
                                baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                                gatewayId={item} />)}
                    </Carousel>
                </div>)
            }
            else if (gatewayName?.gatewayName.length === 1) {
                return (<div style={{ paddingTop: "50px" }} >
                    {gatewayName.gatewayName.map(item =>
                        <UuSweaterweather.Data.ListByGateway
                            baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                            gatewayId={item} />)}
                </div>)
            } else { return (<div style={{ paddingTop: "15px", textAlign: "center", fontSize: "30px", color: "#866B6E" }}>Please pick one of the provided locations </div>) }

        }
        return (

            <Gateways />
        )
        //@@viewOff:render
    }
});

export default Graph;
