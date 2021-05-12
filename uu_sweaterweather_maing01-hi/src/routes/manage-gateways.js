
//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import ManageGateway from "../bricks/manage-gateways/manage-gateway"
import UuP from "uu_pg01";
import 'uu_pg01-bricks';
import DataProvider from "../bricks/menu/data-context/data-provider"
//@@viewOff:imports

const ManageGateways = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateways",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:render
    return (
      <>
      <UU5.Bricks.Container>
        <UU5.Bricks.Row>
        <GatewayProvider {...props}>
        <DataProvider>
          <ManageGateway />   
        </DataProvider>
        </GatewayProvider>
        </UU5.Bricks.Row>
        </UU5.Bricks.Container>
    
    
      </>
    );
    //@@viewOff:render
  }
});

export default ManageGateways;