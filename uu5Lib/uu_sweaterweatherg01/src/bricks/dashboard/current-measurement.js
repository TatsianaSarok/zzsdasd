//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent} from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
//@@viewOff:imports

const CurrentMeasurement = createVisualComponent({
    //@@viewOn:statics

    displayName: Config.TAG + "CurrentMeasurement",
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
        console.log("data", data?.data[0]?.currentTime[0]);
        //@@viewOn:interface
        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render


        return (
            <>
           <UU5.Bricks.Text>Current temperature: { data.data[0].currentTime[0].temperature} &#8451;</UU5.Bricks.Text>
            <UU5.Bricks.Text>Current humidity: { data.data[0].currentTime[0].humidity}% </UU5.Bricks.Text>
            </>
        );
        //@@viewOff:render
    },
});

export default CurrentMeasurement;
