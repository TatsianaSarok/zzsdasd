//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "./gateway-provider";
import Graph from "./graph.js"
import CLASS_NAMES from "./sweaterweather.css.js"

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Dashboard",
  //@@viewOff:statics
};

export const Dashboard = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayId: UU5.PropTypes.string,
    graphType: UU5.PropTypes.oneOf(["last 24h", "week", "month"]),
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: "6083ddbc4a956e001b951fe1",
    graphType: "week",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(data) {
      return <UU5.Bricks.Div className={CLASS_NAMES.dashboard()} >
        <Graph data={data} baseUri={props.baseUri} graphType={props.graphType} />
      </UU5.Bricks.Div>
    }

    function renderError(errorData) {
      return <UU5.Bricks.Error 
      content={errorData.reason||'Error happened!'}
      error={errorData.error}
      errorData={errorData.data} />
    }
    //@@viewOn:render
    if(!props.gatewayId) return renderError({reason: 'Please pass a getwayId propery!'})
    return  (
      <GatewayProvider baseUri={props.baseUri} gatewayId={props.gatewayId} >
        {({ state, data, errorData }) => {
          switch (state) {
            case "pending":
            case "pendingNoData":
              return renderLoad();
            case "error":
            case "errorNoData":
              errorData.reason = `Error happened! Most likely gateway with ${props.gatewayId} id couldn't be fetched.`
              return renderError(errorData);
            case "itemPending":
            case "ready":
            case "readyNoData":
            default:
              return renderReady(data);
          }
        }}
      </GatewayProvider>
    ) 
    //@@viewOff:render
  },
});

export default Dashboard;
