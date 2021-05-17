//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Css from ".././sweaterweather.css"
//@@viewOff:imports

const Graph = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Graph",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {
        gatewayId: UU5.PropTypes.srray
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {
        gatewayId: []
    },

    render(gatewayId) {
        function Gateways() {
            if (gatewayId?.gatewayId.length > 1) {
                return (<div className={Css.carousel()}
                    style={{ paddingTop: "50px" }} >
                    <Carousel controls={false}>
                        {gatewayId.gatewayId.map(item =>
                            <div style={{ width: "95%" }}>
                                <UuSweaterweather.Data.ListByGateway
                                    baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                                    gatewayId={item} /> </div>)}
                    </Carousel>
                </div>)
            } else if (gatewayId?.gatewayId.length === 1) {
                return (<div style={{ paddingTop: "50px" }} >
                    {gatewayId.gatewayId.map(item =>
                        <UuSweaterweather.Data.ListByGateway
                            baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                            gatewayId={item} />)}
                </div>)
            } else {
                return (
                    <div style={{ paddingTop: "15px", textAlign: "center", fontSize: "2em ", color: "#866B6E" }}>
                        Please pick one or more of the provided locations
                    </div>)
            }
        }
        return (

            <Gateways />
        )
        //@@viewOff:render
    }
});

export default Graph;
