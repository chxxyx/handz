import * as Style from '../style/main/header.style';
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

const Header = () => {
 return (
    <>
    <Style.header>
        <Style.header_logo_box>
                
                    
                    <Style.home_text>
                        <Style.header_a to= '/'>
                            <Style.logo src={logo}/>
                        </Style.header_a>
                    </Style.home_text>
        </Style.header_logo_box>
        <Style.right>
            <Style.signup to='/signup'>SignUp</Style.signup>
            <Style.signin to='/signin'>SignIn</Style.signin>
            <Style.mypage>SignOut</Style.mypage>
            <Style.mypage to='/user/info/:userId'>my card</Style.mypage>
        </Style.right>
    </Style.header>
    </>
 )
}


export default Header;