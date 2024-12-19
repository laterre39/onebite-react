import { useState } from "react";

function useInput() { // use 점두사를 사용한다면 커스텀 훅으로 인식한다 오류를 발생시키지 않음
    const [input, setInput] = useState(""); 

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;