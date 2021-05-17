//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import Time from "./list/time";
import ListView from "./list/list-view";
import CurrentData from "./current-data";
import Css from "./data.css";
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
    startTime: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined,
    graphType: undefined,
    startTime: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
    let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    let d = new Date();
    d.setMonth(d.getMonth() - 1)
    let monthTime = d.toISOString()
    let graphName = ["last 24h", "week", "month"];
    const [startTime, setStartTime] = useState(dayTime)
    const [graphType, setGraphType] = useState('last 24h')

    return (
      <SectionWithGraph />
    )

    function SectionWithGraph() {
      function handleChange(value) {
        setGraphType(value)
        value === 'last 24h' ? setStartTime(dayTime) :
          value === 'week' ? setStartTime(weekTime) :
            setStartTime(monthTime);
      }
      return (
        <>
          <ListByGatewayLoader startTime={startTime} graphType={graphType} gatewayId={props.gatewayId} baseUri={props.baseUri}>
            <UU5.Bricks.SwitchSelector
              size="l"
              className={Css.menu()}
              bgStyle="outline"
              colorSchema="brown-rich"
              items={graphName?.map(value => ({ value }))}
              onChange={({ value }) => { handleChange(value) }}
              value={graphType}
            />
            <CurrentData baseUri={props.baseUri} gatewayId={props.gatewayId} />
            <div className={Css.day()}>
              <Time />
            </div>
            <ListView />
          </ListByGatewayLoader>
        </>
      )
    }

  },
});

export default ListByGateway
