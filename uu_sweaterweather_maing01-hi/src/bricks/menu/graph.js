//@@viewOn:imports
import { createComponent, useState, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Css from ".././sweaterweather.css"
import Lsi from "./menu-lsi";
//@@viewOff:imports

const Graph = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Graph",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {
        gatewayId: UU5.PropTypes.array
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {
        gatewayId: []
    },

    render(props) {

        const inputLsi = useLsiValues(Lsi);

        function Gateways() {
            if (props.gatewayId?.length >= 1) {
                return (<div className={Css.carousel()}
                    style={{ paddingTop: "50px" }} >
                    <Carousel verticalMode={true}>
                        {props.gatewayId.map(item =>
                        (<div style={{ width: "100%", background: "rgba(228,223,220, 0.8)", paddingTop: "20px", borderRadius: "10px", minHeight: "840px" }}>
                            <div style={{ width: "100%" }}>
                                <UuSweaterweather.Data.ListByGateway
                                    baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                                    gatewayId={item.split("/-/")[0]} state={item.split("/-/")[2]} gatewayName={{ cs: item.split("/-/")[3], en: item.split("/-/")[4] }} location={{ href: item.split("/-/")[1] }} /></div></div>) ) }
                    </Carousel>
                </div>)}
            else {
                return (
                    <div style={{ paddingTop: "15px", textAlign: "center", fontSize: "2em ", color: "#866B6E" }}>
                        {inputLsi.pickLocation}
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
