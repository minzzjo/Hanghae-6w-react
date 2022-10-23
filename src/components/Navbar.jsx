import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="nav-container">
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
        <h3><span style={{color: "#FA4C1A"}}>김르탄님, 안녕하세요!</span></h3>
        <h3 className="nav-btn" style={{ textDecoration: 'none' }}>로그아웃</h3>
      </div>
  );
};

export default Navbar;

// #552CB7