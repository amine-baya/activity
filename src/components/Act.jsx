import React, {useState, useEffect} from 'react'
import butterPlate from '../images/bread_butter.png'
import dessertFork from '../images/dessert_fork.png'
import dessertSpoon from '../images/dessert_spoon.png'
import dinnerFork from '../images/dinner_fork.png'
import dinnerKnife from '../images/dinner_knife.png'
import waterGlass from '../images/water_glass.png'
import juiceGlass from '../images/juice_glass.png'
import napkin from '../images/napkin.png'
import placePlate from '../images/place_plate.png'
import saladFork from '../images/salad_fork.png'
import soupSpoon from '../images/soup_spoon.png'

import './act.css'

const Act = (props) => {

  const [timer, setTimer] = useState(15)
  const [help, sethelp] = useState(false)



    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");
    
    draggableElements.forEach(elem => {
      elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
      // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
      // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
    });
    
    droppableElements.forEach(elem => {
      elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
      elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
      elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
      elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
    });
    
    // Drag and Drop Functions
    
    //Events fired on the drag target
    
    function dragStart(event) {
      event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
    }
    
    //Events fired on the drop target
    
    function dragEnter(event) {
      if(!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
      }
    }
    
    function dragOver(event) {
      if(!event.target.classList.contains("dropped")) {
        event.preventDefault(); // Prevent default to allow drop
      }
    }
    
    function dragLeave(event) {
      if(!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
      }
    }
    
    function drop(event) {
      event.preventDefault(); // This is in order to prevent the browser default handling of the data
      event.target.classList.remove("droppable-hover");
      const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
      const droppableElementData = event.target.getAttribute("data-draggable-id");
     
      const isCorrectMatching = draggableElementData === droppableElementData;
      console.log(draggableElementData);
      console.log(droppableElementData);

      if(isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementData);
        console.log(event.target.children[0]);
        event.target.classList.add("dropped");
        event.target.children[0].classList.add("show")
        // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
        //event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
       
      }
    }

    //let wa = document.querySelector('.draggable-elements')
    //console.log(wa);

   useEffect(() => {
    if (timer > 0 && !props.show) {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);
    }
     
   }, [timer, props.show])
   console.log(timer);

   const helpHandeller = () => {
   if (timer == 0) {
      setTimer(5)
      sethelp(true)
      //wa.classList.remove("show");
     setTimeout(() => {
       sethelp(false)
       //wa.classList.add("active");
     }, 5000);
    }
   }

    return (
      <>
        <div className="first-view">
      <div className='timer'>
        <h4>the correct order will be removed in: {timer} Second</h4>
        <span onClick={() => helpHandeller()}>help</span>
      </div>
      
        <div className={`kol ${props.active}`}>
        <section class= {`draggable-elements ${props.active}`}>
            <div className='butterPlate_label labels'><img className="draggable"  src={butterPlate} alt="butterPlate" id="butterPlate"  />  </div>
            <div className='dessertFork_label labels'><img className="draggable"  src={dessertFork} alt="dessertFork" id="dessertFork" />   </div>
            <div className='dessertSpoon_label labels'><img className="draggable"  src={dessertSpoon} alt="dessertSpoon" id="dessertSpoon"/></div>
            <div className='dinnerFork_label labels'><img className="draggable"  src={dinnerFork} alt="dinnerFork" id="dinnerFork"  />      </div>
            <div className='dinnerKnife_label labels'><img className="draggable"  src={dinnerKnife} alt="dinnerKnife" id="dinnerKnife" />   </div>
            <div className='waterGlass_label labels'><img className="draggable"  src={waterGlass} alt="waterGlass" id="waterGlass" />       </div>
            <div className='juiceGlass_label labels'><img className="draggable"  src={juiceGlass} alt="juiceGlass" id="juiceGlass" />       </div>
            <div className='napkin_label labels'><img className="draggable"  src={napkin}     alt="napkin" id="napkin" />                   </div>
            <div className='placePlate_label labels'><img className="draggable"  src={placePlate} alt="placePlate" id="placePlate" />       </div>
            <div className='saladFork_label labels'><img className="draggable"  src={saladFork} alt="saladFork" id="saladFork" />           </div>
            <div className='soupSpoon_label labels'><img className="draggable"  src={soupSpoon} alt="soupSpoon" id="soupSpoon"  />          </div>
  
                
       </section>
      <section className={ `droppable-elements ${props.active} ${help && "a"}`}>
        <div class="droppable droppable-butterPlate" data-draggable-id="butterPlate"><img className="draggable-intern"  src={butterPlate} alt="butterPlate" /></div>
        <div class="droppable droppable-dessertFork" data-draggable-id="dessertFork"><img className="draggable-intern"  src={dessertFork} alt="butterPlate" /></div>
        <div class="droppable droppable-dessertSpoon" data-draggable-id="dessertSpoon"><img className="draggable-intern"  src={dessertSpoon} alt="butterPlate" /></div>
        <div class="droppable droppable-dinnerFork" data-draggable-id="dinnerFork"><img className="draggable-intern"  src={dinnerFork} alt="butterPlate" /></div>
        <div class="droppable droppable-dinnerKnife" data-draggable-id="dinnerKnife"><img className="draggable-intern"  src={dinnerKnife} alt="butterPlate" /></div>
        <div class="droppable droppable-waterGlass" data-draggable-id="waterGlass"><img className="draggable-intern"  src={waterGlass} alt="butterPlate" /></div>
        <div class="droppable droppable-juiceGlass" data-draggable-id="juiceGlass"><img className="draggable-intern"  src={juiceGlass} alt="butterPlate" /></div>
        <div class="droppable droppable-napkin" data-draggable-id="napkin">    <img className="draggable-intern"  src={napkin} alt="butterPlate" /></div>
        <div class="droppable droppable-placePlate" data-draggable-id="placePlate"><img className="draggable-intern"  src={placePlate} alt="butterPlate" /></div>
        <div class="droppable droppable-saladFork" data-draggable-id="saladFork"><img className="draggable-intern"  src={saladFork} alt="butterPlate" /></div>
        <div class="droppable droppable-soupSpoon" data-draggable-id="soupSpoon"><img className="draggable-intern"  src={soupSpoon} alt="butterPlate" /></div>

        
      </section>
        </div>
        </div>
        </>
    )
}

export default Act
