import React, { FC } from "react";
import {CardItem} from './CardItem/CardItem'
import './Cards.css'
export const Cards:FC = () => {
    return(
        <div className="ContainerCards">
            <CardItem srcImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg"/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
        )
}