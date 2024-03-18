import React from "react";
import {useSelector} from "react-redux";
import {GameStorage} from "../store/store";
import {Item} from "../store/Item";
import {ItemView} from "./ItemView";

export function ItemCollection() {
    const items = useSelector((state: GameStorage) => state.game.itemsOnScreen)
    return (
        <>
            {
                items.map((item: Item, i: number) => <ItemView item={item} key={`item${i}_${item.icon}`}/>)
            }
        </>
    );
}