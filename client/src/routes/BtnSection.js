import { Link } from "react-router-dom";
import * as Style from '../style/main/main.section.style';

const Main = () => {
    return (
         <Style.main_btn_box>
            <Style.main_be_btn to='/list/be'>Back-End</Style.main_be_btn>
            <Style.main_fe_btn to='/list/fe'>Front-End</Style.main_fe_btn>
         </Style.main_btn_box>
    )
   }
   
   
   export default Main;