//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "../config/config";
//@@viewOff:imports

const DateTime = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "DateTime",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    render() {
        //@@viewOn:hooks
        const [time, setTime] = useState("");
        useEffect(()=>{         
            setInterval(()=>{
                let date = new Date();
               setTime(date.toLocaleTimeString('en-IT', { hour12: false }));
            }, 1000);           
        },[])
         //@@viewOff:hooks

        //@@viewOn:render
        return (
            <UU5.Bricks.Text>{time}</UU5.Bricks.Text>
        );
        //@@viewOff:render
    }
});

export default DateTime;

