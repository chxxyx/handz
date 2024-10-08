import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import * as Style from "../style/components/recruit.list"
import img from '../img/logo.png'
import mz2mo from '../img/mz2mo.png';
import list2 from '../img/list2.png';
import list3 from '../img/list3.png';
import list4 from "../img/list4.png";
import list5 from "../img/list5.png";
import list6 from "../img/list6.png";
import list7 from "../img/list7.png"
import list8 from "../img/list8.png"
import list9 from "../img/list9.png"
import next from "../img/nextBtn.jpeg"
import prev from "../img/prevBtn.jpeg"

function RecruitList() {

  const { params } = useParams();
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const cardsPerPage = 3; // 한 페이지에 보여질 카드 수

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // 이전 페이지로 이동하는 함수
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if(params === 'be') {

    const cards = [
      { id: 1, img: mz2mo, title: 'Emo-Hiphop', period: '2023.11 ~ 2023.12', stack: ['Kotiln', 'SpringBoot', 'MySql'], detailLink: '/detail/1' },
      { id: 5, img: list5, title: '오늘의 실패', period: '2023.11 ~ 2023.11', stack: ['TypeScript', 'MySQL', 'Node.js',], detailLink: '/detail/5' },
      { id: 3, img: list3, title: '감정을 먹는 다마고치', period: '2023.12 ~ 2023.12', stack: ['Java', 'SpringBoot', 'JPA'], detailLink: '/detail/3' },
      { id: 4, img: list4, title: '삿치', period: '2023.11 ~ 2023.12', stack: ['Kotiln', 'JPA', 'SpringBoot', ], detailLink: '/detail/4' },
      { id: 2, img: list2, title: 'Simple Thumbnail', period: '2023.11 ~ 2023.12', stack: ['Java', 'SpringBoot', 'AWS'], detailLink: '/detail/2' },
      { id: 6, img: list6, title: 'Mangoz', period: '2023.11 ~ 2023.11', stack: ['JavaScript', 'Node.js', 'MySql'], detailLink: '/detail/6' },
    ];
     const startIndex = (currentPage - 1) * cardsPerPage;
     const endIndex = startIndex + cardsPerPage;
     const currentCards = cards.slice(startIndex, endIndex);

    return (
      <div>
      <Style.recruit_list_section>

      <Style.recruit_list>

        <Style.recruit_title_box>
          <Style.sort_title>Back-End</Style.sort_title>


          <Style.recruit_fe_link>
            <Style.recruit_list_a to='/list/fe'>/ Front-End</Style.recruit_list_a>
          </Style.recruit_fe_link>

          <Style.recruit_button to='/project'>모집하기</Style.recruit_button>
        </Style.recruit_title_box>

      {/* <Style.RecruitSecond> */}
        
        <Style.recruit_list_box>
        
        <Style.list_page_btnBox>
        {currentPage > 1 && (
              <Style.list_page_btn src={prev} onClick={goToPreviousPage} /> 
            )}
        </Style.list_page_btnBox>
        

              {currentCards.map((currentCard, index) => (
                <Style.list_card key={index}>
                  <Style.card_img src={currentCard.img} />
                  <Style.card_title_name>{currentCard.title}</Style.card_title_name>
                  <Style.card_date>{currentCard.period}</Style.card_date>
                  
                  <Style.stack_div>
                    <Style.stack_ul>
                      {currentCard.stack.map((tech, index) => (
                        <Style.stack_li key={index}>{tech}</Style.stack_li>
                      ))}
                    </Style.stack_ul>
                  </Style.stack_div>

                  <Style.card_btn>
                    <Style.card_btn_a to={currentCard.detailLink}>Go to Page</Style.card_btn_a>
                  </Style.card_btn>
                </Style.list_card>
              ))}
         
         <Style.list_page_btnBox>
         {endIndex < cards.length && (
              <Style.list_page_btn src={next} onClick={goToNextPage} /> 
            
            )}
          </Style.list_page_btnBox>

        </Style.recruit_list_box>
       
        </Style.recruit_list>
      </Style.recruit_list_section>
      </div>
    );
   
  } else if (params === 'fe'){

    const cards = [
      { id: 7, img: list7, title: '퍼스널 컬러 프로젝트', period: '2023.11 ~ 2023.11', stack: ['JavaScript', 'React', 'VERCEL'], detailLink: '/detail/7' },
      { id: 8, img: list8, title: '기억해드림', period: '2023.11 ~ 2023.11', stack: ['TypeScript', 'React', 'StyleComponents'], detailLink: '/detail/8' },
      { id: 9, img: list9, title: 'Record It !', period: '2023.11 ~ 2023.12', stack: ['TypeScript', 'React'], detailLink: '/detail/8' },
    
    ];
     const startIndex = (currentPage - 1) * cardsPerPage;
     const endIndex = startIndex + cardsPerPage;
     const currentCards = cards.slice(startIndex, endIndex);
    return (
      <div>
      <Style.recruit_list_section>

      <Style.recruit_list>

        <Style.recruit_title_box>
          <Style.sort_title>Front-End</Style.sort_title>


          <Style.recruit_fe_link>
            <Style.recruit_list_a to='/list/be'>/ Back-End</Style.recruit_list_a>
          </Style.recruit_fe_link>

          <Style.recruit_button to='/project'>모집하기</Style.recruit_button>
        </Style.recruit_title_box>

        <Style.recruit_list_box>
        
        <Style.list_page_btnBox>
        {currentPage > 1 && (
              <Style.list_page_btn src={prev} onClick={goToPreviousPage} /> 
            )}
        </Style.list_page_btnBox>
        

              {currentCards.map((currentCard, index) => (
                <Style.list_card key={index}>
                  <Style.card_img src={currentCard.img} />
                  <Style.card_title_name>{currentCard.title}</Style.card_title_name>
                  <Style.card_date>{currentCard.period}</Style.card_date>
                  
                  <Style.stack_div>
                    <Style.stack_ul>
                      {currentCard.stack.map((tech, index) => (
                        <Style.stack_li key={index}>{tech}</Style.stack_li>
                      ))}
                    </Style.stack_ul>
                  </Style.stack_div>

                  <Style.card_btn>
                    <Style.card_btn_a to={currentCard.detailLink}>Go to Page</Style.card_btn_a>
                  </Style.card_btn>
                </Style.list_card>
              ))}
         
         <Style.list_page_btnBox>
         {endIndex < cards.length && (
              <Style.list_page_btn src={next} onClick={goToNextPage} /> 
            
            )}
          </Style.list_page_btnBox>

        </Style.recruit_list_box>
       
        </Style.recruit_list>
      </Style.recruit_list_section>
      </div>
    );
  } 

}

export default RecruitList;
