//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import Menu from "../bricks/menu/menu"
import 'uu_pg01-bricks';
//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:render
    return (
      <>
        <UU5.Bricks.Container style={{ marginTop: "-30px" }}>
          <UU5.Bricks.Row>
            <GatewayProvider {...props}>
              <Menu />
            </GatewayProvider>
          </UU5.Bricks.Row>
        </UU5.Bricks.Container>
      </>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;