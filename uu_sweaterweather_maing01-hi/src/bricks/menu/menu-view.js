//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import Css from "../sweaterweather.css";

//@@viewOff:imports

const MenuView = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "MenuView",
    //@@viewOff:statics

    render(props) {
        //@@viewOn:hooks
        const [gatewayId, setGatewayId] = useState(props?.dataList[0].data.id)
        const [gatewayName, setGatewayName] = useState(props?.dataList[0].data.gatewayName)
        //@@viewOff:hooks
        let suspendedState = props?.dataList?.some(item => {
            return item.data.gatewayName === gatewayName && item.data.state === 'suspended'
        })
        //@@viewOn:handlers
        function DropdownMenu() {
            function handleGateway(value) {
                setGatewayName(value.gatewayName),
                    setGatewayId(value.id)

            }
            return (
                <>
                    <UU5.Bricks.Accordion  size="l">
                        {props?.dataList?.map(item => {
                            if (item.data.state !== 'closed' && item.data.state !== 'initial') {
                                return (
                                    <UU5.Bricks.Panel  
                                    colorSchema="cyan" 
                                        header={item.data.gatewayName }
                                        onClick={() => handleGateway(item.data)}
                                        iconExpanded="mdi-chevron-up"
                                        iconCollapsed="mdi-chevron-down" 
                                    >
                                        {!suspendedState ? (<UuSweaterweather.Data.ListByGateway
                                            baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/"
                                            gatewayId={gatewayId} gatewayName={gatewayName}/>) :
                                            (<><br />
                                                <UU5.Common.Error
                                                    header={gatewayName}
                                                    colorSchema="yellow-rich"
                                                    content="Graph is unavailable at this moment, please try again later" />
                                            </>)}
                                    </UU5.Bricks.Panel>
                                )
                            }
                        })}
                    </UU5.Bricks.Accordion>
                </>
            )
        }

        //@@viewOff:handlers
        //@@viewOn:render
        return (
           <>
                    <DropdownMenu />
                    <UU5.Bricks.GoogleMap
  mapType="roadmap"
  latitude={50.0755381}
  longitude={14.43780049999998}
  googleApiKey="AIzaSyBkv-K9tpS-MrvvRKOpIGEj7H5wwdHD9pA"
  markers={[
    {
      latitude: 50.0755381,
      longitude: 14.43780049999998,
      label: "Prague",
      title: "Capital city",
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    },
    {
      latitude: 50.0754616,
      longitude: 14.43686409999998,
      animation: 'drop',
      onClick: (map, marker, event) => console.log(map, marker, event)
    }
  ]}
/>
<UU5.Bricks.ButtonToTop size="m"/>
                    </>
        )
        //@@viewOff:render
    }
});

export default MenuView;
