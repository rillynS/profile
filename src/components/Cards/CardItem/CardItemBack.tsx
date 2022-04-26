import React, { FC } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface FrontPropsType{
    Reverse:(arg:boolean)=>any
}


export const CardItemBack:FC<FrontPropsType> = ({Reverse}) => {
    return(
        <div className="card">
            <button className="CardItemBtn CardItemBtn-Back" onClick={()=>Reverse(false)}><ArrowBackIosIcon color="inherit" /></button>
        </div>
    )
}