//@@viewOn:imports
import { createComponent, useContext, useState } from "uu5g04-hooks";
import Config from "../config/config";
import ManageGateways from "../../routes/manage-gateways";
import SweaterweatherMainContext from "../sweaterweather-main-context";
import Css from "../sweaterweather.css";
import DateTime from "./date-time";
import * as UuSweaterweather from "uu_sweaterweatherg01";
//@@viewOff:imports

const MenuView = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "MenuView",
    //@@viewOff:statics

    render(props) {
        //@@viewOn:hooks
        let dayTime = new Date(Date.now() - 86400 * 1000).toISOString()
        let weekTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        let d = new Date();
        d.setMonth(d.getMonth() - 1)
        let monthTime = d.toISOString()

        let graphName = ["last 24h", "week", "month"];
        const [startTime, setStartTime] = useState(startTime)
        const [graphType, setGraphType] = useState('last 24h')
        console.log("ContextMenu", props?.dataList?.map(value => {
            return value.data.gatewayName
        }));
        const contextData = useContext(SweaterweatherMainContext);
        const [gatewayName, setGatewayName] = useState(props?.dataList[0].data.gatewayName)
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
                component: <ManageGateways />, url: { useCase: "managegateways" }
            });
        }
        function handleChange(value) {
            setGraphType(value)
            value === 'last 24h' ? setStartTime(dayTime) :
                value === 'week' ? setStartTime(weekTime) :
                    setStartTime(monthTime);

        }
        console.log("GatNam", gatewayName);
        function DropdownMenu() {
            return (
                <UU5.Bricks.Dropdown label={gatewayName} bgStyle="transparent" size="l" colorSchema="blue" >
                    {props?.dataList?.map(item => {
                        return (
                            <UU5.Bricks.Dropdown.Item label={item.data.gatewayName}
                                onClick={() => setGatewayName(item.data.gatewayName)} />
                        )
                    })}
                    {canManage() && (<UU5.Bricks.Dropdown.Item divider />)}
                    {canManage() && (<UU5.Bricks.Dropdown.Item label="Manage gateways" onClick={handleClick} />)}
                </UU5.Bricks.Dropdown>
            )
        }

        function Switch() {
            return (
                <>
                    <UU5.Bricks.SwitchSelector
                        bgStyle="filled"
                        items={graphName?.map(value => ({ value }))}
                        onChange={({ value }) => { handleChange(value) }}
                        value={graphType}
                    />
                    <br />
                    <UuSweaterweather.Data.ListByGateway baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                        gatewayName={gatewayName} graphType={graphType} startTime={startTime} />
                </>
            )
        }
        //@@viewOff:handlers
        //@@viewOn:render
        return (
            <>
                <DropdownMenu />
                <div className={Css.header()}>
                    Sweaterweather
                  <UU5.Bricks.Icon icon="mdi-cloud" className={Css.iconSun()} />
                </div>
                <DateTime gatewayName={gatewayName} />
                <Switch />
            </>
        )
        //@@viewOff:render
    }
});

export default MenuView;
