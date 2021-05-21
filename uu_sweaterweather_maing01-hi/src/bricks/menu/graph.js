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
        gatewayId: UU5.PropTypes.array
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {
        gatewayId: []
    },

    render(props) {
        console.log("iteee", props.gatewayId.map(item => {
            return item.split("/")[1]
        }))
        function Gateways() {
            if (props.gatewayId?.length >= 1) {
                return (<div className={Css.carousel()}
                    style={{ paddingTop: "50px" }} >
                    <Carousel>
                        {props.gatewayId.map(item =>
                            item.split("/")[1] !== 'suspended' ?
                                (<div style={{ width: "95%" }}>
                                    <UuSweaterweather.Data.ListByGateway
                                        baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                                        gatewayId={item.split("/")[0]} gatewayName={item.split("/")[2]} /></div>) :
                                <div>
                                    <UU5.Common.Error
                                        bgStyle="filled" errorData="Chosen location is currently unavailable"
                                        colorSchema="brown" content="Warning" />
                                </div>)}
                    </Carousel>
                </div>)
            }
            //  else if (props.gatewayId?.length === 1) {
            //     return (<div style={{ paddingTop: "50px" }} >
            //         {props.gatewayId.map(item =>
            //         item.split("/")[1] !== 'suspended'?
            //            ( <UuSweaterweather.Data.ListByGateway
            //                 baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
            //                 gatewayId={item.split("/")[0]} />): <div style={{paddingTop: "50px" }}>
            //                      <UU5.Common.Error 
            //     bgStyle="filled" errorData="Chosen location is currently unavailable"
            //      colorSchema="brown" content="Warning" />
            //                 </div>)}
            //     </div>)
            // } 
            else {
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
