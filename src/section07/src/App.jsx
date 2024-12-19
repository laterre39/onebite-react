import './App.css'
import { useState, useEffect, useRef } from 'react';
import Viwer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even';

function App() {

  // 리액트의 데이터 흐름은 부모 -> 자식 방향으로 흐르는 단방향 데이터 흐름이다.
  // 직관적이고 이해하기 쉽고 관리하기 용이하게 설계되어 있다.
  // state를 항상 어디에서 관리할지 고민하고 고려해야함.
  // 이와 같은 방식을 State Lifting 이라 한다.
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  // // 

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count); useEffect를 사용하지 않고 직접 값을 넣으면 실제로 함수들은 비동기로 동작하기 때문에 값의 정확도를 찾을 수 없다.
    
  }

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // 최초로 한번 실행하려면 deps를 빈 배열로 작성하면 됨

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // 업데이트 시에는 deps를 생략하고 레퍼런스 코드를 통해서 업데이트 코드를 업데이트 이후에 동작하도록 한다.

  // 3. 언마운트: 죽음 -> Even 컴포넌트 확인

  return (

    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viwer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
