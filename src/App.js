import react, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Act from "./components/Act";
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
    
  }, 21000);
}

  return (
    <>

        <div className="App">
          <div className={show ? "control-buttons" : "controll-buttons-hide" } >
            <span className={show ? "start-button" : "controll-buttons-hide" } onClick={() => start()} >Start Activity</span>
          </div>

    <Act active = {active} show = {show} />
         
        </div>
  
    </>
    
  );
}

export default App;
