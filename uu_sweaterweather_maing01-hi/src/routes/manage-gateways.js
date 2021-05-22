
//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext, useLsiValues} from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import ManageGateway from "../bricks/manage-gateways/manage-gateway"
import 'uu_pg01-bricks';
import DataProvider from "../bricks/menu/data-context/data-provider"
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import Lsi from "../bricks/manage-gateways/manage-gateway-lsi";
//@@viewOff:imports

const ManageGateways = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateways",
  //@@viewOff:statics

  render(props) {
    const inputLsi = useLsiValues(Lsi)
 //@@viewOn:handlers
 const contextData = useContext(SweaterweatherMainContext);
 const isAwidLisenceOwner = contextData?.data?.authorizedProfileList?.some(
  (profile) => profile === Config.Profiles.AWIDLISENCEOWNER
);
const isAuthorities = contextData?.data?.authorizedProfileList?.some(
  (profile) => profile === Config.Profiles.AUTHORITIES
);
function canManage() {
  return isAuthorities || isAwidLisenceOwner
}
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
       {canManage() && ( <UU5.Bricks.Row>
        <UU5.Bricks.Button onClick={handleBack}
              style={{color: "#454754" }} bgStyle="transparent" 
              elevation={5}
              borderRadius="8px">
              <UU5.Bricks.Icon icon="plus4u-arrow-left-line" />{inputLsi.back}</UU5.Bricks.Button>
             <GatewayProvider {...props}>
        <DataProvider>
          <div style={{paddingTop:"15px"}}>
          <ManageGateway /> 
          </div>  
        </DataProvider>
        </GatewayProvider>
        </UU5.Bricks.Row>)}
        {!canManage() && ( <div> <UU5.Common.Error bgStyle="filled" errorData="You don't have permission to access this page" colorSchema="brown" content="Error" /></div>)}
        </UU5.Bricks.Container> 
      </>
    );
    //@@viewOff:render
  }
});

export default ManageGateways;