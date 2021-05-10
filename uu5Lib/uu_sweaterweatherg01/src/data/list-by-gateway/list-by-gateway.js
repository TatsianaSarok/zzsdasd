//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import UuP from "uu_pg01";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import List from "./list/list";


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
        <UuP.Bricks.ComponentWrapper
          colorSchema={props.colorSchema}
          elevation={props.elevation}
          borderRadius={props.borderRadius}
          cardView={props.cardView}
        >
          <ListByGatewayLoader startTime={startTime} graphType={graphType} gatewayId={props.gatewayId} baseUri={props.baseUri}>
          <UU5.Bricks.Card style={{ width: '60%'}} >
            <UU5.Bricks.SwitchSelector
              bgStyle="filled"
              colorSchema="indigo-rich"
              items={graphName?.map(value => ({ value }))}
              onChange={({ value }) => { handleChange(value) }}
              value={graphType}
            />
            <List />
            </UU5.Bricks.Card> 
          </ListByGatewayLoader>
        </UuP.Bricks.ComponentWrapper>
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
