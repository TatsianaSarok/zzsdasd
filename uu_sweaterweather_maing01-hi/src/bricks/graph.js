//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
import GatewayGraph from "../routes/gateway-graph";

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

    render(gatewayName) {
        console.log("gatewayName", gatewayName);
        //@@viewOn:private

        //@@viewOff:private

        //@@viewOn:interface

        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render




        let graphData = gatewayName.gatewayName.itemList.map(item =>
        ({
            value: parseInt(item.temperature),
            label: new Date(item.timestamp)
        })
        )
            .filter(item => (item.label.getTime() >= getMonday(new Date())
            ))
         .map(item=>({
             
             value: item.value,
             label: item.label.getDay()
             
         }))  
         .sort((a, b) => {
            return a.label - b.label
          })

        function getMonday(d) {
            d = new Date(d);
            var day = d.getDay(),
                diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
               let monday = new Date(d.setDate(diff));
               monday.setHours(0,0,0,0)
            //   console.log("monday", monday,"setHours",monday.setHours(0,0,0,0));

                return monday//.setHours(0,0,0,0);
        }

        console.log("graphData", graphData);
        getMonday(new Date())
        return (
            <div>
                <UU5.Bricks.Container >
                    {/*@@viewOn:0*/}

                    <UU5.SimpleChart.LineChart data={
                        graphData
                    } />
                    {/*@@viewOff:0*/}
                </UU5.Bricks.Container>
            </div>
        );
        //@@viewOff:render
    },
});

export default Graph;
