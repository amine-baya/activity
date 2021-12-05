import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

const Picture = ({ id, url }) => {
    const [{ isDragging }, drag,preview] = useDrag(() => ({
        type: "image",
        item: { id: id },
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
          width="150px"
          style={{ border: isDragging ? "5px solid pink" : "0px" },{ opacity: isDragging ? 0 : 1 }}
        />
        </>
      );
}

export default Picture
