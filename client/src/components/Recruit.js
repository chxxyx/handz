import React, { useState, useRef } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Style from "../style/components/recruit.form";
import * as Style2 from "../style/components/recruit.detail";
import img from "../img/logo.png";
import profile from "../img/profile_img.png";
import add from "../img/addBtn.jpeg";
import next from "../img/nextBtn.jpeg"
import prev from "../img/prevBtn.jpeg"
import back from "../img/back.jpeg"



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
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const cardsPerPage = 3; // 한 페이지에 보여질 카드 수

  const { id } = useParams();

  const [stack, setStack] = useState([
    'JavaScript', 'Git', 'MySQL', 'Java', 'AWS', 'TypeScript', 'React', 'Spring Boot',
    'JPA', 'SQL', 'Linux', 'CSS', 'Node.js',
    'Oracle',
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

    // selectedSkills 배열을 stacks와 같은 형식으로 변환
    const transformedSkills = selectedSkills.map((skill, index) => ({
      id: index + 1,
      stack: skill,
    }));

    console.log(transformedSkills);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentStacks = transformedSkills.slice(startIndex, endIndex);



  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

// 이전 페이지로 이동하는 함수
const goToPreviousPage = () => {
  setCurrentPage((prevPage) => prevPage - 1);
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
        <Style.create >
          <Style.form>
            <Style.create_left>
           
              <Style.left_span>프로젝트명</Style.left_span>
                <Style.create_projectName_input
                  type="text"
                  placeholder="프로젝트 이름을 입력해주세요"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
             
  

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
        <Style.UploadButton type="button" className="upload_btn" onClick={() => fileInputRef.current.click()}>Upload Project Image</Style.UploadButton>
      
      </Style.StyledImageContainer>

      <div>

      <Style.right_span>팀 이름</Style.right_span>
          
          <div>
            <Style.teamName_input
                type="text"
                placeholder="팀 이름을 입력해주세요"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div>

            <Style.right_span>팀 연락처</Style.right_span>
            <Style.create_input
                type="text"
                placeholder="팀원과 연락할 별도의 연락처를 입력해주세요"
                value={teamContact}
                onChange={(e) => setTeamContact(e.target.value)}
              />
            </div>

<Style.modal_stack_div>

    <Style.modal_stack_addBox>

      <Style.modal_stack_insert_input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="프로젝트에서 사용할 기술 스택을 추가해주세요"
      />
      <Style.modal_stack_add src={add} onClick={handleAddSkill}>+</Style.modal_stack_add>

    </Style.modal_stack_addBox>
    <Style.modal_selected_skills>
      <Style.modal_selected_span>Project Skills</Style.modal_selected_span>
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



</div>
            </Style.create_left>
            
            <Style.create_right>
         
              <Style.right_span>모집 인원</Style.right_span>
               <Style.devInputBox>
                  <Style.dev_input
                    type="text"
                    placeholder="Front-End"
                    value={fePeople}
                    onChange={(e) => setFePeople(e.target.value)}
                  />
                
                  <Style.dev_input
                    type="text"
                    placeholder="Back-End"
                    value={bePeople}
                    onChange={(e) => setBePeople(e.target.value)}
                  />
            
              </Style.devInputBox>

              <Style.right_span>프로젝트 기간</Style.right_span>
              <Style.date_inputBox>
                <Style.DateInput
                  className='dtColor'
                  type="date"
                  placeholder="시작일"
                  value={startDt}
                  onChange={(e) => setStartDt(e.target.value)}
                />
              <div> ~ </div>
                <Style.DateInput
                  type="date"
                  placeholder="종료일"
                  value={endDt}
                  onChange={(e) => setEndDt(e.target.value)}
                />
              </Style.date_inputBox>
              

              <div>
                <Style.right_span>프로젝트 내용</Style.right_span>
                <Style.insert_input
                  type="text"
                  placeholder="프로젝트 내용을 입력해주세요 
                  ex) 소개, 목표, 개발 문화"
                  value={longText}
                  onChange={(e) => setLongText(e.target.value)}
                />
              </div>

              <Style.AddBtn onClick={handleSubmit}>Publish</Style.AddBtn>
            </Style.create_right>
          </Style.form>
        </Style.create>
      </Style.create_section>

      )}

      {currentSection === 'detail' && ( // 상세로 넘어가야 함 

                <Style2.detail_section>
                      
                <Style2.detail>

                  <Style2.detail_pro_name>
                    {projectName}
                  </Style2.detail_pro_name>
                

                  <Style2.detail_colums>
                    
                    <Style2.detail_colum_first>
                    {!projectImage && (
                          <Style2.detail_img src={img} alt="대표 이미지 업로드" />
                      )}
                        {projectImage && (
                          <Style2.detail_img src={projectImage} alt="대표 이미지" />
                      )}
                                              <Style2.developRole>Fe: {fePeople}, Be: {bePeople}</Style2.developRole>
                      
                      <Style2.stack_div>

                      <Style2.list_page_btnBox>
                                          {currentPage > 1 && (
                            <Style2.list_page_btn src={prev} onClick={goToPreviousPage} /> 
                          )}


                      </Style2.list_page_btnBox>


                      {currentStacks.map((stack, index) => (
                        <Style2.stack_ul>
                          <Style2.stack_li key={index}>{stack.stack}</Style2.stack_li>
                        </Style2.stack_ul>
                      ))}  



                    <Style2.list_page_btnBox>
                    {endIndex < transformedSkills.length && (
                          <Style2.list_page_btn src={next} onClick={goToNextPage} /> 
                        
                        )}
                    
                    </Style2.list_page_btnBox>

                      </Style2.stack_div>

                      <Style2.date>{startDt} ~ {endDt}</Style2.date>
                        <Style2.detail_btn>아직 지원자가 없어요 !</Style2.detail_btn>
                    
                        
                    
                        {/* <MemberList users={users} /> */}

                    </Style2.detail_colum_first>
                 
   
                    <Style2.detail_colum_second>


                      <Style2.contentBox2>
                        <Style2.content>
                            {longText}
                        </Style2.content>
                      </Style2.contentBox2>

                      <Style2.contentBox1>
                      <Style2.detail_colum_first_btns>
                          <Style2.detail_btns_edit onClick={handleEdit}>Edit</Style2.detail_btns_edit>
                          <Style2.detail_btns_del>Delete</Style2.detail_btns_del>
                        </Style2.detail_colum_first_btns>

                      </Style2.contentBox1>

                    </Style2.detail_colum_second>
                    


                  </Style2.detail_colums>
                </Style2.detail>
              </Style2.detail_section>

      )}


      {currentSection === 'edit' && ( // 상세로 넘어가야 함 

<Style.create_section>
<Style.create >
  <Style.form>
    <Style.create_left>
   
      <Style.left_span>프로젝트명</Style.left_span>
        <Style.create_projectName_input
          type="text"
          placeholder="프로젝트 이름을 입력해주세요"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
     


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
<Style.UploadButton type="button" className="upload_btn" onClick={() => fileInputRef.current.click()}>Upload Project Image</Style.UploadButton>

</Style.StyledImageContainer>

<div>

<Style.right_span>팀 이름</Style.right_span>
  
  <div>
    <Style.teamName_input
        type="text"
        placeholder="팀 이름을 입력해주세요"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
    </div>
    <div>

    <Style.right_span>팀 연락처</Style.right_span>
    <Style.create_input
        type="text"
        placeholder="팀원과 연락할 별도의 연락처를 입력해주세요"
        value={teamContact}
        onChange={(e) => setTeamContact(e.target.value)}
      />
    </div>

<Style.modal_stack_div>

<Style.modal_stack_addBox>

<Style.modal_stack_insert_input
type="text"
value={newSkill}
onChange={(e) => setNewSkill(e.target.value)}
placeholder="프로젝트에서 사용할 기술 스택을 추가해주세요"
/>
<Style.modal_stack_add src={add} onClick={handleAddSkill}>+</Style.modal_stack_add>

</Style.modal_stack_addBox>
<Style.modal_selected_skills>
<Style.modal_selected_span>Project Skills</Style.modal_selected_span>
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



</div>
    </Style.create_left>
    
    <Style.create_right>
 
      <Style.right_span>모집 인원</Style.right_span>
       <Style.devInputBox>
          <Style.dev_input
            type="text"
            placeholder="Front-End"
            value={fePeople}
            onChange={(e) => setFePeople(e.target.value)}
          />
        
          <Style.dev_input
            type="text"
            placeholder="Back-End"
            value={bePeople}
            onChange={(e) => setBePeople(e.target.value)}
          />
    
      </Style.devInputBox>

      <Style.right_span>프로젝트 기간</Style.right_span>
      <Style.date_inputBox>
        <Style.DateInput
          className='dtColor'
          type="date"
          placeholder="시작일"
          value={startDt}
          onChange={(e) => setStartDt(e.target.value)}
        />
      <div> ~ </div>
        <Style.DateInput
          type="date"
          placeholder="종료일"
          value={endDt}
          onChange={(e) => setEndDt(e.target.value)}
        />
      </Style.date_inputBox>
      

      <div>
        <Style.right_span>프로젝트 내용</Style.right_span>
        <Style.insert_input
          type="text"
          placeholder="프로젝트 내용을 입력해주세요 
          ex) 소개, 목표, 개발 문화"
          value={longText}
          onChange={(e) => setLongText(e.target.value)}
        />
      </div>

      <Style.AddBtn onClick={handleEditClear}>Edit Save</Style.AddBtn>
    </Style.create_right>
  </Style.form>
</Style.create>
</Style.create_section>

)}

    </div>
  );
}

export default Recruit;
