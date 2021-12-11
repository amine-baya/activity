import React,{useState,useEffect,useRef} from 'react'
import Picture from "./Picture";
import { useDrop } from "react-dnd";
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
import './first.css'

const First = (props) => {

    const [pos,setPos] = useState( {number : 1,type:'image'})
    const [waw,setWaw] = useState(0)
console.log(waw);
    const noDrop = useRef()

    const [{ isOver,canDrop }, drop] = useDrop(() => ({
      accept: pos.type ,
      drop: (item) => setPos( {number : item.id ,type : item.type}),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: monitor.canDrop()
      }),
    }));

                console.log(JSON.stringify(pos));
             
       

       
   

  

    return (
        <>
        
        <div className="first-view">

            <div className="side-activity">
            

            </div>
        <section>
        <div className={`items ${props.active}`} >
            
            <div className="item butterPlate" >
                
                <Picture url={butterPlate} id="1" type="one"    />
            </div>
            
                <div className="item dessertSpoon"  >
                    
                <Picture url={dessertSpoon} id="2" type="two" />

                </div>

                <div className="item dessertFork"  >
                <Picture url={dessertFork} id="3" type="three" />

                </div>
            

            
                <div className="item waterGlass"  >
                <Picture url={waterGlass} id="4" type="four" />

                </div>
                <div className="item juiceGlass"  >
                <Picture url={juiceGlass} id="5" type="five" />

                </div>
            
       
      
            <div className="item napkin"  >
            <Picture url={napkin} id="6" type="six" />

            </div>
            
                <div className="item saladFork"  >
                <Picture url={saladFork} id="7" type="seven" />

                </div>
                <div className="item dinnerFork"  >
                <Picture url={dinnerFork} id="8" type="eight" />

                </div>
           
            <div className="item placePlate"  >
            <Picture url={placePlate} id="9" type="nine" />

            </div>
            
                <div className="item dinnerKnife"  >
                <Picture url={dinnerKnife} id="10" type="ten" />

                </div>
                <div className="item soupSpoon"  >
                <Picture url={soupSpoon} id="11" type="eleven" />

                </div>
               
          </div>
    <div   >
      
                <div className="item bord butterPlate" ref={ pos.number == 1 ? drop: console.log("waa") }    >
             
                   
                {<Picture url={butterPlate} id="1"   /> }

                </div>
                
                <div className="item dessertSpoon bord"  ref={ pos.number == 2 ? drop: console.log("waa") }   >
                    
            
                { <Picture url={dessertSpoon} id="2"    /> }

                </div>

                <div className="item dessertFork bord"  ref={ pos.number == 3 ? drop: console.log("waa") }   >
                
                { <Picture url={dessertFork} id="3"   /> }
                </div>
            

            
                <div className="item waterGlass bord" ref={ pos.number == 4 ? drop: console.log("waa") }  >
               
                {<Picture url={waterGlass} id="4"   /> }
                </div>
                <div className="item juiceGlass bord" ref={ pos.number == 5 ? drop: console.log("waa") }  >
                { <Picture url={juiceGlass} id="5"   /> }

                </div>
            
       
      
            <div className="item napkin bord" ref={ pos.number == 6 ? drop: console.log("waa") }   >
            
            {<Picture url={napkin} id="6"   />}
            </div>
            
                <div className="item saladFork bord" ref={ pos.number == 7 ? drop: console.log("waa") }   >
            
                { <Picture url={saladFork} id="7"   /> }
                </div>
                <div className="item dinnerFork bord" ref={ pos.number == 8 ? drop: console.log("waa") }  >
                
                { <Picture url={dinnerFork} id="8"   /> }
                </div>
           
            <div className="item placePlate bord" ref={ pos.number == 9 ? drop: console.log("waa") }  >
            {<Picture url={placePlate} id="9"   /> }

            </div>
            
                <div className="item dinnerKnife bord" ref={ pos.number == 10 ? drop: console.log("waa") }  >
                { <Picture url={dinnerKnife} id="10"   /> }
                </div>
                <div className="item soupSpoon bord" ref={ pos.number == 11 ? drop: console.log("waa") }  >
                {<Picture url={soupSpoon} id="11"   /> }

                </div>

                </div>
               
        </section>
      </div>

     
      </>
    )
}

export default First
