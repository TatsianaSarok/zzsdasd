//@@viewOn:imports
import { createComponent, useContext, useState } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayContext from './manage-gateways/gateway-context/gateway-context';
import ManageGateways from "../routes/manage-gateways";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import Css from "../bricks/sweaterweather.css";
import DateTime from "../bricks/date-time";
import * as UuSweaterweather from "uu_sweaterweatherg01";
//@@viewOff:imports

const Menu = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Menu",
    //@@viewOff:statics

    render() {
        //@@viewOn:hooks
        let contextGateway = useContext(GatewayContext)
        const contextData = useContext(SweaterweatherMainContext);
        let [gatewayName, setGatewayName] = useState(contextGateway?.data?.itemList[0].gatewayName)
        //@@viewOff:hooks

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
                component: <ManageGateways />,
            });
        }
        console.log("GatNam", gatewayName);
        //@@viewOff:handlers
        return (
            <>
                <UU5.Bricks.Dropdown label={gatewayName} bgStyle="transparent" size="l" colorSchema="blue" >
                    {contextGateway?.data?.itemList?.map(item => {

                        return (
                            <UU5.Bricks.Dropdown.Item label={item.gatewayName}
                                onClick={() => setGatewayName(item.gatewayName)} />
                        )
                    })}
                    {canManage() && (<UU5.Bricks.Dropdown.Item divider />)}
                    {canManage() && (<UU5.Bricks.Dropdown.Item label="Manage gateways" onClick={handleClick} />)}
                </UU5.Bricks.Dropdown>
                <div className={Css.header()}>
                    Sweaterweather
                  <UU5.Bricks.Icon icon="mdi-cloud" className={Css.iconSun()} />
                </div>
                <DateTime />
                <UuSweaterweather.Bricks.Dashboard gatewayName={gatewayName} />
            </>
        )
        //@@viewOff:render
    }
});

export default Menu;
