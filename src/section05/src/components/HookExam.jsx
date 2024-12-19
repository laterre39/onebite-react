import { useState } from "react";
import useInput from "../hooks/useInput";

// hook은 컴포넌트 함수 내부에서만 호출 가능하다!
// 조건부로 호출될 수 없다 조건문이나 반복문 등에서... 
// 나만의 훅(custom hook)을 직접 만들 수 있다.

const HookEaxm = () => {
    const [input, onChange] = useInput(); // 커스텀 훅 생성
    const [input2, onChange2] = useInput();


    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>

    );
};

export default HookEaxm;