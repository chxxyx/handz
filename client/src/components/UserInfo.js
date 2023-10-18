import React, { useState, useEffect, useRef } from 'react';
import * as Style from '../style/components/info.edit';
import profile from "../img/defalutProfile1.jpeg";
import edit from "../img/edit.jpeg";
import add from "../img/addBtn.jpeg";

function UserInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stack, setStack] = useState([
    'JavaScript', 'Git', 'MySQL', 'Java', 'Spring Framework',
    'HTML', 'AWS', 'TypeScript', 'React', 'Spring Boot',
    'JPA', 'Docker', 'SQL', 'Linux', 'CSS', 'Python', 'Node.js',
    'Oracle',
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [isRole, setIsRole] = useState(true);
  const [nickname, setNickname] = useState('');

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // 세션 토큰 파싱 및 닉네임 설정
  useEffect(() => {
    const sessionToken = document.cookie.split('; ').find(cookie => cookie.startsWith('sessionToken='));
    if (sessionToken) {
      const tokenParts = sessionToken.split('=');
      const tokenValue = tokenParts[1];
      try {
        const sessionData = JSON.parse(decodeURIComponent(tokenValue));
        const userNickname = sessionData.nickname;
        console.log(userNickname)
        setNickname(userNickname);
      } catch (error) {
        console.error('Error parsing session token:', error);
      }
    }
  }, []);

  const handleToggleRole = () => {
    setIsRole(!isRole);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
    }
  };

  const handleSelectSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = selectedSkills.filter((s) => s !== skill);
    setSelectedSkills(updatedSkills);
  };



  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
       
        const imageBase64 = e.target.result;
        setProfileImage(imageBase64);
      };

      reader.readAsDataURL(file);
    }
  };
  
  return (
    <Style.info_section>
      <Style.info>
        <Style.info_div_box>My Card</Style.info_div_box>
        <Style.info_card_box>
          <Style.info_colum_first>
            <Style.info_update_btn_div src={edit} onClick={openModal} />
              {/* <Style.info_update_img_btn src={edit}/> */}
            
            <Style.info_mycard>

                {!profileImage && (
                    <Style.card_img src={profile} alt="프로필 이미지 업로드" />
                )}
                {profileImage && (
                  <Style.card_img src={profileImage} alt="프로필 이미지" />
                )}
          
              <Style.card_dev>
                {isRole ? 'Back-End' : 'Front-End'}
              </Style.card_dev>
              <Style.card_nickname>{nickname}</Style.card_nickname>
              <div></div>
              <Style.card_stack>
                    {/* <Style.modal_selected_span>My Skills</Style.modal_selected_span> */}
                    {selectedSkills.length > 0 && (
                      <Style.SelectedSkillsUl>
                        {selectedSkills.map((skill, index) => (
                          <Style.SelectedSkills key={index}>
                            {skill}
                          
                          </Style.SelectedSkills>
                        ))}
                      </Style.SelectedSkillsUl>
                    )}
              </Style.card_stack>
            </Style.info_mycard>
          </Style.info_colum_first>



          <Style.info_colum_second>
            <Style.info_openProjects>
              <Style.info_card_span>모집 중인 프로젝트</Style.info_card_span>
              <Style.info_openProjects_content>
                <div>아직 모집 중인 프로젝트가 없어요 !</div>
              </Style.info_openProjects_content>
            </Style.info_openProjects>
            <Style.info_currentProject>
              <Style.info_card_span>참여 중인 프로젝트</Style.info_card_span>
              <Style.info_currentProjects_content>
               <div>아직 참여 중인 프로젝트가 없어요 !</div>
              </Style.info_currentProjects_content>
            </Style.info_currentProject>
          </Style.info_colum_second>
        </Style.info_card_box>
      </Style.info>

      {/* 수정 창 모달 */}
      {isModalOpen && (
        <Style.ModalWrapper>
          <Style.ModalContent>
            <Style.Modal_card_content>
              <Style.modal_colum_first>
                {/* <Style.modal_img src={profile} /> */}


      <Style.StyledImageContainer>
        {!profileImage && (
          <Style.modal_card_img className="profileImg" src={profile} alt="프로필 이미지 업로드" />
        )}
        {profileImage && (
          <Style.modal_card_img className="profileImg" src={profileImage} alt="프로필 이미지" />
        )}
        <input
          type="file"
          id="projectImgInput"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <Style.UploadButton type="button" className="upload_btn" onClick={() => fileInputRef.current.click()}>upload</Style.UploadButton>
      
      
      </Style.StyledImageContainer>
    


                <Style.modal_card_span_title>nickname</Style.modal_card_span_title>
                
                    <Style.modal_card_nicnkname_input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      disabled={!isModalOpen} // 모달이 열려있지 않을 때 입력 비활성화
                    />
            

              </Style.modal_colum_first>
              <Style.modal_colum_second>

              <Style.modal_card_span>development</Style.modal_card_span>
                <Style.modal_role_div>
                  <Style.modal_be
                    onClick={handleToggleRole}
                    active={isRole}
                  >
                    Back-End
                  </Style.modal_be>
                  <Style.modal_fe
                    onClick={handleToggleRole}
                    active={!isRole}
                  >
                    Front-End
                  </Style.modal_fe>
                </Style.modal_role_div>
                <Style.modal_card_span>stack</Style.modal_card_span>
                <Style.modal_stack_div>
                  <Style.modal_stack_ul>
                    {stack.map((skill, index) => (
                      <Style.modal_stack_li
                        key={index}
                        onClick={() => handleSelectSkill(skill)}
                        style={{ cursor: 'pointer' }}
                      >
                        {skill}
                      </Style.modal_stack_li>
                    ))}
                  </Style.modal_stack_ul>
                  <Style.modal_stack_addBox>

                    <Style.modal_stack_insert_input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="새로운 스킬 추가하기"
                    />
                    <Style.modal_stack_add src={add} onClick={handleAddSkill}>+</Style.modal_stack_add>

                  </Style.modal_stack_addBox>
                  <Style.modal_selected_skills>
                    <Style.modal_selected_span>My Skills</Style.modal_selected_span>
                    {selectedSkills.length > 0 && (
                      <Style.modal_stack_ul>
                        {selectedSkills.map((skill, index) => (
                          <Style.modal_stack_select_li key={index}>
                            {skill}
                            <Style.remove_skill
                              onClick={() => handleRemoveSkill(skill)}
                            >
                              x
                            </Style.remove_skill>
                          </Style.modal_stack_select_li>
                        ))}
                      </Style.modal_stack_ul>
                    )}
                  </Style.modal_selected_skills>
                </Style.modal_stack_div>


              </Style.modal_colum_second>
            </Style.Modal_card_content>
            <Style.ModalCloseBtn onClick={closeModal}>Save</Style.ModalCloseBtn>
          </Style.ModalContent>
        </Style.ModalWrapper>
      )}
    </Style.info_section>
  );
}

export default UserInfo;
