import React,{useState} from 'react'
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

    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard = (id) => {
      console.log(id);
    };

    return (
        <>
        <div className="first-view">

            <div className="side-activity">
            

            </div>
        <section>
        <div className={`items ${props.active}`} >
            
            <div className="item butterPlate" >
                
                <Picture url={butterPlate} id="1" />
            </div>
            
                <div className="item dessertSpoon"  >
                    
                <Picture url={dessertSpoon} id="2" />

                </div>

                <div className="item dessertFork"  >
                <Picture url={dessertFork} id="3" />

                </div>
            

            
                <div className="item waterGlass"  >
                <Picture url={waterGlass} id="4" />

                </div>
                <div className="item juiceGlass"  >
                <Picture url={juiceGlass} id="5" />

                </div>
            
       
      
            <div className="item napkin"  >
            <Picture url={napkin} id="6" />

            </div>
            
                <div className="item saladFork"  >
                <Picture url={saladFork} id="7" />

                </div>
                <div className="item dinnerFork"  >
                <Picture url={dinnerFork} id="8" />

                </div>
           
            <div className="item placePlate"  >
            <Picture url={placePlate} id="9" />

            </div>
            
                <div className="item dinnerKnife"  >
                <Picture url={dinnerKnife} id="10" />

                </div>
                <div className="item soupSpoon"  >
                <Picture url={soupSpoon} id="11" />

                </div>
               
          </div>
    <div ref={drop} >
      
                <div className="item bord butterPlate" >
                    

                </div>
                <div className="item dessertSpoon bord"   >
                    
             

                </div>

                <div className="item dessertFork bord"  >
                

                </div>
            

            
                <div className="item waterGlass bord"  >
               

                </div>
                <div className="item juiceGlass bord"  >
                

                </div>
            
       
      
            <div className="item napkin bord"  >
            

            </div>
            
                <div className="item saladFork bord"  >
            

                </div>
                <div className="item dinnerFork bord"  >
                

                </div>
           
            <div className="item placePlate bord"  >


            </div>
            
                <div className="item dinnerKnife bord"  >
          
                </div>
                <div className="item soupSpoon bord"  >
                

                </div>

                </div>
               
        </section>
      </div>

     
      </>
    )
}

export default First
