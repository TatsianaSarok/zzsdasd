//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState } from "uu5g04-hooks";
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
        const [time, setTime] = useState(currentTime);
        //@@viewOff:hooks

        let d = new Date();
        let minutes = String(d.getMinutes()).padStart(2, "0");;
        let hours = d.getHours();
        let currentTime = hours + ":" + minutes
        setTimeout(
            () => setTime(currentTime),
            10000
        );

        //@@viewOn:render
        return (
            <UU5.Bricks.Text>{time || currentTime}</UU5.Bricks.Text>
        );
        //@@viewOff:render
    }
});

export default DateTime;

