import React, { FC } from "react";
interface FrontPropsType{
    srcImage?:string
}


export const CardItemFront:FC<FrontPropsType> = ({srcImage}) => {
    return(
        <div className='card card-front'>
            <div className="CardItemContent-front">
                <h3>Project</h3>
                <img src="https://99px.ru/sstorage/53/2015/12/tmb_154236_5060.jpg" alt="" />
                <h4>short descripption</h4>
            </div>
        </div>
    )
}