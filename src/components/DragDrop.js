import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import butterPlate from '../images/bread_butter.png'
import dessertFork from '../images/dessert_fork.png'
import dessertSpoon from '../images/dessert_spoon.png'
import dinnerFork from '../images/dinner_fork.png'
import dinnerKnife from '../images/dinner_knife.png'
import juiceGlass from '../images/juice_glass.png'
import napkin from '../images/napkin.png'
import placePlate from '../images/place_plate.png'
import saladFork from '../images/salad_fork.png'
import soupSpoon from '../images/soup_spoon.png'
import waterGlass from '../images/water_glass.png'






const PictureList = [
  {
    id: 1,
    url: butterPlate,
  },
  {
    id: 2,
    url: dessertFork,
  },
  {
    id: 3,
    url: dessertSpoon,
  },
  {
    id: 4,
    url: dinnerFork,
  },
  {
    id: 5,
    url: dinnerKnife,
  },
  {
    id: 6,
    url: juiceGlass,
  },
  {
    id: 7,
    url: napkin,
  },
  {
    id: 8,
    url: placePlate,
  },
  {
    id: 9,
    url: saladFork,
  },
  {
    id: 10,
    url: soupSpoon,
  },
  {
    id: 11,
    url: waterGlass,
  },
 
  
];

const DragDrop = () => {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard = (id) => {
      const pictureList = PictureList.filter((picture) => id === picture.id);
      setBoard((board) => [...board, pictureList[0]]);
    };
    return (
      
      <div className="activity">

       

        <div className="Pictures">
          {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        <div className="Board" ref={drop}>
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        
      </div>
    );
}

export default DragDrop
