import React, { useState } from "react";
import "./AddCard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { __addContent } from "../redux/modules/ContentSlice";

const AddCard = () => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contents = useSelector((state) => state.content.content);

  const onAddContent = () => {
    if (
      content.url.trim() === "" ||
      content.title.trim() === "" ||
      content.content.trim() === ""
    ) {
      setContent("");
    }
  };

  const onChangeContent = () => {
    dispatch(__addContent({ id: contents.length + 1, content }));
  };
  return (
    <div className="addCard-container">
      <Navbar />
      <h1>새로운 글 작성하기</h1>
      <div className="addCard-form">
        <div className="addCard-img">
          <input
            type="text"
            name="url"
            value={content.url}
            onChange={onChangeContent}
            placeholder="이미지 주소를 입력하세요"
          />
        </div>

        <div className="addCard-title">
          <select key={content.id} onChange={onChangeContent}>
            <option value={""}>카테고리 선택</option>
            <option name="toon" value={content.category}>
              만화방
            </option>
            <option name="movie" value={content.category}>
              비디오방
            </option>
          </select>
          <input
            type="text"
            onChange={() => {
              setContent();
            }}
            name="title"
            value={content.title}
            placeholder="제목 입력(15자 이내)"
            maxLength={15}
          />
        </div>

        <div className="addCard-content">
          <textarea
            onChange={onChangeContent}
            name="content"
            value={content.content}
            maxLength={200}
            placeholder="내용을 입력해주세요"
          />
        </div>
      </div>
      <div className="addCard-btn-box">
        <button
          type="button"
          onClick={onAddContent}
          navigate={"/list"}
          className="addCard-btn"
        >
          작성완료
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="addCard-btn"
        >
          취소하기
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default AddCard;
