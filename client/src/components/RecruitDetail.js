import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Style from "../style/components/recruit.detail";
import img from "../img/logo.png";
import complete from "../img/complete.png";
import profile from "../img/profile_img.png";
import profile1 from "../img/listProfile1.jpeg"
import profile2 from "../img/listProfile2.jpeg"
import profile3 from "../img/listProfile3.jpeg"
import profile4 from "../img/listProfile4.jpeg"
import profile5 from "../img/listProfile5.jpeg"
import profile6 from "../img/listProfile6.jpeg"
import mz2mo from '../img/mz2mo.png';
import list2 from '../img/list5.png';
import next from "../img/nextBtn.jpeg"
import prev from "../img/prevBtn.jpeg"

function MemberList({ users }) {
  
  return (
    <Style.member_list to='/project/admin'>
      {users.map((profile, index) => (
        <Style.member_list_img src={profile.img} usersLength={users.length} zIndex={index} key={profile.id} />
      ))}
    </Style.member_list>
  );
}

function RecruitDetail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isApplicationComplete, setIsApplicationComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const cardsPerPage = 3; // 한 페이지에 보여질 카드 수

  const handleApplyClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      const timeoutId = setTimeout(() => {
        setShowModal(false);
        setIsApplicationComplete(true);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [showModal]);
  const users = [
    {id: 1, img: profile1},
    {id: 2, img: profile2,},
    {id: 3, img: profile3,},
    {id: 4, img: profile4,},
    {id: 5, img: profile5,},
    {id: 6, img: profile6,},
  ]

  const stacks = [
    {id: 1, stack: "Kotiln"},
    {id: 2, stack: "SpringBoot"},
    {id: 3, stack: "MySql"},
    {id: 4, stack: "SpringBoot"},
    {id: 5, stack: "MySql"},
    {id: 6, stack: "SpringBoot"},
    {id: 7, stack: "MySql"},
    {id: 8, stack: "SpringBoot"},
    {id: 9, stack: "MySql"},
  ]

      const startIndex = (currentPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const currentStacks = stacks.slice(startIndex, endIndex);
 

    // 다음 페이지로 이동하는 함수
    const goToNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    // 이전 페이지로 이동하는 함수
    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

  return (
    <div>

                  {id === '1' && ( 
                    <Style.detail_section>
                      
                    <Style.detail>

                      <Style.detail_pro_name>Emo-Hiphop

                    
                      </Style.detail_pro_name>
                    

                      <Style.detail_colums>
                        
                        <Style.detail_colum_first>

                            <Style.detail_img src={mz2mo} />
                            <Style.developRole>Back-End: 2</Style.developRole>
                          
                          <Style.stack_div>

                          <Style.list_page_btnBox>
                                              {currentPage > 1 && (
                                <Style.list_page_btn src={prev} onClick={goToPreviousPage} /> 
                              )}
                          </Style.list_page_btnBox>

                          {currentStacks.map((stack, index) => (
                            <Style.stack_ul>
                              <Style.stack_li key={index}>{stack.stack}</Style.stack_li>
                            </Style.stack_ul>
                          ))}  
                        <Style.list_page_btnBox>
                        {endIndex < stacks.length && (
                              <Style.list_page_btn src={next} onClick={goToNextPage} /> 
                            
                            )}
                        </Style.list_page_btnBox>

                          </Style.stack_div>


                          
                          <Style.date>23.11 ~ 23.12</Style.date>
                         
                            
                            <MemberList users={users} />

                        </Style.detail_colum_first>
                     
       
                        <Style.detail_colum_second>

                          <Style.contentBox2>
                            <Style.content>
                           노래와 어울리는 이모지를 투표하고, 사용자만의 플레이리스트를 
                           만드는 음악 어플리케이션을 제작하려고 합니다 !
                           현재는 Spotify Open API를 이용해서 개발할 계획입니다 ~

              
                            </Style.content>
                          </Style.contentBox2>

                          <Style.contentBox1>

                          <Style.detail_colum_first_btns>
                            <Style.detail_btns_edit to={`/project/detail/${id}`}>Edit</Style.detail_btns_edit>
                            <Style.detail_btns_del>Delete</Style.detail_btns_del>
                          </Style.detail_colum_first_btns>


                          </Style.contentBox1>



                        </Style.detail_colum_second>


                      </Style.detail_colums>
                    </Style.detail>
                  </Style.detail_section>

                )}

        {id === '5' && (

          <Style.detail_section>
          <Style.detail>
            <Style.detail_pro_name>Simple Thumbnail</Style.detail_pro_name>

            <Style.detail_colums>

            <Style.detail_colum_first>
              <Style.detail_img src={list2} />

              <Style.developRole>Back-End: 2</Style.developRole>
                          
                          <Style.stack_div>

                          <Style.list_page_btnBox>
                                              {currentPage > 1 && (
                                <Style.list_page_btn src={prev} onClick={goToPreviousPage} /> 
                              )}
                          </Style.list_page_btnBox>

                          {currentStacks.map((stack, index) => (
                            <Style.stack_ul>
                              <Style.stack_li key={index}>{stack.stack}</Style.stack_li>
                            </Style.stack_ul>
                          ))}  
                        <Style.list_page_btnBox>
                        {endIndex < stacks.length && (
                              <Style.list_page_btn src={next} onClick={goToNextPage} /> 
                            
                            )}
                        </Style.list_page_btnBox>

                          </Style.stack_div>


                          
                          <Style.date>23.11 ~ 23.12</Style.date>
              <Style.detail_btn onClick={handleApplyClick}>
                {isApplicationComplete ? '지원완료' : '지원하기'}
              </Style.detail_btn>
            </Style.detail_colum_first>

            <Style.detail_colum_second>
            <Style.contentBox3>
                            <Style.content>
                            실패에 대한 회고와 기록을 영수증으로 출력해 
                            공유할 수 있는 프로젝트를 진행 중인데, 백엔드 개발자가 부족해 모집 글 올려봅니당 ~
             
                            </Style.content>
                          </Style.contentBox3>

            </Style.detail_colum_second>

            </Style.detail_colums>
          </Style.detail>
          </Style.detail_section>

        )}

      {showModal && (
          <Style.ModalBackground>
            <Style.ModalContent>
              <Style.ModalImg src={complete} />
              <Style.Modaltext>
                Complete !
              </Style.Modaltext>
            </Style.ModalContent>
          </Style.ModalBackground>
      )}
    </div>
  );
}

export default RecruitDetail;
