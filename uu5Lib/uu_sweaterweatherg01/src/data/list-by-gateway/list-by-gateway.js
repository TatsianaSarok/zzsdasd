//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import List from "./list/list";
import Day from "./list/day";
import DateTime from "./list/date-time"
import ListView from "./list/list-view";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListByGateway",
  //@@viewOff:statics
};

export const ListByGateway = createComponent({
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
    let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
    let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    let d = new Date();
    d.setMonth(d.getMonth() - 1)
    let monthTime = d.toISOString()

    let graphName = ["last 24h", "week", "month"];
    const [startTime, setStartTime] = useState(dayTime)
    const [graphType, setGraphType] = useState('last 24h')
    //@@viewOn:interface
    //@@viewOff:interface

    function Loader() {
      function handleChange(value) {
        setGraphType(value)
        value === 'last 24h' ? setStartTime(dayTime) :
          value === 'week' ? setStartTime(weekTime) :
            setStartTime(monthTime);
      }
      return (
          <ListByGatewayLoader startTime={startTime} graphType={graphType} gatewayId={props.gatewayId} baseUri={props.baseUri}>
            <UU5.Bricks.Card style={{ width: '60%', height: "600px", borderRadius: "8px" }} >
              <UU5.Bricks.SwitchSelector size="xl" style={{ borderRadius: "8px", padding: "5px" }}
                bgStyle="filled"
                colorSchema="indigo-rich"
                items={graphName?.map(value => ({ value }))}
                onChange={({ value }) => { handleChange(value) }}
                value={graphType}
              />
              <div style={{ float: "right", marginRight: "10px", fontSize: "20px", fontFamily: 'Orbitron', color: "grey" }}>
                <Day />
                <div style={{ textAlign: "center" }}>
                  <DateTime />
                </div>
              </div>
              <ListView />
            </UU5.Bricks.Card>
          </ListByGatewayLoader>
      )
    }
    //@@viewOn:render

    return (
      <Loader />
    )
    //@@viewOff:render
  },
});

export default ListByGateway
