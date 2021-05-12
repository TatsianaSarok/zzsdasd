//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import Day from "./list/day";
import Time from "./list/time";
import ListView from "./list/list-view";
import CurrentData from "./current-data";
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
          <UU5.Bricks.Card style={{ width: '60%', height:550,borderRadius: "8px"}} >
            <UU5.Bricks.SwitchSelector  size="l" style={{ borderRadius: "8px" }}
              bgStyle="filled"
              colorSchema="indigo-rich"
              items={graphName?.map(value => ({ value }))}
              onChange={({ value }) => { handleChange(value) }}
              value={graphType}
            /> 
             <CurrentData   baseUri={props.baseUri} gatewayId={props.gatewayId}/> 
             <div style={{textAlign: 'center', clear:"both",marginRight: "15px",  fontFamily: 'Brush Script MT', fontSize: "25px"}}  >
            <Day />
            </div>    
                <div style={{ textAlign: 'center',fontFamily: 'Brush Script MT', fontSize: "25px"}}>
            <Time/>
            </div>
            <ListView />
          </UU5.Bricks.Card>
        </ListByGatewayLoader>
        </>
      )
    }

  },
});

export default ListByGateway
