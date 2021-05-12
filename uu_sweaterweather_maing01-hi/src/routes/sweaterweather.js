//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "../bricks/manage-gateways/gateway-context/gateway-provider"
import Menu from "../bricks/menu/menu"
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import 'uu_pg01-bricks';
import ManageGateways from "./manage-gateways";
//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:hooks
    //@viewOff:hooks
    const contextData = useContext(SweaterweatherMainContext);
    //@@viewOn:handlers
    const isAwidLisenceOwner = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AWIDLISENCEOWNER
    );
    const isAuthorities = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AUTHORITIES
    );
    function canManage() {
      return isAuthorities || isAwidLisenceOwner
    }
    function handleClick() {
      return UU5.Environment.getRouter().setRoute({
        component: <ManageGateways />, url: { useCase: "managegateways" }
      });
    }

    //@@viewOn:render
    return (
      <>
        <UU5.Bricks.Container style={{marginTop:"-30px"}}>
          <UU5.Bricks.Row>
            {canManage() && <UU5.Bricks.Button onClick={handleClick}
              colorSchema="brown" bgStyle="outline" style={{ float: "right" }}>
              Manage gateways<UU5.Bricks.Icon
                icon="mdi-settings" /></UU5.Bricks.Button>}
            <UU5.Bricks.Text className="uu5-common-center"
              style={{ fontFamily: 'Brush Script MT', fontSize: "50px" }}>Sweaterweather</UU5.Bricks.Text>
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