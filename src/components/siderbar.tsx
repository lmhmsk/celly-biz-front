import React, { useState } from "react";

const Siderbar = () => {
  const [selected, setSelected] = useState("");

  return (
    <section className="section">
      <div className="menu_wrap">
        <button className="menu_btn" onClick={() => setSelected("product")}>
          상품 관리
        </button>
        {selected === "product" && (
          <ul>
            <li
              className={`menu_list ${
                selected === "product" ? "selected" : ""
              }`}
            >
              상품 목록
            </li>
            <li className="menu_list">주문 내역</li>
            <li className="menu_list">샘플 관리</li>
          </ul>
        )}

        <button className="menu_btn">콘텐츠 관리</button>
        <button className="menu_btn">예산 관리</button>
        <button className="menu_btn">회원정보 변경</button>
        <button className="menu_btn">로그아웃</button>
      </div>
    </section>
  );
};

export default Siderbar;
