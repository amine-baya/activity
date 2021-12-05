import React from 'react'
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


    

    return (
        <div className="first-view">

            <div className="side-activity">
            

            </div>
        <div className={`items ${props.act}`}>
            
                <div className="item butterPlate" >
                    <img src={butterPlate} alt="butterPlate" />
                </div>
                
                    <div className="item dessertSpoon" >
                        <img src={dessertSpoon} alt="dessertSpoon" />
                    </div>

                    <div className="item dessertFork" >
                        <img src={dessertFork} alt="dessertFork" />
                    </div>
                

                
                    <div className="item waterGlass">
                        <img src={waterGlass} alt="waterGlass" />
                    </div>
                    <div className="item juiceGlass" >
                        <img src={juiceGlass} alt="juiceGlass" />
                    </div>
                
           
          
                <div className="item napkin" >
                    <img src={napkin} alt="napkin" />
                </div>
                
                    <div className="item saladFork">
                        <img src={saladFork} alt="saladFork" />
                    </div>
                    <div className="item dinnerFork" >
                        <img src={dinnerFork} alt="dinnerFork" />
                    </div>
               
                <div className="item placePlate" >
                    <img src={placePlate} alt="placePlate" />
                </div>
                
                    <div className="item dinnerKnife" >
                        <img src={dinnerKnife} alt="dinnerKnife" />
                    </div>
                    <div className="item soupSpoon" >
                        <img src={soupSpoon} alt="soupSpoon" />
                    </div>
        </div>
       

      </div>
    )
}

export default First
