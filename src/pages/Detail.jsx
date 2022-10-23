import React from "react";
import "./Detail.css"
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
      
      {/* 댓글 작성 조회 수정 부분 */}
      <Footer/>
    </div>
  )
}

export default Detail;