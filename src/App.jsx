import "./App.css";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Label from "./components/common/Label";

function App() {
  return (
    <>
      <h1>home</h1>
      <Label text="ID" />
      <Input />
      <Button
        text="로그아웃"
        onClick={() => {
          console.log("click!!");
        }}
      />
    </>
  );
}

export default App;
