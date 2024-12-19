import "./Main.css"

const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true
    }

    return (
        <>
            {user.isLogin ? 
            (<div className="login">로그인</div>) 
            : 
            (<div className="logout">로그아웃</div>)}
        </>
    );
}

export default Main;