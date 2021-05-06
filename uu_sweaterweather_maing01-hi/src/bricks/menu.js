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
        let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
        let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        let d = new Date();
        d.setMonth(d.getMonth() - 1)
        let monthTime = d.toISOString()

        let graphName = ["last 24h", "week", "month"];
        const [startTime, setStartTime] = useState(dayTime)
        const [graphType, setGraphType] = useState('last 24h')
        let contextGateway = useContext(GatewayContext)
        const contextData = useContext(SweaterweatherMainContext);
        const [gatewayName, setGatewayName] = useState(contextGateway?.data?.itemList[0].gatewayName)
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
        function handleChange(value) {
            setGraphType(value)
            value === 'last 24h' ? setStartTime(dayTime) :
                value === 'week' ? setStartTime(weekTime) :
                    setStartTime(monthTime)
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

                <DateTime gatewayName={gatewayName}/>
               
                    <UU5.Bricks.SwitchSelector
                        bgStyle="filled"
                        items={graphName?.map(value => ({ value }))}
                        onChange={({ value }) => { handleChange(value) }}
                        value={graphType}
                    />
                    <br />
           
                <UuSweaterweather.Data.ListByGateway  gatewayName={gatewayName} graphType={graphType} startTime={startTime} />
            </>
        )
        //@@viewOff:render
    }
});

export default Menu;
