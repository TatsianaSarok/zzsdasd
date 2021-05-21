//@@viewOn:imports
import { createComponent } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../../data/context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";
import "uu5chartg01";
import {
  ComposedChart,
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
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {

    let dataDataList = useData();
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
          L: Math.round(value.data.light * 10) / 10
        }
      )
    })][0]

    //@@viewOn:render
    return (
      <DataListStateResolver dataList={dataDataList}>
        <div style={{ width: '100%', height: 301 }}>
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
              <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0, color: "#000000" }} scale="band" />
              <YAxis label={{ angle: -90, position: 'insideLeft', color: "#000000" }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="L" fill="#866B6E" stroke="#866B6E" />
              <Area type="monotone" dataKey="T" fill="#E9DCD4" stroke="#866B6E" />
              <Bar dataKey="H" barSize={20} fill="#866B6E" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </DataListStateResolver>
    )
    //@@viewOff:render
  },
});

export default ListView;
