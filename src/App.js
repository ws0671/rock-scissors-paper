import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
// 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6. 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.
const choice = {
  rock: {
    name: "Rock",
    img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
  },
  scissor: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};
function App() {
  const [useSelect, setUseSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);
  const play = (userChoice) => {
    setUseSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  const randomChoice = () => {
    const itemArr = Object.keys(choice);
    const randomNumber = Math.floor(Math.random() * itemArr.length);
    const result = itemArr[randomNumber];
    return choice[result];
  };
  return (
    <>
      <div className="boxContainer">
        <Box title="You" item={useSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="boxContainer">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
