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
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render() {
        //@@viewOn:hooks
       // console.log("Version", process.env.VERSION);
        const [time, setTime] = useState(time);
        //@@viewOff:hooks

        //@@viewOn:private

        //@@viewOff:private

        //@@viewOn:interface
        let d = new Date();
        let seconds = d.getSeconds();
        let minutes = String(d.getMinutes()).padStart(2, "0");;
        let hours = d.getHours();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let day = days[d.getDay()];
        let month = monthNames[d.getMonth() ];
        let date = d.getDate();
        let year = d.getFullYear();
        let currentDate = day + " " + date + " " + month + " " + year + " " + hours + ":" + minutes + ":" + seconds
        useEffect(() => {
            setTimeout(
                () => setTime(currentDate),
                1000
            );
        });
        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render
        return (
            <UU5.Bricks.Text>{time}</UU5.Bricks.Text>
        );
        //@@viewOff:render
    },
});

export default DateTime;

