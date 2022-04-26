import React, { FC } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface FrontPropsType{
    Reverse:(arg:boolean)=>any;
    srcImage?:string
}


export const CardItemFront:FC<FrontPropsType> = ({Reverse,srcImage}) => {
    return(
        <div className='card card-front'>
            <div className="CardItemContent-front">
            <button className="CardItemBtn CardItemBtn-Front" onClick={()=>Reverse(true)}><ArrowForwardIosIcon color="inherit" /></button>

            </div>
        </div>
    )
}