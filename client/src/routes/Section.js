import * as Style from '../style/main/main.section.style';
import section from '../img/main.png';

const Section = () => {
    return (
        <>
       
            <Style.main_section>
                <Style.main_box>
                    <Style.main_img src={section} alt="sction img" />
                    <Style.main_title_box>
                        <Style.main_title>개발자들을 위한 협업 플랫폼</Style.main_title>
                        <Style.main_name>HANDIZ</Style.main_name>
                    </Style.main_title_box>
                </Style.main_box>
            </Style.main_section>
       
       </>
    )
   }
   
   
   export default Section;