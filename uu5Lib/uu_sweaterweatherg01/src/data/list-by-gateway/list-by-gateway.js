//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState, useLsiValues } from "uu5g04-hooks";
import Config from "./config/config";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import Time from "./list/time";
import ListView from "./list/list-view";
import CurrentData from "./current-data";
import Css from "./data.css";
import Lsi from "./list-by-gateway-lsi";
import React from "react";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListByGateway",
  //@@viewOff:statics
};

export const ListByGateway = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayId: UU5.PropTypes.string,
    graphType: UU5.PropTypes.string,
    startTime: UU5.PropTypes.string,
    gatewayName: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined,
    graphType: undefined,
    startTime: undefined,
    gatewayName: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    const inputLsi = useLsiValues(Lsi)
    console.log("props", props);
    let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
    let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    let d = new Date();
    d.setMonth(d.getMonth() - 1)
    let monthTime = d.toISOString()
    let graphName = [inputLsi.last24h, inputLsi.week, inputLsi.month];
    const [startTime, setStartTime] = useState(dayTime)
    const [graphType, setGraphType] = useState(inputLsi.last24h)

    return (
      <>
        <div>
          <span style={{ paddingLeft: "75px" }}><SwitchGraph /></span>
          <CurrentData baseUri={props.baseUri} gatewayId={props.gatewayId} />
          <div className={Css.day()}>
            <Time gatewayName={props.gatewayName} />
          </div>
          <SectionWithGraph />
        </div>
      </>
    )
    function SwitchGraph() {
      function handleChange(value) {
        setGraphType(value)
        value === inputLsi.last24h ? setStartTime(dayTime) :
          value === inputLsi.week ? setStartTime(weekTime) :
            setStartTime(monthTime);
      }
      return (
        <span className={Css.selector()}>
        <UU5.Bricks.SwitchSelector
          style={{ color: "yellow" }}
          size="l"
          className={Css.menu()}
          bgStyle="outline"
          colorSchema="brown-rich"
          items={graphName?.map(value => ({ value }))}
          onChange={({ value }) => { handleChange(value) }}
          value={graphType}
        />
        </span>
      )
    }
    function SectionWithGraph() {
      return (
        <>
          <ListByGatewayLoader startTime={startTime} graphType={graphType} gatewayId={props.gatewayId} baseUri={props.baseUri}>
            <ListView />
          </ListByGatewayLoader>
        </>
      )
    }
  },
});

export default ListByGateway
