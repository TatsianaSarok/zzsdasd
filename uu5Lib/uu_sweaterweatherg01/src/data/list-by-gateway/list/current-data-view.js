//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
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
const [temperature, setTemperature] = useState(props?.currentData.temperature)
        //@@viewOn:private

        //@@viewOff:private

        //@@viewOn:interface
        useEffect(() => {
            // This code is triggered after first render of component and after each change of 'running'.
           setTimeout(
              // Calling of setCount changes state. But it does not trigger the effect. There is depedency on 'running'.
              () => setTemperature(props?.currentData.temperature ),
              5000
            );
      
            // This arrow function is executed before next effect execution or component unmount.

          });
        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render
        return (
            <div style={{float: "right", margin: "10px 15px 0px 0px"}}>
            <UU5.Bricks.Icon icon="mdi-weather-sunny" style={{fontFamily: 'Brush Script MT', fontSize: "45px", marginRight: "20px",  color:"#f9d71c"}}>
            <UU5.Bricks.Text style={{fontFamily: 'Brush Script MT', fontSize: "20px", color: "black"}}> {temperature}&#8451;</UU5.Bricks.Text>
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

