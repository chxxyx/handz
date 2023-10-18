import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Style from '../style/components/admin';
import profile1 from "../img/profile1.jpeg"
import profile2 from "../img/profile2.jpeg"
import profile3 from "../img/profile3.jpeg"
import profile4 from "../img/profile4.jpeg"
import profile5 from "../img/profile5.jpeg"
import profile6 from "../img/profile6.jpeg"
import next from "../img/nextBtn.jpeg"
import prev from "../img/prevBtn.jpeg"
import like from "../img/like.jpeg"
import logo from "../img/logo.png";
import { title } from '../style/main/header.style';

function Management() {
  const [isRecruitment, setIsRecruitment] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [userListId, setUserListId] = useState(null);
  const cardsPerPage = 3; // 한 페이지에 보여질 카드 수

  const [users, setUsers] = useState([
    {id: 1, img: profile1, devType: 'Back-End', userStacks: ['Java', 'SpringBoot', 'MariaDB'], nickname: 'Rookie'},
    {id: 2, img: profile2, devType: 'Back-End', userStacks: ['Kotlin', 'SpringBoot', 'MySql'], nickname: '라울'},
    {id: 3, img: profile3, devType: 'Front-End', userStacks: ['TypeScript', 'React'], nickname: 'Harang'},
    {id: 4, img: profile4, devType: 'Back-End', userStacks: ['TypeScript', 'React'], nickname: 'martin'},
    {id: 5, img: profile5, devType: 'Front-End', userStacks: ['TypeScript', 'React'], nickname: 'onesun'},
    {id: 6, img: profile6, devType: 'Back-End', userStacks: ['TypeScript', 'React'], nickname: '한효주'},

  ]);

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // 이전 페이지로 이동하는 함수
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleToggleRecruitment = () => {
    setIsRecruitment(!isRecruitment);
  };

  const openModal = (userId) => {
    setUserListId(userId);
    setShowModal(true);
  };

  const closeModals = () => {
    setShowModal(false);
    setShowSuccessModal(false);
  };

  const handleAddMember = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);

    setUsers(updatedUsers);

    setShowModal(false);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1700);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModals();
    }
  };
     
       const startIndex = (currentPage - 1) * cardsPerPage;
       const endIndex = startIndex + cardsPerPage;
       const currentUserCards = users.slice(startIndex, endIndex);

  return (
    <div>
      <Style.admin_section>
        <Style.admin>
          <Style.admin_row_first>
            <Style.admin_project_info_box>
              <Style.admin_info_name>Emo-Hiphop</Style.admin_info_name>
            </Style.admin_project_info_box>
            <Style.admin_status_box>
              <Style.admin_continue
                onClick={handleToggleRecruitment}
                active={isRecruitment}>
                모집중
              </Style.admin_continue>
              <Style.admin_complete
                onClick={handleToggleRecruitment}
                active={!isRecruitment}>
                모집완료
              </Style.admin_complete>
            </Style.admin_status_box>
          </Style.admin_row_first>

          <Style.admin_row_second>

          <Style.list_page_btnBox>
                    {currentPage > 1 && (
                        <Style.list_page_btn src={prev} onClick={goToPreviousPage} /> 
                      )}
                    </Style.list_page_btnBox>
                    
              {currentUserCards.map((userCard, index) => (
                <Style.admin_second_box key={index}>
                  <Style.card_imgbox>
                    <Style.admin_select_img src={like}  onClick={() => openModal(userCard.id)} />
                  </Style.card_imgbox>

                  <Style.list_flex_box>

                      <Style.card_box>
                        <Style.admin_usercard>
                          <Style.card_img src={userCard.img} />
                          <Style.card_dev>{userCard.devType}</Style.card_dev>
                          <Style.card_nickname>{userCard.nickname}</Style.card_nickname>
                          <Style.stack_div>
                            <Style.stack_ul>
                              {userCard.userStacks.map((tech, index) => (
                                  <Style.stack_li key={index}>{tech}</Style.stack_li>
                              ))}
                            </Style.stack_ul>
                          </Style.stack_div>
                          <Style.card_stack></Style.card_stack>
                        </Style.admin_usercard>
                      </Style.card_box>
                  </Style.list_flex_box>

                 
                </Style.admin_second_box>

              ))}

<Style.list_page_btnBox>
                    {endIndex < users.length && (
                      <Style.list_page_btn src={next} onClick={goToNextPage} /> 
                    
                    )}
                    </Style.list_page_btnBox>
          
          </Style.admin_row_second>

        </Style.admin>

      </Style.admin_section>

      {/* 모달 창 */}
      {showModal && (
        <Style.ModalWrapper  onClick={handleModalClick}>
           <Style.ModalContent>
            <Style.ModalText>팀원으로 추가하시겠습니까?</Style.ModalText>
            <Style.ModalCloseBtn onClick={() => handleAddMember(userListId)}>추가</Style.ModalCloseBtn>
          </Style.ModalContent>
        </Style.ModalWrapper>
      )}

      {/* 등록 성공 모달 창 */}
      {showSuccessModal && (
        <Style.ModalClearWrapper>
          <Style.ModalClear>
           
            <Style.ModalClearImg src={logo} />
            <Style.ModalClearText>Complete ! </Style.ModalClearText>
          </Style.ModalClear>
        </Style.ModalClearWrapper>
      )}

    </div>
  );
}

export default Management;