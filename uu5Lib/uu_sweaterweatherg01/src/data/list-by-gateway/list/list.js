//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "List",
  //@@viewOff:statics
};

export const List = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private
    let dataDataList = useData();
    let dataList = dataDataList.data;
console.log("handler",dataDataList);
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
  
    return (
      <DataListStateResolver dataList={dataDataList}>
       <>
      <div style={{ textAlign: "center", margin: "-12px, 0,-5px,0" }}>

      {/* <CurrentMeasurement currentData={props}/> */}
      </div>
        <div style={{ width: '100%', height: 425 }}>
          <ResponsiveContainer>
            {props.dataList?.length > 0 ? <ComposedChart
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
            </ComposedChart> : "no data"}
          </ResponsiveContainer>
        </div>
      </>

       
      </DataListStateResolver>

    ) 
    //@@viewOff:render
  },
});

export default List;
