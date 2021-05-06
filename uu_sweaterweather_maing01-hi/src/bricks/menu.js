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
    //@@viewOn:hooks
   return(
       <div>Lala</div>
   )
    //@@viewOff:render
  },
});

export default Menu;
