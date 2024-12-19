import React from 'react';
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";

const Home = () => {
    return (
        <>
            <Header title={"Header"} leftChild={<Button text={"Left"}/>} rightChild={<Button text={"Right"}/>}/>
            <div>Home</div>
        </>
    );
};

export default Home;