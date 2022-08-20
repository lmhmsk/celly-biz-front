import React from "react";

interface IProps {
  title: string;
  btnText?: string;
  onClick(): void;
}

const Head: React.FC<IProps> = ({ title, btnText, onClick }) => {
  return (
    <section className="section">
      <div className="row">
        <div className="h1">{title}</div>
        <div className="right_menu">
          <div className="budget">budget</div>
          <button onClick={onClick}>{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default Head;
