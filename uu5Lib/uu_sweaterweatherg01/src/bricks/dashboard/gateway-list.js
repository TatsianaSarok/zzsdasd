//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
import GatewayGraphs from "./gateway-graph";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import Css from "./sweaterweather.css";
//@@viewOff:imports

const GatewayList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ data }) {

    let graphName = ["last 24h", "week", "month"];
    let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
    let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    let d = new Date();
    d.setMonth(d.getMonth() - 1)
    let monthTime = d.toISOString()
    //@@viewOn:hooks
    const [graphType, setGraphType] = useState('last 24h')
    const [startTime, setStartTime] = useState(dayTime)
    //@@viewOff:hooks

    //@@viewOn:private    
    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function handleChange(value) {
      setGraphType(value)
      value === 'last 24h' ? setStartTime(dayTime) :
        value === 'week' ? setStartTime(weekTime) :
          setStartTime(monthTime)
    }
    //@@viewOff:handlers

    //@@viewOn:render

    function Location() {
      return (
        <>
        <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-4">
              <UU5.Forms.SwitchSelector
                colorSchema="blue"
                items={graphName?.map(value => ({ value }))}
                onChange={({ value }) => { handleChange(value) }}
                value={graphType}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>

          <GatewayGraphs graphType={graphType} startTime={startTime} />
        </>
      )
    }

    return (
      <>
        <Location />
      </>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
