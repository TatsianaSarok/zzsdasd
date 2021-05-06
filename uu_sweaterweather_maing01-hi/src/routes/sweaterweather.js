//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider";
import GatewayContext from "../bricks/manage-gateways/gateway-context/gateway-context";
import Menu from "../bricks/menu";

//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:render
    return (
      <>
        <GatewayProvider>
          <GatewayContext.Consumer>
            {({ state, errorData }) => {
              switch (state) {
                case "pending":
                case "pendingNoData":
                  return <UU5.Bricks.Loading />;
                case "error":
                case "errorNoData":
                  return <UU5.Bricks.Error error={errorData.error} />;
                case "ready":
                case "readyNoData":
                 default:
                   return <Menu />;
              }
            }}
          </GatewayContext.Consumer>
        </GatewayProvider>
      </>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;