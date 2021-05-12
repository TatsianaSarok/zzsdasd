//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";


//@@viewOff:imports

const CurrentData = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "CurrentData",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render(props) {
        //@@viewOn:hooks
       // console.log("Version", process.env.VERSION);
        //@@viewOff:hooks
console.log("c", props?.currentData.humidity);
        //@@viewOn:private

        //@@viewOff:private

        //@@viewOn:interface

            // setTimeout(
            //     () =>  setDateTime(currentDate),
            //     86400000
            // );
        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render
        return (
            <div style={{float: "right", margin: "10px 15px 0px 0px"}}>
            <UU5.Bricks.Icon icon="mdi-weather-sunny" style={{fontFamily: 'Brush Script MT', fontSize: "45px", marginRight: "20px",  color:"#f9d71c"}}>
            <UU5.Bricks.Text style={{fontFamily: 'Brush Script MT', fontSize: "20px", color: "black"}}> {props?.currentData.temperature}&#8451;</UU5.Bricks.Text>
                </UU5.Bricks.Icon>
                  <UU5.Bricks.Icon icon="mdi-weather-rainy" 
                   style={{ fontSize: "40px", color: "blue"}}>
                 <UU5.Bricks.Text style={{fontFamily: 'Brush Script MT', fontSize: "20px", color: "black"}}> {props?.currentData.humidity}%</UU5.Bricks.Text>
                  </UU5.Bricks.Icon>
                  </div>
        );
        //@@viewOff:render
    },
});

export default CurrentData;

