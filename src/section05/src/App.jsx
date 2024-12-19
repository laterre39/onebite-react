import './App.css'

// App <- 부모 컴포넌트 Header <- 자식 컴포넌트 
// 모든 컴포넌트는 App 컴포넌트를 부모로 가지고 있다 이를 Root 컴포넌트라 힌디.
// 앞으로 개발할 모든 컴포넌트는 파일로 분할해서 App에서 연결한다.
import Register from './components/Register';
import HookEaxm from './components/HookExam';

function App() { 
  return ( // 리액트는 jsx 파일을 렌더링을 지원함
    <>
      <HookEaxm/>
    </>
  )
}

export default App;
