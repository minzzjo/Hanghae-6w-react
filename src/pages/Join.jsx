import React from "react";
import "./Join.css"
import Footer from "../components/Footer"
import { Link, useNavigate } from "react-router-dom";

const Join = () => {
const navigate = useNavigate();

  return (
    <div className="detail-container">
      <div className="detail-navbar">
        <img className="logo-img" alt="logo" src="img/ghost.png" />
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <h3 className="nav-btn">출발! 비디오 여행</h3>
        </Link>      
          <Link to={"/list"} style={{ textDecoration: 'none' }}>
            <h3 className="nav-btn">비디오방</h3>
          </Link>
          <Link to={"/list"} style={{ textDecoration: 'none' }}>
            <h3 className="nav-btn">만화방</h3>
          </Link>
          <Link to={"/addcard"} style={{ textDecoration: 'none' }}>
            <h3 className="nav-btn">새글작성</h3>
          </Link>
        {/* <h3><span style={{ color: "#E9C46A" }}>김르탄님, 안녕하세요!</span></h3> */}
        <h3 className="nav-btn" style={{ textDecoration: 'none' }}>회원가입</h3>
        <h3 className="nav-btn" style={{ textDecoration: 'none' }}>로그인</h3>
      </div>

      <h1>출발! 비디오 여행</h1>
      
      <div className="detail-box">
        
      </div>
      
      
      {/* 댓글 작성 조회 수정 부분 */}
      <Footer/>
    </div>
  )
}

export default Join;