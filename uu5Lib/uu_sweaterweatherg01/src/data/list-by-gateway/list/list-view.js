//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../../config/config";
import "uu5chartg01";
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
import useData from "../../../data/context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";
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
    dataList: UU5.PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    dataList: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    let dataDataList = useData();
    console.log("lolo",dataDataList?.data);
    const datas = [dataDataList?.data?.map(value => {

      let dateObj = new Date(value.data._id.year.toString() + "-" +
        value.data._id.month.toString() + "-" + value.data._id.day.toString());
      let weekday = dateObj.toLocaleString("default", { weekday: "short" })
      console.log("value", weekday, value.data.temperature);
      return (
        {
          name: value.data._id.hour ? `${value.data._id.hour}` + ":00 " + `${weekday}` :
            `${weekday}` + ' ' + `${value.data._id.day}` + '.' + `${value.data._id.month}`,
          T: Math.round(value.data.temperature * 10) / 10,
          H: Math.round(value.data.humidity * 10) / 10,
          // atm: Math.round(value.data.humidity*10)/10
        }
      )
    })][0]
    console.log("d", datas);

    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface


    //@@viewOn:render

    return (
      <DataListStateResolver dataList={dataDataList}>
      <div style={{ width: '100%', height: 405 }}>
                <ResponsiveContainer>
             <ComposedChart
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
                    <Area type="monotone" dataKey="T" fill="#A0EDED" stroke="#009688" />
                    <Bar dataKey="H" barSize={20} fill="#009688" />
                    {/* <Line type="monotone" dataKey="H" stroke="#ff7300" /> */}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              </DataListStateResolver>
    )
    //@@viewOff:render
  },
});

export default ListView;
