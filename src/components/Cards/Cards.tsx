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
            {/* <CardItem2/>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/> */}
        {/* <CardItem description="Приложение по формату списка контактов с возможностью добавления, удаления, изменения контакта" title="Contact List" imgSrc="http://localhost:3000/static/media/background.032cb00af1c406037fd5.jpg"/> */}
        </div>
        )
}