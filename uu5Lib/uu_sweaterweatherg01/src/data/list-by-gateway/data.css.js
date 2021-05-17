import Config from "./config/config";
const day = () => Config.Css.css`
text-align: center;
clear: both;
margin-right: 15px;
font-family: Brush Script MT;
font-size: 25px;
color: #454754; 
`;

const time = () => Config.Css.css`
text-align: center;
font-family: Brush Script MT;
font-size: 25px;
color: #454754; 
`;

const menu = () => Config.Css.css`
border-radius: 8px;
`;

export default {
    day,
    time,
    menu
};
