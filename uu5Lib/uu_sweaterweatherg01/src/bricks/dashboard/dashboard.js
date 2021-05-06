//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "./gateway-provider";
import GatewayList from "./gateway-list"

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
    baseUri: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    console.log("props",props);
    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(data) {
      let baseUri = props.baseUri
      let gatewayName =props.gatewayName
      console.log("DAta", data );
      return (
        <>
          <GatewayList data={data} gatewayName={props.gatewayName} baseUri={baseUri}/>
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }
    //@@viewOn:render

    return  (
      <UU5.Bricks.Container>
      <GatewayProvider baseUri={props.baseUri}>
        {({ state, data, errorData }) => {

          switch (state) {
            case "pending":
            case "pendingNoData":
              return renderLoad();
            case "error":
            case "errorNoData":
              return renderError(errorData);
            case "itemPending":
            case "ready":
            case "readyNoData":
            default:
              return renderReady(data);
          }
        }}
      </GatewayProvider>
    </UU5.Bricks.Container>
    ) 
    //@@viewOff:render
  },
});

export default Dashboard;
