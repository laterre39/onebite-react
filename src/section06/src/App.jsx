import './App.css'
import { useState } from 'react';
import Viwer from './components/Viewer'
import Controller from './components/Controller'

function App() {

  // 리액트의 데이터 흐름은 부모 -> 자식 방향으로 흐르는 단방향 데이터 흐름이다.
  // 직관적이고 이해하기 쉽고 관리하기 용이하게 설계되어 있다.
  // state를 항상 어디에서 관리할지 고민하고 고려해야함.
  // 이와 같은 방식을 State Lifting 이라 한다.
  const [count, setCount] = useState(0)

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (

    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <Viwer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
