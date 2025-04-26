import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">정아름의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="정아름"
        description="동기를 사랑하는 개발자입니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://coffee-zzlu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 CHAPTER 3 - 안녕
        </a>
        <a
          className="link-button"
          href="https://chapter3-react2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 CHAPTER 3 게시판 CRUD
        </a>
        <a
          className="link-button"
          href="https://chapter3-react3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 CHAPTER 3 게시판 + MySQL
        </a>
      </div>
    </div>
  );
}

export default App;
