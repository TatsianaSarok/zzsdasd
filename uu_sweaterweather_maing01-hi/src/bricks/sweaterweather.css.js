import Config from "./config/config";
const switcher = () => Config.Css.css`
display: flex;
justify-content: center;
`;
const header = () => Config.Css.css`
display: flex;
justify-content: center;
font-size: 30px;
`;  
const iconSun = () => Config.Css.css`
color: blue;
font-size: 35px;
`;
const graphTypeSwitcher = () => Config.Css.css`
margin: 0 auto;
max-width: 200px;
display: block;
`;

export default {
    switcher,
    header,
    iconSun,
    graphTypeSwitcher  
};
