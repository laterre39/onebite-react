const Header = () => { // 함수 컴포넌트라고 부른다, 화살표 함수로도 가능함
    return ( // 컴포넌트의 함수명은 무조건 대문자로 시작해야 한다 소문자로 시작하면 리액트가 컴포넌트로 인식하지 않는다.
      <header>
        <h1>Header</h1>
      </header>
    );
  }

export default Header;