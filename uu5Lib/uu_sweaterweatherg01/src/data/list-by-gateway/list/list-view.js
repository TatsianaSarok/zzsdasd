//@@viewOn:imports
import { createComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../../data/context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";
import "uu5chartg01";
import Lsi from "../list-by-gateway-lsi"
import {
  ComposedChart,
  Area,
  Bar,
  Line,
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

  render(props) {
    const inputLsi = useLsiValues(Lsi)
    let dataDataList = useData();
    const datas = [dataDataList?.data?.map(value => {
      let dateObj = new Date(value.data._id.year.toString() + "-" +
        value.data._id.month.toString() + "-" + value.data._id.day.toString());
      let weekday = dateObj.toLocaleString(inputLsi.graphDay, { weekday: "short" })
      console.log("value", weekday, value.data.temperature);

      return (
        {
          name: value.data._id.hour ? `${value.data._id.hour}` + ":00 " /*+ `${weekday}`*/ :
           /* `${weekday}` + ' ' + */`${value.data._id.day}` + '.' + `${value.data._id.month}`,
          T: Math.round(value.data.temperature * 10) / 10,
          H: Math.round(value.data.humidity * 10) / 10,
          L: Math.round(value.data.light * 10) / 10
        }
      )
    })][0]
console.log("dataList", datas?.length);
    //@@viewOn:render
    return (
      <DataListStateResolver dataList={dataDataList}>
        <div style={{ width: '100%', height: 301 }}>
        {datas?.length? ( <ResponsiveContainer>
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
              <CartesianGrid stroke="#4547544f" />
              <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0}} scale="band" stroke="black" />
              <YAxis label={{ angle: -90, position: 'insideLeft'}} stroke="black" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="H" barSize={20} fill="#342ead" stroke="#342ead" />
              <Line type="monotone" dataKey="L" fill="#f75f00" stroke="#f75f00" />
              <Line type="monotone" dataKey="T" fill="#e40017" stroke="#e40017" />
            </ComposedChart>
          </ResponsiveContainer>):
           (<div style={{padding:"20px 75px"}}><UU5.Common.Error  content={inputLsi.noAvailableData + props.graphType}  bgStyle="filled" colorSchema="brown"/></div>)}
        </div>
      </DataListStateResolver>
    )
    //@@viewOff:render
  },
});

export default ListView;
