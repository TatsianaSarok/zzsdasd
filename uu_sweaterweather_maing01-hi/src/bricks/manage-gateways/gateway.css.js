import Config from "./config/config";

const gateway = () => Config.Css.css`
display: flex;
`;

const gatewayStyle = () => Config.Css.css`
padding: 20px;
background-color: rgba(228,223,220, 0.5);
`;

const add = () => Config.Css.css`
margin: 0;
position: absolute;
top: 47%;
left: 56%;
transform: translate(-50%, -50%);
cursor: pointer;
font-size: xxx-large;
`;

const state = () => Config.Css.css`
margin-right: 5px;
float:right;
`;

const iconSection = () => Config.Css.css`
border-top: 1px solid rgba(0, 93, 167, 0.12);
`;

const icon = () => Config.Css.css`
font-size: 20px;
cursor:pointer;
margin: 5px 10px 0 5px;
float:right
`;

const form = () => Config.Css.css`
.uu5-bricks-modal-dialog {
    background: rgba(228,223,220)
}
button.color-schema-blue-rich, .color-schema-primary{
    background : #454754 
}
button.color-schema-blue-rich:hover, .color-schema-primary:hover{
    background : #333232
}
.uu5-forms-input-form-item{
    background: rgba(228,223,220)
}
.uu5-forms-input-form-item: focus{
    border-color: #454754 
}
.uu-xmtvzx:focus {
    border-color: #454754 
}
.uu-13cszwg.uu-rll6kp.uu-147oa3r{
    background-color : rgba(69,71,84, 0.15)
}
.uu-13cszwg:hover{
    background-color : rgba(69,71,84, 0.15)
}
.uu5-bricks-button-m{
    background-color : rgba(69,71,84, 0.15)
} 
.uu5-bricks-button-m:hover {
    background-color : rgba(69,71,84, 0.45)
}
`;

export default {
    gateway,
    gatewayStyle,
    add,
    state,
    icon,
    iconSection,
    form
};
