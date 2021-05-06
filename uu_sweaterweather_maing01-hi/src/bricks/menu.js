//@@viewOn:imports
import { createComponent, useContext, useState } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayContext from './manage-gateways/gateway-context/gateway-context';
import ManageGateways from "../routes/manage-gateways";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import Css from "../bricks/sweaterweather.css";
import UU5Sweaterweather from "uu_sweaterweatherg01";
//@@viewOff:imports

const Menu = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Menu",
    //@@viewOff:statics

    render() {
        //@@viewOn:hooks
    
        let graphName = ["last 24h", "week", "month"];
        const [graphType, setGraphType] = useState('last 24h')
        let contextGateway = useContext(GatewayContext)
        console.log(contextGateway);
        const contextData = useContext(SweaterweatherMainContext);
        const [gatewayName, setGatewayName] = useState("Works"/*contextGateway?.data?.itemList[0].gatewayName*/)
        //@@viewOff:hooks
        console.log(graphType);
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
        function handleChange(value) {
            setGraphType(value)
        }
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
               
                    <UU5.Bricks.SwitchSelector
                        bgStyle="transparent"
                        items={graphName?.map(value => ({ value }))}
                        onChange={({ value }) => { handleChange(value) }}
                        value={graphType}
                        className={Css.graphTypeSwitcher()}
                    />
                    <br />
           
                <UU5Sweaterweather.Bricks.Dashboard baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/" graphType={graphType} />
            </>
        )
        //@@viewOff:render
    }
});

export default Menu;
