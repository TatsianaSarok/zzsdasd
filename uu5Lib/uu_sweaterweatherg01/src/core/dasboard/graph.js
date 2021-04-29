//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
//@@viewOff:imports

const Graph = createVisualComponent({
    //@@viewOn:statics

    displayName: Config.TAG + "Graph",
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
console.log("data", data);
        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render


        return (
            <>
             <UU5.Bricks.Text className="uu5-common-center"></UU5.Bricks.Text>
                <UU5.SimpleChart.LineChart 
                   data={[data.data.map(value=>{
                       let time = `${value._id.hour+ ":00"}` +`${value._id.day}` 
                       
                    return (
                        {label: time ,
                         value: value.temperature} 
                    )
                })][0]}
                />         
            </>
        );
        //@@viewOff:render
    },
});

export default Graph;
