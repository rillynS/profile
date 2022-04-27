import React, { FC, useState } from "react";
import "./CardItem.css";
import { CardItemFront } from "./CardItemFront";
import { CardItemBack } from "./CardItemBack";

interface CardItemType{
  srcImage?:string;
}


export const CardItem: FC<CardItemType> = ({srcImage}) => {
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  const [reverse,setReverse] = useState<boolean>(false)

  function rotate(e:React.MouseEvent<HTMLDivElement>) {
      const {clientHeight,clientWidth} = (e.target as HTMLDivElement)
      const XCord = e.nativeEvent.offsetX
      const YCord = e.nativeEvent.offsetY
      
      const changedXCord = Math.round(((clientHeight/2)-YCord)/11)
      const changedYCord = Math.round(((XCord-clientWidth/2))/11)
      if(reverse){
        setX(changedXCord)
        setY(180 + changedYCord)
      }else{
        setX(changedXCord)
        setY(changedYCord)
      }
      
      
  } 
  function mouseEnter() {
    setReverse(true)
    setX(0);
    setY(180)
  }

  function mouseLeave() {
    setReverse(false)
    setX(0);
    setY(0)
  }

  return (
    <div className="ContainerCardItem" onMouseEnter={mouseEnter} onMouseMove={rotate} onMouseLeave={mouseLeave}>
      <div className="CardBox" style={{transform:`rotateX(${x}deg) rotateY(${y}deg)`}}>
        <CardItemFront srcImage={srcImage} />
        <CardItemBack  />
      </div>
    </div>
  );
};
