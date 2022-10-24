import React, { useState } from "react";
import "./AddCard.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { __addContent } from "../redux/modules/ContentSlice";

const AddCard = () => {
    const [content, setContent] = useState({
    url: "",
    category: "",
    title: "",
    content: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddContent = (event) => {
    event.preventDefault();
    if (content.title.trim() === "" || content.content.trim() === "") {
      return alert("내용을 입력해 주세요!")
    }
    dispatch(__addContent(content));
    setContent({ url: "", category:"", title: "", content: "" })
  }

  const onChangeContent = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name] : value,
    })

  }
  return (
    <div className="addCard-container">
      <Navbar />
      <h1>새로운 글 작성하기</h1>
      <div className="addCard-form">
        <div className="addCard-img">
          <input type="url" placeholder="이미지 주소를 입력하세요" />
          <button type="submit" onClick={onAddContent}>업로드</button>
        </div>

        <div className="addCard-title">
          <select>
            <option selected>카테고리 선택</option>
            <option name="category" value={"toon"}>만화방</option>
            <option name="category" value={"movie"}>비디오방</option>
          </select>
          <input type="text" onChange={onChangeContent} name="title" value={content.title}
            placeholder="제목 입력(10자 이내)" maxLength={10} />
        </div>
        
        <div className="addCard-content">
          <textarea onChange={onChangeContent} name="content" value={content.content}
            maxLength={200} placeholder="내용을 입력해주세요" />
        </div>
      </div>
      <div className="addCard-btn-box">
        <button type="submit" onSubmit={onAddContent} className="addCard-btn">작성완료</button>
        <button onClick={() => { navigate(-1) }} className="addCard-btn">취소하기</button>
      </div>
      
      <Footer/>
    </div>
  )
};

export default AddCard;