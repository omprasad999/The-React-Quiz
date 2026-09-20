import logo from "../../assets/react.svg";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="quiz icon" />
      </div>
      
      <h1 className="text">Quiz App</h1>
    </header>
  );
}
