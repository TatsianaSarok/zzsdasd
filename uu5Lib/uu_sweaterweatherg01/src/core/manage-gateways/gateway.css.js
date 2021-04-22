import Config from "./config/config";
const gateway = () => Config.Css.css`
display: flex;
`;
const gatewayStyle = () => Config.Css.css`
padding: 20px;
`;
const icon = () => Config.Css.css`
text-align: center; 
padding-top:7%;
font-size: 	3em;
`;

export default {
    gateway,
    gatewayStyle,
    icon
};
