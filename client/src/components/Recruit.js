import React, { useState, useRef } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Style from "../style/components/recruit.form";
import * as Style2 from "../style/components/recruit.detail";
import img from "../img/logo.png";
import profile from "../img/profile_img.png";
import * as Style3 from '../style/components/info.edit';
import add from "../img/addBtn.jpeg";


function Recruit() {
  const [projectName, setProjectName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamContact, setTeamContact] = useState('');
  const [fePeople, setFePeople] = useState('');
  const [bePeople, setBePeople] = useState('');
  const [startDt, setStartDt] = useState('');
  const [endDt, setEndDt] = useState('');
  const [stacks, setStacks] = useState([]);
  const [longText, setLongText] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [currentSection, setCurrentSection] = useState('create'); // 초기값은 'create'
  const fileInputRef = useRef(null);
  const { id } = useParams();

  const [stack, setStack] = useState([
    'JavaScript', 'Git', 'MySQL', 'Java', 'Spring Framework',
    'HTML', 'AWS', 'TypeScript', 'React', 'Spring Boot',
    'JPA', 'Docker', 'SQL', 'Linux', 'CSS', 'Python', 'Node.js',
    'Oracle',
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
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
    const file = e.target.files[0]; // 1번 파일

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // 파일을 읽은 후 base64 문자열로 변환하여 이미지 표시와 state에 저장
        const imageBase64 = e.target.result;
        setProjectImage(imageBase64);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    // 유효성 검사 (필수 항목 입력 여부 확인)
    if (
      !projectName ||
      !teamName ||
      !teamContact ||
      !fePeople ||
      !bePeople ||
      !startDt ||
      !endDt ||
      !selectedSkills.length ||
      !longText
    ) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }
    setCurrentSection('detail');
  };

  const handleEdit = () => {
    setCurrentSection('edit');
   };

   const handleEditClear = () => {
    setCurrentSection('detail');
   }


  

  return (
    <div>

    {currentSection === 'create' && ( // create 섹션
      <Style.create_section>
        <Style.create>
          <Style.form>
            <Style.create_left>
            <div>
                <Style.create_projectName_input
                  type="text"
                  placeholder="프로젝트명"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
  

      <Style.StyledImageContainer>
              {!projectImage && (
                  <Style.create_image src={img} alt="대표 이미지 업로드" />
              )}
                {projectImage && (
                  <Style.create_image src={projectImage} alt="대표 이미지" />
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
              
         
            </Style.create_left>


            <Style.create_right>
              
              <div>
              <Style.teamName_input
                  type="text"
                  placeholder="팀 이름"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div>
              <Style.create_input
                  type="text"
                  placeholder="팀 연락처"
                  value={teamContact}
                  onChange={(e) => setTeamContact(e.target.value)}
                />
              </div>

               <Style.devInputBox>
                  <Style.dev_input
                    type="text"
                    placeholder="Front-end"
                    value={fePeople}
                    onChange={(e) => setFePeople(e.target.value)}
                  />
                
                  <Style.dev_input
                    type="text"
                    placeholder="Back-end"
                    value={bePeople}
                    onChange={(e) => setBePeople(e.target.value)}
                  />
            
              </Style.devInputBox>

              <Style.date_inputBox>
                <Style.DateInput
                  type="date"
                  placeholder="시작일"
                  value={startDt}
                  onChange={(e) => setStartDt(e.target.value)}
                />
            
                <Style.DateInput
                  type="date"
                  placeholder="종료일"
                  value={endDt}
                  onChange={(e) => setEndDt(e.target.value)}
                />
              </Style.date_inputBox>
              <div>

              <Style3.modal_stack_div>
                  <Style3.modal_stack_ul>
                    {stack.map((skill, index) => (
                      <Style3.modal_stack_li
                        key={index}
                        onClick={() => handleSelectSkill(skill)}
                        style={{ cursor: 'pointer' }}
                      >
                        {skill}
                      </Style3.modal_stack_li>
                    ))}
                  </Style3.modal_stack_ul>
                  <Style3.modal_stack_addBox>

                    <Style3.modal_stack_insert_input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="새로운 스킬 추가하기"
                    />
                    <Style3.modal_stack_add src={add} onClick={handleAddSkill}>+</Style3.modal_stack_add>

                  </Style3.modal_stack_addBox>
                  <Style3.modal_selected_skills>
                    <Style3.modal_selected_span>Skills</Style3.modal_selected_span>
                    {selectedSkills.length > 0 && (
                      <Style3.modal_stack_ul>
                        {selectedSkills.map((skill, index) => (
                          <Style3.modal_stack_select_li key={index}>
                            {skill}
                            <Style3.remove_skill
                              onClick={() => handleRemoveSkill(skill)}
                            >
                              x
                            </Style3.remove_skill>
                          </Style3.modal_stack_select_li>
                        ))}
                      </Style3.modal_stack_ul>
                    )}
                  </Style3.modal_selected_skills>
                </Style3.modal_stack_div>



              </div>
              <div>
                <Style.insert_input
                  type="text"
                  placeholder="프로젝트 내용"
                  value={longText}
                  onChange={(e) => setLongText(e.target.value)}
                />
              </div>
              <Style.AddBtn onClick={handleSubmit}>등록</Style.AddBtn>
            </Style.create_right>
          </Style.form>
        </Style.create>
      </Style.create_section>

      )}

      {currentSection === 'detail' && ( // 상세로 넘어가야 함 

                <Style2.detail_section>
                  <Style2.detail>
                    <Style2.detail_colum_first>
                      <div>삭제하기</div>
                      <div onClick={handleEdit}>수정하기</div>
                      <Style2.detail_img src={projectImage} />
                      <Style2.member_list to='/project/admin'> 아직 지원자가 없어요 ! </Style2.member_list>
      
                    </Style2.detail_colum_first>

                    <Style2.detail_colum_second>
                      <div>{projectName}</div>
                      <div>Fe: {fePeople}, Be: {bePeople}</div>
                      
                      
                      <div>{selectedSkills}</div>
                      
                      
                      <div>{longText}</div>
                    </Style2.detail_colum_second>
                  </Style2.detail>

                </Style2.detail_section>
      )}

      {currentSection === 'edit' && ( // 상세로 넘어가야 함 
             <Style.create_section>
             <Style.create>
               <Style.form>
               <Style.create_left>

                <div>
                    {/* <label htmlFor="projectImgInput">대표 이미지 업로드</label> */}
                    <input
                      type="file"
                      id="projectImgInput"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e)}
                    />
                    {!projectImage && (
                      <Style.create_image src={img} alt="대표 이미지 업로드" />
                    )}
                    {projectImage && (
                      <Style.create_image src={projectImage} alt="대표 이미지" />
                    )}
                    {projectImage ? null : <div className="image-overlay">클릭하여 업로드</div>}

                </div>
                </Style.create_left>
                 <Style.create_right>
                   <div>
                     <input
                       type="text"
                       placeholder="프로젝트명"
                       value={projectName}
                       onChange={(e) => setProjectName(e.target.value)}
                     />
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="팀이름"
                       value={teamName}
                       onChange={(e) => setTeamName(e.target.value)}
                     />
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="팀 연락처"
                       value={teamContact}
                       onChange={(e) => setTeamContact(e.target.value)}
                     />
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="front-end"
                       value={fePeople}
                       onChange={(e) => setFePeople(parseInt(e.target.value))}
                     />
   
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="back-end"
                       value={bePeople}
                       onChange={(e) => setBePeople(parseInt(e.target.value))}
                     />

                   </div>
                   <div>
                     <input
                       type="date"
                       placeholder="시작일"
                       value={startDt}
                       onChange={(e) => setStartDt(e.target.value)}
                     />
                   </div>
                   <div>
                     <input
                       type="date"
                       placeholder="종료일"
                       value={endDt}
                       onChange={(e) => setEndDt(e.target.value)}
                     />
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="요구 기술 스택"
                       value={stacks}
                       onChange={(e) => setStacks(e.target.value.split(','))}
                     />
                   </div>
                   <div>
                     <input
                       type="text"
                       placeholder="프로젝트 내용"
                       value={longText}
                       onChange={(e) => setLongText(e.target.value)}
                     />
                   </div>
                   <button onClick={handleEditClear}>수정하기</button>
                 </Style.create_right>
               </Style.form>
             </Style.create>
           </Style.create_section>
                  
      )}
    </div>
  );
}

export default Recruit;
