//@@viewOn:imports
import { createComponent, useContext, useState } from "uu5g04-hooks";
import Config from "../config/config";
import ManageGateways from "../../routes/manage-gateways";
import SweaterweatherMainContext from "../sweaterweather-main-context";

import * as UuSweaterweather from "uu_sweaterweatherg01";

//@@viewOff:imports

const MenuView = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "MenuView",
    //@@viewOff:statics

    render(props) {
        //@@viewOn:hooks
        const [gatewayId, setGatewayId] = useState(props?.dataList[0].data.id)
        const contextData = useContext(SweaterweatherMainContext);
        const [gatewayName, setGatewayName] = useState(props?.dataList[0].data.gatewayName)
        //@@viewOff:hooks
        let suspendedState = props?.dataList?.some(item => {
            return item.data.gatewayName === gatewayName && item.data.state === 'suspended'
        })
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

        function DropdownMenu() {
            function handleGateway(value) {
                setGatewayName(value.gatewayName),
                    setGatewayId(value.id)

            }
            return (
                <>
                <UU5.Bricks.Dropdown label={gatewayName} bgStyle="transparent" size="l" colorSchema="blue" >
                    {props?.dataList?.map(item => {
                        if (item.data.state !== 'closed' && item.data.state !== 'initial') {
                            return (
                                <UU5.Bricks.Dropdown.Item label={item.data.gatewayName}
                                    onClick={() => handleGateway(item.data)} />
                            )
                        }
                    })}
                    {canManage() && (<UU5.Bricks.Dropdown.Item divider />)}
                    {canManage() && (<UU5.Bricks.Dropdown.Item label="Manage gateways" onClick={handleClick} />)}
                </UU5.Bricks.Dropdown>
                {props?.dataList?.map(item => {
                        if (item.data.state !== 'closed' && item.data.state !== 'initial') {
              return (  <UU5.Bricks.Accordion colorSchema="default">
                <UU5.Bricks.Panel
                  header={item.data.gatewayName}
                   onClick={() => handleGateway(item.data)}
                  colorSchema="primary"
                  iconExpanded="mdi-chevron-up"
                  iconCollapsed="mdi-chevron-down"
                />
                </UU5.Bricks.Accordion>
                         )
                        }
                    })}
                </>
            )
        }

        function Switch() {
            return (
                <>
                        {!suspendedState ? (<UuSweaterweather.Data.ListByGateway
                            baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                            gatewayId={gatewayId} />) :
                            (<><br />
                                <UU5.Common.Error
                                    header={gatewayName}
                                    colorSchema="yellow-rich"
                                    content="Graph is unavailable at this moment, please try again later" />
                            </>)}
                </>
            )
        }
        //@@viewOff:handlers
        //@@viewOn:render
        return (
            <UU5.Bricks.Container >
            <UU5.Bricks.Row>
            <DropdownMenu />
<Switch />
            </UU5.Bricks.Row>
          </UU5.Bricks.Container>
      
            
        )
        //@@viewOff:render
    }
});

export default MenuView;
