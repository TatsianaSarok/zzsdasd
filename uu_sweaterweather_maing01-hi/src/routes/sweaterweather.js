//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import Menu from "../bricks/menu/menu"
import UuP from "uu_pg01";
import 'uu_pg01-bricks';

//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:render
    return (
      <>
        <UuP.Bricks.ComponentWrapper
        colorSchema={props.colorSchema}
        elevation={props.elevation}
        borderRadius={props.borderRadius}
        cardView={props.cardView}
      >
        <GatewayProvider {...props}>
          <Menu />
        </GatewayProvider>
      </UuP.Bricks.ComponentWrapper>
      </>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;