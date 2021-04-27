//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
//@@viewOff:imports

const Graph24 = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Graph24",
    //@@viewOff:statics
    //@@viewOn:propTypes
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render(data) {

        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render


        return (
            <>
             <UU5.Bricks.Text className="uu5-common-center"></UU5.Bricks.Text>
                <UU5.SimpleChart.LineChart 
                   data={[data.data.map(value=>{
                    return (
                        {label: value._id + ":00",
                         value: value.Temperature } 
                    )
                })][0]}
                />         
            </>
        );
        //@@viewOff:render
    },
});

export default Graph24;
