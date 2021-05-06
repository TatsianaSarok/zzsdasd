//@@viewOn:imports
import { createComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayContext from './manage-gateways/gateway-context/gateway-context';

//@@viewOff:imports

const Menu = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "Menu",
    //@@viewOff:statics

    render() {

        let contextData = useContext(GatewayContext)
        let names =["Peta", "Works"];
    //  contextData?.data?.itemList?.map(item=>{
    //     return names.push(item.gatewayName)})
    //     console.log("names", names);
        //@@viewOn:hooks
        return (
            <UU5.Bricks.Dropdown label="transparent"  bgStyle="transparent" size="l" colorSchema="green" >
           {names.map(item=>{
               return <UU5.Bricks.Dropdown label={item} />
           }) }
        </UU5.Bricks.Dropdown>
        )
        //@@viewOff:render
    },
});

export default Menu;
