import React, { FC } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Link from '@mui/material/Link';
interface FrontPropsType{
}


export const CardItemBack:FC<FrontPropsType> = () => {
    return(
        <div className="card ">
            <div className="CardItemContent-back">
                <h4>full description</h4>
                <div className="CardItemContent-back_btn">
                    <Link href="#" color='secondary'><GitHubIcon /></Link>
                    <Link href="#" color='secondary'><WebIcon /></Link>
                </div>
            </div>
        </div>
    )
}