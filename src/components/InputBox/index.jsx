import React from "react";
import "./index.css";

const InputBox = ({ onSubmit, onChange, comment }) => {
  return (
    <div>
      <form className="input-box" onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="입력해주세요"
          onChange={onChange}
          value={comment}
        />
        <button className="button" type="submit" onClick={onSubmit}>
          입력
        </button>
      </form>
    </div>
  );
};

export default InputBox;
