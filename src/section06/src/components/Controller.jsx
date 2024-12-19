const Controller = ({onClickButton}) => {
    return (
        <div>
            <button onClick={() => {
                onClickButton(-1); // 화살표 함수를 통해 넣는 이유는 함수를 그냥 넣으면 값을 정해서 넣을 수 없음
            }}> -1 </button>  
            <button onClick={() => {
                onClickButton(-10);
            }}> -10 </button>
            <button onClick={() => {
                onClickButton(-100);
            }}> -100 </button>
            <button onClick={() => {
                onClickButton(100);
            }}> +100 </button>
            <button onClick={() => {
                onClickButton(10);
            }}> +10 </button>
            <button onClick={() => {
                onClickButton(1);
            }}> +1 </button>
        </div>
    );
}

export default Controller; 