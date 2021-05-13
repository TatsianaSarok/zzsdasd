import Config from "./config/config";
const gateway = () => Config.Css.css`
display: flex;
`;
const gatewayStyle = () => Config.Css.css`
padding: 20px;
`;
const add = () => Config.Css.css`
margin: 0;
position: absolute;
top: 47%;
left: 56%;
transform: translate(-50%, -50%);
cursor: pointer;
font-size: xxx-large
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
export default {
    gateway,
    gatewayStyle,
    add,
    state,
    icon,
    iconSection
};
