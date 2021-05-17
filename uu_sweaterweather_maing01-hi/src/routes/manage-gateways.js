
//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import ManageGateway from "../bricks/manage-gateways/manage-gateway"
import 'uu_pg01-bricks';
import DataProvider from "../bricks/menu/data-context/data-provider"
//@@viewOff:imports

const ManageGateways = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateways",
  //@@viewOff:statics

  render(props) {
 //@@viewOn:handlers
    function handleBack() {
      return UU5.Environment.getRouter().setRoute({
        url: "/sweaterweather",
      });
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
      <>
      <UU5.Bricks.Container style={{marginTop:"-30px"}}>
        <UU5.Bricks.Row>
        <UU5.Bricks.Button onClick={handleBack}
              style={{color: "#454754" }} bgStyle="transparent" 
              elevation={5}
              borderRadius="8px">
              <UU5.Bricks.Icon icon="plus4u-arrow-left-line" />Back</UU5.Bricks.Button>
        <GatewayProvider {...props}>
        <DataProvider>
          <div style={{paddingTop:"15px"}}>
          <ManageGateway /> 
          </div>  
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