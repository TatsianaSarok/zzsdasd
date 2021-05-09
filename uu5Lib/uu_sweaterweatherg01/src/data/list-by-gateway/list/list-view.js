//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../../config/config";
import "uu5chartg01";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListView",
  //@@viewOff:statics
};

export const ListView = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    dataList: UU5.PropTypes.array
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    dataList: undefined
  },
  //@@viewOff:defaultProps

  render(props) {

    let data = props?.dataList?.map(item => { return item.data })
    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
<>
        {props.dataList?.length > 0 ? <UU5.SimpleChart.LineChart
          data={[data?.map(value => {

            let dateObj = new Date(value._id.year.toString() + "-" +
              value._id.month.toString() + "-" + value._id.day.toString());
            let weekday = dateObj.toLocaleString("default", { weekday: "short" })
            console.log("value", weekday, value.temperature);
            return (
              {
                label: value._id.hour ? `${value._id.hour}` + ":00 " + `${weekday}` :
                  `${weekday}` + ' ' + `${value._id.day}` + '.' + `${value._id.month}`,
                value: Math.round(value.temperature*10)/10,
                value2: Math.round(value.humidity*10)/10
              }
            )
          })][0]}
          series={[{
            valueKey: "value",
            name: "T",
            colorSchema: "red",
            chartType: "monotone"
          },
          {
            valueKey: "value2",
            name: "H",
            colorSchema: "blue",
            chartType: "monotone"
          }
          ]}
        /> : "no data"}
</>
    )
    //@@viewOff:render
  },
});

export default ListView;
