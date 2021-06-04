//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
import Css from "../sweaterweather.css";
import Graph from "./graph";
//@@viewOff:imports

const MenuView = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "MenuView",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {
        dataList: UU5.PropTypes.array
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {
        dataList: []
    },

    render(props) {
        //@@viewOn:hooks
        const [gatewayId, setGatewayId] = useState();
      console.log("gatewayIdddd", gatewayId?.map(item=>{
          return item.split("/")[2] 
      }));
        //@@viewOff:hooks
        let activeState = props?.dataList?.filter(value => {
            console.log("value",value);
            return value.data.state !== 'closed' && value.data.state !== 'initial'
        })
  console.log("gatewayId", activeState.map(value=>{
      return value.data.location['сoordinates']
  }));
        //@@viewOn:handlers
        function handleSetId(value) {
             setGatewayId(value)
        }
        //@@viewOff:handlers

        //@@viewOn:render
        return (
            <div className={Css.tagSelect()}>
                <UU5.Forms.TagSelect
                    size="l"
                    borderRadius={5}
                    allowCustomTags={false}
                    availableTags={activeState.map(value => {
                        if (value.data.state !== 'closed' && value.data.state !== 'initial') {
                            return ({ "content": <UU5.Bricks.Lsi lsi={{cs:value.data.gatewayName.cs, en:value.data.gatewayName.en }}/>, "value": value.data['id']+"/-/"+value.data.location.href+"/-/"+value.data['state']+"/-/"+value.data.gatewayName.cs+"/-/"+value.data.gatewayName.en})
                        }
                        
                    })}
                    colorSchema="black"
                    elevation={5}
                    value={gatewayId}
                    multiple
                    onChange={( {value }) => { handleSetId(value) }}
                />
                  <Graph gatewayId={gatewayId} />  
            </div>
        )
        //@@viewOff:render
    }
});

export default MenuView;
