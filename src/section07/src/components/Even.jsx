import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        return () => {
            console.log("unmount");
        } // 클린업, 정리함수
    }, []) // 마운트 될 때만 실행됨

    return (
        <div>
            짝수입니다.
        </div>
    );
};

export default Even;