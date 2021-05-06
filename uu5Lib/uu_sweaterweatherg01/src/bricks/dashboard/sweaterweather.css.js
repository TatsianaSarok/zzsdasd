import Config from "./config/config";

const dashboard = () => Config.Css.css`
max-width: 900px;
margin: 0 auto;
padding: 1.5em;
position: relative;
.loader-custom {
    position: absolute;
    right: 0; 
}
`;

export default {
    dashboard,  
};
