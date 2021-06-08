//@@viewOn:imports
import { createComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../../data/context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";
import "uu5chartg01";
import Lsi from "../list-by-gateway-lsi"
import {
  ComposedChart,
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
      let day = value.data._id.day.toString().length === 1? "0"+ value.data._id.day: value.data._id.day
      return (
        {
          name: value.data._id.hour ? `${value.data._id.hour}` + ":00 " : `${day}` + '.' + `${value.data._id.month}`,
          T: Math.round(value.data.temperature * 10) / 10,
          H: Math.round(value.data.humidity * 10) / 10,
          L: Math.round(value.data.light * 10) / 10
        }
      )
    })][0]
    let isLight = datas?.some(item => { return item.L !== 0 })
    //@@viewOn:render
    return (
      <DataListStateResolver dataList={dataDataList} >
        {props.state !== 'suspended' ? (<div>
          <div style={{ width: '100%', height: 301, minWidth: "270px" }}>
            {datas?.length ? (<ResponsiveContainer>
              <ComposedChart
                width={300}
                height={400}
                data={datas}
                margin={{
                  top: 20,
                  right: 7,
                  bottom: 20,
                  left: 7,
                }}
              >
                <CartesianGrid stroke="#4547544f" />
                <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0 }} stroke="black" />
                <YAxis yAxisId="left" label={{ angle: -90, position: 'insideLeft' }} stroke="#e40017" />
                <YAxis yAxisId="right" orientation="right" label={{ angle: -90, position: 'insideLeft' }} stroke="#342ead" />
                <Tooltip />
                <Legend />
                <Line yAxisId="right" type="monotone" dataKey="H" barSize={20} fill="#342ead" stroke="#342ead" />
                <Line yAxisId="left" type="monotone" dataKey="T" fill="#e40017" stroke="#e40017" />
              </ComposedChart>
            </ResponsiveContainer>) :
              (<div style={{ padding: "20px 75px", fontSize: "18px" }}><UU5.Common.Error content={inputLsi.noAvailableData} bgStyle="filled" colorSchema="brown" /></div>)}
          </div>
          {isLight && (<div style={{ width: '100%', height: 301, minWidth: "270px" }}>
            {datas?.length ? (<ResponsiveContainer>
              <ComposedChart
                width={300}
                height={400}
                data={datas}
                margin={{
                  top: 20,
                  right: 7,
                  bottom: 20,
                  left: 7,
                }}
              >
                <CartesianGrid stroke="#4547544f" />
                <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0 }} stroke="black" />
                <YAxis yAxisId="left" label={{ angle: -90, position: 'insideLeft' }} stroke="#f75f00" />
                <YAxis yAxisId="right" orientation="right" label={{ angle: -90, position: 'insideLeft' }} stroke="#ffffff26" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="L" fill="#f75f00" stroke="#f75f00" />
              </ComposedChart>
            </ResponsiveContainer>) :
              (<div style={{ padding: "20px 75px", fontSize: "18px" }}><UU5.Common.Error content={inputLsi.noAvailableData} bgStyle="filled" colorSchema="brown" /></div>)}
          </div>)}
        </div>) : (<div style={{ padding: "70px", fontSize: "18px", minWidth: "270px" }}> <UU5.Common.Error
          bgStyle="filled"
          colorSchema="brown" content={inputLsi.locationUnavailable} />
        </div>)}
      </DataListStateResolver>
    )
    //@@viewOff:render
  },
});

export default ListView;
