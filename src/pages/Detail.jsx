import React from "react";
import "./Detail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-container">
      <Navbar />
      <h1>짱구는 못말려</h1>
      <div className="detail-form">
        <div className="detailPic-1" />
      </div>
      <h3>짱구와 떡잎유치원 친구들은 정말정말 못말려!</h3>

      {/* 댓글 작성 조회 수정 부분 */}
      <div className="detail-comment">
        <input type="text" placeholder="댓글을 입력하세요" />
        <button>완료</button>
      </div>
      <div className="detail-commentBox">
        <p>떡잎유치원 친구들과 보내는 하루는 즐거워</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <div className="detail-commentBox">
        <p>와르르 맨션에서 철수랑 흰둥이랑 놀기기</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <div className="detail-commentBox">
        <p>유리 최애템 분노의 토끼인형 한정판 구하기</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
