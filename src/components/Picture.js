import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

const Picture = ({ id, url,type }) => {
  
    const [{ isDragging }, drag,preview] = useDrag(() => ({
        type: 'image' || type,
        item: { id: id, type: type },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
     
      return (
        <>
        <DragPreviewImage connect={preview}  />
        <img
          ref={drag} 
          src={url}
          style={{ border: isDragging ? "5px solid pink" : "0px" },{ opacity: isDragging ? 0 : 1 }}
        />
        </>
      );
}

export default Picture
