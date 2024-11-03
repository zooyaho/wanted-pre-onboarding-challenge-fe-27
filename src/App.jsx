import "./App.css";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Label from "./components/common/Label";
import Textarea from "./components/common/Textarea";

function App() {
  return (
    <>
      <h1>home</h1>
      <Label text="ID" />
      <Input />
      <Label text="Content" />
      <Textarea />
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
