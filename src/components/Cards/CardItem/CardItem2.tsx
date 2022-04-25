import React, { FC, MouseEventHandler, useState } from "react";
import "./CardItem2.css";

export const CardItem2: FC = () => {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    function rotate(e:React.MouseEvent<HTMLDivElement>) {
        const {clientHeight,clientWidth} = (e.target as HTMLDivElement)
        const XCord = e.nativeEvent.offsetX
        const YCord = e.nativeEvent.offsetY
        
        const changedXCord = Math.round(((clientHeight/2)-YCord)/11)
        const changedYCord = Math.round(((XCord-clientWidth/2))/11)

        setX(changedXCord)
        setY(changedYCord)
        
    } 

    
  return (
    <div className="ContainerCardItem" onMouseMove={rotate} onMouseLeave={()=>{setX(0);setY(0)}}>
      <div style={{transform:`rotateX(${x}deg) rotateY(${y}deg)`}} className="CardBox" >content</div>
    </div>
  );
};
