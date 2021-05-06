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
    let contextData= useContext(GatewayContext)
    console.log("Context", contextData?.data?.itemList);
    <UU5.Bricks.Dropdown
  label="transparent"
  bgStyle="transparent"
  size="l"
  colorSchema="green"
>
  <UU5.Bricks.Dropdown.Item label="{user name}" header />
  <UU5.Bricks.Dropdown.Item label="Profile" />
  <UU5.Bricks.Dropdown.Item label="Settings" />
  <UU5.Bricks.Dropdown.Item label="Logout" />
</UU5.Bricks.Dropdown>
    //@@viewOn:hooks
   return(
       <div>Lala</div>
   )
    //@@viewOff:render
  },
});

export default Menu;
