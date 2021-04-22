//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";

//@@viewOff:imports

const Graph24 = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Graph24",
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
        //@@viewOn:hooks
        const [currentTime, setCurrentTime] = useState(new Date().getTime());
        console.log(new Date().getTime());
        //@@viewOff:hooks
        let unique = [];

        //@@viewOn:private    
        //@@viewOff:private
        useEffect(() => {
            setTimeout(
                () => setCurrentTime( new Date().getTime()),
                3600000
            );
        });
        //@@viewOn:interface
        let sortLast24 = data.data.filter(item => 
           
            {
                console.log("test", new Date(item.timestamp).getTime() >= currentTime - 86400000
                && new Date(item.timestamp).getTime()
                <= currentTime)
                 return( new Date(item.timestamp).getTime() >= currentTime - 86400000
                && new Date(item.timestamp).getTime()
                <= currentTime

         ) })
       let last24 = sortLast24.map(item =>
            ({
                value: parseInt(item.temperature),
                label: new Date(item.timestamp)
            })
            )
            .sort((a, b) => {
                return a.label.getTime() - b.label.getTime()
            })
            .map(item => {
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                unique.push(days[item.label.getDay()])
                return {
                    value: item.value,
                    label: item.label.toLocaleString('en-US', { hour: 'numeric', hour12: true })
                }
            })
            // let sortByDay =  sortLast24.map(item=>{
                
            //     return new Date(item.timestamp)
            // })
            // sortByDay()
            unique = [...new Set(unique)]
        console.log("last24", last24);
        //@@viewOn:interface

        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render


        return (
            <>
             <UU5.Bricks.Text className="uu5-common-center">{unique[0]}-{unique[1]}</UU5.Bricks.Text>
                <UU5.SimpleChart.LineChart 
                data={last24} />         
            </>
        );
        //@@viewOff:render
    },
});

export default Graph24;
