//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
//@@viewOff:imports

const Day = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Day",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    render() {
        //@@viewOn:hooks
        const [dateTime, setDateTime] = useState(currentDate);
        //@@viewOff:hooks

        let d = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let day = days[d.getDay()];
        let month = monthNames[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();
        let currentDate = day + " " + date + " " + month + " " + year
        setTimeout(
            () => setDateTime(currentDate),
            8640000
        );

        //@@viewOn:render
        return (
            <UU5.Bricks.Text>{dateTime || currentDate}</UU5.Bricks.Text>
        );
        //@@viewOff:render
    }
});

export default Day;

