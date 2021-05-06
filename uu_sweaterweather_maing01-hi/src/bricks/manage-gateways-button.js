//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import ManageGateways from "../routes/manage-gateways";
import Config from "./config/config";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import DateTime from "../bricks/date-time";
import Css from "./sweaterweather.css";
//@@viewOff:imports

const ManageGatewaysButton = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGatewaysButton",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render() {
    const contextData = useContext(SweaterweatherMainContext);
    //@@viewOn:hooks
    //@@viewOff:hooks
//console.log("ContextData", contextData?.data?.authorizedProfileList);
    //@@viewOn:private    
    //@@viewOff:private
    const isAwidLisenceOwner = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AWIDLISENCEOWNER
    );
    const isAuthorities = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AUTHORITIES
    );

    function canManage() {
      return isAuthorities  || isAwidLisenceOwner
    }

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function handleClick() {
      return UU5.Environment.getRouter().setRoute({
        component: <ManageGateways />,
      });
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
      <>
        {canManage() && (
          <UU5.Bricks.Button
            onClick={handleClick}
            bgStyle="transparent"
            colorSchema="blue"
            size="m"
          >ManageGateways</UU5.Bricks.Button>
        )}
        <div className={Css.header()}>
          Sweaterweather
        <UU5.Bricks.Icon icon="mdi-cloud" className={Css.iconSun()} />
        </div>
        <DateTime />
      </>
    );
    //@@viewOff:render
  },
});

export default ManageGatewaysButton;
