//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
//@@viewOff:imports

const GraphWeek = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "GraphWeek",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render(gatewayName) {
        console.log("gatewayName", gatewayName);
        //@@viewOn:private

        //@@viewOff:private

        //@@viewOn:interface
        // let graphData = gatewayName.gatewayName.itemList.map(item =>
        // ({
        //     value: parseInt(item.temperature),
        //     label: new Date(item.timestamp)
        // })
        // )
        //     .filter(item => (item.label.getTime() >= getMonday(new Date())
        //     ))
        //     .sort((a, b) => {
        //         return a.label.getDay() - b.label.getDay()
        //     })
        //     .map(item => {
        //         var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        //         return {
        //             value: item.value,
        //             label: days[item.label.getDay()]

        //         }
        //     })

        // function getMonday(d) {
        //     d = new Date(d);
        //     var day = d.getDay(),
        //         diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        //     let monday = new Date(d.setDate(diff));
        //     monday.setHours(0, 0, 0, 0)
        //     return monday
        // }

        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render
        // getMonday(new Date())
        return (
            <div>
           Graph Week
            </div>
        );
        //@@viewOff:render
    },
});

export default GraphWeek;
