import React, { FC, MouseEventHandler, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./CardItem2.css";

export const CardItem2: FC = () => {
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
  function leave(){
    if(reverse){
      setX(0);
      setY(180)
    }else{
      setX(0);
      setY(0)
    }
  }

  return (
    <div className="ContainerCardItem" onMouseMove={rotate} onMouseLeave={leave}>
      <div className="CardBox" style={{transform:`rotateX(${x}deg) rotateY(${y}deg)`}}>
        <div className="card">
        <button className="CardItemBtn CardItemBtn-Front" onClick={()=>setReverse(true)}><ArrowForwardIosIcon color="inherit" /></button>
        </div>
        <div className="card">
          
          <button onClick={()=>setReverse(false)} className='CardItemBtn CardItemBtn-Back'><ArrowBackIosIcon/> back</button>
            
        </div>

      </div>
    </div>
  );
};
