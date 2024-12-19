import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개 

const Register = () => {

    const [input, setInput] = useState({ // 지정된 프롭이나 스테이트 등의 리액트 페이지를 렌더함
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    const countRef = useRef(0);
    const inputRef = useRef(); // 렌더하지 않고 변수를 계속 저장및 관리함
    

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })  
    };

    const onSumbit = () => {
        if (input.name === "") {
            inputRef.current.focus();
        }     
    };


    return (
        <div>
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder="이름" />
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
            </div>
            <button onClick={onSumbit}>제출</button>
        </div>
    );
};

export default Register;