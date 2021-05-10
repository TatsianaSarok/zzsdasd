//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../../config/config";
import "uu5chartg01";
//import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
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

    let data = props?.dataList[0]?.data?.list.map(item => { return item })
    
    let currentData = props?.dataList[0]?.data?.current[0].first
    console.log("props",currentData);
    const datas = [data?.map(value => {

      let dateObj = new Date(value._id.year.toString() + "-" +
        value._id.month.toString() + "-" + value._id.day.toString());
      let weekday = dateObj.toLocaleString("default", { weekday: "short" })
      console.log("value", weekday, value.temperature);
      return (
        {
          name: value._id.hour ? `${value._id.hour}` + ":00 " + `${weekday}` :
            `${weekday}` + ' ' + `${value._id.day}` + '.' + `${value._id.month}`,
          T: Math.round(value.temperature * 10) / 10,
          H: Math.round(value.humidity * 10) / 10,
          // atm: Math.round(value.humidity*10)/10
        }
      )
    })][0]

    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface


    //@@viewOn:render

    return (
      <>
        <div style={{ width: '100%', height: 425 }}>
<UU5.Bricks.Text>{currentData.temperature}</UU5.Bricks.Text>
          <ResponsiveContainer>
          { props.dataList?.length > 0 ? <ComposedChart
              width={500}
              height={400}
              data={datas}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0 }} scale="band" />
              <YAxis label={{ angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="T" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="H" barSize={20} fill="#413ea0" />
              {/* <Line type="monotone" dataKey="H" stroke="#ff7300" /> */}
            </ComposedChart>: "no data"}
          </ResponsiveContainer>
        </div>
      </>
    )
    //@@viewOff:render
  },
});

export default ListView;
