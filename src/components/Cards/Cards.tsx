import React, { FC } from "react";
import { CardItem } from "./CardItem/CardItem";
import {CardItem2} from './CardItem/CardItem2'
import './Cards.css'
export const Cards:FC = () => {
    return(
        <div className="ContainerCards">
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
        </div>
        )
}