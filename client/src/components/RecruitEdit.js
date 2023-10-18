import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from "../style/components/recruit.form";
import img from "../img/logo.png";

function RecruitEdit() {
  const navigate = useNavigate(); 

  const [projectImg, setProjectImg] = useState('');
  const [projectName, setProjectName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamContact, setTeamContact] = useState('');
  const [fePeople, setFePeople] = useState(0);
  const [bePeople, setBePeople] = useState(0);
  const [startDt, setStartDt] = useState('');
  const [endDt, setEndDt] = useState('');
  const [stacks, setStacks] = useState([]);
  const [longText, setLongText] = useState('');

  const handleEdit = async () => {
    // 유효성 검사 (필수 항목 입력 여부 확인)
    if (
      !projectName ||
      !teamName ||
      !teamContact ||
      fePeople <= 0 ||
      bePeople <= 0 ||
      !startDt ||
      !endDt ||
      !stacks.length ||
      !longText
    ) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    // 데이터를 서버로 보내는 로직
    const editedData = {
      projectImg,
      projectName,
      teamName,
      teamContact,
      be: bePeople,
      fe: fePeople,
      startDt,
      endDt,
      stacks,
      longText,
    };

    try {
      const response = await fetch(`/detail/:id`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (response.status === 200) {
  
        navigate('/detail/id'); 
      } else {
        alert('수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Style.create_section>
        <Style.create>
          <Style.form>
            <Style.create_left>


              <Style.create_image src={projectImg || img} alt="대표 이미지 업로드" />
            
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
                <div>
              
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="back-end"
                  value={bePeople}
                  onChange={(e) => setBePeople(parseInt(e.target.value))}
                />
                <div>
               
                </div>
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
              <button onClick={handleEdit}>수정하기</button>
            </Style.create_right>
          </Style.form>
        </Style.create>
      </Style.create_section>
    </div>
  );
}

export default RecruitEdit;
