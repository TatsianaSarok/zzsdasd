//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent} from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
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

    render(data) {
        console.log("data", data);
        //@@viewOn:interface
        //@@viewOn:handlers

        //@@viewOff:handlers

        //@@viewOn:render


        return (
            <>
                <UU5.Bricks.Text className="uu5-common-center"></UU5.Bricks.Text>
                <UU5.SimpleChart.LineChart
                    data={[data.data.map(value => {
                        let dateObj = new Date(value._id.year.toString() + "-" +
                            value._id.month.toString() + "-" + value._id.day.toString());
                        let weekday = dateObj.toLocaleString("default", { weekday: "short" })
                        return (                        
                            {
                                label: value._id.hour ?`${value._id.hour}` + ":00 " + `${weekday}` :
                                    `${weekday}`+' '+`${value._id.day}`+'.'+`${value._id.month}`,
                                value: value.temperature,
                                value2: value.humidity 
                            }
                        )
                    })][0]}
                    series={[{
                        valueKey: "value",
                        name: "Series 1",
                        colorSchema: "red",
                        chartType: "monotone"
                      },
                        {
                          valueKey: "value2",
                          name: "Series 2",
                          colorSchema: "blue",
                          chartType: "monotone"
                        }
                      ]}
                />
            </>
        );
        //@@viewOff:render
    },
});

export default Graph;
