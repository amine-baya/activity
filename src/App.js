import react, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import First from "./components/First";

function App(props) {

const [show, setShow] = useState(true)
const [active, setactive] = useState("")


console.log(show);
const start = () => {
  setShow(false)
  setTimeout(() => {
  setactive("active")
    
  }, 5000);
}

  return (
    <>
    <First act = {active} />
  <DndProvider backend={HTML5Backend}>
        <div className="App">
          <div className={show ? "control-buttons" : "controll-buttons-hide" } >
            <span className={show ? "start-button" : "controll-buttons-hide" } onClick={() => start()} >Start Activity</span>
          </div>

          <DragDrop />
        </div>
  </DndProvider>
    </>
    
  );
}

export default App;
