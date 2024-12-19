import "./Editor.css"
import {useRef, useState} from "react";

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const contentRef = useRef(null);

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown}
                   placeholder="새로운 Todo.."/>
            <button onClick={onSubmit}>추가</button>
            {/* onClick: 클릭시 함수 실행 / onChange: 값 변경시 함수 실행 / onKeyDown: 특정 키를 누를시 함수 실행  */}
        </div>
    );
};

export default Editor;